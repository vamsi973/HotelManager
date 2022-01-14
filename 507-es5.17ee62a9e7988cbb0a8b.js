!function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var i,n=s(t);if(e){var r=s(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return o(this,i)}}function o(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkHotelManager=self.webpackChunkHotelManager||[]).push([[507],{59241:function(t,n,o){"use strict";o.d(n,{YE:function(){return y},nU:function(){return A},JX:function(){return B}});var a=o(35366),s=o(97388),u=o(19861),l=o(99235),d=o(87064),h=o(89666),f=o(15446),p=o(99713),v=o(61116),m=["mat-sort-header",""];function _(t,e){if(1&t){var i=a.EpF();a.TgZ(0,"div",3),a.NdJ("@arrowPosition.start",function(){return a.CHM(i),a.oxw()._disableViewStateAnimation=!0})("@arrowPosition.done",function(){return a.CHM(i),a.oxw()._disableViewStateAnimation=!1}),a._UZ(1,"div",4),a.TgZ(2,"div",5),a._UZ(3,"div",6),a._UZ(4,"div",7),a._UZ(5,"div",8),a.qZA(),a.qZA()}if(2&t){var n=a.oxw();a.Q6J("@arrowOpacity",n._getArrowViewState())("@arrowPosition",n._getArrowViewState())("@allowChildren",n._getArrowDirectionState()),a.xp6(2),a.Q6J("@indicator",n._getArrowDirectionState()),a.xp6(1),a.Q6J("@leftPointer",n._getArrowDirectionState()),a.xp6(1),a.Q6J("@rightPointer",n._getArrowDirectionState())}}var g=["*"],w=new a.OlP("MAT_SORT_DEFAULT_OPTIONS"),b=(0,d.dB)((0,d.Id)(function(){return function t(){c(this,t)}}())),y=function(){var t=function(t){i(o,t);var n=r(o);function o(t){var e;return c(this,o),(e=n.call(this))._defaultOptions=t,e.sortables=new Map,e._stateChanges=new h.x,e.start="asc",e._direction="",e.sortChange=new a.vpe,e}return e(o,[{key:"direction",get:function(){return this._direction},set:function(t){this._direction=t}},{key:"disableClear",get:function(){return this._disableClear},set:function(t){this._disableClear=(0,u.Ig)(t)}},{key:"register",value:function(t){this.sortables.set(t.id,t)}},{key:"deregister",value:function(t){this.sortables.delete(t.id)}},{key:"sort",value:function(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}},{key:"getNextSortDirection",value:function(t){var e,i,n;if(!t)return"";var r=null!==(i=null!==(e=null==t?void 0:t.disableClear)&&void 0!==e?e:this.disableClear)&&void 0!==i?i:!!(null===(n=this._defaultOptions)||void 0===n?void 0:n.disableClear),o=function(t,e){var i=["asc","desc"];return"desc"==t&&i.reverse(),e||i.push(""),i}(t.start||this.start,r),a=o.indexOf(this.direction)+1;return a>=o.length&&(a=0),o[a]}},{key:"ngOnInit",value:function(){this._markInitialized()}},{key:"ngOnChanges",value:function(){this._stateChanges.next()}},{key:"ngOnDestroy",value:function(){this._stateChanges.complete()}}]),o}(b);return t.\u0275fac=function(e){return new(e||t)(a.Y36(w,8))},t.\u0275dir=a.lG2({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[a.qOj,a.TTD]}),t}(),S=d.mZ.ENTERING+" "+d.yN.STANDARD_CURVE,k={indicator:(0,p.X$)("indicator",[(0,p.SB)("active-asc, asc",(0,p.oB)({transform:"translateY(0px)"})),(0,p.SB)("active-desc, desc",(0,p.oB)({transform:"translateY(10px)"})),(0,p.eR)("active-asc <=> active-desc",(0,p.jt)(S))]),leftPointer:(0,p.X$)("leftPointer",[(0,p.SB)("active-asc, asc",(0,p.oB)({transform:"rotate(-45deg)"})),(0,p.SB)("active-desc, desc",(0,p.oB)({transform:"rotate(45deg)"})),(0,p.eR)("active-asc <=> active-desc",(0,p.jt)(S))]),rightPointer:(0,p.X$)("rightPointer",[(0,p.SB)("active-asc, asc",(0,p.oB)({transform:"rotate(45deg)"})),(0,p.SB)("active-desc, desc",(0,p.oB)({transform:"rotate(-45deg)"})),(0,p.eR)("active-asc <=> active-desc",(0,p.jt)(S))]),arrowOpacity:(0,p.X$)("arrowOpacity",[(0,p.SB)("desc-to-active, asc-to-active, active",(0,p.oB)({opacity:1})),(0,p.SB)("desc-to-hint, asc-to-hint, hint",(0,p.oB)({opacity:.54})),(0,p.SB)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",(0,p.oB)({opacity:0})),(0,p.eR)("* => asc, * => desc, * => active, * => hint, * => void",(0,p.jt)("0ms")),(0,p.eR)("* <=> *",(0,p.jt)(S))]),arrowPosition:(0,p.X$)("arrowPosition",[(0,p.eR)("* => desc-to-hint, * => desc-to-active",(0,p.jt)(S,(0,p.F4)([(0,p.oB)({transform:"translateY(-25%)"}),(0,p.oB)({transform:"translateY(0)"})]))),(0,p.eR)("* => hint-to-desc, * => active-to-desc",(0,p.jt)(S,(0,p.F4)([(0,p.oB)({transform:"translateY(0)"}),(0,p.oB)({transform:"translateY(25%)"})]))),(0,p.eR)("* => asc-to-hint, * => asc-to-active",(0,p.jt)(S,(0,p.F4)([(0,p.oB)({transform:"translateY(25%)"}),(0,p.oB)({transform:"translateY(0)"})]))),(0,p.eR)("* => hint-to-asc, * => active-to-asc",(0,p.jt)(S,(0,p.F4)([(0,p.oB)({transform:"translateY(0)"}),(0,p.oB)({transform:"translateY(-25%)"})]))),(0,p.SB)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",(0,p.oB)({transform:"translateY(0)"})),(0,p.SB)("hint-to-desc, active-to-desc, desc",(0,p.oB)({transform:"translateY(-25%)"})),(0,p.SB)("hint-to-asc, active-to-asc, asc",(0,p.oB)({transform:"translateY(25%)"}))]),allowChildren:(0,p.X$)("allowChildren",[(0,p.eR)("* <=> *",[(0,p.IO)("@*",(0,p.pV)(),{optional:!0})])])},C=function(){var t=function t(){c(this,t),this.changes=new h.x};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a.Yz7({factory:function(){return new t},token:t,providedIn:"root"}),t}(),D={provide:C,deps:[[new a.FiY,new a.tp0,C]],useFactory:function(t){return t||new C}},x=(0,d.Id)(function(){return function t(){c(this,t)}}()),A=function(){var t=function(t){i(o,t);var n=r(o);function o(t,e,i,r,a,s,u){var l;return c(this,o),(l=n.call(this))._intl=t,l._changeDetectorRef=e,l._sort=i,l._columnDef=r,l._focusMonitor=a,l._elementRef=s,l._ariaDescriber=u,l._showIndicatorHint=!1,l._viewState={},l._arrowDirection="",l._disableViewStateAnimation=!1,l.arrowPosition="after",l._sortActionDescription="Sort",l._handleStateChanges(),l}return e(o,[{key:"sortActionDescription",get:function(){return this._sortActionDescription},set:function(t){this._updateSortActionDescription(t)}},{key:"disableClear",get:function(){return this._disableClear},set:function(t){this._disableClear=(0,u.Ig)(t)}},{key:"ngOnInit",value:function(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this),this._sortButton=this._elementRef.nativeElement.querySelector('[role="button"]'),this._updateSortActionDescription(this._sortActionDescription)}},{key:"ngAfterViewInit",value:function(){var t=this;this._focusMonitor.monitor(this._elementRef,!0).subscribe(function(e){var i=!!e;i!==t._showIndicatorHint&&(t._setIndicatorHintVisible(i),t._changeDetectorRef.markForCheck())})}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}},{key:"_setIndicatorHintVisible",value:function(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}},{key:"_setAnimationTransitionState",value:function(t){this._viewState=t||{},this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}},{key:"_toggleOnInteraction",value:function(){this._sort.sort(this),"hint"!==this._viewState.toState&&"active"!==this._viewState.toState||(this._disableViewStateAnimation=!0)}},{key:"_handleClick",value:function(){this._isDisabled()||this._sort.sort(this)}},{key:"_handleKeydown",value:function(t){this._isDisabled()||t.keyCode!==l.L_&&t.keyCode!==l.K5||(t.preventDefault(),this._toggleOnInteraction())}},{key:"_isSorted",value:function(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}},{key:"_getArrowDirectionState",value:function(){return"".concat(this._isSorted()?"active-":"").concat(this._arrowDirection)}},{key:"_getArrowViewState",value:function(){var t=this._viewState.fromState;return(t?"".concat(t,"-to-"):"")+this._viewState.toState}},{key:"_updateArrowDirection",value:function(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}},{key:"_isDisabled",value:function(){return this._sort.disabled||this.disabled}},{key:"_getAriaSortAttribute",value:function(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}},{key:"_renderArrow",value:function(){return!this._isDisabled()||this._isSorted()}},{key:"_updateSortActionDescription",value:function(t){var e,i;this._sortButton&&(null===(e=this._ariaDescriber)||void 0===e||e.removeDescription(this._sortButton,this._sortActionDescription),null===(i=this._ariaDescriber)||void 0===i||i.describe(this._sortButton,t)),this._sortActionDescription=t}},{key:"_handleStateChanges",value:function(){var t=this;this._rerenderSubscription=(0,f.T)(this._sort.sortChange,this._sort._stateChanges,this._intl.changes).subscribe(function(){t._isSorted()&&(t._updateArrowDirection(),"hint"!==t._viewState.toState&&"active"!==t._viewState.toState||(t._disableViewStateAnimation=!0),t._setAnimationTransitionState({fromState:t._arrowDirection,toState:"active"}),t._showIndicatorHint=!1),!t._isSorted()&&t._viewState&&"active"===t._viewState.toState&&(t._disableViewStateAnimation=!1,t._setAnimationTransitionState({fromState:"active",toState:t._arrowDirection})),t._changeDetectorRef.markForCheck()})}}]),o}(x);return t.\u0275fac=function(e){return new(e||t)(a.Y36(C),a.Y36(a.sBO),a.Y36(y,8),a.Y36("MAT_SORT_HEADER_COLUMN_DEF",8),a.Y36(s.tE),a.Y36(a.SBq),a.Y36(s.$s,8))},t.\u0275cmp=a.Xpm({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,e){1&t&&a.NdJ("click",function(){return e._handleClick()})("keydown",function(t){return e._handleKeydown(t)})("mouseenter",function(){return e._setIndicatorHintVisible(!0)})("mouseleave",function(){return e._setIndicatorHintVisible(!1)}),2&t&&(a.uIk("aria-sort",e._getAriaSortAttribute()),a.ekj("mat-sort-header-disabled",e._isDisabled()))},inputs:{disabled:"disabled",arrowPosition:"arrowPosition",sortActionDescription:"sortActionDescription",disableClear:"disableClear",id:["mat-sort-header","id"],start:"start"},exportAs:["matSortHeader"],features:[a.qOj],attrs:m,ngContentSelectors:g,decls:4,vars:6,consts:[["role","button",1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(t,e){1&t&&(a.F$t(),a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.Hsn(2),a.qZA(),a.YNc(3,_,6,6,"div",2),a.qZA()),2&t&&(a.ekj("mat-sort-header-sorted",e._isSorted())("mat-sort-header-position-before","before"==e.arrowPosition),a.uIk("tabindex",e._isDisabled()?null:0),a.xp6(3),a.Q6J("ngIf",e._renderArrow()))},directives:[v.O5],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],encapsulation:2,data:{animation:[k.indicator,k.leftPointer,k.rightPointer,k.arrowOpacity,k.arrowPosition,k.allowChildren]},changeDetection:0}),t}(),B=function(){var t=function t(){c(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[D],imports:[[v.ez,d.BQ]]}),t}()},37112:function(t,e,i){"use strict";i.d(e,{g0:function(){return o}});var n=i(87064),r=(i(61116),i(35366));i(93169);var o=function(){var t=function t(){c(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.BQ],n.BQ]}),t}()},1325:function(t,n,o){"use strict";o.d(n,{Yh:function(){return w},Ad:function(){return b}});var s=o(35366),u=o(64762),l=o(97388),d=o(87064),h=o(13070),f=o(19861),p=o(31041);new s.OlP("ngx-mat-file-input.config");var v,m,_=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:", ";c(this,t),this._files=e,this.delimiter=i,this._fileNames=(this._files||[]).map(function(t){return t.name}).join(i)}return e(t,[{key:"files",get:function(){return this._files||[]}},{key:"fileNames",get:function(){return this._fileNames}}]),t}(),g=(0,d.FD)(function(){return function t(e,i,n,r){c(this,t),this._defaultErrorStateMatcher=e,this._parentForm=i,this._parentFormGroup=n,this.ngControl=r}}()),w=function(){var t=v=function(t){i(o,t);var n=r(o);function o(t,e,i,r,s,u,l){var d;return c(this,o),(d=n.call(this,r,u,l,s)).fm=t,d._elementRef=e,d._renderer=i,d._defaultErrorStateMatcher=r,d.ngControl=s,d._parentForm=u,d._parentFormGroup=l,d.focused=!1,d.controlType="file-input",d.autofilled=!1,d._required=!1,d.accept=null,d.id="ngx-mat-file-input-"+v.nextId++,d.describedBy="",d._onChange=function(t){},d._onTouched=function(){},null!=d.ngControl&&(d.ngControl.valueAccessor=a(d)),t.monitor(e.nativeElement,!0).subscribe(function(t){d.focused=!!t,d.stateChanges.next()}),d}return e(o,[{key:"setDescribedByIds",value:function(t){this.describedBy=t.join(" ")}},{key:"value",get:function(){return this.empty?null:new _(this._elementRef.nativeElement.value||[])},set:function(t){t&&(this.writeValue(t),this.stateChanges.next())}},{key:"placeholder",get:function(){return this._placeholder},set:function(t){this._placeholder=t,this.stateChanges.next()}},{key:"empty",get:function(){return!this._elementRef.nativeElement.value||0===this._elementRef.nativeElement.value.length}},{key:"shouldLabelFloat",get:function(){return this.focused||!this.empty||void 0!==this.valuePlaceholder}},{key:"required",get:function(){return this._required},set:function(t){this._required=(0,f.Ig)(t),this.stateChanges.next()}},{key:"isDisabled",get:function(){return this.disabled}},{key:"disabled",get:function(){return this._elementRef.nativeElement.disabled},set:function(t){this.setDisabledState((0,f.Ig)(t)),this.stateChanges.next()}},{key:"onContainerClick",value:function(t){"input"===t.target.tagName.toLowerCase()||this.disabled||(this._elementRef.nativeElement.querySelector("input").focus(),this.focused=!0,this.open())}},{key:"fileNames",get:function(){return this.value?this.value.fileNames:this.valuePlaceholder}},{key:"writeValue",value:function(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",t instanceof _?t.files:null)}},{key:"registerOnChange",value:function(t){this._onChange=t}},{key:"registerOnTouched",value:function(t){this._onTouched=t}},{key:"clear",value:function(t){t&&(t.preventDefault(),t.stopPropagation()),this.value=new _([]),this._elementRef.nativeElement.querySelector("input").value=null,this._onChange(this.value)}},{key:"change",value:function(t){var e=t.target.files,i=[];if(e)for(var n=0;n<e.length;n++)i.push(e[n]);this.value=new _(i),this._onChange(this.value)}},{key:"blur",value:function(){this.focused=!1,this._onTouched()}},{key:"setDisabledState",value:function(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}},{key:"ngOnInit",value:function(){this.multiple=(0,f.Ig)(this.multiple)}},{key:"open",value:function(){this.disabled||this._elementRef.nativeElement.querySelector("input").click()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this.fm.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState()}}]),o}(g);return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.tE),s.Y36(s.SBq),s.Y36(s.Qsj),s.Y36(d.rD),s.Y36(p.a5,10),s.Y36(p.F,8),s.Y36(p.sg,8))},t.\u0275cmp=s.Xpm({type:t,selectors:[["ngx-mat-file-input"]],hostVars:6,hostBindings:function(t,e){1&t&&s.NdJ("change",function(t){return e.change(t)})("focusout",function(){return e.blur()}),2&t&&(s.Ikx("id",e.id),s.uIk("aria-describedby",e.describedBy),s.ekj("mat-form-field-should-float",e.shouldLabelFloat)("file-input-disabled",e.isDisabled))},inputs:{autofilled:"autofilled",accept:"accept",value:"value",placeholder:"placeholder",required:"required",disabled:"disabled",multiple:"multiple",valuePlaceholder:"valuePlaceholder",errorStateMatcher:"errorStateMatcher"},features:[s._Bn([{provide:h.Eo,useExisting:v}]),s.qOj],decls:4,vars:4,consts:[["type","file"],["input",""],[1,"filename",3,"title"]],template:function(t,e){1&t&&(s._UZ(0,"input",0,1),s.TgZ(2,"span",2),s._uU(3),s.qZA()),2&t&&(s.uIk("multiple",e.multiple?"":null)("accept",e.accept),s.xp6(2),s.Q6J("title",e.fileNames),s.xp6(1),s.Oqu(e.fileNames))},styles:["[_nghost-%COMP%]{display:inline-block;width:100%}[_nghost-%COMP%]:not(.file-input-disabled){cursor:pointer}input[_ngcontent-%COMP%]{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]}),t.nextId=0,t=v=(0,u.gn)([(0,u.fM)(4,(0,s.FiY)()),(0,u.fM)(4,(0,s.PiD)()),(0,u.fM)(5,(0,s.FiY)()),(0,u.fM)(6,(0,s.FiY)())],t)}(),b=function(){var t=function t(){c(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[l.tE]}),t}();!function(t){t.maxContentSize=function(t){return function(e){var i=e&&e.value?e.value.files.map(function(t){return t.size}).reduce(function(t,e){return t+e},0):0;return t>=i?null:{maxContentSize:{actualSize:i,maxSize:t}}}}}(m||(m={}))}}])}();