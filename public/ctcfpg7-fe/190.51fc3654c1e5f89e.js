"use strict";(self.webpackChunkCTCFPG7_FE=self.webpackChunkCTCFPG7_FE||[]).push([[190],{6190:(Fe,A,s)=>{s.r(A),s.d(A,{AdminPortalModule:()=>Oe});var C=s(6895),_=s(9292),S=s(9643),Q=s(4080),e=s(4650),u=s(3238),B=s(5698),f=s(2722),D=s(8675),L=s(3900),U=s(5684),M=s(7579),I=s(4968),E=s(9646),O=s(6451),W=s(515),z=s(9751),q=s(5963),w=s(445),v=(s(7340),s(1281)),P=s(8605),g=s(3353),y=s(9521);const $=["*"],V=["tabListContainer"],J=["tabList"],X=["tabListInner"],K=["nextPaginator"],ee=["previousPaginator"],ae=["mat-tab-nav-bar",""],oe=new e.OlP("MatInkBarPositioner",{providedIn:"root",factory:function re(){return o=>({left:o?(o.offsetLeft||0)+"px":"0",width:o?(o.offsetWidth||0)+"px":"0"})}});let F=(()=>{class i{constructor(t,n,a,r){this._elementRef=t,this._ngZone=n,this._inkBarPositioner=a,this._animationMode=r}alignToElement(t){this.show(),this._ngZone.run(()=>{this._ngZone.onStable.pipe((0,B.q)(1)).subscribe(()=>{const n=this._inkBarPositioner(t),a=this._elementRef.nativeElement;a.style.left=n.left,a.style.width=n.width})})}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(oe),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,n){2&t&&e.ekj("_mat-animation-noopable","NoopAnimations"===n._animationMode)}}),i})();const N=(0,g.i$)({passive:!0});let de=(()=>{class i{constructor(t,n,a,r,d,c,p){this._elementRef=t,this._changeDetectorRef=n,this._viewportRuler=a,this._dir=r,this._ngZone=d,this._platform=c,this._animationMode=p,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new M.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new M.x,this._disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new e.vpe,this.indexFocused=new e.vpe,d.runOutsideAngular(()=>{(0,I.R)(t.nativeElement,"mouseleave").pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get disablePagination(){return this._disablePagination}set disablePagination(t){this._disablePagination=(0,v.Ig)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=(0,v.su)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){(0,I.R)(this._previousPaginator.nativeElement,"touchstart",N).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,I.R)(this._nextPaginator.nativeElement,"touchstart",N).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:(0,E.of)("ltr"),n=this._viewportRuler.change(150),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new _.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),this._ngZone.onStable.pipe((0,B.q)(1)).subscribe(a),(0,O.T)(t,n,this._items.changes,this._itemsResized()).pipe((0,f.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,f.R)(this._destroyed)).subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return"function"!=typeof ResizeObserver?W.E:this._items.changes.pipe((0,D.O)(this._items),(0,L.w)(t=>new z.y(n=>this._ngZone.runOutsideAngular(()=>{const a=new ResizeObserver(()=>{n.next()});return t.forEach(r=>{a.observe(r.elementRef.nativeElement)}),()=>{a.disconnect()}}))),(0,U.T)(1))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!(0,y.Vb)(t))switch(t.keyCode){case y.K5:case y.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const n=this._items?this._items.toArray()[t]:null;return!!n&&!n.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const n=this._tabListContainer.nativeElement;n.scrollLeft="ltr"==this._getLayoutDirection()?0:n.scrollWidth-n.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,n="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(n)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const n=this._items?this._items.toArray()[t]:null;if(!n)return;const a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:d}=n.elementRef.nativeElement;let c,p;"ltr"==this._getLayoutDirection()?(c=r,p=c+d):(p=this._tabListInner.nativeElement.offsetWidth-r,c=p-d);const T=this.scrollDistance,Y=this.scrollDistance+a;c<T?this.scrollDistance-=T-c+60:p>Y&&(this.scrollDistance+=p-Y+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabListInner.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,n=t?t.elementRef.nativeElement:null;n?this._inkBar.alignToElement(n):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,n){n&&null!=n.button&&0!==n.button||(this._stopInterval(),(0,q.H)(650,100).pipe((0,f.R)((0,O.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:a,distance:r}=this._scrollHeader(t);(0===r||r>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const n=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(n,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:n,distance:this._scrollDistance}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(P.rL),e.Y36(w.Is,8),e.Y36(e.R0b),e.Y36(g.t4),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,inputs:{disablePagination:"disablePagination"}}),i})(),ce=0,H=(()=>{class i extends de{constructor(t,n,a,r,d,c,p){super(t,r,d,n,a,c,p),this._disableRipple=!1,this.color="primary"}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const n=this._elementRef.nativeElement.classList;n.remove(`mat-background-${this.backgroundColor}`),t&&n.add(`mat-background-${t}`),this._backgroundColor=t}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,v.Ig)(t)}_itemSelected(){}ngAfterContentInit(){this._items.changes.pipe((0,D.O)(null),(0,f.R)(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}updateActiveLink(){if(!this._items)return;const t=this._items.toArray();for(let n=0;n<t.length;n++)if(t[n].active)return this.selectedIndex=n,this._changeDetectorRef.markForCheck(),void(this.tabPanel&&(this.tabPanel._activeTabId=t[n].id));this.selectedIndex=-1,this._inkBar.hide()}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(w.Is,8),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(P.rL),e.Y36(g.t4),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,inputs:{backgroundColor:"backgroundColor",disableRipple:"disableRipple",color:"color",tabPanel:"tabPanel"},features:[e.qOj]}),i})(),G=(()=>{class i extends H{constructor(t,n,a,r,d,c,p){super(t,n,a,r,d,c,p)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(w.Is,8),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(P.rL),e.Y36(g.t4),e.Y36(e.QbO,8))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,n,a){if(1&t&&e.Suo(a,j,5),2&t){let r;e.iGM(r=e.CRH())&&(n._items=r)}},viewQuery:function(t,n){if(1&t&&(e.Gf(F,7),e.Gf(V,7),e.Gf(J,7),e.Gf(X,7),e.Gf(K,5),e.Gf(ee,5)),2&t){let a;e.iGM(a=e.CRH())&&(n._inkBar=a.first),e.iGM(a=e.CRH())&&(n._tabListContainer=a.first),e.iGM(a=e.CRH())&&(n._tabList=a.first),e.iGM(a=e.CRH())&&(n._tabListInner=a.first),e.iGM(a=e.CRH())&&(n._nextPaginator=a.first),e.iGM(a=e.CRH())&&(n._previousPaginator=a.first)}},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:11,hostBindings:function(t,n){2&t&&(e.uIk("role",n._getRole()),e.ekj("mat-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-tab-header-rtl","rtl"==n._getLayoutDirection())("mat-primary","warn"!==n.color&&"accent"!==n.color)("mat-accent","accent"===n.color)("mat-warn","warn"===n.color))},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[e.qOj],attrs:ae,ngContentSelectors:$,decls:14,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"button",0,1),e.NdJ("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(r){return n._handlePaginatorPress("before",r)})("touchend",function(){return n._stopInterval()}),e._UZ(2,"div",2),e.qZA(),e.TgZ(3,"div",3,4),e.NdJ("keydown",function(r){return n._handleKeydown(r)}),e.TgZ(5,"div",5,6),e.NdJ("cdkObserveContent",function(){return n._onContentChanges()}),e.TgZ(7,"div",7,8),e.Hsn(9),e.qZA(),e._UZ(10,"mat-ink-bar"),e.qZA()(),e.TgZ(11,"button",9,10),e.NdJ("mousedown",function(r){return n._handlePaginatorPress("after",r)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),e._UZ(13,"div",2),e.qZA()),2&t&&(e.ekj("mat-tab-header-pagination-disabled",n._disableScrollBefore),e.Q6J("matRippleDisabled",n._disableScrollBefore||n.disableRipple)("disabled",n._disableScrollBefore||null),e.xp6(5),e.ekj("_mat-animation-noopable","NoopAnimations"===n._animationMode),e.xp6(6),e.ekj("mat-tab-header-pagination-disabled",n._disableScrollAfter),e.Q6J("matRippleDisabled",n._disableScrollAfter||n.disableRipple)("disabled",n._disableScrollAfter||null))},dependencies:[u.wG,S.wD,F],styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}.mat-tab-link::before{margin:5px}@media(max-width: 599px){.mat-tab-link{min-width:72px}}"],encapsulation:2}),i})();const pe=(0,u.sb)((0,u.Kr)((0,u.Id)(class{})));let be=(()=>{class i extends pe{constructor(t,n,a,r,d,c){super(),this._tabNavBar=t,this.elementRef=n,this._focusMonitor=d,this._isActive=!1,this.id="mat-tab-link-"+ce++,this.rippleConfig=a||{},this.tabIndex=parseInt(r)||0,"NoopAnimations"===c&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0})}get active(){return this._isActive}set active(t){const n=(0,v.Ig)(t);n!==this._isActive&&(this._isActive=n,this._tabNavBar.updateActiveLink())}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){this._tabNavBar.tabPanel&&t.keyCode===y.L_&&this.elementRef.nativeElement.click()}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}_getTabIndex(){return this._tabNavBar.tabPanel?this._isActive&&!this.disabled?0:-1:this.tabIndex}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(H),e.Y36(e.SBq),e.Y36(u.Y2,8),e.$8M("tabindex"),e.Y36(_.tE),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,inputs:{active:"active",id:"id"},features:[e.qOj]}),i})(),j=(()=>{class i extends be{constructor(t,n,a,r,d,c,p,T){super(t,n,d,c,p,T),this._tabLinkRipple=new u.IR(this,a,n,r),this._tabLinkRipple.setupTriggerEvents(n.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(G),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(g.t4),e.Y36(u.Y2,8),e.$8M("tabindex"),e.Y36(_.tE),e.Y36(e.QbO,8))},i.\u0275dir=e.lG2({type:i,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(t,n){1&t&&e.NdJ("focus",function(){return n._handleFocus()})("keydown",function(r){return n._handleKeydown(r)}),2&t&&(e.uIk("aria-controls",n._getAriaControls())("aria-current",n._getAriaCurrent())("aria-disabled",n.disabled)("aria-selected",n._getAriaSelected())("id",n.id)("tabIndex",n._getTabIndex())("role",n._getRole()),e.ekj("mat-tab-disabled",n.disabled)("mat-tab-label-active",n.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[e.qOj]}),i})(),he=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[C.ez,u.BQ,Q.eL,u.si,S.Q8,_.rt,u.BQ]}),i})();var ue=s(7392),me=s(4859),l=s(4006),m=s(9549),h=s(3060),k=s(3416);let fe=(()=>{class i{constructor(t){this.router=t,this.image="../../../../../assets/images/home-page-image.png"}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-home-admin-shell"]],decls:19,vars:14,consts:[[1,"admin-portal"],[1,"portal-title"],[1,"title-description"],[1,"title-description-main"],["width","283px",3,"src"],["mat-tab-nav-bar","",3,"disableRipple"],["mat-tab-link","","routerLink","employers/search-employers"],["mat-tab-link","","routerLink","claims"],[1,"container-main"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e._UZ(9,"img",4),e.qZA(),e.TgZ(10,"nav",5)(11,"a",6),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"a",7),e._uU(15),e.ALo(16,"translate"),e.qZA()(),e.TgZ(17,"div",8),e._UZ(18,"router-outlet"),e.qZA()()),2&t&&(e.xp6(4),e.Oqu(e.lcZ(5,6,"home")),e.xp6(3),e.hij(" ",e.lcZ(8,8,"text-home-page")," "),e.xp6(2),e.s9C("src",n.image,e.LSH),e.xp6(1),e.Q6J("disableRipple",!0),e.xp6(2),e.hij(" ",e.lcZ(13,10,"Employer")," "),e.xp6(3),e.Oqu(e.lcZ(16,12,"Claims")))},dependencies:[G,j,h.lC,h.yS,k.X$],styles:[".admin-portal[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column}.portal-title[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;color:#fff;width:80%}.title-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:justify}.title-description-main[_ngcontent-%COMP%]{font-size:2.5em}nav[_ngcontent-%COMP%]{margin-top:20px;width:80%}.mat-tab-link[_ngcontent-%COMP%]{width:25%;border:3px solid #ffffff;border-bottom:none;border-radius:15px 15px 0 0;color:#fff;opacity:1!important}.container-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:85%;border:3px solid #ffffff;border-radius:15px;opacity:1!important;align-items:center}  app-employer{display:flex;justify-content:center;width:85%}  app-claims{display:flex;justify-content:center;width:85%}@media all and (max-width: 770px){img[_ngcontent-%COMP%]{display:none;transition:.5s}}"]}),i})();var ge=s(1135);let x=(()=>{class i{constructor(){this.data=new ge.X({page:"add-new-employer",btnText:"Choose a different employer"}),this.cast=this.data.asObservable()}dataChange(t){this.data.next(t)}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const _e=["button"];let ve=(()=>{class i{constructor(t,n,a,r){this.router=t,this.route=n,this.dataService=a,this.cdRef=r}ngOnInit(){this.dataService.cast.subscribe(t=>{this.data=t})}ngAfterContentChecked(){this.cdRef.detectChanges()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(h.F0),e.Y36(h.gz),e.Y36(x),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-employer"]],viewQuery:function(t,n){if(1&t&&e.Gf(_e,5),2&t){let a;e.iGM(a=e.CRH())&&(n.button=a.first)}},inputs:{routerLink:"routerLink"},decls:5,vars:2,consts:[[1,"content"],[1,"add-employer-btn",3,"routerLink"],["button",""]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"button",1,2),e._uU(3),e.qZA(),e._UZ(4,"router-outlet"),e.qZA()),2&t&&(e.xp6(1),e.s9C("routerLink",n.data.link),e.xp6(2),e.Oqu(n.data.btnText))},dependencies:[h.lC,h.rH],styles:[".content[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:15px;margin-bottom:15px;width:100%}.add-employer-btn[_ngcontent-%COMP%]{cursor:pointer;background-color:#008db9;color:#fff;border-radius:13px;border:none;width:200px;height:35px;align-self:flex-end}"]}),i})();var R=s(4144);function ye(i,o){if(1&i&&(e.TgZ(0,"option",12),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Oqu(t)}}let xe=(()=>{class i{constructor(){this.employers=["isSoft","CokaCola","IBM"]}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-claims"]],decls:17,vars:1,consts:[[1,"search-criteria-container"],[1,"search-criteria-h3"],[1,"container-form"],[1,"form-search"],["appearance","legacy"],["matInput","","placeholder","Placeholder"],[1,"dropdown-container"],[1,"employer-label"],[1,"dropdown"],["name","employers",1,"selectBox"],["class","option",4,"ngFor","ngForOf"],[1,"search-btn"],[1,"option"]],template:function(t,n){1&t&&(e.TgZ(0,"fieldset",0)(1,"legend",1),e._uU(2,"Search Criteria"),e.qZA(),e.TgZ(3,"div",2)(4,"form",3)(5,"mat-form-field",4)(6,"mat-label"),e._uU(7,"Claim Number"),e.qZA(),e._UZ(8,"input",5),e.qZA(),e.TgZ(9,"div",6)(10,"label",7),e._uU(11,"Employer"),e.qZA(),e.TgZ(12,"div",8)(13,"select",9),e.YNc(14,ye,2,1,"option",10),e.qZA()()()(),e.TgZ(15,"button",11),e._uU(16,"Search"),e.qZA()()()),2&t&&(e.xp6(14),e.Q6J("ngForOf",n.employers))},dependencies:[C.sg,l._Y,l.YN,l.Kr,l.JL,m.KE,m.hX,R.Nt],styles:[".search-criteria-container[_ngcontent-%COMP%]{display:flex;align-self:center;flex-direction:column;margin-top:7%;margin-bottom:7%;width:93%;border:3px solid #ffffff;border-radius:14px;opacity:1!important}.search-criteria-h3[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:500;padding-left:5px;padding-right:27px;position:relative;left:10px}.form-search[_ngcontent-%COMP%]{display:flex;flex-direction:row;place-content:space-between;width:100%;align-self:center;margin-bottom:4%}.container-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:90%;align-self:center;margin-bottom:4%;margin-top:7%}.dropdown-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:40%;margin-top:-3%}.employer-label[_ngcontent-%COMP%]{color:#fff;margin-bottom:6%}.dropdown[_ngcontent-%COMP%]{border-radius:5px;overflow:hidden;border:2px solid #ffffff}.selectBox[_ngcontent-%COMP%]{width:96%;height:30px;border:0px;outline:none;background:none;color:#fff;padding-left:3%}.option[_ngcontent-%COMP%]{color:#00546f}.search-btn[_ngcontent-%COMP%]{cursor:pointer;background-color:#fff;color:#00546f;border-radius:6px;border:none;width:30%;height:33px}mat-form-field[_ngcontent-%COMP%]{width:44%}mat-label[_ngcontent-%COMP%]{color:#fff}  .mat-form-field-underline{background-color:#fff!important}"]}),i})();var Te=s(529);let Ce=(()=>{class i{constructor(t){this.http=t,this.users=[{login:"admin",password:"admin",role:"admin"},{login:"employer",password:"employer",role:"employer"},{login:"consumer",password:"consumer",role:"consumer"}]}getUser(){return(0,E.of)(this.users)}postUser(t){this.http.post("http://127.0.0.1:3000/api/users/register",t).subscribe(n=>{console.log(n)})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Te.eN))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),Me=(()=>{class i{constructor(t,n,a,r,d){this.fb=t,this.route=n,this.usersService=a,this.dataService=r,this.cdRef=d,this.data=new e.vpe,this.addEmployerFormGroup=this.fb.group({username:["",l.kI.required],password:["",[l.kI.maxLength(3),l.kI.required]],role:["",l.kI.required],city:["",l.kI.required],state:["",l.kI.required],zipCode:["",[l.kI.maxLength(6),l.kI.required]],phoneNumber:["",[l.kI.maxLength(10),l.kI.required]],logo:["",l.kI.required]})}ngOnInit(){this.route.data.subscribe(t=>{this.dataService.dataChange(t),console.log(t)}),this.addEmployerFormGroup.controls.logo.valueChanges.subscribe(t=>{this.fileName=t})}ngAfterContentChecked(){this.cdRef.detectChanges()}getRouteData(t){this.data.emit(t)}onSubmit(){this.usersService.postUser(this.addEmployerFormGroup.value)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.qu),e.Y36(h.gz),e.Y36(Ce),e.Y36(x),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-add-new-employer"]],outputs:{data:"data"},decls:47,vars:2,consts:[[1,"search-criteria-container"],[1,"search-criteria-h3"],[1,"form-search",3,"formGroup"],[1,"input-fields-container"],["appearance","legacy",1,"input","employer-name-input"],["matInput","","placeholder","Placeholder","type","text","formControlName","username"],["appearance","legacy",1,"input","employer-code-input"],["matInput","","placeholder","Placeholder","type","text","formControlName","password"],["appearance","legacy",1,"input","employer-street-input"],["matInput","","placeholder","Placeholder","type","text","formControlName","role"],["appearance","legacy",1,"input","employer-city-input"],["matInput","","placeholder","Placeholder","type","text","formControlName","city"],["appearance","legacy",1,"input","employer-state-input"],["matInput","","placeholder","Placeholder","type","text","formControlName","state"],["appearance","legacy",1,"input","employer-zip-input"],["matInput","","placeholder","Placeholder","type","number","formControlName","zipCode"],["appearance","legacy",1,"input","employer-phone-input"],["matInput","","placeholder","Placeholder","type","number","formControlName","phoneNumber"],[1,"upload-logo-container"],[1,"logo-text"],[1,"file-input"],["type","text","disabled","",1,"display-file-input",3,"value"],["type","file","id","file","formControlName","logo",1,"upload-logo-input",2,"display","none"],["fileInput",""],[3,"click"],[1,"buttons"],["routerLink","..",1,"cancel-btn"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"fieldset",0)(1,"legend",1),e._uU(2,"Profile"),e.qZA(),e.TgZ(3,"form",2)(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),e._uU(7,"Name"),e.qZA(),e._UZ(8,"input",5),e.qZA(),e.TgZ(9,"mat-form-field",6)(10,"mat-label"),e._uU(11,"Code"),e.qZA(),e._UZ(12,"input",7),e.qZA(),e.TgZ(13,"mat-form-field",8)(14,"mat-label"),e._uU(15,"Street"),e.qZA(),e._UZ(16,"input",9),e.qZA(),e.TgZ(17,"mat-form-field",10)(18,"mat-label"),e._uU(19,"City"),e.qZA(),e._UZ(20,"input",11),e.qZA(),e.TgZ(21,"mat-form-field",12)(22,"mat-label"),e._uU(23,"State"),e.qZA(),e._UZ(24,"input",13),e.qZA(),e.TgZ(25,"mat-form-field",14)(26,"mat-label"),e._uU(27,"Zip Code"),e.qZA(),e._UZ(28,"input",15),e.qZA(),e.TgZ(29,"mat-form-field",16)(30,"mat-label"),e._uU(31,"Phone number"),e.qZA(),e._UZ(32,"input",17),e.qZA()(),e.TgZ(33,"div",18)(34,"label",19),e._uU(35,"Logo"),e.qZA(),e.TgZ(36,"div",20),e._UZ(37,"input",21)(38,"input",22,23),e.TgZ(40,"button",24),e.NdJ("click",function(){e.CHM(a);const d=e.MAs(39);return e.KtG(d.click())}),e._uU(41,"Upload"),e.qZA()()()()(),e.TgZ(42,"div",25)(43,"button",26),e._uU(44,"Cancel"),e.qZA(),e.TgZ(45,"button",24),e.NdJ("click",function(){return n.onSubmit()}),e._uU(46,"Submit"),e.qZA()()}2&t&&(e.xp6(3),e.Q6J("formGroup",n.addEmployerFormGroup),e.xp6(34),e.s9C("value",n.fileName))},dependencies:[l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,m.KE,m.hX,h.rH,R.Nt],styles:[".container-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;border:3px solid #ffffff;border-radius:15px;opacity:1!important}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-self:center;width:90%;margin-top:20px}.search-criteria-container[_ngcontent-%COMP%]{display:flex;align-self:center;flex-direction:column;margin-top:12px;width:93%;border:3px solid #ffffff;border-radius:14px;opacity:1!important}.search-criteria-h3[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:500;padding-left:5px;padding-right:27px;position:relative;left:10px}.form-search[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;place-content:space-between;width:90%;align-self:center;margin-bottom:15px}.input-fields-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}mat-form-field[_ngcontent-%COMP%]{width:44%}mat-label[_ngcontent-%COMP%]{color:#fff}.upload-logo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:20px;width:90%}.logo-text[_ngcontent-%COMP%]{color:#fff;font-size:20px;margin:0 0 10px;font-weight:500}.file-input[_ngcontent-%COMP%]{display:flex;width:100%;place-content:space-between;height:25px}.display-file-input[_ngcontent-%COMP%]{border-radius:5px;background-color:transparent;border:2px solid #ffffff;color:#fff;width:70%}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-top:15px;padding-right:17px}.cancel-btn[_ngcontent-%COMP%]{margin-right:10px}button[_ngcontent-%COMP%]{cursor:pointer;background-color:#fff;color:#00546f;border-radius:3px;border:none;width:90px;height:23px;align-self:flex-end}  .mat-form-field-underline{background-color:#fff!important}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}"],changeDetection:0}),i})();var Ie=s(2529),we=s(7933),Pe=s(2765),ke=s(1572);const Re=["progressSpinnerRef"];function Ae(i,o){if(1&i&&e._UZ(0,"mat-progress-spinner",1),2&i){const t=e.oxw();e.Q6J("color",t.color)("diameter",t.diameter)("mode",t.mode)("strokeWidth",t.strokeWidth)("value",t.value)}}let Se=(()=>{class i{constructor(t,n){this.vcRef=t,this.overlayService=n,this.diameter=100,this.backdropEnabled=!0,this.positionGloballyCenter=!0}ngOnInit(){this.progressSpinnerOverlayConfig={hasBackdrop:this.backdropEnabled},this.positionGloballyCenter&&(this.progressSpinnerOverlayConfig.positionStrategy=this.overlayService.positionGloballyCenter()),this.overlayRef=this.overlayService.createOverlay(this.progressSpinnerOverlayConfig)}ngDoCheck(){this.displayProgressSpinner&&!this.overlayRef.hasAttached()?this.overlayService.attachTemplatePortal(this.overlayRef,this.progressSpinnerRef,this.vcRef):!this.displayProgressSpinner&&this.overlayRef.hasAttached()&&this.overlayRef.detach()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.s_b),e.Y36(Pe.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-spinner"]],viewQuery:function(t,n){if(1&t&&e.Gf(Re,5),2&t){let a;e.iGM(a=e.CRH())&&(n.progressSpinnerRef=a.first)}},inputs:{color:"color",diameter:"diameter",mode:"mode",strokeWidth:"strokeWidth",value:"value",backdropEnabled:"backdropEnabled",positionGloballyCenter:"positionGloballyCenter",displayProgressSpinner:"displayProgressSpinner"},decls:2,vars:0,consts:[["progressSpinnerRef",""],[3,"color","diameter","mode","strokeWidth","value"]],template:function(t,n){1&t&&e.YNc(0,Ae,1,5,"ng-template",null,0,e.W1O)},dependencies:[ke.Ou]}),i})();const Be=[{path:"",component:fe,children:[{path:"",redirectTo:"employers",pathMatch:"full"},{path:"employers",component:ve,data:{page:"search-employers",btnText:"Add new employer"},children:[{path:"",redirectTo:"search-employers",pathMatch:"full",data:{page:"search-employers",link:"add-new-employer",btnText:"Add new employer"}},{path:"add-new-employer",component:Me,data:{page:"add-new-employer",link:"search-employers",btnText:"Choose a different employer"}},{path:"search-employers",component:(()=>{class i{constructor(t,n,a,r){this.fb=t,this.adminService=n,this.route=a,this.dataService=r,this.componentActive=!0,this.searchEmployerSubj=new M.x,this.color="primary",this.mode="indeterminate",this.value=50,this.displayProgressSpinner=!1,this.searchFormGroup=this.fb.group({employerName:["",l.kI.required],employerCode:["",l.kI.maxLength(3)]})}ngOnInit(){this.route.data.subscribe(t=>{this.dataService.dataChange(t),console.log(t)}),this.searchEmployerSubj.pipe((0,Ie.o)(()=>this.componentActive),(0,L.w)(t=>this.adminService.searchEmployer(t))).subscribe(t=>{console.log(t),this.displayProgressSpinner=!1})}enableInput(){const t=this.searchFormGroup.get("employerName");this.searchFormGroup.get("employerCode")?.value?t.clearValidators():t.setValidators([l.kI.required]),t.updateValueAndValidity()}searchEmployer(){if(this.searchFormGroup.markAllAsTouched(),this.displayProgressSpinner=!0,!this.searchFormGroup.invalid){const t=this.searchFormGroup.get("employerName"),n=this.searchFormGroup.get("employerCode");this.searchEmployerSubj.next({name:t.value,code:n.value})}}ngOnDestroy(){this.componentActive=!1}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.qu),e.Y36(we.l),e.Y36(h.gz),e.Y36(x))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-search-employers"]],decls:20,vars:19,consts:[["novalidate","",1,"form-search",3,"formGroup"],["appearance","legacy",1,"employer-name-input"],["matInput","","type","text","name","employerName","formControlName","employerName","placeholder","Ex. Coherent"],["appearance","legacy",1,"employer-code-input"],["matInput","","type","text","name","employerCode","formControlName","employerCode","placeholder","Ex. UK",3,"ngModelChange"],[1,"search-employer-btn",3,"click"],[3,"color","mode","value","backdropEnabled","positionGloballyCenter","displayProgressSpinner"]],template:function(t,n){1&t&&(e.TgZ(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._UZ(5,"input",2),e.TgZ(6,"mat-error"),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"mat-form-field",3)(10,"mat-label"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"input",4),e.NdJ("ngModelChange",function(){return n.enableInput()}),e.qZA(),e.TgZ(14,"mat-error"),e._uU(15),e.ALo(16,"translate"),e.qZA()()(),e.TgZ(17,"button",5),e.NdJ("click",function(){return n.searchEmployer()}),e._uU(18,"Search"),e.qZA(),e._UZ(19,"app-spinner",6)),2&t&&(e.Q6J("formGroup",n.searchFormGroup),e.xp6(3),e.hij(" ",e.lcZ(4,11,"label-search-input-employerName")," "),e.xp6(4),e.hij(" ",e.lcZ(8,13,"error-search-input-employerName")," "),e.xp6(4),e.hij(" ",e.lcZ(12,15,"label-search-input-employerCode")," "),e.xp6(4),e.hij(" ",e.lcZ(16,17,"error-search-input-employerCode")," "),e.xp6(4),e.Q6J("color",n.color)("mode",n.mode)("value",n.value)("backdropEnabled",!0)("positionGloballyCenter",!0)("displayProgressSpinner",n.displayProgressSpinner))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,m.TO,m.KE,m.hX,R.Nt,Se,k.X$],styles:[".mat-input-element[_ngcontent-%COMP%]{color:#fff}.mat-input-element[_ngcontent-%COMP%]::placeholder{color:#fff}.form-search[_ngcontent-%COMP%]{display:flex;flex-direction:row;place-content:space-between;width:90%;align-self:center}mat-form-field[_ngcontent-%COMP%]{width:44%}mat-label[_ngcontent-%COMP%]{color:#fff}  .mat-form-field-underline{background-color:#fff!important}.search-employer-btn[_ngcontent-%COMP%]{cursor:pointer;background-color:#fff;color:#008db9;border-radius:13px;border:none;width:159px;height:44px;align-self:flex-start;font-weight:700;margin-top:2%;margin-bottom:1%}mat-progress-spinner[_ngcontent-%COMP%]{margin-left:2%;margin-top:1%}mat-progress-spinner[_ngcontent-%COMP%]     circle{stroke:#fff}@media all and (max-width: 500px){.form-search[_ngcontent-%COMP%]{flex-direction:column}}"]}),i})(),data:{page:"search-employers",link:"add-new-employer",btnText:"Add new employer"}}]},{path:"claims",component:xe}]}];let De=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(Be),h.Bz]}),i})();var Le=s(2271),Ee=s(4622);let Oe=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[x],imports:[C.ez,k.aw.forChild(),he,ue.Ps,me.ot,l.UX,m.lN,De,Le.m,Ee.L]}),i})()}}]);