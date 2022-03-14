(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkHotelManager"] = self["webpackChunkHotelManager"] || []).push([["src_app_dashboard_dashboard_module_ts"], {
    /***/
    50425:
    /*!*******************************************************!*\
      !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardRoutingModule": function DashboardRoutingModule() {
          return (
            /* binding */
            _DashboardRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./main/main.component */
      93223);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      }, {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
      }];

      var _DashboardRoutingModule = function _DashboardRoutingModule() {
        _classCallCheck(this, _DashboardRoutingModule);
      };

      _DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) {
        return new (t || _DashboardRoutingModule)();
      };

      _DashboardRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _DashboardRoutingModule
      });
      _DashboardRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    34814:
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardModule": function DashboardModule() {
          return (
            /* binding */
            _DashboardModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);
      /* harmony import */


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      50425);
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./main/main.component */
      93223);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DashboardModule = function _DashboardModule() {
        _classCallCheck(this, _DashboardModule);
      };

      _DashboardModule.ɵfac = function DashboardModule_Factory(t) {
        return new (t || _DashboardModule)();
      };

      _DashboardModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DashboardModule
      });
      _DashboardModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule.forRoot({
          echarts: function echarts() {
            return __webpack_require__.e(
            /*! import() */
            "node_modules_echarts_index_js").then(__webpack_require__.t.bind(__webpack_require__,
            /*! echarts */
            95252, 23));
          }
        }), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_DashboardModule, {
          declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule]
        });
      })();
      /***/

    },

    /***/
    93223:
    /*!**************************************************!*\
      !*** ./src/app/dashboard/main/main.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MainComponent": function MainComponent() {
          return (
            /* binding */
            _MainComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-apexcharts */
      34256);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/menu */
      33935);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      76627);
      /* harmony import */


      var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-echarts */
      93104);
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      99904);

      var _c0 = ["chart"];

      var _MainComponent = // area chart end
      function _MainComponent() {
        _classCallCheck(this, _MainComponent);

        // sparkline chart start
        this.commonBarSparklineOptions = {
          chart: {
            type: 'bar',
            width: 100,
            height: 25,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            bar: {
              columnWidth: '40%'
            }
          },
          series: [{
            name: 'income',
            data: [31, 40, 28, 44, 60, 55, 68, 51, 42, 85, 77]
          }],
          tooltip: {
            fixed: {
              enabled: false
            },
            x: {
              show: false
            },
            y: {},
            marker: {
              show: false
            }
          }
        }; // sparkline chart end
        // donut chart start

        this.donut_chart = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            show: false,
            data: ['Single', 'Double', 'King', 'Executive Suite', 'Apartments'],
            textStyle: {
              color: '#9aa0ac',
              padding: [5, 10]
            }
          },
          toolbox: {
            show: false
          },
          series: [{
            name: 'Access to the resource',
            type: 'pie',
            radius: ['35%', '55%'],
            itemStyle: {
              normal: {
                label: {
                  show: !0
                },
                labelLine: {
                  show: !0
                }
              },
              emphasis: {
                label: {
                  show: !0,
                  position: 'center',
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'normal'
                  }
                }
              }
            },
            data: [{
              value: 734,
              name: 'Single'
            }, {
              value: 567,
              name: 'Double'
            }, {
              value: 464,
              name: 'King'
            }, {
              value: 364,
              name: 'Executive Suite'
            }, {
              value: 323,
              name: 'Apartments'
            }]
          }],
          color: ['#3CDBC2', '#FF2742', '#235A66', '#FFAB2F', '#86AEAC']
        }; // donut chart end
        // area chart start

        this.areaChartOptions = {
          series: [{
            name: 'New Customers',
            data: [31, 40, 28, 51, 42, 85, 77]
          }, {
            name: 'Old Customers',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
          chart: {
            height: 380,
            type: 'area',
            toolbar: {
              show: false
            },
            foreColor: '#9aa0ac'
          },
          colors: ['#9F8DF1', '#E79A3B'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z']
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
            offsetX: 0,
            offsetY: 0
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            }
          }
        };
      };

      _MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || _MainComponent)();
      };

      _MainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MainComponent,
        selectors: [["app-main"]],
        viewQuery: function MainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        decls: 548,
        vars: 19,
        consts: [[1, "content"], [1, "container-fluid"], [1, "block-header", "mt-n3"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "fw-bold"], [1, "font-weight-normal", "mb-0"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "align-items-center", "justify-content-between", "breadcrumb", "breadcrumb-style"], [1, "mb-xl-0"], [1, "float-end", "msl-2"], [1, "text-secondary", "mb-0"], [3, "series", "chart", "plotOptions", "tooltip"], [1, "float-end", "msr-3"], [1, "text-secondary", "mb-2"], [1, "rating-star"], [1, "material-icons"], [1, "col-lg-3", "col-md-3", "col-sm-12"], [1, "card", "card-statistic-2"], [1, "clearfix"], [1, "card-icon", "shadow-primary", "float-start", "bg-purple"], [1, "fas", "fa-paste"], [1, "float-end", "m-4"], [1, "float-end"], [1, "card-body", "float-end"], [1, "card-content", "m-3"], [1, "progress", "skill-progress", "m-b-20", "w-100"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-purple", "width-per-45"], [1, "card-icon", "shadow-primary", "float-start", "bg-orange"], [1, "fas", "fa-bed"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "width-per-45"], [1, "card-icon", "shadow-primary", "float-start", "bg-green"], [1, "fas", "fa-users"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-green", "width-per-45"], [1, "card-icon", "shadow-primary", "float-start", "bg-cyan"], [1, "fas", "fa-dollar-sign"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "width-per-45"], [1, "card"], [1, "header"], ["mat-button", "", 1, "header-dropdown", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""], [1, "body"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], ["echarts", "", 1, "desktop-pie-height", 3, "options"], [1, "table", "mb-0"], [1, "fas", "fa-circle", "text-primary"], [1, "text-end"], [1, "fas", "fa-circle", "text-warning"], [1, "fas", "fa-circle", "text-danger"], [1, "row", "clearfix"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "tableBody"], [1, "table-responsive"], [1, "table"], [1, "table-img"], ["src", "assets/images/user/user8.jpg", "alt", ""], [1, "badge", "col-green"], [1, "far", "fa-file-pdf", "tbl-pdf"], ["mat-icon-button", "", 1, "btn-tbl-edit"], ["mat-icon-button", "", 1, "btn-tbl-delete"], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "badge", "col-red"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["src", "assets/images/user/user6.jpg", "alt", ""], ["src", "assets/images/user/user7.jpg", "alt", ""], [1, "badge", "col-orange"], ["src", "assets/images/user/user9.jpg", "alt", ""], [1, "assign-style", 2, "position", "relative", "max-height", "355px", 3, "perfectScrollbar"], [1, "feedBody"], [1, "active-feed"], [1, "feed-user-img"], ["src", "assets/images/user/user1.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblFileStyle"], [1, "text-muted", "float-end"], [1, "m-b-15", "m-t-15"], [1, "diactive-feed"], ["src", "assets/images/user/user2.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblTaskStyle"], ["src", "assets/images/user/user3.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblCommentStyle"], ["src", "assets/images/user/user4.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "feedLblStyle", "lblReplyStyle"], ["src", "assets/images/user/user5.jpg", "alt", "User-Profile-Image", 1, "img-radius"], ["src", "assets/images/user/user6.jpg", "alt", "User-Profile-Image", 1, "img-radius"], [1, "review-block"], [1, "review-img"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "col"], [1, "m-b-5"], [1, "float-end", "m-r-10", "text-muted"], [1, "m-t-15", "m-b-15", "text-muted"], ["mat-icon-button", "", 1, "m-r-10", "col-blue"], ["mat-icon-button", "", 1, "m-r-10", "col-red"], [1, "row", "mt-3"], [1, "text-center", "m-b-5"], ["href", "javascript:void(0)", 1, "b-b-primary", "text-primary"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi, Welcome back!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Spice Dashboard,");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Total Income");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "apx-chart", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Customer Ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "star_half");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "(9,876)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Total Booking");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 1,245 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Rooms Available");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 287 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "New Customers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 1,532 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Total Revenue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " $22,567 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Hotel Survay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-menu", null, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "apx-chart", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Room Booking Chart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-menu", null, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "table", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "734");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, " Double");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "567");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " King");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "464");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Booking Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "mat-menu", null, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "table", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Check In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Check Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Room Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Documents");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "John Deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "12-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "15-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Jens Brincker");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "13-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "16-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Unpaid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Double");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Mark Hay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "15-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "18-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "img", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Anthony Davie");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "16-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "17-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Unpaid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "King");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "img", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, "Alan Gilchrist");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "21-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "23-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, "Paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Appartment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "img", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Sue Woodger");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "25-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "26-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Pending");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "David Perry");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "26-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "29-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "Unpaid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "img", 70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "Sneha Pandit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "27-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "28-08-2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Paid");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "(123)123456");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Double");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "i", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "button", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Activity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "mat-menu", null, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](401, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "ul", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "li", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "img", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "File");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, " Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "small", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "6 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, " hii John, I have upload doc related to task. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "img", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](426, " Jalpa Joshi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "small", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](428, "5 hours ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, " Please do as specify. Let me know if you have any query. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "img", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "span", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "comment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, " Lina Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "small", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "6 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, " Hey, How are you?? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "li", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "img", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, " Jacob Ryan ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "small", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "7 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " I am fine. You?? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "li", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "img", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "span", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](458, "File");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " Sarah Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "small", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "6 hours ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " hii John, I have upload doc related to task. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "li", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "img", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "span", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, "Task ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, " Jalpa Joshi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "small", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "5 hours ago ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "p", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](474, " Please do as specify. Let me know if you have any query. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "Customer Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "more_vert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "mat-menu", null, 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](485, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](486, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](488, "Another action");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "button", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](490, "Something else here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "img", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "h6", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](498, "Alis Smith ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "span", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " a week ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](502, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](504, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "star_half");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](512, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel rutrum ex, at ornare mi. In quis scelerisque dui, eget rhoncus orci. Fusce et sodales ipsum. Nam id nunc euismod, aliquet arcu quis, mattis nisi.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "thumb_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](518, "thumb_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](521, "img", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "h6", 92);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "John Dio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span", 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](526, " a week ago");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "star");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](530, "star_half");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](532, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "star_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "p", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](538, "Nam quis ligula est. Nunc sed risus non turpis tristique tempor. Ut sollicitudin faucibus magna nec gravida. Suspendisse ullamcorper justo vel porta imperdiet. Nunc nec ipsum vel augue placerat faucibus. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](541, "thumb_up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "button", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](544, "thumb_down");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "a", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](547, "View all Customer Reviews");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.commonBarSparklineOptions.series)("chart", ctx.commonBarSparklineOptions.chart)("plotOptions", ctx.commonBarSparklineOptions.plotOptions)("tooltip", ctx.commonBarSparklineOptions.tooltip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.donut_chart);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](241);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
          }
        },
        directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__.MatMenuItem, ngx_echarts__WEBPACK_IMPORTED_MODULE_5__.NgxEchartsDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts-es5.js.map