define(["san"], function(__WEBPACK_EXTERNAL_MODULE_0__) { return webpackJsonp([25],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _san = __webpack_require__(0);

var _sanXui = __webpack_require__(3);

/* eslint-disable */
/**
 * @file demos/xui-region.js
 * @author leeight
 */

var template = '<template>\n<x-row label="[default]">\n    <xui-region value="{=value=}" />\n    <strong class="large">\n        Value is: {{value}}\n    </strong>\n</x-row>\n\n<x-row label="value">\n    <xui-region value="{=value2=}" />\n    <strong class="large">\n        Value is: {{value2}}\n    </strong>\n</x-row>\n\n<x-row label="value;disabled">\n    <xui-region disabled value="{=value2=}" />\n    <strong class="large">\n        Value is: {{value2}}\n    </strong>\n</x-row>\n</template>';
/* eslint-enable */

exports.default = (0, _san.defineComponent)({
    template: template,
    components: {
        'x-row': _sanXui.Row,
        'xui-region': _sanXui.Region
    },
    initData: function initData() {
        return {
            value: [],
            value2: [110000, 110100, 110104]
        };
    }
});

/***/ })

},[423])});;