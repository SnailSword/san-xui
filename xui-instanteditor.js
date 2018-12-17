define(["san"], function(__WEBPACK_EXTERNAL_MODULE_0__) { return webpackJsonp([36],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _san = __webpack_require__(0);

var _sanXui = __webpack_require__(3);

/* eslint-disable */
/**
 * @file demos/xui-instanteditor.js
 * @author leeight
 */

var template = '<template>\n<x-row label="[default]">\n    <table border="1" cellpadding="5" class="bordered-table">\n        <tbody>\n            <tr>\n                <th width="50px">\u540D\u79F0</th>\n                <td>\n                    {{formData.name}}\n                    <xui-instanteditor\n                        active="{=active.name=}"\n                        submiting="{=submiting.name=}"\n                        error="{=error.name=}"\n                        on-submit="onInstantEditSubmit($event, \'name\')">\n                        <xui-textbox value="{{formData.name}}" />\n                    </xui-instanteditor>\n                </td>\n            </tr>\n            <tr>\n                <th>\u63CF\u8FF0</th>\n                <td>\n                    {{formData.description}}\n                    <xui-instanteditor\n                        active="{=active.description=}"\n                        submiting="{=submiting.description=}"\n                        error="{=error.description=}"\n                        on-submit="onInstantEditSubmit($event, \'description\')">\n                        <xui-select\n                            datasource="{{ee.datasource}}"\n                            value="{{formData.description}}" />\n                    </xui-instanteditor>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</x-row>\n</template>';
/* eslint-enable */

function doSubmit(key, value) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random() >= .8) {
                reject(new Error('RANDOM error happened!'));
            } else {
                resolve();
            }
        }, 1000);
    });
}

exports.default = (0, _san.defineComponent)({
    template: template,
    components: {
        'x-row': _sanXui.Row,
        'xui-textbox': _sanXui.TextBox,
        'xui-select': _sanXui.Select,
        'xui-instanteditor': _sanXui.InstantEditor
    },
    initData: function initData() {
        return {
            ee: {
                datasource: [{ text: 'Option 1', value: 'foo' }, { text: 'Option 2', value: 'bar' }]
            },
            formData: {
                name: 'i-5cSGjffb',
                description: '无'
            }
        };
    },
    onInstantEditSubmit: function onInstantEditSubmit(_ref, key) {
        var _this = this;

        var value = _ref.value;

        this.data.set('submiting.' + key, true);
        doSubmit(key, value).then(function () {
            _this.data.set('submiting.' + key, false);
            _this.data.set('active.' + key, false);
            _this.data.set('formData.' + key, value);
        }).catch(function (error) {
            _this.data.set('submiting.' + key, false);
            _this.data.set('error.' + key, error);
        });
    }
});

/***/ })

},[412])});;