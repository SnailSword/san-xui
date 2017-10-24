/**
 * 实现方案是两个 Table 重叠起来
 * @file components/FrozenColumnTable.es6
 * @author leeight
 */
import _ from 'lodash';
import $ from 'jquery';
import {nextTick, defineComponent} from 'san';

import {hasUnit, create} from './util';
import Table from './Table';
import Loading from './Loading';

const cx = create('ui-frozen-column-table');

function fixWidth(col) {
    if (col.width == null || hasUnit(col.width)) {
        // 必须要有宽度，如果没有设置，添加一个默认值
        // 不能设置 xx%, 40px 之类的，必须是一个 number 类型
        col.width = 100;
    }
}

/* eslint-disable */
const template = `<div class="{{mainClass}}">
    <style type="text/css">{{__syncHeightStyles}}</style>
    <div class="${cx('loading')}" s-if="loading">
        <slot name="loading"><ui-loading /></slot>
    </div>
    <div class="${cx('error')}" s-if="error">
        <slot name="error">{{error}}</slot>
    </div>
    <div class="${cx('body')}" s-if="!loading && !error">
        <table width="100%" cellspacing="0" cellpadding="0">
            <tr>
                <td class="${cx('cell', 'cell-left')}" style="{{leftCellStyle}}" s-if="leftSchema.length">
                    <ui-table
                        s-ref="left"
                        empty-text="{{emptyText}}"
                        disabled-select-all="{{disabledSelectAll}}"
                        select="{{select}}"
                        cell-builder="{{cellBuilder}}"
                        selected-index="{=selectedIndex=}"
                        datasource="{{datasource}}"
                        schema="{{leftSchema}}"

                        on-row-enter="onEnterRow($event)"
                        on-row-leave="onLeaveRow($event)"
                        on-selected-change="onSelectedChange($event)"
                        on-filter="onFilter($event)"
                        on-command="onCommand($event)"
                        />
                </td>
                <td class="${cx('cell', 'cell-middle')}" s-if="middleSchema.length">
                    <ui-table
                        s-ref="middle"
                        empty-text="{{emptyText}}"
                        cell-builder="{{cellBuilder}}"
                        datasource="{{datasource}}"
                        schema="{{middleSchema}}"

                        on-row-enter="onEnterRow($event)"
                        on-row-leave="onLeaveRow($event)"
                        on-filter="onFilter($event)"
                        on-command="onCommand($event)"
                        />
                </td>
                <td class="${cx('cell', 'cell-right')}" style="{{rightCellStyle}}" s-if="rightSchema.length">
                    <ui-table
                        s-ref="right"
                        empty-text="{{emptyText}}"
                        cell-builder="{{cellBuilder}}"
                        datasource="{{datasource}}"
                        schema="{{rightSchema}}"

                        on-row-enter="onEnterRow($event)"
                        on-row-leave="onLeaveRow($event)"
                        on-filter="onFilter($event)"
                        on-command="onCommand($event)"
                        />
                </td>
            </tr>
        </table>
    </div>
</div>`;
/* eslint-enable */

export default defineComponent({
    template,
    components: {
        'ui-table': Table,
        'ui-loading': Loading
    },
    initData() {
        return {
            __syncHeightStyles: ''
        };
    },
    computed: {
        mainClass() {
            return cx.mainClass(this);
        },
        leftCellWidth() {
            const leftSchema = this.data.get('leftSchema');
            const select = this.data.get('select');
            const initialValue = (select === 'multi' || select === 'single') ? 46 : 0;
            const width = _.reduce(leftSchema, (sum, col) => sum + col.width, initialValue);
            return width;
        },
        rightCellWidth() {
            const rightSchema = this.data.get('rightSchema');
            const initialValue = 0;
            const width = _.reduce(rightSchema, (sum, col) => sum + col.width, initialValue);
            return width;
        },
        leftCellStyle() {
            const width = this.data.get('leftCellWidth');
            return {
                width: `${width}px`
            };
        },
        rightCellStyle() {
            const width = this.data.get('rightCellWidth');
            return {
                width: `${width}px`
            };
        },
        leftSchema() {
            const schema = this.data.get('schema');
            const leftSchema = [];
            for (let i = 0; i < schema.length; i++) {
                const col = schema[i];
                if (col.freezed) {
                    fixWidth(col);
                    leftSchema.push(col);
                }
                else {
                    break;
                }
            }
            return leftSchema;
        },
        middleSchema() {
            const schema = this.data.get('schema');
            const middleSchema = [];
            for (let i = schema.length - 1; i >= 0; i--) {
                const col = schema[i];
                if (col.freezed) {
                    if (middleSchema.length <= 0) {
                        // 从后往前遍历，可能遇到右侧的冻结列了
                        // 如果发现 middleSchema 还没东西，那么继续往前遍历
                        continue;
                    }
                    else {
                        // 如果 middleSchema 已经有东西了，说明碰到左侧的冻结列了，那么结束遍历吧
                        break;
                    }
                }
                fixWidth(col);
                middleSchema.unshift(col);
            }
            return middleSchema;
        },
        rightSchema() {
            const schema = this.data.get('schema');
            const rightSchema = [];
            for (let i = schema.length - 1; i >= 0; i--) {
                const col = schema[i];
                if (col.freezed) {
                    fixWidth(col);
                    rightSchema.unshift(col);
                }
                else {
                    break;
                }
            }
            return rightSchema;
        }
    },
    __syncHeight() {
        this.data.set('__syncHeightStyles', '');
        nextTick(() => {
            const left = this.ref('left');
            const middle = this.ref('middle');
            const right = this.ref('right');
            if (left && left.el && middle && middle.el) {
                const leftRows = $(left.el).find('tbody tr');
                const middleRows = $(middle.el).find('tbody tr');
                const rightRows = (right && right.el) ? $(right.el).find('tbody tr') : [];

                const styles = [];

                for (let i = 0; i < leftRows.length; i++) {
                    const leftRow = leftRows[i];
                    const middleRow = middleRows[i];
                    const rightRow = rightRows[i];

                    let leftRowHeight = $(leftRow).height();
                    let middleRowHeight = $(middleRow).height();
                    let rightRowHeight = rightRow ? $(rightRow).height() : 0;

                    if (rightRow) {
                        if (leftRowHeight === middleRowHeight
                            && leftRowHeight === rightRowHeight) {
                            continue;
                        }
                        const maxRowHeight = Math.max(leftRowHeight, middleRowHeight, rightRowHeight);
                        if (leftRowHeight < maxRowHeight) {
                            styles.push(`#${leftRow.id}{height: ${maxRowHeight + 1}px !important;}`);
                        }
                        if (middleRowHeight < maxRowHeight) {
                            styles.push(`#${middleRow.id}{height: ${maxRowHeight + 1}px !important;}`);
                        }
                        if (rightRowHeight < maxRowHeight) {
                            styles.push(`#${rightRow.id}{height: ${maxRowHeight + 1}px !important;}`);
                        }
                    }
                    else {
                        if (leftRowHeight === middleRowHeight) {
                            continue;
                        }

                        const maxRowHeight = Math.max(leftRowHeight, middleRowHeight);
                        if (leftRowHeight < maxRowHeight) {
                            styles.push(`#${leftRow.id}{height: ${maxRowHeight + 1}px !important;}`);
                        }
                        else if (middleRowHeight < maxRowHeight) {
                            styles.push(`#${middleRow.id}{height: ${maxRowHeight + 1}px !important;}`);
                        }
                    }
                }

                if (styles.length) {
                    this.data.set('__syncHeightStyles', styles.join('\n'));
                }
            }
        });
    },
    __syncHoverState(rowIndex, add) {
        const tables = [this.ref('left'), this.ref('middle'), this.ref('right')];
        _.each(tables, table => {
            if (table && table.el) {
                if (add) {
                    $(table.el).find(`tbody tr:nth-child(${rowIndex + 1})`).addClass('ui-table-row-hover');
                }
                else {
                    $(table.el).find(`tbody tr:nth-child(${rowIndex + 1})`).removeClass('ui-table-row-hover');
                }
            }
        });
    },
    onSelectedChange(event) {
        this.fire('on-selected-change', event);
    },
    onFilter(event) {
        this.fire('filter', event);
    },
    onCommand(event) {
        this.fire('command', event);
    },
    onEnterRow({rowIndex}) {
        this.__syncHoverState(rowIndex, true);
        this.fire('row-enter', {rowIndex});
    },
    onLeaveRow({rowIndex}) {
        this.__syncHoverState(rowIndex, false);
        this.fire('row-leave', {rowIndex});
    },
    inited() {
        this.watch('datasource', () => this.__syncHeight());
    },
    attached() {
        this.__syncHeight();
    }
});

