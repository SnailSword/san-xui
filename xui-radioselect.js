define(["san"], function(__WEBPACK_EXTERNAL_MODULE_0__) { return webpackJsonp([27],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _san = __webpack_require__(0);

var _sanXui = __webpack_require__(3);

/* eslint-disable */
/**
 * @file demos/xui-radioselect.js
 * @author leeight
 */

var template = '<template>\n<x-row label="[default]">\n    <xui-radioselect\n        value="{=radioselect.value=}"\n        datasource="{{radioselect.datasource}}" />\n    <strong class="large">\n        Value is: {{radioselect.value}}\n    </strong>\n</x-row>\n\n<x-row label="disabled">\n    <xui-radioselect\n        disabled\n        value="{=radioselect.value=}"\n        datasource="{{radioselect.datasource}}" />\n</x-row>\n</template>';
/* eslint-enable */

exports.default = (0, _san.defineComponent)({
    template: template,
    components: {
        'x-row': _sanXui.Row,
        'xui-radioselect': _sanXui.RadioSelect
    },
    initData: function initData() {
        return {
            radioselect: {
                value: 'abc1',
                datasource: [{ text: '1个月', value: 'foo' }, { text: '2', value: 'bar' }, { text: '3', value: '123', disabled: true }, { text: '4', value: 'abc1' }, { text: '5', value: 'abc6' }, { text: '6', value: 'abc7' }, { text: '1年', value: 'abc8', tip: '注：购买1年8.3折' }, { text: '2年', value: 'abc9', tip: '注：购买2年7.5折' }, { text: '3年', value: 'abc0', tip: '注：购买3年5折' }]
            }
        };
    }
});

/***/ })

},[421])});;