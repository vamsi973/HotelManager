!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var i,o,r=[],s=!0,a=!1;try{for(n=n.call(e);!(s=(i=n.next()).done)&&(r.push(i.value),!t||r.length!==t);s=!0);}catch(u){a=!0,o=u}finally{try{s||null==n.return||n.return()}finally{if(a)throw o}}return r}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}(self.webpackChunkHotelManager=self.webpackChunkHotelManager||[]).push([[70],{97070:function(n,i,r){"use strict";r.d(i,{VK:function(){return N},KA:function(){return L},OP:function(){return q},Tx:function(){return W},p6:function(){return $}});var a=r(97388),l=r(19861),h=r(99235),f=r(35366),p=r(89666),d=r(76042),_=r(15446),v=r(32041),g=r(17911),y=r(81258),b=r(14324),k=r(69056),M=r(58868),w=r(69568),C=r(15065),x=r(99713),I=r(82151),O=r(61116),S=r(87064),R=r(95644),P=r(93169),E=r(52335),A=r(94720),D=["mat-menu-item",""];function T(e,t){1&e&&(f.O4$(),f.TgZ(0,"svg",2),f._UZ(1,"polygon",3),f.qZA())}var Y=["*"];function B(e,t){if(1&e){var n=f.EpF();f.TgZ(0,"div",0),f.NdJ("keydown",function(e){return f.CHM(n),f.oxw()._handleKeydown(e)})("click",function(){return f.CHM(n),f.oxw().closed.emit("click")})("@transformMenu.start",function(e){return f.CHM(n),f.oxw()._onAnimationStart(e)})("@transformMenu.done",function(e){return f.CHM(n),f.oxw()._onAnimationDone(e)}),f.TgZ(1,"div",1),f.Hsn(2),f.qZA(),f.qZA()}if(2&e){var i=f.oxw();f.Q6J("id",i.panelId)("ngClass",i._classList)("@transformMenu",i._panelAnimationState),f.uIk("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null)("aria-describedby",i.ariaDescribedby||null)}}var F={transformMenu:(0,x.X$)("transformMenu",[(0,x.SB)("void",(0,x.oB)({opacity:0,transform:"scale(0.8)"})),(0,x.eR)("void => enter",(0,x.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,x.oB)({opacity:1,transform:"scale(1)"}))),(0,x.eR)("* => void",(0,x.jt)("100ms 25ms linear",(0,x.oB)({opacity:0})))]),fadeInItems:(0,x.X$)("fadeInItems",[(0,x.SB)("showing",(0,x.oB)({opacity:1})),(0,x.eR)("void => *",[(0,x.oB)({opacity:0}),(0,x.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},H=new f.OlP("MatMenuContent"),j=function(){var e=function(){function e(t,n,i,o,r,s,a){c(this,e),this._template=t,this._componentFactoryResolver=n,this._appRef=i,this._injector=o,this._viewContainerRef=r,this._document=s,this._changeDetectorRef=a,this._attached=new p.x}return m(e,[{key:"attach",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._portal||(this._portal=new I.UE(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new I.u0(this._document.createElement("div"),this._componentFactoryResolver,this._appRef,this._injector));var t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef&&this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}},{key:"detach",value:function(){this._portal.isAttached&&this._portal.detach()}},{key:"ngOnDestroy",value:function(){this._outlet&&this._outlet.dispose()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(f.Y36(f.Rgc),f.Y36(f._Vd),f.Y36(f.z2F),f.Y36(f.zs3),f.Y36(f.s_b),f.Y36(O.K0),f.Y36(f.sBO))},e.\u0275dir=f.lG2({type:e}),e}(),L=function(){var e,t=function(e){o(n,e);var t=s(n);function n(){return c(this,n),t.apply(this,arguments)}return n}(j);return t.\u0275fac=function(n){return(e||(e=f.n5z(t)))(n||t)},t.\u0275dir=f.lG2({type:t,selectors:[["ng-template","matMenuContent",""]],features:[f._Bn([{provide:H,useExisting:t}]),f.qOj]}),t}(),z=new f.OlP("MAT_MENU_PANEL"),X=(0,S.Kr)((0,S.Id)(function(){return function e(){c(this,e)}}())),q=function(){var e=function(e){o(n,e);var t=s(n);function n(e,i,o,r,s){var a;return c(this,n),(a=t.call(this))._elementRef=e,a._focusMonitor=o,a._parentMenu=r,a._changeDetectorRef=s,a.role="menuitem",a._hovered=new p.x,a._focused=new p.x,a._highlighted=!1,a._triggersSubmenu=!1,r&&r.addItem&&r.addItem(u(a)),a}return m(n,[{key:"focus",value:function(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}},{key:"ngAfterViewInit",value:function(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}},{key:"ngOnDestroy",value:function(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}},{key:"_getTabIndex",value:function(){return this.disabled?"-1":"0"}},{key:"_getHostElement",value:function(){return this._elementRef.nativeElement}},{key:"_checkDisabled",value:function(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}},{key:"_handleMouseEnter",value:function(){this._hovered.next(this)}},{key:"getLabel",value:function(){for(var e,t,n=this._elementRef.nativeElement.cloneNode(!0),i=n.querySelectorAll("mat-icon, .material-icons"),o=0;o<i.length;o++){var r=i[o];null===(e=r.parentNode)||void 0===e||e.removeChild(r)}return(null===(t=n.textContent)||void 0===t?void 0:t.trim())||""}},{key:"_setHighlighted",value:function(e){var t;this._highlighted=e,null===(t=this._changeDetectorRef)||void 0===t||t.markForCheck()}}]),n}(X);return e.\u0275fac=function(t){return new(t||e)(f.Y36(f.SBq),f.Y36(O.K0),f.Y36(a.tE),f.Y36(z,8),f.Y36(f.sBO))},e.\u0275cmp=f.Xpm({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(e,t){1&e&&f.NdJ("click",function(e){return t._checkDisabled(e)})("mouseenter",function(){return t._handleMouseEnter()}),2&e&&(f.uIk("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled.toString())("disabled",t.disabled||null),f.ekj("mat-menu-item",!0)("mat-menu-item-highlighted",t._highlighted)("mat-menu-item-submenu-trigger",t._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[f.qOj],attrs:D,ngContentSelectors:Y,decls:3,vars:3,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["class","mat-menu-submenu-icon","viewBox","0 0 5 10","focusable","false",4,"ngIf"],["viewBox","0 0 5 10","focusable","false",1,"mat-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,t){1&e&&(f.F$t(),f.Hsn(0),f._UZ(1,"div",0),f.YNc(2,T,2,0,"svg",1)),2&e&&(f.xp6(1),f.Q6J("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()),f.xp6(1),f.Q6J("ngIf",t._triggersSubmenu))},directives:[S.wG,O.O5],encapsulation:2,changeDetection:0}),e}(),G=new f.OlP("mat-menu-default-options",{providedIn:"root",factory:function(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}}),V=0,K=function(){var e=function(){function e(t,n,i){c(this,e),this._elementRef=t,this._ngZone=n,this._defaultOptions=i,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new f.n_E,this._tabSubscription=d.w0.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new p.x,this.overlayPanelClass=this._defaultOptions.overlayPanelClass||"",this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new f.vpe,this.close=this.closed,this.panelId="mat-menu-panel-"+V++}return m(e,[{key:"xPosition",get:function(){return this._xPosition},set:function(e){this._xPosition=e,this.setPositionClasses()}},{key:"yPosition",get:function(){return this._yPosition},set:function(e){this._yPosition=e,this.setPositionClasses()}},{key:"overlapTrigger",get:function(){return this._overlapTrigger},set:function(e){this._overlapTrigger=(0,l.Ig)(e)}},{key:"hasBackdrop",get:function(){return this._hasBackdrop},set:function(e){this._hasBackdrop=(0,l.Ig)(e)}},{key:"panelClass",set:function(e){var t=this,n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach(function(e){t._classList[e]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(function(e){t._classList[e]=!0}),this._elementRef.nativeElement.className="")}},{key:"classList",get:function(){return this.panelClass},set:function(e){this.panelClass=e}},{key:"ngOnInit",value:function(){this.setPositionClasses()}},{key:"ngAfterContentInit",value:function(){var e=this;this._updateDirectDescendants(),this._keyManager=new a.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._tabSubscription=this._keyManager.tabOut.subscribe(function(){return e.closed.emit("tab")}),this._directDescendantItems.changes.pipe((0,y.O)(this._directDescendantItems),(0,b.w)(function(e){return _.T.apply(void 0,t(e.map(function(e){return e._focused})))})).subscribe(function(t){return e._keyManager.updateActiveItem(t)})}},{key:"ngOnDestroy",value:function(){this._directDescendantItems.destroy(),this._tabSubscription.unsubscribe(),this.closed.complete()}},{key:"_hovered",value:function(){return this._directDescendantItems.changes.pipe((0,y.O)(this._directDescendantItems),(0,b.w)(function(e){return _.T.apply(void 0,t(e.map(function(e){return e._hovered})))}))}},{key:"addItem",value:function(e){}},{key:"removeItem",value:function(e){}},{key:"_handleKeydown",value:function(e){var t=e.keyCode,n=this._keyManager;switch(t){case h.hY:(0,h.Vb)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case h.oh:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case h.SV:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:t!==h.LH&&t!==h.JH||n.setFocusOrigin("keyboard"),n.onKeydown(e)}}},{key:"focusFirstItem",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program";this.lazyContent?this._ngZone.onStable.pipe((0,k.q)(1)).subscribe(function(){return e._focusFirstItem(t)}):this._focusFirstItem(t)}},{key:"_focusFirstItem",value:function(e){var t=this._keyManager;if(t.setFocusOrigin(e).setFirstItemActive(),!t.activeItem&&this._directDescendantItems.length)for(var n=this._directDescendantItems.first._getHostElement().parentElement;n;){if("menu"===n.getAttribute("role")){n.focus();break}n=n.parentElement}}},{key:"resetActiveItem",value:function(){this._keyManager.setActiveItem(-1)}},{key:"setElevation",value:function(e){var t=this,n=Math.min(this._baseElevation+e,24),i="".concat(this._elevationPrefix).concat(n),o=Object.keys(this._classList).find(function(e){return e.startsWith(t._elevationPrefix)});o&&o!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[i]=!0,this._previousElevation=i)}},{key:"setPositionClasses",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.xPosition,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.yPosition,n=this._classList;n["mat-menu-before"]="before"===e,n["mat-menu-after"]="after"===e,n["mat-menu-above"]="above"===t,n["mat-menu-below"]="below"===t}},{key:"_startAnimation",value:function(){this._panelAnimationState="enter"}},{key:"_resetAnimation",value:function(){this._panelAnimationState="void"}},{key:"_onAnimationDone",value:function(e){this._animationDone.next(e),this._isAnimating=!1}},{key:"_onAnimationStart",value:function(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}},{key:"_updateDirectDescendants",value:function(){var e=this;this._allItems.changes.pipe((0,y.O)(this._allItems)).subscribe(function(t){e._directDescendantItems.reset(t.filter(function(t){return t._parentMenu===e})),e._directDescendantItems.notifyOnChanges()})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(f.Y36(f.SBq),f.Y36(f.R0b),f.Y36(G))},e.\u0275dir=f.lG2({type:e,contentQueries:function(e,t,n){var i;(1&e&&(f.Suo(n,H,5),f.Suo(n,q,5),f.Suo(n,q,4)),2&e)&&(f.iGM(i=f.CRH())&&(t.lazyContent=i.first),f.iGM(i=f.CRH())&&(t._allItems=i),f.iGM(i=f.CRH())&&(t.items=i))},viewQuery:function(e,t){var n;(1&e&&f.Gf(f.Rgc,5),2&e)&&(f.iGM(n=f.CRH())&&(t.templateRef=n.first))},inputs:{backdropClass:"backdropClass",xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{closed:"closed",close:"close"}}),e}(),N=function(){var e=function(e){o(n,e);var t=s(n);function n(e,i,o){var r;return c(this,n),(r=t.call(this,e,i,o))._elevationPrefix="mat-elevation-z",r._baseElevation=4,r}return n}(K);return e.\u0275fac=function(t){return new(t||e)(f.Y36(f.SBq),f.Y36(f.R0b),f.Y36(G))},e.\u0275cmp=f.Xpm({type:e,selectors:[["mat-menu"]],hostVars:3,hostBindings:function(e,t){2&e&&f.uIk("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},exportAs:["matMenu"],features:[f._Bn([{provide:z,useExisting:e}]),f.qOj],ngContentSelectors:Y,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function(e,t){1&e&&(f.F$t(),f.YNc(0,B,3,6,"ng-template"))},directives:[O.mk],styles:["mat-menu{display:none}.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item{margin-top:1px}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-menu-submenu-icon{fill:CanvasText}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n"],encapsulation:2,data:{animation:[F.transformMenu,F.fadeInItems]},changeDetection:0}),e}(),Z=new f.OlP("mat-menu-scroll-strategy"),J={provide:Z,deps:[R.aV],useFactory:function(e){return function(){return e.scrollStrategies.reposition()}}},Q=(0,P.i$)({passive:!0}),U=function(){var t=function(){function t(e,n,i,o,r,s,u,l){var h=this;c(this,t),this._overlay=e,this._element=n,this._viewContainerRef=i,this._menuItemInstance=s,this._dir=u,this._focusMonitor=l,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=d.w0.EMPTY,this._hoverSubscription=d.w0.EMPTY,this._menuCloseSubscription=d.w0.EMPTY,this._handleTouchStart=function(e){(0,a.yG)(e)||(h._openedBy="touch")},this._openedBy=void 0,this._ariaHaspopup=!0,this.restoreFocus=!0,this.menuOpened=new f.vpe,this.onMenuOpen=this.menuOpened,this.menuClosed=new f.vpe,this.onMenuClose=this.menuClosed,this._scrollStrategy=o,this._parentMaterialMenu=r instanceof K?r:void 0,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,Q),s&&(s._triggersSubmenu=this.triggersSubmenu())}return m(t,[{key:"_ariaExpanded",get:function(){return this.menuOpen||null}},{key:"_ariaControl",get:function(){return this.menuOpen?this.menu.panelId:null}},{key:"_deprecatedMatMenuTriggerFor",get:function(){return this.menu},set:function(e){this.menu=e}},{key:"menu",get:function(){return this._menu},set:function(e){var t=this;e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe(function(e){t._destroyMenu(e),"click"!==e&&"tab"!==e||!t._parentMaterialMenu||t._parentMaterialMenu.closed.emit(e)})))}},{key:"ngAfterContentInit",value:function(){this._checkMenu(),this._handleHover()}},{key:"ngOnDestroy",value:function(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Q),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}},{key:"menuOpen",get:function(){return this._menuOpen}},{key:"dir",get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}},{key:"triggersSubmenu",value:function(){return!(!this._menuItemInstance||!this._parentMaterialMenu)}},{key:"toggleMenu",value:function(){return this._menuOpen?this.closeMenu():this.openMenu()}},{key:"openMenu",value:function(){var e=this;if(!this._menuOpen){this._checkMenu();var t=this._createOverlay(),n=t.getConfig();this._setPosition(n.positionStrategy),n.hasBackdrop=null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,t.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe(function(){return e.closeMenu()}),this._initMenu(),this.menu instanceof K&&this.menu._startAnimation()}}},{key:"closeMenu",value:function(){this.menu.close.emit()}},{key:"focus",value:function(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}},{key:"updatePosition",value:function(){var e;null===(e=this._overlayRef)||void 0===e||e.updatePosition()}},{key:"_destroyMenu",value:function(e){var t=this;if(this._overlayRef&&this.menuOpen){var n=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),!this.restoreFocus||"keydown"!==e&&this._openedBy&&this.triggersSubmenu()||this.focus(this._openedBy),this._openedBy=void 0,n instanceof K?(n._resetAnimation(),n.lazyContent?n._animationDone.pipe((0,M.h)(function(e){return"void"===e.toState}),(0,k.q)(1),(0,w.R)(n.lazyContent._attached)).subscribe({next:function(){return n.lazyContent.detach()},complete:function(){return t._setIsMenuOpen(!1)}}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),n.lazyContent&&n.lazyContent.detach())}}},{key:"_initMenu",value:function(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMaterialMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this.menu.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0)}},{key:"_setMenuElevation",value:function(){if(this.menu.setElevation){for(var e=0,t=this.menu.parentMenu;t;)e++,t=t.parentMenu;this.menu.setElevation(e)}}},{key:"_setIsMenuOpen",value:function(e){this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&this._menuItemInstance._setHighlighted(e)}},{key:"_checkMenu",value:function(){}},{key:"_createOverlay",value:function(){if(!this._overlayRef){var e=this._getOverlayConfig();this._subscribeToPositions(e.positionStrategy),this._overlayRef=this._overlay.create(e),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}},{key:"_getOverlayConfig",value:function(){return new R.X_({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this.menu.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}},{key:"_subscribeToPositions",value:function(e){var t=this;this.menu.setPositionClasses&&e.positionChanges.subscribe(function(e){t.menu.setPositionClasses("start"===e.connectionPair.overlayX?"after":"before","top"===e.connectionPair.overlayY?"below":"above")})}},{key:"_setPosition",value:function(t){var n=e("before"===this.menu.xPosition?["end","start"]:["start","end"],2),i=n[0],o=n[1],r=e("above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],2),s=r[0],a=r[1],u=s,l=a,c=i,h=o,m=0;this.triggersSubmenu()?(h=i="before"===this.menu.xPosition?"start":"end",o=c="end"===i?"start":"end",m="bottom"===s?8:-8):this.menu.overlapTrigger||(u="top"===s?"bottom":"top",l="top"===a?"bottom":"top"),t.withPositions([{originX:i,originY:u,overlayX:c,overlayY:s,offsetY:m},{originX:o,originY:u,overlayX:h,overlayY:s,offsetY:m},{originX:i,originY:l,overlayX:c,overlayY:a,offsetY:-m},{originX:o,originY:l,overlayX:h,overlayY:a,offsetY:-m}])}},{key:"_menuClosingActions",value:function(){var e=this,t=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:(0,v.of)(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe((0,M.h)(function(t){return t!==e._menuItemInstance}),(0,M.h)(function(){return e._menuOpen})):(0,v.of)();return(0,_.T)(t,i,o,n)}},{key:"_handleMousedown",value:function(e){(0,a.X6)(e)||(this._openedBy=0===e.button?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault())}},{key:"_handleKeydown",value:function(e){var t=e.keyCode;t!==h.K5&&t!==h.L_||(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===h.SV&&"ltr"===this.dir||t===h.oh&&"rtl"===this.dir)&&(this._openedBy="keyboard",this.openMenu())}},{key:"_handleClick",value:function(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}},{key:"_handleHover",value:function(){var e=this;this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().pipe((0,M.h)(function(t){return t===e._menuItemInstance&&!t.disabled}),(0,C.g)(0,g.E)).subscribe(function(){e._openedBy="mouse",e.menu instanceof K&&e.menu._isAnimating?e.menu._animationDone.pipe((0,k.q)(1),(0,C.g)(0,g.E),(0,w.R)(e._parentMaterialMenu._hovered())).subscribe(function(){return e.openMenu()}):e.openMenu()}))}},{key:"_getPortal",value:function(){return this._portal&&this._portal.templateRef===this.menu.templateRef||(this._portal=new I.UE(this.menu.templateRef,this._viewContainerRef)),this._portal}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Y36(R.aV),f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(Z),f.Y36(z,8),f.Y36(q,10),f.Y36(A.Is,8),f.Y36(a.tE))},t.\u0275dir=f.lG2({type:t,hostVars:3,hostBindings:function(e,t){1&e&&f.NdJ("mousedown",function(e){return t._handleMousedown(e)})("keydown",function(e){return t._handleKeydown(e)})("click",function(e){return t._handleClick(e)}),2&e&&f.uIk("aria-haspopup",t._ariaHaspopup)("aria-expanded",t._ariaExpanded)("aria-controls",t._ariaControl)},inputs:{restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"],_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"}}),t}(),$=function(){var e,t=function(e){o(n,e);var t=s(n);function n(){return c(this,n),t.apply(this,arguments)}return n}(U);return t.\u0275fac=function(n){return(e||(e=f.n5z(t)))(n||t)},t.\u0275dir=f.lG2({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-menu-trigger"],exportAs:["matMenuTrigger"],features:[f.qOj]}),t}(),W=function(){var e=function e(){c(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.oAB({type:e}),e.\u0275inj=f.cJS({providers:[J],imports:[[O.ez,S.BQ,S.si,R.U8],E.ZD,S.BQ]}),e}()}}])}();