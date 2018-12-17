define(["san"], function(__WEBPACK_EXTERNAL_MODULE_0__) { return webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _san = __webpack_require__(0);

var _asyncValidator = __webpack_require__(45);

var AsyncValidator = _interopRequireWildcard(_asyncValidator);

var _Form = __webpack_require__(405);

var _Form2 = _interopRequireDefault(_Form);

var _FormItem = __webpack_require__(406);

var _FormItem2 = _interopRequireDefault(_FormItem);

var _sanXui = __webpack_require__(3);

var _rules = __webpack_require__(407);

var rules = _interopRequireWildcard(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @file demos/xui-form.js
 * @author leeight
 */

var Schema = AsyncValidator.default;

var formValidator = new Schema({
    userName: [{ required: true, message: '用户名必填' }, { min: 6, max: 32, message: '用户名长度必须是 6 到 32 个字符之间' }, rules.noInvalidChar('用户名')],
    nativeInput: [{ required: true, message: '必填' }],
    nativeSelect: [{ required: true, message: '必填' }],
    select: [{ required: true, message: '必填' }],
    boxgroup: [{ required: true, message: '必填' }],
    verifyCode: [{ required: true, message: '短信验证码必填' }],
    mobile: [{ required: true, message: '手机号必填' }, { pattern: /^\d{11}$/, message: '手机号格式不正确' }],
    password: [{ required: true, message: '密码必填' }, { min: 6, max: 32, message: '密码长度必须是 6 到 32 个字符之间' }, rules.password('密码'), rules.noInvalidChar('密码')],
    confirmPassword: [{ required: true, message: '确认密码必填' }, { min: 6, max: 32, message: '确认密码长度必须是 6 到 32 个字符之间' }, rules.password('确认密码'), rules.noInvalidChar('确认密码'), rules.equals('password')]
});

/* eslint-disable */
var template = '<template>\n<x-row label="[default]">\n    <xui-form s-ref="form" rules="{{rules}}" formData="{=formData=}" errors="{=formErrors=}">\n        <xui-item name="nativeInput">\n            <input type="text" value="{=formData.nativeInput=}" />\n        </xui-item>\n        <xui-item name="nativeSelect">\n            <select value="{=formData.nativeSelect=}">\n                <option value="">--</option>\n                <option value="foo">Foo</option>\n                <option value="bar">Bar</option>\n            </select>\n        </xui-item>\n        <xui-item name="userName" help="This is the help text"><xui-textbox\n            placeholder="\u7528\u6237\u540D"\n            type="text"\n            value="{=formData.userName=}" /></xui-item>\n        <xui-item name="password"><xui-textbox\n            placeholder="\u5BC6\u7801"\n            type="password"\n            value="{=formData.password=}" /></xui-item>\n        <xui-item name="confirmPassword"><xui-textbox\n            placeholder="\u786E\u8BA4\u5BC6\u7801"\n            type="password"\n            value="{=formData.confirmPassword=}" /></xui-item>\n        <xui-item name="mobile"><xui-textbox\n            placeholder="\u624B\u673A\u53F7"\n            type="number"\n            name="mobile"\n            value="{=formData.mobile=}" /></xui-item>\n        <xui-item name="select">\n            <xui-select\n                value="{=formData.select=}"\n                datasource="{{select.datasource}}" />\n        </xui-item>\n        <xui-item name="boxgroup">\n            <xui-boxgroup\n                box-type="checkbox"\n                datasource="{{boxgroup.datasource}}"\n                value="{=formData.boxgroup=}"\n                />\n        </xui-item>\n        <xui-item name="verifyCode">\n            <xui-smscode width="{{110}}" />\n        </xui-item>\n        <xui-item>\n            <xui-button on-click="doSubmit" skin="primary">\n                {{loading ? \'\u63D0\u4EA4\u4E2D...\' : \'\u540C\u610F\u6761\u6B3E\u5E76\u6CE8\u518C\'}}\n            </xui-button>\n        </xui-item>\n    </xui-form>\n</x-row>\n\n<x-row label="inline,label,label-width">\n    <xui-form label-width="{{200}}" formData="{=formData2=}" errors="{=formErrors2=}" >\n        <xui-item name="name" required inline label="\u540D\u79F0">\n            <xui-textbox placeholder="\u7528\u6237\u540D" type="text" value="{=formData2.name=}" />\n        </xui-item>\n        <xui-item label-width="{{300}}" name="age" required inline label="\u5E74\u9F84">\n            <xui-textbox placeholder="\u5E74\u9F84" type="text" value="{=formData2.age=}" />\n        </xui-item>\n    </xui-form>\n</x-row>\n</template>';
/* eslint-enable */

exports.default = (0, _san.defineComponent)({
    template: template,
    components: {
        'x-row': _sanXui.Row,
        'xui-select': _sanXui.Select,
        'xui-boxgroup': _sanXui.BoxGroup,
        'xui-textbox': _sanXui.TextBox,
        'xui-smscode': _sanXui.SMSCodeBox,
        'xui-button': _sanXui.Button,
        'xui-form': _Form2.default,
        'xui-item': _FormItem2.default
    },
    initData: function initData() {
        return {
            loading: false,
            rules: formValidator,
            formData: {},
            formErrors: null,
            formData2: {},
            formErrors2: null,
            select: {
                datasource: [{ text: 'Empty', value: '' }, { text: 'foo', value: 'foo' }, { text: 'bar', value: 'bar' }]
            },
            boxgroup: {
                datasource: [{ text: 'foo', value: 'foo' }, { text: 'bar', value: 'bar' }, { text: '123', value: '123', disabled: true }]
            }
        };
    },
    doSubmit: function doSubmit() {
        var _this = this;

        var form = this.ref('form');
        form.validateForm().then(function () {
            _this.data.set('loading', true);
            setTimeout(function () {
                _this.data.set('loading', false);
                _sanXui.Toast.success('创建成功');
            }, 1000);
        }).catch(function (error) {
            return _this.data.set('error', error);
        });
    }
});

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _san = __webpack_require__(0);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _asyncValidator = __webpack_require__(45);

var AsyncValidator = _interopRequireWildcard(_asyncValidator);

var _util = __webpack_require__(2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file forms/Form.js
 * @author leeight
 */

var cx = (0, _util.create)('ui-form');
var Schema = AsyncValidator.default;

exports.default = (0, _san.defineComponent)({
    roleType: 'Form',
    template: '<form class="{{mainClass}}"><slot/></form>',
    dataTypes: {
        /**
         * 校验规则
         */
        rules: _san.DataTypes.object,

        /**
         * 校验规则描述。如果有值，rules参数将失效。
         */
        descriptor: _san.DataTypes.object,

        /**
         * 表单错误
         * @default null
         *
         */
        errors: _san.DataTypes.object,

        /**
         * 表单数据
         * @default false
         */
        formData: _san.DataTypes.object,

        /**
         * 表单项数组
         * @default []
         */
        formItems: _san.DataTypes.array
    },
    computed: {
        mainClass: function mainClass() {
            return cx.mainClass(this);
        }
    },
    messages: {
        'form-element-changed': function formElementChanged(arg) {
            // eslint-disable-line
            var formItem = arg.target;
            var payload = arg.value;
            this.onFormElementChanged(formItem, payload);
        },
        'form-item-attached': function formItemAttached(_ref) {
            var target = _ref.target;

            this.data.push('formItems', target);
        },
        'form-item-detached': function formItemDetached(_ref2) {
            var target = _ref2.target;

            var formErrors = this.data.get('errors');
            var name = target.data.get('name');

            if (formErrors == null || _lodash2.default.keys(formErrors).length === 1 && formErrors[name]) {
                this.data.set('errors', null);
            } else {
                formErrors[name] = null;
                this.data.set('errors', formErrors);
            }

            /**
             *
             *  formData在移除formItems同时移除数据
             *  好处： 1.formData数据干净， 不需要过滤脏数据。 坏处：移除后添加，原始值被移除，可能初始化错误。
             *
             *  formData在移除formItems同时不移除数据，好处坏处和上面相反。
             *
             *  故选择后者不移除数据
             */

            this.data.remove('formItems', target);
        }
    },
    initData: function initData() {
        return {
            errors: null,
            labelWidth: null,
            formData: {},
            formItems: []
        };
    },
    onFormElementChanged: function onFormElementChanged(formItem, payload) {
        var validator = this.data.get('rules');
        if (!validator) {
            return;
        }

        var name = formItem.data.get('name');
        if (!validator.rules[name]) {
            // 没有对应的验证规则
            return;
        }

        this.data.set('formData.' + name, payload.value);
        this.validateFormItem(name);
    },
    buildFormValidator: function buildFormValidator(formItems) {
        var newDescriptor = {};
        var descriptor = this.data.get('descriptor');
        if (!descriptor) {
            return;
        }

        _lodash2.default.each(formItems, function (item) {
            var name = item.data.get('name');
            if (name !== undefined && descriptor[name]) {
                newDescriptor[name] = descriptor[name];
            }
        });

        var rules = new Schema(newDescriptor);
        this.data.set('rules', rules);
    },
    getFormData: function getFormData() {
        // 和asForm的getFormData 不完全一致。 因为formItem在移除时并不删除数据，这里可以获取有效数据。
        var formItems = this.data.get('formItems');
        var fields = [];
        _lodash2.default.each(formItems, function (item) {
            var name = item.data.get('name');
            if (name !== undefined) {
                fields.push(name);
            }
        });
        return _lodash2.default.pick(this.data.get('formData'), fields);
    },
    validateFormItem: function validateFormItem(name) {
        var _this = this;

        return new Promise(function (resolve, reject) {
            var formData = _this.data.get('formData');
            if (!formData) {
                reject();
                return;
            }
            var validator = _this.data.get('rules');
            validator.validate(formData, function (errors, fields) {
                if (!errors) {
                    errors = []; // eslint-disable-line
                }

                var found = false;
                for (var i = 0; i < errors.length; i++) {
                    var item = errors[i];
                    if (item.field === name) {
                        found = true;
                        _this.data.set('errors.' + name, item.message);
                        reject(name, item.message);
                        break;
                    }
                }
                if (!found) {
                    _this.data.set('errors.' + name, null);
                    resolve();
                }

                var hasError = false;
                var formErrors = _this.data.get('errors');
                for (var key in formErrors) {
                    // eslint-disable-line
                    if (formErrors[key]) {
                        hasError = true;
                        break;
                    }
                }
                if (!hasError) {
                    _this.data.set('errors', null);
                }
            });
        });
    },
    validateForm: function validateForm() {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
            var formData = _this2.data.get('formData');
            if (!formData) {
                reject();
                return;
            }
            var validator = _this2.data.get('rules');
            validator.validate(formData, function (errors, fields) {
                if (!errors) {
                    _this2.data.set('errors', null);
                    resolve();
                    return;
                }

                var errorsMap = {};
                for (var i = 0; i < errors.length; i++) {
                    var item = errors[i];
                    errorsMap[item.field] = item.message;
                }
                _this2.data.set('errors', errorsMap);
                _this2.focusToFirstControl(errorsMap);
                reject(errorsMap);
            });
        });
    },
    inited: function inited() {
        var _this3 = this;

        this.watch('errors', function (errors) {
            var formItems = _this3.data.get('formItems');
            formItems.forEach(function (formItem) {
                var name = formItem.data && formItem.data.get('name');
                if (name) {
                    formItem.data.set('error', errors ? errors[name] : null);
                }
            });
        });
    },
    attached: function attached() {
        var _this4 = this;

        this.buildFormValidator(this.data.get('formItems'));
        this.watch('formItems', function (formItems) {
            _this4.buildFormValidator(formItems);
        });
    },
    focusToFirstControl: function focusToFirstControl(controls) {
        var items = this.data.get('formItems');
        if (controls) {
            for (var key in items) {
                var formItem = items[key];
                if (formItem.data.get('name') in controls) {
                    (0, _util.focusTo)(formItem);
                    return;
                }
            }
        } else if (items.length) {
            var _formItem = items[0];
            (0, _util.focusTo)(_formItem);
        }
    }
});

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _san = __webpack_require__(0);

var _util = __webpack_require__(2);

/**
 * @file forms/FormItem.js
 * @author leeight
 */

var cx = (0, _util.create)('ui-form-item');

function getEventName(tagName) {
    switch (tagName) {
        case 'select':
            return 'change';
        default:
            return 'input';
    }
}

var template = '<div class="{{mainClass}}">\n    <div class="{{labelClass}}" style="{{labelStyle}}" s-if="label"><slot name="label">{{label}}</slot></div>\n    <div class="' + cx('content') + '">\n        <slot/>\n        <slot name="error"><label class="' + cx('invalid-label') + '" s-if="error">{{error | raw}}</label></slot>\n        <slot name="help"><div class="' + cx('help') + '" s-if="help">{{help | raw}}</div></slot>\n    </div>\n</div>';
exports.default = (0, _san.defineComponent)({
    role: 'FormItem',
    template: template,
    computed: {
        isRequired: function isRequired() {
            var a = this.data.get('require');
            var b = this.data.get('required');
            return a || b;
        },
        labelClass: function labelClass() {
            var klass = [cx('label')];
            var isRequired = this.data.get('isRequired');
            if (isRequired) {
                klass.push('require-label required-label');
            }
            return klass;
        },
        labelStyle: function labelStyle() {
            var style = {};
            var labelWidth = this.data.get('labelWidth');
            if (labelWidth != null) {
                style.width = (0, _util.hasUnit)(labelWidth) ? labelWidth : labelWidth + 'px';
            }
            return style;
        },
        mainClass: function mainClass() {
            var klass = [cx()];
            var name = this.data.get('name');
            var error = this.data.get('error');
            var inline = this.data.get('inline');
            if (name) {
                klass.push(cx(name));
            }
            if (error) {
                klass.push(cx('invalid'));
            }
            if (inline) {
                klass.push(cx('inline'));
            }
            return klass;
        }
    },
    messages: {
        // 消息来自 InputComponent 的子类
        'input-comp-value-changed': function inputCompValueChanged(arg) {
            var payload = arg.value;
            var name = this.data.get('name');
            this.dispatch('form-element-changed', { name: name, value: payload.value });
        }
    },
    initData: function initData() {
        return {
            labelWidth: null
        };
    },
    attached: function attached() {
        var _this = this;

        var name = this.data.get('name');
        if (!name) {
            return;
        }

        // 如果可能的话，从 form 里面初始化相应的数据
        var labelWidth = this.data.get('labelWidth');
        if (labelWidth == null) {
            var formComp = this._getFormComponent();
            if (formComp) {
                var formLabelWidth = formComp.data.get('labelWidth');
                if (formLabelWidth != null) {
                    this.data.set('labelWidth', formLabelWidth);
                }
            }
        }

        var defaultSlot = this.slot();
        var child = defaultSlot.length ? defaultSlot[0].children[0] : null;
        if (!(0, _util.isComponent)(child) && /input|select|textarea/.test(child.tagName)) {
            child._onEl(getEventName(child.tagName), function () {
                _this.dispatch('form-element-changed', {
                    name: name,
                    value: child.el.value
                });
            });
        }

        this.dispatch('form-item-attached');
    },
    _getFormComponent: function _getFormComponent() {
        if (this._formComponent) {
            return this._formComponent;
        }

        var comp = this.parentComponent;
        while (comp) {
            if (comp.constructor.prototype.roleType === 'Form') {
                this._formComponent = comp;
                return this._formComponent;
            }
            comp = comp.parentComponent;
        }
        return null;
    },
    detached: function detached() {
        this.dispatch('form-item-detached');
    }
});

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noInvalidChar = noInvalidChar;
exports.password = password;
exports.equals = equals;
/**
 * @file demos/rules.js
 * @author leeight
 */

function noInvalidChar(label) {
    return {
        validator: function validator(rule, value, callback) {
            if (/[。~!@#$%\^\+\*&\\\/\?\|:\.<>{}()';="]/.test(value)) {
                return callback(label + '不能包含特殊字符');
            }
            callback();
        }
    };
}

function password(label) {
    return {
        validator: function validator(rule, value, callback) {
            var a = [/[A-Z]/, /[a-z]/, /\d/];
            var b = true;
            var c = a.length;
            for (; c;) {
                b = a[--c].test(value) && b;
            }
            if (!b) {
                return callback(label + '必须包含数字、大小写英文字母');
            }
            callback();
        }
    };
}

function equals(key) {
    return {
        validator: function validator(rule, value, callback, source) {
            if (value !== source[key]) {
                return callback('两次输入的内容不一致');
            }
            callback();
        }
    };
}

/***/ })

},[404])});;