(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/NavBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
      dialog: false,
      drawer: null,
      user_details: {},
      role: null,
      items: [{
        icon: 'mdi-cash',
        text: 'My Expenses',
        to: 'new_expense',
        accessibleBy: [1, 2]
      }, {
        icon: 'mdi-chart-bar',
        text: 'Expense Chart',
        to: 'expense_chart',
        accessibleBy: [1, 2]
      }, {
        icon: 'mdi-account-key',
        text: 'Change Password',
        to: 'change_password',
        accessibleBy: [1, 2]
      }, {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Settings',
        accessibleBy: [1],
        children: [{
          icon: 'mdi-plus',
          text: 'Expense Category',
          to: 'new_category'
        }, {
          icon: 'mdi-account-plus',
          text: 'Users',
          to: 'new_users'
        }, {
          icon: 'mdi-account-cash',
          text: 'Track Users Expenses',
          to: 'users_expenses'
        }, {
          icon: 'mdi-account-cog',
          text: 'User Type',
          to: 'roles'
        }]
      }]
    };
  },
  created: function created() {
    this.users();
    var user = localStorage.getItem('user');
  },
  methods: {
    logout: function logout() {
      this.$router.push({
        name: 'login'
      });
    },
    users: function users() {
      this.user_details = JSON.parse(localStorage.getItem('user'));
      this.role = this.user_details.role == 1 ? 'ADMIN' : 'USER';
    }
  },
  props: {
    source: String
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.a[data-v-e872688c]:hover {\r\n    cursor: pointer;\r\n    color: teal;\r\n    text-decoration: none;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=template&id=e872688c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/pages/NavBar.vue?vue&type=template&id=e872688c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { clipped: _vm.$vuetify.breakpoint.lgAndUp, app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "div",
            { staticClass: "mt-5", staticStyle: { "text-align": "center" } },
            [
              _c("h6", { staticStyle: { "font-family": "Trebuchet MS" } }, [
                _vm._v(
                  _vm._s(_vm.user_details.firstname) +
                    " " +
                    _vm._s(_vm.user_details.lastname)
                )
              ]),
              _vm._v(" "),
              _c(
                "v-chip",
                { attrs: { outlined: "", small: "", color: "teal" } },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v("mdi-account-circle")
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticStyle: { "font-family": "Trebuchet MS" } },
                    [_vm._v("LOGGED-IN AS " + _vm._s(_vm.role))]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _vm._l(_vm.items, function(item) {
                return [
                  item.heading
                    ? _c(
                        "v-row",
                        { key: item.heading, attrs: { align: "center" } },
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "6" } },
                            [
                              item.heading
                                ? _c("v-subheader", [
                                    _vm._v(
                                      "\r\n                            " +
                                        _vm._s(item.heading) +
                                        "\r\n                        "
                                    )
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticClass: "text-center",
                              attrs: { cols: "6" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "body-2 black--text",
                                  attrs: { href: "#!" }
                                },
                                [_vm._v("EDIT")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : item.children
                    ? _c(
                        "v-list-group",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: item.accessibleBy.includes(
                                _vm.user_details.role
                              ),
                              expression:
                                "item.accessibleBy.includes(user_details.role)"
                            }
                          ],
                          key: item.text,
                          attrs: {
                            "prepend-icon": item.model
                              ? item.icon
                              : item["icon-alt"]
                          },
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "activator",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(
                                            "\r\n                                " +
                                              _vm._s(item.text) +
                                              "\r\n                            "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          ),
                          model: {
                            value: item.model,
                            callback: function($$v) {
                              _vm.$set(item, "model", $$v)
                            },
                            expression: "item.model"
                          }
                        },
                        [
                          _vm._v(" "),
                          _vm._l(item.children, function(child, i) {
                            return _c(
                              "v-list-item",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: item.accessibleBy.includes(
                                      _vm.user_details.role
                                    ),
                                    expression:
                                      "item.accessibleBy.includes(user_details.role)"
                                  }
                                ],
                                key: i,
                                staticClass: "a",
                                attrs: { link: "", to: child.to }
                              },
                              [
                                child.icon
                                  ? _c(
                                      "v-list-item-action",
                                      [
                                        _c("v-icon", [
                                          _vm._v(_vm._s(child.icon))
                                        ])
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(
                                        "\r\n                                " +
                                          _vm._s(child.text) +
                                          "\r\n                            "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    : _c(
                        "v-list-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: item.accessibleBy.includes(
                                _vm.user_details.role
                              ),
                              expression:
                                "item.accessibleBy.includes(user_details.role)"
                            }
                          ],
                          key: item.text,
                          staticClass: "a",
                          attrs: { link: "", to: item.to }
                        },
                        [
                          _c(
                            "v-list-item-action",
                            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c("v-list-item-title", [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(item.text) +
                                    "\r\n                        "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            "clipped-left": _vm.$vuetify.breakpoint.lgAndUp,
            app: "",
            dense: "",
            color: "teal",
            dark: ""
          }
        },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            { staticClass: "ml-0 pl-4", staticStyle: { width: "300px" } },
            [
              _c("span", { staticClass: "hidden-sm-and-down" }, [
                _vm._v("EXPENSE MANAGER")
              ])
            ]
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticStyle: { "text-decoration": "none" },
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  return _vm.logout()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-logout")])],
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

/***/ "./resources/js/views/pages/NavBar.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/pages/NavBar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavBar_vue_vue_type_template_id_e872688c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar.vue?vue&type=template&id=e872688c&scoped=true& */ "./resources/js/views/pages/NavBar.vue?vue&type=template&id=e872688c&scoped=true&");
/* harmony import */ var _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavBar_vue_vue_type_style_index_0_id_e872688c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css& */ "./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavBar_vue_vue_type_template_id_e872688c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavBar_vue_vue_type_template_id_e872688c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e872688c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/NavBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/NavBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/pages/NavBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e872688c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=style&index=0&id=e872688c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e872688c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e872688c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e872688c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_style_index_0_id_e872688c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/pages/NavBar.vue?vue&type=template&id=e872688c&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/NavBar.vue?vue&type=template&id=e872688c&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_e872688c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavBar.vue?vue&type=template&id=e872688c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/pages/NavBar.vue?vue&type=template&id=e872688c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_e872688c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavBar_vue_vue_type_template_id_e872688c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);