/**
 * @file components/Button.es6
 * @author leeight
 */

import {defineComponent} from 'san';

import {create} from './util';

const cx = create('ui-button');

/* eslint-disable */
const template = `<div on-click="onClick" class="{{mainClass}}">
    <span class="${cx('label')}" san-if="label">{{label}}</span>
    <slot san-else></slot>
</div>`;
/* eslint-enable */

export default defineComponent({
    template,
    computed: {
        mainClass() {
            const skin = this.data.get('skin');
            const disabled = this.data.get('disabled');
            const klass = [cx()];
            if (skin) {
                klass.push('skin-' + skin);
                klass.push('skin-' + skin + '-button');
            }
            if (disabled) {
                klass.push('state-disabled');
                klass.push(cx('disabled'));
            }
            return klass;
        }
    },
    initData() {
        return {
            disabled: false,
            skin: '',
            label: ''
        };
    },
    onClick() {
        const disabled = this.data.get('disabled');
        if (disabled) {
            return;
        }
        this.fire('click');
    }
});