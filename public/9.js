(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment_moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_moment__WEBPACK_IMPORTED_MODULE_0__);
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
      user_list: {},
      firstname: null,
      lastname: null,
      email: null,
      role: '',
      roles: [],
      password: null,
      editedIndex: -1,
      editedItem: {
        employee_code: '',
        employee_name: '',
        department: '',
        section: '',
        team: '',
        deleted_at: ''
      },
      defaultItem: {
        name: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Users' : 'Edit Item';
    }
  },
  created: function created() {
    this.get_lists();
    this.get_roles();
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
    get_roles: function get_roles() {
      var _this = this;

      axios.get('api/GetRoles').then(function (res) {
        _this.roles = res.data;
        console.log(res.data);
      });
    },
    getColor: function getColor(deleted_at) {
      if (deleted_at == 'Active') return 'green';else return 'red';
    },
    get_lists: function get_lists() {
      var _this2 = this;

      axios.get('api/User').then(function (res) {
        _this2.user_list = res.data;

        for (var i = 0; i < _this2.user_list.length; i++) {
          _this2.$set(_this2.user_list[i], 'edit', false);

          if (_this2.user_list[i].deleted_at) {
            _this2.user_list[i].deleted_at = 'Deleted';
          } else {
            _this2.user_list[i].deleted_at = 'Active';
          }
        }
      });
    },
    restoreUserConfirm: function restoreUserConfirm() {
      var _this3 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/RestoreUser', {
        user_id: this.user.id,
        id: this.user_lists.id
      }).then(function (res) {
        _this3.get_lists();

        _this3.closeRestore();
      });
    },
    restore_user: function restore_user(list) {
      this.dialogRestore = true;
      this.user_lists = list;
    },
    deleteUserConfirm: function deleteUserConfirm() {
      var _this4 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/DeleteUser', {
        user_id: this.user.id,
        id: this.user_lists.id
      }).then(function (res) {
        _this4.get_lists();

        _this4.closeDelete();
      });
    },
    delete_user: function delete_user(list) {
      this.dialogDelete = true;
      this.user_lists = list;
    },
    save_edit_user: function save_edit_user(list) {
      var _this5 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/SaveEditUser', {
        user_id: this.user.id,
        id: list.id,
        firstname: list.firstname,
        lastname: list.lastname,
        email: list.email,
        role: list.role_id
      }).then(function (res) {
        _this5.get_lists();
      });
    },
    edit_user: function edit_user(id) {
      for (var x = 0; x < this.user_list.length; x++) {
        if (id == this.user_list[x].id) {
          if (this.user_list[x].edit) {
            this.user_list[x].edit = false;
          } else {
            this.user_list[x].edit = true;
          }
        }
      }
    },
    save_new_users: function save_new_users() {
      var _this6 = this;

      this.user = JSON.parse(localStorage.getItem('user'));
      axios.post('api/User', {
        user_id: this.user.id,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        role: this.role,
        password: this.password
      }).then(function (res) {
        _this6.dialog = false;

        _this6.get_lists();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    close: function close() {
      var _this7 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this7.editedItem = Object.assign({}, _this7.defaultItem);
        _this7.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this8 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this8.editedItem = Object.assign({}, _this8.defaultItem);
        _this8.editedIndex = -1;
      });
    },
    closeRestore: function closeRestore() {
      var _this9 = this;

      this.dialogRestore = false;
      this.$nextTick(function () {
        _this9.editedItem = Object.assign({}, _this9.defaultItem);
        _this9.editedIndex = -1;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \********************************************************************************************************************************************************************************************************/
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
                [_vm._v("\r\n                User List\r\n            ")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "v-simple-table",
            { attrs: { dense: "", "fixed-header": "", height: "400" } },
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
                    [_vm._v("Firstname")]
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
                    [_vm._v("LastName")]
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
                    [_vm._v("Email")]
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
                    [_vm._v("Role")]
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
                _vm._l(_vm.user_list, function(list) {
                  return _c("tr", { key: list.id }, [
                    _c("td", [_vm._v(_vm._s(list.id) + ".")]),
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
                          [_vm._v(_vm._s(list.firstname))]
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
                            value: list.firstname,
                            callback: function($$v) {
                              _vm.$set(list, "firstname", $$v)
                            },
                            expression: "list.firstname"
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
                          [_vm._v(_vm._s(list.lastname))]
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
                            value: list.lastname,
                            callback: function($$v) {
                              _vm.$set(list, "lastname", $$v)
                            },
                            expression: "list.lastname"
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
                          [_vm._v(_vm._s(list.email))]
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
                            value: list.email,
                            callback: function($$v) {
                              _vm.$set(list, "email", $$v)
                            },
                            expression: "list.email"
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
                        _c("v-select", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: list.edit,
                              expression: "list.edit"
                            }
                          ],
                          staticClass: "mt-2",
                          attrs: {
                            dense: "",
                            outlined: "",
                            label: "Role",
                            items: _vm.roles,
                            "item-value": "role_id",
                            "item-text": "name"
                          },
                          model: {
                            value: list.role_id,
                            callback: function($$v) {
                              _vm.$set(list, "role_id", $$v)
                            },
                            expression: "list.role_id"
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
                                    return _vm.edit_user(list.id)
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
                                    return _vm.save_edit_user(list)
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
                                    return _vm.restore_user(list)
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
                                    return _vm.delete_user(list)
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
              _c(
                "v-card-title",
                { staticStyle: { "background-color": "teal", color: "white" } },
                [
                  _c("span", { staticClass: "headline" }, [
                    _vm._v(_vm._s(_vm.formTitle))
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    { staticClass: "mt-5" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c("v-text-field", {
                                staticClass: "mt-2",
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  label: "Firstname"
                                },
                                model: {
                                  value: _vm.firstname,
                                  callback: function($$v) {
                                    _vm.firstname = $$v
                                  },
                                  expression: "firstname"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  label: "Lastname"
                                },
                                model: {
                                  value: _vm.lastname,
                                  callback: function($$v) {
                                    _vm.lastname = $$v
                                  },
                                  expression: "lastname"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mt-2",
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  label: "Email"
                                },
                                model: {
                                  value: _vm.email,
                                  callback: function($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "Roles",
                                  items: _vm.roles,
                                  "item-value": "role_id",
                                  "item-text": "name",
                                  outlined: "",
                                  dense: ""
                                },
                                model: {
                                  value: _vm.role,
                                  callback: function($$v) {
                                    _vm.role = $$v
                                  },
                                  expression: "role"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  dense: "",
                                  outlined: "",
                                  label: "Password",
                                  type: "password"
                                },
                                model: {
                                  value: _vm.password,
                                  callback: function($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password"
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
                      on: { click: _vm.save_new_users }
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
                _vm._v("Are you sure you want to delete this staff?")
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
                      on: { click: _vm.deleteUserConfirm }
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
                _vm._v("Are you sure you want to retrieve this staff?")
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
                      on: { click: _vm.restoreUserConfirm }
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

/***/ "./resources/js/components/Users.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Users.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=30c27aa6& */ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=30c27aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);