(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ExpenseChart"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExpenseChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts-vue */ "./node_modules/highcharts-vue/dist/highcharts-vue.min.js");
/* harmony import */ var highcharts_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts_vue__WEBPACK_IMPORTED_MODULE_0__);
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
  components: {
    highcharts: highcharts_vue__WEBPACK_IMPORTED_MODULE_0__["Chart"]
  },
  data: function data() {
    return {
      expenses: {},
      chartOptions: {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Expense Chart'
        },
        xAxis: [{
          categories: []
        }],
        series: [{
          name: 'User Expenses',
          data: [],
          color: '#6fcd98'
        }]
      }
    };
  },
  created: function created() {
    this.getTotalExpenses();
  },
  methods: {
    getTotalExpenses: function getTotalExpenses() {
      var _this = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      var vm = this;
      axios.post('api/GetTotalExpenses', {
        role: this.user.role,
        user_id: this.user.id
      }).then(function (res) {
        _this.expenses = res.data;
        _this.chartOptions.series[0].data = res.data.map(function (m) {
          return m.total_amount;
        });
        _this.chartOptions.xAxis[0].categories = res.data.map(function (m) {
          return m.category;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.a[data-v-4aad315e]:hover {\r\n    cursor: pointer;\r\n    color: #26c6da\n}\np[data-v-4aad315e] {\r\n    font-family: Trebuchet MS\n}\n.red[data-v-4aad315e] {\r\n    background-color: red;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid mt-10" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-sm-6" },
        [
          _c(
            "v-card",
            { staticClass: "pa-6" },
            [
              _c(
                "v-toolbar",
                { attrs: { light: "", extended: "", height: "4" } },
                [
                  _c(
                    "v-toolbar-title",
                    {
                      staticClass: "dark--text mt-10",
                      staticStyle: { "font-family": "Trebuchet MS" }
                    },
                    [
                      _vm._v(
                        "\r\n                        My Expenses\r\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-simple-table", { staticClass: "mt-2" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticStyle: { "background-color": "teal" } }, [
                      _vm._v("Categories")
                    ]),
                    _vm._v(" "),
                    _c("th", { staticStyle: { "background-color": "teal" } }, [
                      _vm._v("Total")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.expenses, function(list) {
                    return _c("tr", { key: list.expense_id }, [
                      _c("td", [_vm._v(_vm._s(list.category))]),
                      _vm._v(" "),
                      _c("td", [_vm._v("$" + _vm._s(list.total_amount))])
                    ])
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-sm-6" },
        [_c("highcharts", { attrs: { options: _vm.chartOptions } })],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ExpenseChart.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ExpenseChart.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExpenseChart_vue_vue_type_template_id_4aad315e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true& */ "./resources/js/components/ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true&");
/* harmony import */ var _ExpenseChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpenseChart.vue?vue&type=script&lang=js& */ "./resources/js/components/ExpenseChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ExpenseChart_vue_vue_type_style_index_0_id_4aad315e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css& */ "./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ExpenseChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExpenseChart_vue_vue_type_template_id_4aad315e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExpenseChart_vue_vue_type_template_id_4aad315e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4aad315e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExpenseChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExpenseChart.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ExpenseChart.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpenseChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_style_index_0_id_4aad315e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=style&index=0&id=4aad315e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_style_index_0_id_4aad315e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_style_index_0_id_4aad315e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_style_index_0_id_4aad315e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_style_index_0_id_4aad315e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_template_id_4aad315e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExpenseChart.vue?vue&type=template&id=4aad315e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_template_id_4aad315e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExpenseChart_vue_vue_type_template_id_4aad315e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);