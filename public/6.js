(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserRoles.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
      dialogDelete: false,
      dialogRestore: false,
      editedIndex: -1,
      permission_type: null,
      permission_lists: {}
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Permission Type' : 'Edit Permission Type';
    }
  },
  created: function created() {
    this.permission_table();
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  methods: {
    save_edit_permission: function save_edit_permission(permission) {
      var _this = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/SaveEditPermission', {
        user_id: this.user.id,
        role_id: permission.role_id,
        name: permission.name
      }).then(function (res) {
        _this.permission_table();
      });
    },
    edit_permission: function edit_permission(role_id) {
      for (var x = 0; x < this.permission_lists.length; x++) {
        if (role_id == this.permission_lists[x].role_id) {
          if (this.permission_lists[x].edit) {
            this.permission_lists[x].edit = false;
          } else {
            this.permission_lists[x].edit = true;
          }
        }

        console.log(this.permission_lists);
      }
    },
    getColor: function getColor(deleted_at) {
      if (deleted_at == 'Active') return 'green';else return 'red';
    },
    deletePermissionConfirm: function deletePermissionConfirm() {
      var _this2 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/DeletePermission', {
        user_id: this.user.id,
        role_id: this.permission_list.role_id
      }).then(function (res) {
        _this2.permission_table();

        _this2.closeDelete();
      });
    },
    delete_permission: function delete_permission(list) {
      this.dialogDelete = true;
      this.permission_list = list;
    },
    restore_permission: function restore_permission(list) {
      this.dialogRestore = true;
      this.permission_list = list;
    },
    restorePermissionConfirm: function restorePermissionConfirm() {
      var _this3 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/RestorePermission', {
        user_id: this.user.id,
        role_id: this.permission_list.role_id
      }).then(function (res) {
        _this3.permission_table();

        _this3.closeRestore();
      });
    },
    permission_table: function permission_table() {
      var _this4 = this;

      axios.get('api/Permission').then(function (res) {
        _this4.permission_lists = res.data;

        for (var i = 0; i < _this4.permission_lists.length; i++) {
          _this4.$set(_this4.permission_lists[i], 'edit', false);

          if (_this4.permission_lists[i].deleted_at) {
            _this4.permission_lists[i].deleted_at = 'Deleted';
          } else {
            _this4.permission_lists[i].deleted_at = 'Active';
          }
        }
      });
    },
    save_new_permission: function save_new_permission() {
      var _this5 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/Permission', {
        user_id: this.user.id,
        permission_type: this.permission_type
      }).then(function (res) {
        _this5.dialog = false;

        _this5.permission_table();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    close: function close() {
      var _this6 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this7 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this7.editedItem = Object.assign({}, _this7.defaultItem);
        _this7.editedIndex = -1;
      });
    },
    closeRestore: function closeRestore() {
      var _this8 = this;

      this.dialogRestore = false;
      this.$nextTick(function () {
        _this8.editedItem = Object.assign({}, _this8.defaultItem);
        _this8.editedIndex = -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,\r\n.v-data-table>.v-data-table__wrapper>table>thead>tr>th {\r\n    font-size: 12px !important;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoles.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=template&id=90444a52&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserRoles.vue?vue&type=template&id=90444a52& ***!
  \************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid" },
    [
      _c(
        "v-card",
        { staticClass: "pa-6" },
        [
          _c(
            "v-toolbar",
            {
              attrs: { light: "", extended: "", height: "4" },
              scopedSlots: _vm._u([
                {
                  key: "extension",
                  fn: function() {
                    return [
                      _c(
                        "v-btn",
                        {
                          staticClass: "white--text",
                          attrs: {
                            fab: "",
                            color: "teal",
                            bottom: "",
                            right: "",
                            absolute: ""
                          },
                          on: {
                            click: function($event) {
                              _vm.dialog = !_vm.dialog
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-plus")])],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c(
                "v-toolbar-title",
                {
                  staticClass: "dark--text mt-10",
                  staticStyle: { "font-family": "Trebuchet MS" }
                },
                [_vm._v("\r\n                Permission Type\r\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "v-simple-table",
            {
              staticClass: "mt-2",
              attrs: { dense: "", "fixed-header": "", height: "400" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "teal",
                        color: "white"
                      }
                    },
                    [_vm._v("No.")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "teal",
                        color: "white"
                      }
                    },
                    [_vm._v("Name")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "teal",
                        color: "white"
                      }
                    },
                    [_vm._v("Status")]
                  ),
                  _vm._v(" "),
                  _c(
                    "th",
                    {
                      staticStyle: {
                        "background-color": "teal",
                        color: "white"
                      }
                    },
                    [_vm._v("Actions")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.permission_lists, function(list) {
                  return _c("tr", { key: list.role_id }, [
                    _c("td", [_vm._v(_vm._s(list.role_id) + ".")]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !list.edit,
                                expression: "!list.edit"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(list.name))]
                        ),
                        _vm._v(" "),
                        _c("v-text-field", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: list.edit,
                              expression: "list.edit"
                            }
                          ],
                          attrs: { dense: "" },
                          model: {
                            value: list.name,
                            callback: function($$v) {
                              _vm.$set(list, "name", $$v)
                            },
                            expression: "list.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "v-chip",
                          {
                            attrs: {
                              "x-small": "",
                              color: _vm.getColor(list.deleted_at),
                              dark: "",
                              dense: ""
                            }
                          },
                          [
                            _vm._v(
                              "\r\n                            " +
                                _vm._s(list.deleted_at) +
                                "\r\n                        "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        !list.edit
                          ? _c(
                              "v-btn",
                              {
                                attrs: { icon: "", dense: "", "x-small": "" },
                                on: {
                                  click: function($event) {
                                    return _vm.edit_permission(list.role_id)
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-pencil")])],
                              1
                            )
                          : _c(
                              "v-btn",
                              {
                                attrs: { icon: "", dense: "", "x-small": "" },
                                on: {
                                  click: function($event) {
                                    return _vm.save_edit_permission(list)
                                  }
                                }
                              },
                              [_c("v-icon", [_vm._v("mdi-content-save")])],
                              1
                            ),
                        _vm._v(" "),
                        list.deleted_at == "Deleted"
                          ? _c(
                              "v-icon",
                              {
                                attrs: { small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.restore_permission(list)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\r\n                            mdi-restore\r\n                        "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        list.deleted_at == "Active"
                          ? _c(
                              "v-btn",
                              {
                                attrs: { icon: "", "x-small": "" },
                                on: {
                                  click: function($event) {
                                    return _vm.delete_permission(list)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { dense: "" } }, [
                                  _vm._v("mdi-delete")
                                ])
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                }),
                0
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "400px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v(_vm._s(_vm.formTitle))
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "Permission Name",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.permission_type,
                                  callback: function($$v) {
                                    _vm.permission_type = $$v
                                  },
                                  expression: "permission_type"
                                }
                              })
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
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.close }
                    },
                    [
                      _vm._v(
                        "\r\n                    Cancel\r\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.save_new_permission }
                    },
                    [_vm._v("\r\n                    Save\r\n                ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "280px" },
          model: {
            value: _vm.dialogDelete,
            callback: function($$v) {
              _vm.dialogDelete = $$v
            },
            expression: "dialogDelete"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { attrs: { align: "center" } }, [
                _vm._v("Are you sure you want to delete this process?")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.closeDelete }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.deletePermissionConfirm }
                    },
                    [_vm._v("OK")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "280px" },
          model: {
            value: _vm.dialogRestore,
            callback: function($$v) {
              _vm.dialogRestore = $$v
            },
            expression: "dialogRestore"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { attrs: { align: "center" } }, [
                _vm._v("Are you sure you want to retrieve this process?")
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.closeRestore }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "teal darken-1", text: "" },
                      on: { click: _vm.restorePermissionConfirm }
                    },
                    [_vm._v("OK")]
                  ),
                  _vm._v(" "),
                  _c("v-spacer")
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

/***/ "./resources/js/components/UserRoles.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/UserRoles.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserRoles_vue_vue_type_template_id_90444a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserRoles.vue?vue&type=template&id=90444a52& */ "./resources/js/components/UserRoles.vue?vue&type=template&id=90444a52&");
/* harmony import */ var _UserRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserRoles.vue?vue&type=script&lang=js& */ "./resources/js/components/UserRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserRoles.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserRoles_vue_vue_type_template_id_90444a52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserRoles_vue_vue_type_template_id_90444a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserRoles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserRoles.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/UserRoles.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoles.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/UserRoles.vue?vue&type=template&id=90444a52&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/UserRoles.vue?vue&type=template&id=90444a52& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_template_id_90444a52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserRoles.vue?vue&type=template&id=90444a52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserRoles.vue?vue&type=template&id=90444a52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_template_id_90444a52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserRoles_vue_vue_type_template_id_90444a52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);