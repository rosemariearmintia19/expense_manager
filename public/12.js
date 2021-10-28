(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      old_password: null,
      new_password: null,
      re_password: null,
      errorMessages: '',
      old_alert: '',
      alert: "",
      op: ''
    };
  },
  methods: {
    SaveNewPassword: function SaveNewPassword() {
      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/SaveNewPassword', {
        id: this.user.id,
        new_password: this.new_password
      }).then(function (res) {
        window.location.href = 'login';
      })["catch"](function (error) {
        console.log(error);
      });
    },
    check_old_password: function check_old_password() {
      var _this = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/checkpassword', {
        id: this.user.id,
        old_password: this.old_password
      }).then(function (res) {
        _this.op = res.data;

        if (_this.op == 0) {
          _this.old_alert = "Old Password not match";
          _this.old_password = '';
        } else {
          _this.old_alert = '';
        }
      });
    },
    CheckPassword: function CheckPassword(event) {
      if (this.re_password != this.new_password) {
        this.alert = "Passwords must match";
        this.new_password = '';
        this.re_password = '';
        return;
      } else {
        this.alert = '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ForgotPassword.vue?vue&type=template&id=5975dda8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/ForgotPassword.vue?vue&type=template&id=5975dda8& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "container",
      staticStyle: { position: "relative", top: "10%" }
    },
    [
      _c(
        "center",
        [
          _c(
            "v-card",
            { attrs: { "max-width": "500" } },
            [
              _c(
                "v-container",
                {
                  staticClass: "text-xs-center",
                  staticStyle: { position: "relative", top: "5%" }
                },
                [
                  _c(
                    "v-form",
                    [
                      _c(
                        "center",
                        [
                          _c(
                            "h1",
                            {
                              staticClass: "mt-10 mb-5",
                              staticStyle: { color: "teal" }
                            },
                            [_vm._v("Reset Password")]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "old_password",
                              name: "Email",
                              outlined: "",
                              label: "Old Password",
                              type: "password",
                              required: ""
                            },
                            on: { blur: _vm.check_email },
                            model: {
                              value: _vm.email,
                              callback: function($$v) {
                                _vm.email = $$v
                              },
                              expression: "email"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "old_password",
                              name: "OldPass",
                              outlined: "",
                              rules: [
                                function() {
                                  return (
                                    !!_vm.old_password ||
                                    "This field is required"
                                  )
                                }
                              ],
                              "error-messages": _vm.errorMessages,
                              label: "Old Password",
                              type: "password",
                              required: ""
                            },
                            on: { blur: _vm.check_old_password },
                            model: {
                              value: _vm.old_password,
                              callback: function($$v) {
                                _vm.old_password = $$v
                              },
                              expression: "old_password"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mt-n6",
                              staticStyle: {
                                color: "red",
                                "text-align": "left"
                              },
                              attrs: { id: "op" }
                            },
                            [_vm._v(_vm._s(_vm.old_alert))]
                          ),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "new_password",
                              name: "NewPass",
                              outlined: "",
                              rules: [
                                function() {
                                  return (
                                    !!_vm.new_password ||
                                    "This field is required"
                                  )
                                }
                              ],
                              "error-messages": _vm.errorMessages,
                              label: "New Password",
                              type: "password",
                              required: ""
                            },
                            model: {
                              value: _vm.new_password,
                              callback: function($$v) {
                                _vm.new_password = $$v
                              },
                              expression: "new_password"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              id: "re_password",
                              rules: [
                                function() {
                                  return (
                                    !!_vm.re_password ||
                                    "This field is required"
                                  )
                                }
                              ],
                              "error-messages": _vm.errorMessages,
                              name: "re_password",
                              outlined: "",
                              label: "Re-enter Password",
                              type: "password"
                            },
                            on: { blur: _vm.CheckPassword },
                            model: {
                              value: _vm.re_password,
                              callback: function($$v) {
                                _vm.re_password = $$v
                              },
                              expression: "re_password"
                            }
                          }),
                          _vm._v(" "),
                          _vm.alert
                            ? _c(
                                "div",
                                {
                                  staticClass: "mt-n5",
                                  staticStyle: {
                                    color: "red",
                                    "text-align": "left"
                                  },
                                  attrs: { id: "alert" }
                                },
                                [_vm._v(_vm._s(_vm.alert))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mb-10",
                                  staticStyle: { color: "white" },
                                  attrs: {
                                    primary: "",
                                    large: "",
                                    block: "",
                                    color: "teal"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.SaveNewPassword()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/pages/ForgotPassword.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/pages/ForgotPassword.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_5975dda8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=5975dda8& */ "./resources/js/views/pages/ForgotPassword.vue?vue&type=template&id=5975dda8&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_5975dda8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ForgotPassword_vue_vue_type_template_id_5975dda8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/ForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/ForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/ForgotPassword.vue?vue&type=template&id=5975dda8&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/ForgotPassword.vue?vue&type=template&id=5975dda8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5975dda8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=5975dda8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/ForgotPassword.vue?vue&type=template&id=5975dda8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5975dda8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_5975dda8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);