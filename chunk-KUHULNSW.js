import{A as Oe,B as A,C as Pi,d as ki,e as Qe,f as Ye,g as be,h as pe,i as Fi,j as Vi,k as Xe,l as Je,m as et,n as De,o as se,p as tt,q as Oi,r as _t,s as vt,t as _e,u as Ni,v as yt,w as ve,x as L,y as Li,z as Me}from"./chunk-FG6LRVS6.js";import{a as zt,d as bt,h as Ve,i as Ei,j as Ti,k as Si,l as ge,m as N,o as re,p as Ai}from"./chunk-YCG643IL.js";import{$ as w,$a as Ci,$b as Ze,Ab as Z,B as hi,Bb as de,Cb as R,Db as B,Eb as Di,Fb as Mi,Gb as h,H as mi,Hb as ie,I as fi,Ia as _i,Ib as ne,Ja as vi,Jb as ht,K as gi,Kb as mt,La as u,Lb as ft,Mb as D,Nb as fe,O as Q,Ob as we,P as _,Pa as Ke,Pb as gt,Q as y,Qa as G,Qb as oe,S as me,Ta as yi,Tb as qe,Ua as pt,V as d,Xa as f,Xb as O,Ya as C,Yb as ue,Za as U,Zb as H,_ as Ge,_a as b,_b as Ie,a as S,aa as I,ab as E,b as ee,ba as ae,ca as Ue,cb as xi,da as p,f as ai,fa as We,gb as M,hb as x,i as dt,ib as wi,ja as P,jb as F,ka as ke,kb as Fe,l as li,lb as W,ma as Ce,mb as q,na as xe,nb as ce,ob as Ii,pa as le,pb as Y,q as He,qb as X,r as ci,rb as a,sb as l,t as di,ta as ut,tb as V,ub as te,v as ui,va as bi,vb as j,wb as g,xb as c,yb as z,z as pi,zb as $}from"./chunk-Q63KYD4Z.js";var $t;try{$t=typeof Intl<"u"&&Intl.v8BreakIterator}catch{$t=!1}var Ct=(()=>{class e{_platformId=d(ut);isBrowser=this._platformId?re(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||$t)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function jt(e){return Array.isArray(e)?e:[e]}var Ri=new Set,Ee,Vn=(()=>{class e{_platform=d(Ct);_nonce=d(bi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Nn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&On(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function On(e,o){if(!Ri.has(e))try{Ee||(Ee=document.createElement("style"),o&&Ee.setAttribute("nonce",o),Ee.setAttribute("type","text/css"),document.head.appendChild(Ee)),Ee.sheet&&(Ee.sheet.insertRule(`@media ${e} {body{ }}`,0),Ri.add(e))}catch(t){console.error(t)}}function Nn(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var zi=(()=>{class e{_mediaMatcher=d(Vn);_zone=d(ke);_queries=new Map;_destroySubject=new dt;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Bi(jt(t)).some(n=>this._registerQuery(n).mql.matches)}observe(t){let n=Bi(jt(t)).map(s=>this._registerQuery(s).observable),r=ci(n);return r=di(r.pipe(hi(1)),r.pipe(mi(1),pi(0))),r.pipe(He(s=>{let m={matches:!1,breakpoints:{}};return s.forEach(({matches:K,query:Fn})=>{m.matches=m.matches||K,m.breakpoints[Fn]=K}),m}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let i=this._mediaMatcher.matchMedia(t),r={observable:new ai(s=>{let m=K=>this._zone.run(()=>s.next(K));return i.addListener(m),()=>{i.removeListener(m)}}).pipe(fi(i),He(({matches:s})=>({query:t,matches:s})),gi(this._destroySubject)),mql:i};return this._queries.set(t,r),r}static \u0275fac=function(i){return new(i||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Bi(e){return e.map(o=>o.split(",")).reduce((o,t)=>o.concat(t)).map(o=>o.trim())}var Te=function(e){return e[e.NONE=0]="NONE",e[e.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",e[e.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",e}(Te||{}),$i="cdk-high-contrast-black-on-white",ji="cdk-high-contrast-white-on-black",Ht="cdk-high-contrast-active",Hi=(()=>{class e{_platform=d(Ct);_hasCheckedHighContrastMode;_document=d(bt);_breakpointSubscription;constructor(){this._breakpointSubscription=d(zi).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Te.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(t):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Te.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Te.BLACK_ON_WHITE}return Te.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ht,$i,ji),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Te.BLACK_ON_WHITE?t.add(Ht,$i):i===Te.WHITE_ON_BLACK&&t.add(Ht,ji)}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Gt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({})}return e})();var Ut=(()=>{class e{constructor(){d(Hi)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[Gt,Gt]})}return e})();var Gi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[Ut,Ut]})}return e})();var Ui=(()=>{class e extends A{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),T=(()=>{class e{document=d(bt);platformId=d(ut);el=d(xe);injector=d(We);cd=d(qe);renderer=d(Ke);config=d(Pi);baseComponentStyle=d(Ui);baseStyle=d(A);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=yt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",n={}){return Ni(t,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Ai(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{Oe.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Oe.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Oe.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Oe.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Me.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,S({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,S({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,S({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(S({name:"global-style"},this.styleOptions),r),Me.setLoadedStyleName("common")}if(!Me.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,S({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(S({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),Me.setLoadedStyleName(this.componentStyle?.name)}if(!Me.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,S({name:"layer-order",first:!0},this.styleOptions)),Me.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,S({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Oe.clearLoadedStyleNames(),Li.on("theme:change",t)}cx(t,i){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:S({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=U({type:e,inputs:{dt:"dt"},features:[D([Ui,A]),Ge]})}return e})();var Rn=["*"],Bn=["panel"],zn=["container"],$n=e=>({display:"flex","flex-wrap":"nowrap","flex-direction":e});function jn(e,o){e&1&&te(0)}function Hn(e,o){if(e&1){let t=j();a(0,"div",6),g("mousedown",function(n){w(t);let r=c().index,s=c();return I(s.onGutterMouseDown(n,r))})("touchstart",function(n){w(t);let r=c().index,s=c();return I(s.onGutterTouchStart(n,r))})("touchmove",function(n){w(t);let r=c(2);return I(r.onGutterTouchMove(n))})("touchend",function(n){w(t);let r=c(2);return I(r.onGutterTouchEnd(n))}),a(1,"div",7),g("keyup",function(n){w(t);let r=c(2);return I(r.onGutterKeyUp(n))})("keydown",function(n){w(t);let r=c().index,s=c();return I(s.onGutterKeyDown(n,r))}),l()()}if(e&2){let t=c(2);M("data-p-gutter-resizing",!1)("data-pc-section","gutter"),u(),x("ngStyle",t.gutterStyle()),M("aria-orientation",t.layout)("aria-valuenow",t.prevSize)("data-pc-section","gutterhandle")}}function Gn(e,o){if(e&1&&(a(0,"div",3),E(1,jn,1,0,"ng-container",4),l(),E(2,Hn,2,6,"div",5)),e&2){let t=o.$implicit,i=o.index,n=c();W(n.panelStyleClass),x("ngClass",n.panelContainerClass())("ngStyle",n.panelStyle),M("data-pc-name","splitter")("data-pc-section","root"),u(),x("ngTemplateOutlet",t),u(),x("ngIf",i!==n.panels.length-1)}}var Un=({dt:e})=>`
.p-splitter {
    display: flex;
    flex-wrap: nowrap;
    border: 1px solid ${e("splitter.border.color")};
    background: ${e("splitter.background")};
    border-radius: ${e("border.radius.md")};
    color: ${e("splitter.color")};
}

.p-splitter-vertical {
    flex-direction: column;
}

.p-splitter-gutter {
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: ${e("splitter.gutter.background")};
}

.p-splitter-gutter-handle {
    border-radius: ${e("splitter.handle.border.radius")};
    background: ${e("splitter.handle.background")};
    transition: outline-color ${e("splitter.transition.duration")}, box-shadow ${e("splitter.transition.duration")};
    outline-color: transparent;
}

.p-splitter-gutter-handle:focus-visible {
    box-shadow: ${e("splitter.handle.focus.ring.shadow")};
    outline: ${e("splitter.handle.focus.ring.width")} ${e("splitter.handle.focus.ring.style")} ${e("splitter.handle.focus.ring.color")};
    outline-offset: ${e("splitter.handle.focus.ring.offset")};
}

.p-splitter-horizontal.p-splitter-resizing {
    cursor: col-resize;
    user-select: none;
}

.p-splitter-vertical.p-splitter-resizing {
    cursor: row-resize;
    user-select: none;
}

.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
    height: ${e("splitter.handle.size")};
    width: 100%;
}

.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
    width: ${e("splitter.handle.size")};
    height: 100%;
}

.p-splitter-horizontal > .p-splitter-gutter {
    cursor: col-resize;
}

.p-splitter-vertical > .p-splitter-gutter {
    cursor: row-resize;
}

.p-splitterpanel {
    flex-grow: 1;
    overflow: hidden;
}

.p-splitterpanel-nested {
    display: flex;
    flex-grow: 1;
    justify-content: center;
}

.p-splitterpanel .p-splitter {
    flex-grow: 1;
    border: 0 none;
}
`,Wn={root:({props:e})=>["p-splitter p-component","p-splitter-"+e.layout],gutter:"p-splitter-gutter",gutterHandle:"p-splitter-gutter-handle"},Wi=(()=>{class e extends A{name="splitter";theme=Un;classes=Wn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Kn=(()=>{class e extends T{splitter=yi(it);nestedState=H(()=>this.splitter());static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-splitter-panel"]],contentQueries:function(i,n,r){i&1&&Di(r,n.splitter,it,5),i&2&&Mi()},hostAttrs:[1,"p-splitterpanel"],features:[b],ngContentSelectors:Rn,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N],encapsulation:2,changeDetection:0})}return e})(),it=(()=>{class e extends T{styleClass;panelStyleClass;style;panelStyle;stateStorage="session";stateKey=null;layout="horizontal";gutterSize=4;step=5;minSizes=[];get panelSizes(){return this._panelSizes}set panelSizes(t){if(this._panelSizes=t,this.el&&this.el.nativeElement&&this.panels.length>0){let i=[...this.el.nativeElement.children[0].children].filter(r=>Qe(r,"p-splitterpanel")),n=[];this.panels.map((r,s)=>{let K=(this.panelSizes.length-1>=s?this.panelSizes[s]:null)||100/this.panels.length;n[s]=K,i[s].style.flexBasis="calc("+K+"% - "+(this.panels.length-1)*this.gutterSize+"px)"})}}onResizeEnd=new P;onResizeStart=new P;containerViewChild;templates;panelChildren;nested=!1;panels=[];dragging=!1;mouseMoveListener;mouseUpListener;touchMoveListener;touchEndListener;size;gutterElement;startPos;prevPanelElement;nextPanelElement;nextPanelSize;prevPanelSize;_panelSizes=[];prevPanelIndex;timer;prevSize;_componentStyle=d(Wi);ngOnInit(){super.ngOnInit(),this.nested=this.isNested()}ngAfterContentInit(){this.templates&&this.templates.toArray().length>0&&this.templates.forEach(t=>{switch(t.getType()){case"panel":this.panels.push(t.template);break;default:this.panels.push(t.template);break}}),this.panelChildren&&this.panelChildren.toArray().length>0&&this.panelChildren.forEach(t=>{this.panels.push(t)})}ngAfterViewInit(){if(super.ngAfterViewInit(),re(this.platformId)&&this.panels&&this.panels.length){let t=!1;if(this.isStateful()&&(t=this.restoreState()),!t){let i=[...this.el.nativeElement.children[0].children].filter(r=>Qe(r,"p-splitterpanel")),n=[];this.panels.map((r,s)=>{let K=(this.panelSizes.length-1>=s?this.panelSizes[s]:null)||100/this.panels.length;n[s]=K,i[s].style.flexBasis="calc("+K+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this._panelSizes=n,this.prevSize=parseFloat(n[0]).toFixed(4)}}}resizeStart(t,i,n){this.gutterElement=t.currentTarget||t.target.parentElement,this.size=this.horizontal()?se(this.containerViewChild.nativeElement):Je(this.containerViewChild.nativeElement),n||(this.dragging=!0,this.startPos=this.horizontal()?t instanceof MouseEvent?t.pageX:t.changedTouches[0].pageX:t instanceof MouseEvent?t.pageY:t.changedTouches[0].pageY),this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,n?(this.prevPanelSize=this.horizontal()?pe(this.prevPanelElement,!0):De(this.prevPanelElement,!0),this.nextPanelSize=this.horizontal()?pe(this.nextPanelElement,!0):De(this.nextPanelElement,!0)):(this.prevPanelSize=100*(this.horizontal()?pe(this.prevPanelElement,!0):De(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal()?pe(this.nextPanelElement,!0):De(this.nextPanelElement,!0))/this.size),this.prevPanelIndex=i,Ye(this.gutterElement,"p-splitter-gutter-resizing"),this.gutterElement.setAttribute("data-p-gutter-resizing","true"),Ye(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.containerViewChild.nativeElement.setAttribute("data-p-resizing","true"),this.onResizeStart.emit({originalEvent:t,sizes:this._panelSizes})}onResize(t,i,n){let r,s,m;n?this.horizontal()?(s=100*(this.prevPanelSize+i)/this.size,m=100*(this.nextPanelSize-i)/this.size):(s=100*(this.prevPanelSize-i)/this.size,m=100*(this.nextPanelSize+i)/this.size):(this.horizontal()?tt(this.el.nativeElement)?r=(this.startPos-t.pageX)*100/this.size:r=(t.pageX-this.startPos)*100/this.size:r=(t.pageY-this.startPos)*100/this.size,s=this.prevPanelSize+r,m=this.nextPanelSize-r),this.prevSize=parseFloat(s).toFixed(4),this.validateResize(s,m)&&(this.prevPanelElement.style.flexBasis="calc("+s+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+m+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this._panelSizes[this.prevPanelIndex]=s,this._panelSizes[this.prevPanelIndex+1]=m)}resizeEnd(t){this.isStateful()&&this.saveState(),this.onResizeEnd.emit({originalEvent:t,sizes:this._panelSizes}),be(this.gutterElement,"p-splitter-gutter-resizing"),be(this.containerViewChild.nativeElement,"p-splitter-resizing"),this.clear()}onGutterMouseDown(t,i){this.resizeStart(t,i),this.bindMouseListeners()}onGutterTouchStart(t,i){t.cancelable&&(this.resizeStart(t,i),this.bindTouchListeners(),t.preventDefault())}onGutterTouchMove(t){this.onResize(t),t.preventDefault()}onGutterTouchEnd(t){this.resizeEnd(t),this.unbindTouchListeners(),t.cancelable&&t.preventDefault()}repeat(t,i,n){this.resizeStart(t,i,!0),this.onResize(t,n,!0)}setTimer(t,i,n){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(t,i,n)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}onGutterKeyUp(t){this.clearTimer(),this.resizeEnd(t)}onGutterKeyDown(t,i){switch(t.code){case"ArrowLeft":{this.layout==="horizontal"&&this.setTimer(t,i,this.step*-1),t.preventDefault();break}case"ArrowRight":{this.layout==="horizontal"&&this.setTimer(t,i,this.step),t.preventDefault();break}case"ArrowDown":{this.layout==="vertical"&&this.setTimer(t,i,this.step*-1),t.preventDefault();break}case"ArrowUp":{this.layout==="vertical"&&this.setTimer(t,i,this.step),t.preventDefault();break}default:break}}validateResize(t,i){return!(this.minSizes.length>=1&&this.minSizes[0]&&this.minSizes[0]>t||this.minSizes.length>1&&this.minSizes[1]&&this.minSizes[1]>i)}bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=this.renderer.listen(this.document,"mousemove",t=>{this.onResize(t)})),this.mouseUpListener||(this.mouseUpListener=this.renderer.listen(this.document,"mouseup",t=>{this.resizeEnd(t),this.unbindMouseListeners()}))}bindTouchListeners(){this.touchMoveListener||(this.touchMoveListener=this.renderer.listen(this.document,"touchmove",t=>{this.onResize(t.changedTouches[0])})),this.touchEndListener||(this.touchEndListener=this.renderer.listen(this.document,"touchend",t=>{this.resizeEnd(t),this.unbindTouchListeners()}))}unbindMouseListeners(){this.mouseMoveListener&&(this.mouseMoveListener(),this.mouseMoveListener=null),this.mouseUpListener&&(this.mouseUpListener(),this.mouseUpListener=null)}unbindTouchListeners(){this.touchMoveListener&&(this.touchMoveListener(),this.touchMoveListener=null),this.touchEndListener&&(this.touchEndListener(),this.touchEndListener=null)}clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null}isNested(){if(this.el.nativeElement){let t=this.el.nativeElement.parentElement;for(;t&&!Qe(t,"p-splitter");)t=t.parentElement;return t!==null}else return!1}isStateful(){return this.stateKey!=null}getStorage(){if(re(this.platformId))switch(this.stateStorage){case"local":return this.document.defaultView.localStorage;case"session":return this.document.defaultView.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Storage is not a available by default on the server.")}saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this._panelSizes))}restoreState(){let i=this.getStorage().getItem(this.stateKey);return i?(this._panelSizes=JSON.parse(i),[...this.containerViewChild.nativeElement.children].filter(r=>Qe(r,"p-splitterpanel")).forEach((r,s)=>{r.style.flexBasis="calc("+this._panelSizes[s]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}containerClass(){return{"p-splitter p-component":!0,"p-splitter-horizontal":this.layout==="horizontal","p-splitter-vertical":this.layout==="vertical"}}panelContainerClass(){return{"p-splitterpanel":!0,"p-splitterpanel-nested":!0}}gutterStyle(){return this.horizontal()?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}}horizontal(){return this.layout==="horizontal"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-splitter"]],contentQueries:function(i,n,r){if(i&1&&(Z(r,ve,4),Z(r,Bn,4)),i&2){let s;R(s=B())&&(n.templates=s),R(s=B())&&(n.panelChildren=s)}},viewQuery:function(i,n){if(i&1&&de(zn,5),i&2){let r;R(r=B())&&(n.containerViewChild=r.first)}},hostVars:2,hostBindings:function(i,n){i&2&&F("p-splitterpanel-nested",n.nested)},inputs:{styleClass:"styleClass",panelStyleClass:"panelStyleClass",style:"style",panelStyle:"panelStyle",stateStorage:"stateStorage",stateKey:"stateKey",layout:"layout",gutterSize:[2,"gutterSize","gutterSize",ue],step:[2,"step","step",ue],minSizes:"minSizes",panelSizes:"panelSizes"},outputs:{onResizeEnd:"onResizeEnd",onResizeStart:"onResizeStart"},features:[D([Wi]),b],decls:3,vars:12,consts:[["container",""],[3,"ngClass","ngStyle"],["ngFor","",3,"ngForOf"],["tabindex","-1",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet"],["class","p-splitter-gutter","role","separator","tabindex","-1",3,"mousedown","touchstart","touchmove","touchend",4,"ngIf"],["role","separator","tabindex","-1",1,"p-splitter-gutter",3,"mousedown","touchstart","touchmove","touchend"],["tabindex","0",1,"p-splitter-gutter-handle",3,"keyup","keydown","ngStyle"]],template:function(i,n){i&1&&(a(0,"div",1,0),E(2,Gn,3,8,"ng-template",2),l()),i&2&&(Fe(we(10,$n,n.layout==="vertical"?"column":"")),W(n.styleClass),x("ngClass",n.containerClass())("ngStyle",n.style),M("data-pc-name","splitter")("data-p-gutter-resizing",!1)("data-pc-section","root"),u(2),x("ngForOf",n.panels))},dependencies:[N,Ve,Ei,Ti,ge,Si,L],encapsulation:2,changeDetection:0})}return e})(),Ki=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[it,Kn,L,L]})}return e})();var xt=class e{searchKeyword="";tabOption=new P;clickOnTab(o){this.tabOption.emit(o),console.log("clickon tab"+o)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-app-header"]],outputs:{tabOption:"tabOption"},decls:14,vars:0,consts:[[1,"logo"],["xmlns","http://www.w3.org/2000/svg","height","48px","viewBox","0 -960 960 960","width","48px","fill","#999999"],["d","M160-120v-60h640v60H160Zm151-140q-63 0-107-43.5T160-410v-430h660q24.75 0 42.38 17.62Q880-804.75 880-780v160q0 24.75-17.62 42.37Q844.75-560 820-560h-96v150q0 63-44 106.5T573-260H311Zm0-60h261.98q36.02 0 63.52-27.5T664-410v-370H220v370q0 35 28 62.5t63 27.5Zm413-300h96v-160h-96v160ZM311-320h-91 444-353Z"],[1,"tabs"],[1,"tabButtom",3,"click"]],template:function(t,i){t&1&&(a(0,"div",0),ae(),a(1,"svg",1),V(2,"path",2),l()(),Ue(),a(3,"div",3)(4,"div",4),g("click",function(){return i.clickOnTab(1)}),h(5,"Reservation"),l(),a(6,"div",4),g("click",function(){return i.clickOnTab(2)}),h(7,"Table services"),l(),a(8,"div",4),g("click",function(){return i.clickOnTab(3)}),h(9,"Menu"),l(),a(10,"div",4),g("click",function(){return i.clickOnTab(4)}),h(11,"Delivery"),l(),a(12,"div",4),g("click",function(){return i.clickOnTab(5)}),h(13,"Accounting"),l()())},styles:["*[_ngcontent-%COMP%]{display:block;margin-left:10px;margin-top:10px;color:#f7f7f7}.tabButtom[_ngcontent-%COMP%]{border-radius:5px;background-color:#8eb486;align-content:center;height:50px;padding-left:5px;margin-right:20px}.tabButtom[_ngcontent-%COMP%]:hover{background-color:#9ab694;cursor:pointer}.tabButtom[_ngcontent-%COMP%]:active{background-color:#a4bb9f;cursor:pointer}"]})};var Zn=["*"],Qn={root:"p-inputicon"},qi=(()=>{class e extends A{name="inputicon";classes=Qn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})(),Kt=(()=>{class e extends T{styleClass;get hostClasses(){return this.styleClass}_componentStyle=d(qi);static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:4,hostBindings:function(i,n){i&2&&(W(n.hostClasses),F("p-inputicon",!0))},inputs:{styleClass:"styleClass"},features:[D([qi]),b],ngContentSelectors:Zn,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N,L],encapsulation:2,changeDetection:0})}return e})(),It=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[Kt,L,L]})}return e})();var Xn=["*"],Jn=({dt:e})=>`
.p-iconfield {
    position: relative;
    display: block;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,eo={root:"p-iconfield"},Zi=(()=>{class e extends A{name="iconfield";theme=Jn;classes=eo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var qt=(()=>{class e extends T{iconPosition="left";get _styleClass(){return this.styleClass}styleClass;_componentStyle=d(Zi);static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostAttrs:[1,"p-iconfield"],hostVars:6,hostBindings:function(i,n){i&2&&(W(n._styleClass),F("p-iconfield-left",n.iconPosition==="left")("p-iconfield-right",n.iconPosition==="right"))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[D([Zi]),b],ngContentSelectors:Xn,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N],encapsulation:2,changeDetection:0})}return e})(),Dt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[qt]})}return e})();var on=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(G(Ke),G(xe))};static \u0275dir=U({type:e})}return e})(),rn=(()=>{class e extends on{static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275dir=U({type:e,features:[b]})}return e})(),Se=new me("");var io={provide:Se,useExisting:Q(()=>Re),multi:!0};function no(){let e=zt()?zt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var oo=new me(""),Re=(()=>{class e extends on{_compositionMode;_composing=!1;constructor(t,i,n){super(t,i),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!no())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(G(Ke),G(xe),G(oo,8))};static \u0275dir=U({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,n){i&1&&g("input",function(s){return n._handleInput(s.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(s){return n._compositionEnd(s.target.value)})},standalone:!1,features:[D([io]),b]})}return e})();var ro=new me(""),so=new me("");function sn(e){return e!=null}function an(e){return xi(e)?li(e):e}function ln(e){let o={};return e.forEach(t=>{o=t!=null?S(S({},o),t):o}),Object.keys(o).length===0?null:o}function cn(e,o){return o.map(t=>t(e))}function ao(e){return!e.validate}function dn(e){return e.map(o=>ao(o)?o:t=>o.validate(t))}function lo(e){if(!e)return null;let o=e.filter(sn);return o.length==0?null:function(t){return ln(cn(t,o))}}function un(e){return e!=null?lo(dn(e)):null}function co(e){if(!e)return null;let o=e.filter(sn);return o.length==0?null:function(t){let i=cn(t,o).map(an);return ui(i).pipe(He(ln))}}function pn(e){return e!=null?co(dn(e)):null}function Qi(e,o){return e===null?[o]:Array.isArray(e)?[...e,o]:[e,o]}function uo(e){return e._rawValidators}function po(e){return e._rawAsyncValidators}function Zt(e){return e?Array.isArray(e)?e:[e]:[]}function Et(e,o){return Array.isArray(e)?e.includes(o):e===o}function Yi(e,o){let t=Zt(o);return Zt(e).forEach(n=>{Et(t,n)||t.push(n)}),t}function Xi(e,o){return Zt(o).filter(t=>!Et(e,t))}var Tt=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=un(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=pn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control&&this.control.reset(o)}hasError(o,t){return this.control?this.control.hasError(o,t):!1}getError(o,t){return this.control?this.control.getError(o,t):null}},Qt=class extends Tt{name;get formDirective(){return null}get path(){return null}},at=class extends Tt{_parent=null;name=null;valueAccessor=null},Yt=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},ho={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},wl=ee(S({},ho),{"[class.ng-submitted]":"isSubmitted"}),Be=(()=>{class e extends Yt{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(G(at,2))};static \u0275dir=U({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,n){i&2&&F("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[b]})}return e})();var nt="VALID",Mt="INVALID",Ne="PENDING",ot="DISABLED",Pe=class{},St=class extends Pe{value;source;constructor(o,t){super(),this.value=o,this.source=t}},rt=class extends Pe{pristine;source;constructor(o,t){super(),this.pristine=o,this.source=t}},st=class extends Pe{touched;source;constructor(o,t){super(),this.touched=o,this.source=t}},Le=class extends Pe{status;source;constructor(o,t){super(),this.status=o,this.source=t}};function mo(e){return(At(e)?e.validators:e)||null}function fo(e){return Array.isArray(e)?un(e):e||null}function go(e,o){return(At(o)?o.asyncValidators:e)||null}function bo(e){return Array.isArray(e)?pn(e):e||null}function At(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}var Xt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,t){this._assignValidators(o),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Ie(this.statusReactive)}set status(o){Ie(()=>this.statusReactive.set(o))}_status=H(()=>this.statusReactive());statusReactive=le(void 0);get valid(){return this.status===nt}get invalid(){return this.status===Mt}get pending(){return this.status==Ne}get disabled(){return this.status===ot}get enabled(){return this.status!==ot}errors;get pristine(){return Ie(this.pristineReactive)}set pristine(o){Ie(()=>this.pristineReactive.set(o))}_pristine=H(()=>this.pristineReactive());pristineReactive=le(!0);get dirty(){return!this.pristine}get touched(){return Ie(this.touchedReactive)}set touched(o){Ie(()=>this.touchedReactive.set(o))}_touched=H(()=>this.touchedReactive());touchedReactive=le(!1);get untouched(){return!this.touched}_events=new dt;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Yi(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Yi(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(Xi(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(Xi(o,this._rawAsyncValidators))}hasValidator(o){return Et(this._rawValidators,o)}hasAsyncValidator(o){return Et(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let t=this.touched===!1;this.touched=!0;let i=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsTouched(ee(S({},o),{sourceControl:i})),t&&o.emitEvent!==!1&&this._events.next(new st(!0,i))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(o))}markAsUntouched(o={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=o.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:i})}),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,i),t&&o.emitEvent!==!1&&this._events.next(new st(!1,i))}markAsDirty(o={}){let t=this.pristine===!0;this.pristine=!1;let i=o.sourceControl??this;this._parent&&!o.onlySelf&&this._parent.markAsDirty(ee(S({},o),{sourceControl:i})),t&&o.emitEvent!==!1&&this._events.next(new rt(!1,i))}markAsPristine(o={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=o.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),this._parent&&!o.onlySelf&&this._parent._updatePristine(o,i),t&&o.emitEvent!==!1&&this._events.next(new rt(!0,i))}markAsPending(o={}){this.status=Ne;let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Le(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.markAsPending(ee(S({},o),{sourceControl:t}))}disable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=ot,this.errors=null,this._forEachChild(n=>{n.disable(ee(S({},o),{onlySelf:!0}))}),this._updateValue();let i=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new St(this.value,i)),this._events.next(new Le(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ee(S({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(o={}){let t=this._parentMarkedDirty(o.onlySelf);this.status=nt,this._forEachChild(i=>{i.enable(ee(S({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(ee(S({},o),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(o,t){this._parent&&!o.onlySelf&&(this._parent.updateValueAndValidity(o),o.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===nt||this.status===Ne)&&this._runAsyncValidator(i,o.emitEvent)}let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new St(this.value,t)),this._events.next(new Le(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!o.onlySelf&&this._parent.updateValueAndValidity(ee(S({},o),{sourceControl:t}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?ot:nt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,t){if(this.asyncValidator){this.status=Ne,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=an(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,t={}){this.errors=o,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(o){let t=o;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,n)=>i&&i._find(n),this)}getError(o,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[o]:null}hasError(o,t){return!!this.getError(o,t)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,t,i){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||i)&&this._events.next(new Le(this.status,t)),this._parent&&this._parent._updateControlsErrors(o,t,i)}_initObservables(){this.valueChanges=new P,this.statusChanges=new P}_calculateStatus(){return this._allControlsDisabled()?ot:this.errors?Mt:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Ne)?Ne:this._anyControlsHaveStatus(Mt)?Mt:nt}_anyControlsHaveStatus(o){return this._anyControls(t=>t.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,t){let i=!this._anyControlsDirty(),n=this.pristine!==i;this.pristine=i,this._parent&&!o.onlySelf&&this._parent._updatePristine(o,t),n&&this._events.next(new rt(this.pristine,t))}_updateTouched(o={},t){this.touched=this._anyControlsTouched(),this._events.next(new st(this.touched,t)),this._parent&&!o.onlySelf&&this._parent._updateTouched(o,t)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){At(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){let t=this._parent&&this._parent.dirty;return!o&&!!t&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=fo(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=bo(this._rawAsyncValidators)}};var hn=new me("",{providedIn:"root",factory:()=>Jt}),Jt="always";function _o(e,o){return[...o.path,e]}function vo(e,o,t=Jt){Co(e,o),o.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&o.valueAccessor.setDisabledState?.(e.disabled),xo(e,o),Io(e,o),wo(e,o),yo(e,o)}function Ji(e,o){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(o)})}function yo(e,o){if(o.valueAccessor.setDisabledState){let t=i=>{o.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),o._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function Co(e,o){let t=uo(e);o.validator!==null?e.setValidators(Qi(t,o.validator)):typeof t=="function"&&e.setValidators([t]);let i=po(e);o.asyncValidator!==null?e.setAsyncValidators(Qi(i,o.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let n=()=>e.updateValueAndValidity();Ji(o._rawValidators,n),Ji(o._rawAsyncValidators,n)}function xo(e,o){o.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&mn(e,o)})}function wo(e,o){o.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&mn(e,o),e.updateOn!=="submit"&&e.markAsTouched()})}function mn(e,o){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Io(e,o){let t=(i,n)=>{o.valueAccessor.writeValue(i),n&&o.viewToModelUpdate(i)};e.registerOnChange(t),o._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Do(e,o){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(o,t.currentValue)}function Mo(e){return Object.getPrototypeOf(e.constructor)===rn}function Eo(e,o){if(!o)return null;Array.isArray(o);let t,i,n;return o.forEach(r=>{r.constructor===Re?t=r:Mo(r)?i=r:n=r}),n||i||t||null}function en(e,o){let t=e.indexOf(o);t>-1&&e.splice(t,1)}function tn(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var To=class extends Xt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,t,i){super(mo(t),go(i,t)),this._applyFormState(o),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),At(t)&&(t.nonNullable||t.initialValueIsDefault)&&(tn(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,t={}){this.value=this._pendingValue=o,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(o,t={}){this.setValue(o,t)}reset(o=this.defaultValue,t={}){this._applyFormState(o),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){en(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){en(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){tn(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var So={provide:at,useExisting:Q(()=>he)},nn=Promise.resolve(),he=(()=>{class e extends at{_changeDetectorRef;callSetDisabledState;control=new To;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new P;constructor(t,i,n,r,s,m){super(),this._changeDetectorRef=s,this.callSetDisabledState=m,this._parent=t,this._setValidators(i),this._setAsyncValidators(n),this.valueAccessor=Eo(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Do(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){vo(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){nn.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,n=i!==0&&O(i);nn.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?_o(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(G(Qt,9),G(ro,10),G(so,10),G(Se,10),G(qe,8),G(hn,8))};static \u0275dir=U({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[D([So]),b,Ge]})}return e})();var Ao={provide:Se,useExisting:Q(()=>ei),multi:!0},ei=(()=>{class e extends rn{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275dir=U({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,n){i&1&&g("input",function(s){return n.onChange(s.target.value)})("blur",function(){return n.onTouched()})},standalone:!1,features:[D([Ao]),b]})}return e})();var ko=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({})}return e})();var ze=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:hn,useValue:t.callSetDisabledState??Jt}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[ko]})}return e})();var Fo=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,Vo={root:({instance:e,props:o})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":o.size==="small","p-inputtext-lg":o.size==="large","p-invalid":o.invalid,"p-variant-filled":o.variant==="filled","p-inputtext-fluid":o.fluid}]},fn=(()=>{class e extends A{name="inputtext";theme=Fo;classes=Vo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var gn=(()=>{class e extends T{ngModel;variant;fluid;pSize;filled;_componentStyle=d(fn);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return _t(this.fluid)?!!i:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||e)(G(he,8))};static \u0275dir=U({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,n){if(i&1&&g("input",function(s){return n.onInput(s)}),i&2){let r;F("p-filled",n.filled)("p-variant-filled",((r=n.variant)!==null&&r!==void 0?r:n.config.inputStyle()||n.config.inputVariant())==="filled")("p-inputtext-fluid",n.hasFluid)("p-inputtext-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-inputtext-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",O],pSize:"pSize"},features:[D([fn]),b]})}return e})(),Ft=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({})}return e})();var No=["*"],Lo=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,Po={root:({instance:e,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},bn=(()=>{class e extends A{name="floatlabel";theme=Lo;classes=Po;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var ti=(()=>{class e extends T{_componentStyle=d(bn);variant="over";static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(i,n){i&2&&F("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},features:[D([bn]),b],ngContentSelectors:No,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N,L],encapsulation:2,changeDetection:0})}return e})(),Vt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[ti,L,L]})}return e})();var Bo=["*"],zo=({dt:e})=>`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: ${e("divider.horizontal.margin")};
    padding: ${e("divider.horizontal.padding")};
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid ${e("divider.border.color")};
}

.p-divider-horizontal .p-divider-content {
    padding: ${e("divider.horizontal.content.padding")};
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: ${e("divider.vertical.margin")};
    padding: ${e("divider.vertical.padding")};
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid ${e("divider.border.color")};
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: ${e("divider.vertical.content.padding")};
}

.p-divider-content {
    z-index: 1;
    background: ${e("divider.content.background")};
    color: ${e("divider.content.color")};
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`,$o={root:({props:e})=>({justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null})},jo={root:({props:e})=>["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}],content:"p-divider-content"},_n=(()=>{class e extends A{name="divider";theme=zo;classes=jo;inlineStyles=$o;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var ii=(()=>{class e extends T{style;styleClass;layout="horizontal";type="solid";align;_componentStyle=d(_n);get hostClass(){return this.styleClass}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-divider"]],hostVars:33,hostBindings:function(i,n){i&2&&(M("aria-orientation",n.layout)("data-pc-name","divider")("role","separator"),W(n.hostClass),wi("justify-content",n.layout==="horizontal"?n.align==="center"||n.align===void 0?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null)("align-items",n.layout==="vertical"?n.align==="center"||n.align===void 0?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null),F("p-divider",!0)("p-component",!0)("p-divider-horizontal",n.layout==="horizontal")("p-divider-vertical",n.layout==="vertical")("p-divider-solid",n.type==="solid")("p-divider-dashed",n.type==="dashed")("p-divider-dotted",n.type==="dotted")("p-divider-left",n.layout==="horizontal"&&(!n.align||n.align==="left"))("p-divider-center",n.layout==="horizontal"&&n.align==="center"||n.layout==="vertical"&&(!n.align||n.align==="center"))("p-divider-right",n.layout==="horizontal"&&n.align==="right")("p-divider-top",n.layout==="vertical"&&n.align==="top")("p-divider-bottom",n.layout==="vertical"&&n.align==="bottom"))},inputs:{style:"style",styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[D([_n]),b],ngContentSelectors:Bo,decls:2,vars:0,consts:[[1,"p-divider-content"]],template:function(i,n){i&1&&(z(),a(0,"div",0),$(1),l())},dependencies:[N,L],encapsulation:2,changeDetection:0})}return e})(),vn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[ii]})}return e})();var Go=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Uo={root:"p-ink"},yn=(()=>{class e extends A{name="ripple";theme=Go;classes=Uo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var lt=(()=>{class e extends T{zone=d(ke);_componentStyle=d(yn);animationListener;mouseDownListener;timeout;constructor(){super(),Ze(()=>{re(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(be(i,"p-ink-active"),!Je(i)&&!se(i)){let m=Math.max(pe(this.el.nativeElement),De(this.el.nativeElement));i.style.height=m+"px",i.style.width=m+"px"}let n=et(this.el.nativeElement),r=t.pageX-n.left+this.document.body.scrollTop-se(i)/2,s=t.pageY-n.top+this.document.body.scrollLeft-Je(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),Ye(i,"p-ink-active"),this.timeout=setTimeout(()=>{let m=this.getInk();m&&be(m,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&be(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),be(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Oi(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=U({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[D([yn]),b]})}return e})(),Cn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({})}return e})();var Ko=["*"],qo=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Zo=(()=>{class e extends A{name="baseicon";inlineStyles=qo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Ot=(()=>{class e extends T{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=_t(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",O],styleClass:"styleClass"},features:[D([Zo]),b],ngContentSelectors:Ko,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},encapsulation:2,changeDetection:0})}return e})();var xn=(()=>{class e extends Ot{static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["ChevronLeftIcon"]],features:[b],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),a(0,"svg",0),V(1,"path",1),l()),i&2&&(W(n.getClassNames()),M("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var wn=(()=>{class e extends Ot{static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["ChevronRightIcon"]],features:[b],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(ae(),a(0,"svg",0),V(1,"path",1),l()),i&2&&(W(n.getClassNames()),M("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var Qo=["previcon"],Yo=["nexticon"],Xo=["content"],Jo=["prevButton"],er=["nextButton"],tr=["inkbar"],ir=["tabs"],ct=["*"],nr=e=>({"p-tablist-viewport":e});function or(e,o){e&1&&te(0)}function rr(e,o){if(e&1&&E(0,or,1,0,"ng-container",11),e&2){let t=c(2);x("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function sr(e,o){e&1&&V(0,"ChevronLeftIcon")}function ar(e,o){if(e&1){let t=j();a(0,"button",10,3),g("click",function(){w(t);let n=c();return I(n.onPrevButtonClick())}),E(2,rr,1,1,"ng-container")(3,sr,1,0,"ChevronLeftIcon"),l()}if(e&2){let t=c();M("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),u(2),q(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function lr(e,o){e&1&&te(0)}function cr(e,o){if(e&1&&E(0,lr,1,0,"ng-container",11),e&2){let t=c(2);x("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function dr(e,o){e&1&&V(0,"ChevronRightIcon")}function ur(e,o){if(e&1){let t=j();a(0,"button",12,4),g("click",function(){w(t);let n=c();return I(n.onNextButtonClick())}),E(2,cr,1,1,"ng-container")(3,dr,1,0,"ChevronRightIcon"),l()}if(e&2){let t=c();M("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),u(2),q(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function pr(e,o){e&1&&$(0)}var hr=({dt:e})=>`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: ${e("tabs.tablist.background")};
    border-style: solid;
    border-color: ${e("tabs.tablist.border.color")};
    border-width: ${e("tabs.tablist.border.width")};
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("tabs.nav.button.background")};
    color: ${e("tabs.nav.button.color")};
    width: ${e("tabs.nav.button.width")};
    transition: color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    box-shadow: ${e("tabs.nav.button.shadow")};
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.nav.button.focus.ring.shadow")};
    outline: ${e("tabs.nav.button.focus.ring.width")} ${e("tabs.nav.button.focus.ring.style")} ${e("tabs.nav.button.focus.ring.color")};
    outline-offset: ${e("tabs.nav.button.focus.ring.offset")};
}

.p-tablist-nav-button:hover {
    color: ${e("tabs.nav.button.hover.color")};
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    gap: ${e("tabs.tab.gap")};
    background: ${e("tabs.tab.background")};
    border-width: ${e("tabs.tab.border.width")};
    border-color: ${e("tabs.tab.border.color")};
    color: ${e("tabs.tab.color")};
    padding: ${e("tabs.tab.padding")};
    font-weight: ${e("tabs.tab.font.weight")};
    transition: background ${e("tabs.transition.duration")}, border-color ${e("tabs.transition.duration")}, color ${e("tabs.transition.duration")}, outline-color ${e("tabs.transition.duration")}, box-shadow ${e("tabs.transition.duration")};
    margin: ${e("tabs.tab.margin")};
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: ${e("tabs.tab.focus.ring.shadow")};
    outline: ${e("tabs.tab.focus.ring.width")} ${e("tabs.tab.focus.ring.style")} ${e("tabs.tab.focus.ring.color")};
    outline-offset: ${e("tabs.tab.focus.ring.offset")};
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: ${e("tabs.tab.hover.background")};
    border-color: ${e("tabs.tab.hover.border.color")};
    color: ${e("tabs.tab.hover.color")};
}

.p-tab-active {
    background: ${e("tabs.tab.active.background")};
    border-color: ${e("tabs.tab.active.border.color")};
    color: ${e("tabs.tab.active.color")};
}

.p-tabpanels {
    background: ${e("tabs.tabpanel.background")};
    color: ${e("tabs.tabpanel.color")};
    padding: ${e("tabs.tabpanel.padding")};
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: ${e("tabs.tabpanel.focus.ring.shadow")};
    outline: ${e("tabs.tabpanel.focus.ring.width")} ${e("tabs.tabpanel.focus.ring.style")} ${e("tabs.tabpanel.focus.ring.color")};
    outline-offset: ${e("tabs.tabpanel.focus.ring.offset")};
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabs.active.bar.bottom")};
    height: ${e("tabs.active.bar.height")};
    background: ${e("tabs.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`,mr={root:({props:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]},In=(()=>{class e extends A{name="tabs";theme=hr;classes=mr;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Nt=(()=>{class e extends T{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=d(Q(()=>$e));isPrevButtonEnabled=le(!1);isNextButtonEnabled=le(!1);resizeObserver;showNavigators=H(()=>this.pcTabs.showNavigators());tabindex=H(()=>this.pcTabs.tabindex());scrollable=H(()=>this.pcTabs.scrollable());constructor(){super(),Ze(()=>{this.pcTabs.value(),re(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&re(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=se(t),n=Math.abs(t.scrollLeft)-i,r=n<=0?0:n;t.scrollLeft=tt(t)?-1*r:r}onNextButtonClick(){let t=this.content.nativeElement,i=se(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,r=t.scrollWidth-i,s=n>=r?r:n;t.scrollLeft=tt(t)?-1*s:s}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:r}=t,s=Math.abs(t.scrollLeft),m=se(t);this.isPrevButtonEnabled.set(s!==0),this.isNextButtonEnabled.set(i.offsetWidth>=r&&s!==n-m)}updateInkBar(){let t=this.content.nativeElement,i=this.inkbar.nativeElement,n=this.tabs.nativeElement,r=Fi(t,'[data-pc-name="tab"][data-p-active="true"]');i.style.width=pe(r)+"px",i.style.left=et(r).left-et(n).left+"px"}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,r)=>r?n+se(r):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=f({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,r){if(i&1&&(Z(r,Qo,4),Z(r,Yo,4),Z(r,ve,4)),i&2){let s;R(s=B())&&(n.prevIconTemplate=s.first),R(s=B())&&(n.nextIconTemplate=s.first),R(s=B())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(de(Xo,5),de(Jo,5),de(er,5),de(tr,5),de(ir,5)),i&2){let r;R(r=B())&&(n.content=r.first),R(r=B())&&(n.prevButton=r.first),R(r=B())&&(n.nextButton=r.first),R(r=B())&&(n.inkbar=r.first),R(r=B())&&(n.tabs=r.first)}},hostVars:5,hostBindings:function(i,n){i&2&&(M("data-pc-name","tablist"),F("p-tablist",!0)("p-component",!0))},features:[b],ngContentSelectors:ct,decls:9,vars:6,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button"],[1,"p-tablist-content",3,"scroll","ngClass"],["role","tablist",1,"p-tablist-tab-list"],["role","presentation",1,"p-tablist-active-bar"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-prev-button",3,"click"],[4,"ngTemplateOutlet"],["type","button","pRipple","",1,"p-tablist-nav-button","p-tablist-next-button",3,"click"]],template:function(i,n){if(i&1){let r=j();z(),E(0,ar,4,4,"button",5),a(1,"div",6,0),g("scroll",function(m){return w(r),I(n.onScroll(m))}),a(3,"div",7,1),$(5),V(6,"span",8,2),l()(),E(8,ur,4,4,"button",9)}i&2&&(q(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),u(),x("ngClass",we(4,nr,n.scrollable())),u(5),M("data-pc-section","inkbar"),u(2),q(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[N,Ve,ge,xn,wn,Cn,lt,L],encapsulation:2,changeDetection:0})}return e})(),ni=(()=>{class e extends T{value=pt();disabled=Ce(!1,{transform:O});pcTabs=d(Q(()=>$e));pcTabList=d(Q(()=>Nt));ripple=H(()=>this.config.ripple());id=H(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=H(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=H(()=>_e(this.pcTabs.value(),this.value()));tabindex=H(()=>this.active()?this.pcTabs.tabindex():-1);onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?Xe(n,"data-p-disabled")||Xe(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?Xe(n,"data-p-disabled")||Xe(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){Vi(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-tab"]],hostVars:16,hostBindings:function(i,n){i&1&&g("focus",function(s){return n.onFocus(s)})("click",function(s){return n.onClick(s)})("keydown",function(s){return n.onKeyDown(s)}),i&2&&(M("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),F("p-tab",!0)("p-tab-active",n.active())("p-disabled",n.disabled())("p-component",!0))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[Ci([lt]),b],ngContentSelectors:ct,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N,L],encapsulation:2,changeDetection:0})}return e})(),oi=(()=>{class e extends T{pcTabs=d(Q(()=>$e));value=pt(void 0);id=H(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=H(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=H(()=>_e(this.pcTabs.value(),this.value()));static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-tabpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(M("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),F("p-tabpanel",!0)("p-component",!0))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[b],ngContentSelectors:ct,decls:1,vars:1,template:function(i,n){i&1&&(z(),E(0,pr,1,0)),i&2&&q(n.active()?0:-1)},dependencies:[N],encapsulation:2,changeDetection:0})}return e})(),ri=(()=>{class e extends T{static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-tabpanels"]],hostVars:6,hostBindings:function(i,n){i&2&&(M("data-pc-name","tabpanels")("role","presentation"),F("p-tabpanels",!0)("p-component",!0))},features:[b],ngContentSelectors:ct,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N],encapsulation:2,changeDetection:0})}return e})(),$e=(()=>{class e extends T{value=pt(void 0);scrollable=Ce(!1,{transform:O});lazy=Ce(!1,{transform:O});selectOnFocus=Ce(!1,{transform:O});showNavigators=Ce(!0,{transform:O});tabindex=Ce(0,{transform:ue});id=le(yt("pn_id_"));_componentStyle=d(In);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-tabs"]],hostVars:8,hostBindings:function(i,n){i&2&&(M("data-pc-name","tabs")("id",n.id),F("p-tabs",!0)("p-tabs-scrollable",n.scrollable())("p-component",!0))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[D([In]),b],ngContentSelectors:ct,decls:1,vars:0,template:function(i,n){i&1&&(z(),$(0))},dependencies:[N],encapsulation:2,changeDetection:0})}return e})(),Lt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[$e,ri,oi,Nt,ni]})}return e})();var je=class{id;name;area;icon;bill;color;isAvaiable;constructor(o,t,i,n,r,s,m){this.id=o??"",this.name=t??"",this.area=i??"",this.icon=n??"",this.bill=r??new J,this.color=s??"",this.isAvaiable=m??!0}},J=class{id;listArray;subTotal;total;VAT;status;method;constructor(o,t,i,n,r,s,m){this.id=o??"",this.listArray=t??[],this.subTotal=i??0,this.total=n??0,this.VAT=r??0,this.status=s??0,this.method=m??0}};var v=class{name;price;id;image;descrip;count;category_id;category_name;constructor(o,t,i,n,r,s,m,K){this.id=o??"",this.name=t??"",this.price=i??0,this.image=n??"",this.descrip=r??"",this.count=s??0,this.category_id=m??"",this.category_name=K??""}},ye=class{id;name;icon;count;color;constructor(o,t,i,n,r){this.id=o??"",this.name=t??"",this.icon=i??"",this.count=n??0,this.color=r??""}};var Dn=(e,o)=>o.value;function gr(e,o){if(e&1&&(a(0,"p-tab",2),h(1),l()),e&2){let t=o.$implicit;x("value",t.value),u(),ie(t.title)}}function br(e,o){if(e&1){let t=j();a(0,"div",5),g("click",function(){let n=w(t).$implicit,r=c(2);return I(r.ClickOnTable(n))})("dblclick",function(){w(t);let n=c(2);return I(n.doubleClickOnTable())}),h(1),l()}if(e&2){let t=o.$implicit;u(),ie(t.name)}}function _r(e,o){if(e&1&&(a(0,"p-tabpanel",2)(1,"div",3),Y(2,br,2,1,"div",4,ce),l()()),e&2){let t=o.$implicit;x("value",t.value),u(2),X(t.content)}}var Pt=class e{tabs=[];outputTable=new P;outputDbcFlag=new P;tableList=[];displayAreaTab=[];area=[{id:"A001",name:"indoor"},{id:"A002",name:"Outdoor"},{id:"A003",name:"Rooftop"}];tables=[{id:"T001",name:"Table 1",area:"A001",icon:"table_icon_1.png",bill:new J("B001",[new v("I001","Burger",5.99,"burger.png"),new v("I002","Pasta",8.99,"pasta.png")]),color:"red",isAvaiable:!1},{id:"T002",name:"Table 2",area:"A002",icon:"table_icon_2.png",bill:new J("B002",[new v("I003","Pizza",12.99,"pizza.png"),new v("I004","Salad",6.99,"salad.png")]),color:"blue",isAvaiable:!0},{id:"T003",name:"Table 3",area:"A003",icon:"table_icon_3.png",bill:new J("B003",[new v("I005","Steak",19.99,"steak.png"),new v("I006","Wine",15.99,"wine.png")]),color:"green",isAvaiable:!1},{id:"T004",name:"Table 4",area:"A001",icon:"table_icon_4.png",bill:new J("B004",[new v("I007","Sushi",22.99,"sushi.png"),new v("I008","Miso Soup",4.99,"miso_soup.png")]),color:"yellow",isAvaiable:!0},{id:"T005",name:"Table 5",area:"A002",icon:"table_icon_5.png",bill:new J("B005",[new v("I009","Tacos",9.99,"tacos.png"),new v("I010","Guacamole",3.99,"guacamole.png")]),color:"orange",isAvaiable:!1},{id:"T006",name:"Table 6",area:"A001",icon:"table_icon_6.png",bill:new J("B006",[new v("I011","Pancakes",7.99,"pancakes.png"),new v("I012","Coffee",2.99,"coffee.png")]),color:"purple",isAvaiable:!0},{id:"T007",name:"Table 7",area:"A003",icon:"table_icon_7.png",bill:new J("B007",[new v("I013","Lobster",29.99,"lobster.png"),new v("I014","Champagne",49.99,"champagne.png")]),color:"brown",isAvaiable:!1},{id:"T008",name:"Table 8",area:"A002",icon:"table_icon_8.png",bill:new J("B008",[new v("I015","Ice Cream",5.49,"ice_cream.png"),new v("I016","Milkshake",4.49,"milkshake.png")]),color:"pink",isAvaiable:!0}];ngOnInit(){this.displayAreaTab=this.area.map((o,t)=>({title:o.name,value:t,content:this.tables.filter(i=>i.area===o.id)}))}ClickOnTable(o){console.log("Selected Bill:",o),this.outputTable.emit(o)}doubleClickOnTable(){this.outputDbcFlag.emit(!0),console.log("Dbc Selected Bill:")}EnableNewBill(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-table-screen"]],outputs:{outputTable:"outputTable",outputDbcFlag:"outputDbcFlag"},decls:8,vars:0,consts:[[2,"overflow-y","auto","width","100%"],["value","0"],[3,"value"],[1,"menuContent",2,"margin-left","5px !important"],[1,"box"],[1,"box",3,"click","dblclick"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"p-tabs",1)(2,"p-tablist"),Y(3,gr,2,2,"p-tab",2,Dn),l(),a(5,"p-tabpanels"),Y(6,_r,4,1,"p-tabpanel",2,Dn),l()()()),t&2&&(u(3),X(i.displayAreaTab),u(3),X(i.displayAreaTab))},dependencies:[Lt,$e,ri,oi,Nt,ni,N],styles:[".menuContent[_ngcontent-%COMP%]{color:#f7f7f7;margin-top:10px;margin-left:20px;gap:20px;row-gap:20px;display:flex;justify-content:flex-start;align-content:flex-start;flex-wrap:wrap;overflow-y:auto!important}.box[_ngcontent-%COMP%]{height:130px;width:150px;background:#3a7d44;font-size:20px;border-radius:10px;padding:10px}.box[_ngcontent-%COMP%]:hover{cursor:pointer}"]})};var Ae=class{VAT_current;PaymentMethods;constructor(o,t){this.VAT_current=o??0,this.PaymentMethods=t??[]}};function vr(e,o){if(e&1){let t=j();a(0,"div",3)(1,"div",4)(2,"div",5),g("dblclick",function(){let n=w(t).$index,r=c();return I(r.RemoveItem(n))}),ae(),a(3,"svg",6),V(4,"path",7),l()(),Ue(),a(5,"div",8),h(6),l(),a(7,"div",9),ae(),a(8,"svg",10),V(9,"path",11),l(),h(10),l(),Ue(),a(11,"div",9),h(12),l()()()}if(e&2){let t=o.$implicit;u(6),ie(t.name),u(4),ne(" ",t.count," "),u(2),ie(t.price*t.count)}}var Rt=class e{currentTable=new je;currentSetting=new Ae;RemoveItem(o){this.currentTable.bill.listArray.splice(o,1),this.CalculateBill()}CalculateBill(){this.currentTable.bill.VAT=this.currentSetting.VAT_current,this.currentTable.bill.subTotal=0,this.currentTable.bill.listArray.forEach(o=>{this.currentTable.bill.subTotal+=o.price}),this.currentTable.bill.total=this.currentTable.bill.subTotal*(1+this.currentTable.bill.VAT),this.currentTable.bill.total=Number(this.currentTable.bill.total.toFixed(2))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-bill-screen"]],inputs:{currentTable:"currentTable",currentSetting:"currentSetting"},decls:6,vars:1,consts:[[2,"flex-grow","1"],[2,"padding-left","10px","display","flex","align-items","center"],[2,"padding","5px","padding-top","20px","height","50px","width","90%","color","rgb(109, 107, 107)","font-weight","500"],[1,"OrderScreen"],[1,"orderItem"],[1,"remove_buttom",2,"width","10%","padding-top","5px",3,"dblclick"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 -960 960 960","width","24px","fill","#D16D6A"],["d","M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"],[2,"width","50%"],[2,"width","20%"],["xmlns","http://www.w3.org/2000/svg","height","24px","viewBox","0 -960 960 960","width","24px","fill","#B7B7B7"],["d","m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"div",1)(2,"div",2),h(3),l()(),Y(4,vr,13,3,"div",3,ce),l()),t&2&&(u(3),ne(" ",i.currentTable.name," "),u(),X(i.currentTable.bill.listArray))},styles:["*[_ngcontent-%COMP%]{color:#f7f7f7}.OrderScreen[_ngcontent-%COMP%]{margin-left:10px;height:90%;overflow-y:auto}.orderItem[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-grow:1;border-radius:5px;background-color:#8eb486;align-content:center;justify-content:center;align-items:center;height:50px;padding-left:5px;margin-bottom:5px;margin-right:20px}.orderItem[_ngcontent-%COMP%]:hover{background-color:#9ab694}.remove_buttom[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{cursor:pointer}.orderItem[_ngcontent-%COMP%]:active{background-color:#a4bb9f;cursor:pointer}"]})};function yr(e,o){if(e&1){let t=j();a(0,"div",8),g("click",function(){let n=w(t).$implicit,r=c();return I(r.clickOnCategory(n.id))}),h(1),l()}if(e&2){let t=o.$implicit;u(),ie(t.name)}}var Bt=class e{searchKeyword="";selectedCategory=new P;categories=[new ye("C001","Fast Food","fast_food.png",0,"red"),new ye("C002","Italian","italian.png",0,"green"),new ye("C003","Healthy","healthy.png",0,"blue"),new ye("C004","Grill","grill.png",0,"orange"),new ye("C005","Beverages","beverages.png",0,"purple")];clickOnCategory(o){this.selectedCategory.emit(o),console.log("emite category "+o)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=f({type:e,selectors:[["app-category-screen"]],outputs:{selectedCategory:"selectedCategory"},decls:12,vars:1,consts:[[1,"flex-wrap","justify-center",2,"margin-top","15px","margin-left","20px","position","absolute","display","flex"],["variant","on"],[1,"pi","pi-search"],["pInputText","","id","on_label","autocomplete","off",3,"ngModelChange","ngModel"],["for","on_label"],[1,"material-symbols-outlined",2,"margin","5px","position","absolute"],[1,"menuContent",2,"padding-top","50px"],[1,"box"],[1,"box",3,"click"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"p-floatlabel",1)(2,"p-iconfield"),V(3,"p-inputicon",2),a(4,"input",3),ft("ngModelChange",function(r){return mt(i.searchKeyword,r)||(i.searchKeyword=r),r}),l()(),a(5,"label",4),h(6,"Search"),l()(),a(7,"span",5),h(8,` search
`),l()(),a(9,"div",6),Y(10,yr,2,1,"div",7,ce),l()),t&2&&(u(4),ht("ngModel",i.searchKeyword),u(6),X(i.categories))},dependencies:[It,Kt,Dt,qt,Ft,gn,ze,Re,Be,he,Vt,ti],styles:[`.box{color:#f8f5e9;height:130px;width:150px;background:#3a7d44;font-size:20px;border-radius:10px;padding:10px}.box:hover{cursor:pointer}.menuContent{margin-top:10px;margin-left:20px;gap:20px;row-gap:20px;display:flex;justify-content:flex-start;align-content:flex-start;flex-wrap:wrap;overflow-y:auto!important}.SearchBar{margin-top:10px;margin-left:10px}
`],encapsulation:2})};var Cr=["icon"],xr=["content"],En=e=>({$implicit:e}),wr=(e,o)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":o});function Ir(e,o){e&1&&te(0)}function Dr(e,o){if(e&1&&V(0,"span",1),e&2){let t=c(3);W(t.checked?t.onIcon:t.offIcon),x("ngClass",gt(4,wr,t.iconPos==="left",t.iconPos==="right")),M("data-pc-section","icon")}}function Mr(e,o){if(e&1&&E(0,Dr,1,7,"span",3),e&2){let t=c(2);q(t.onIcon||t.offIcon?0:-1)}}function Er(e,o){e&1&&te(0)}function Tr(e,o){if(e&1&&E(0,Er,1,0,"ng-container",2),e&2){let t=c(2);x("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",we(2,En,t.checked))}}function Sr(e,o){if(e&1&&(E(0,Mr,1,1)(1,Tr,1,4,"ng-container"),a(2,"span",1),h(3),l()),e&2){let t=c();q(t.iconTemplate?1:0),u(2),x("ngClass",t.cx("label")),M("data-pc-section","label"),u(),ie(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Ar=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,kr={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Mn=(()=>{class e extends A{name="togglebutton";theme=Ar;classes=kr;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Fr={provide:Se,useExisting:Q(()=>si),multi:!0},si=(()=>{class e extends T{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new P;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=d(Mn);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,n,r){if(i&1&&(Z(r,Cr,4),Z(r,xr,4),Z(r,ve,4)),i&2){let s;R(s=B())&&(n.iconTemplate=s.first),R(s=B())&&(n.contentTemplate=s.first),R(s=B())&&(n.templates=s)}},hostVars:2,hostBindings:function(i,n){i&2&&W(n.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",O],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",ue],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",O],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[D([Fr,Mn]),b],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,n){i&1&&(a(0,"button",0),g("click",function(s){return n.toggle(s)}),a(1,"span",1),E(2,Ir,1,0,"ng-container",2)(3,Sr,4,4),l()()),i&2&&(W(n.styleClass),x("ngClass",n.cx("root"))("tabindex",n.tabindex)("disabled",n.disabled),M("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled),u(),x("ngClass",n.cx("content")),u(),x("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",we(13,En,n.checked)),u(),q(n.contentTemplate?-1:3))},dependencies:[lt,N,Ve,ge,L],encapsulation:2,changeDetection:0})}return e})();var Vr=["item"],Or=(e,o)=>({$implicit:e,index:o});function Nr(e,o){e&1&&te(0)}function Lr(e,o){if(e&1&&E(0,Nr,1,0,"ng-container",3),e&2){let t=c(2),i=t.$implicit,n=t.$index,r=c();x("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",gt(2,Or,i,n))}}function Pr(e,o){e&1&&E(0,Lr,1,5,"ng-template",null,0,oe)}function Rr(e,o){if(e&1){let t=j();a(0,"p-toggleButton",2),g("onChange",function(n){let r=w(t),s=r.$implicit,m=r.$index,K=c();return I(K.onOptionSelect(n,s,m))}),E(1,Pr,2,0),l()}if(e&2){let t=o.$implicit,i=c();x("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(t))("onLabel",i.getOptionLabel(t))("offLabel",i.getOptionLabel(t))("disabled",i.disabled||i.isOptionDisabled(t))("allowEmpty",i.allowEmpty)("size",i.size),u(),q(i.itemTemplate||i._itemTemplate?1:-1)}}var Br=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,zr={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},Tn=(()=>{class e extends A{name="selectbutton";theme=Br;classes=zr;static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var $r={provide:Se,useExisting:Q(()=>Sn),multi:!0},Sn=(()=>{class e extends T{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new P;onChange=new P;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=d(Tn);getOptionLabel(t){return this.optionLabel?vt(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?vt(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?vt(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,i,n){if(this.disabled||this.isOptionDisabled(i))return;let r=this.isSelected(i);if(r&&this.unselectable)return;let s=this.getOptionValue(i),m;if(this.multiple)r?m=this.value.filter(K=>!_e(K,s,this.equalityKey)):m=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;m=r?null:s}this.focusedIndex=n,this.value=m,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:i,index:n})}changeTabIndexes(t,i){let n,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[s],index:s});i==="prev"?n.index===0?r=this.el.nativeElement.children.length-1:r=n.index-1:n.index===this.el.nativeElement.children.length-1?r=0:r=n.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(i=>!_e(i,this.getOptionValue(t),this.dataKey))}isSelected(t){let i=!1,n=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(_e(r,n,this.dataKey)){i=!0;break}}}else i=_e(this.getOptionValue(t),this.value,this.equalityKey);return i}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=p(e)))(n||e)}})();static \u0275cmp=f({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,n,r){if(i&1&&(Z(r,Vr,4),Z(r,ve,4)),i&2){let s;R(s=B())&&(n.itemTemplate=s.first),R(s=B())&&(n.templates=s)}},hostVars:10,hostBindings:function(i,n){i&2&&(M("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Fe(n.style),F("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",O],tabindex:[2,"tabindex","tabindex",ue],multiple:[2,"multiple","multiple",O],allowEmpty:[2,"allowEmpty","allowEmpty",O],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",O],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",O]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[D([$r,Tn]),b],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,n){i&1&&Y(0,Rr,2,9,"p-toggleButton",1,Ii),i&2&&X(n.options)},dependencies:[si,ze,Be,he,N,ge,L],encapsulation:2,changeDetection:0})}return e})(),An=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=C({type:e});static \u0275inj=y({imports:[Sn,L,L]})}return e})();var jr=()=>({height:"90vh"}),Hr=()=>[20,60,30],Gr=()=>[15,20],Ur=()=>[50,50],Wr=()=>[30,20],Kr=()=>[40,60],qr=()=>[20,20];function Zr(e,o){if(e&1){let t=j();a(0,"div",5)(1,"app-app-header",6),g("tabOption",function(n){w(t);let r=c();return I(r.setTabOption(n))}),l()()}}function Qr(e,o){if(e&1){let t=j();a(0,"app-table-screen",12),g("outputTable",function(n){w(t);let r=c(3);return I(r.setTable(n))})("outputDbcFlag",function(n){w(t);let r=c(3);return I(r.setTableAndOpenMenu(n))}),l()}}function Yr(e,o){if(e&1){let t=j();a(0,"app-category-screen",13),g("selectedCategory",function(n){w(t);let r=c(3);return I(r.setCategory(n))}),l()}}function Xr(e,o){e&1&&(a(0,"div",11)(1,"div",14),h(2,"df"),l(),a(3,"div",14),h(4,"df"),l(),a(5,"div",14),h(6,"df"),l(),a(7,"div",14),h(8,"df"),l(),a(9,"div",14),h(10,"df"),l(),a(11,"div",14),h(12,"df"),l(),a(13,"div",14),h(14,"df"),l(),a(15,"div",14),h(16,"df"),l(),a(17,"div",14),h(18,"df"),l()())}function Jr(e,o){if(e&1&&(a(0,"div",8),E(1,Qr,1,0,"app-table-screen",9)(2,Yr,1,0,"app-category-screen",10)(3,Xr,19,0,"div",11),l()),e&2){let t,i=c(2);u(),q((t=i.tabOption)==="2"?1:t==="3"?2:3)}}function es(e,o){if(e&1){let t=j();a(0,"div",14)(1,"div",16),g("dblclick",function(){let n=w(t).$implicit,r=c(3);return I(r.sendItemToBill(n))}),a(2,"div",17),h(3),l(),a(4,"div",18),h(5),l()(),a(6,"div",19)(7,"button",20),g("click",function(){let n=w(t).$index,r=c(3);return I(r.decrease(n))}),h(8," - "),l(),a(9,"input",21),ft("ngModelChange",function(n){let r=w(t).$implicit;return mt(r.count,n)||(r.count=n),I(n)}),g("input",function(n){let r=w(t).$index,s=c(3);return I(s.onInputChange(r,n))}),l(),a(10,"button",22),g("click",function(){let n=w(t).$index,r=c(3);return I(r.increase(n))}),h(11," + "),l()()()}if(e&2){let t=o.$implicit;u(3),ne(" ",t.name," "),u(2),ne(" ",t.price," "),u(4),ht("ngModel",t.count)}}function ts(e,o){if(e&1&&(a(0,"div",15),Y(1,es,12,3,"div",14,ce),l()),e&2){let t=c(2);u(),X(t.displayItemServing)}}function is(e,o){e&1&&(a(0,"p-splitter",7),E(1,Jr,4,1,"ng-template",null,0,oe)(3,ts,3,0,"ng-template",null,0,oe),l()),e&2&&x("panelSizes",fe(2,Ur))("minSizes",fe(3,Wr))}function ns(e,o){if(e&1&&V(0,"app-bill-screen",23),e&2){let t=c(2);x("currentTable",t.tableInput)("currentSetting",t.setting)}}function os(e,o){if(e&1&&V(0,"div",34),e&2){let t=o.$implicit;x("innerHTML",t,_i)}}function rs(e,o){if(e&1&&(a(0,"div",24)(1,"div",25)(2,"div",26)(3,"div",27),h(4," Subtotal "),l(),a(5,"div",28),h(6),l()(),a(7,"div",26)(8,"div",27),h(9," VAT(%) "),l(),a(10,"div",28),h(11),l()()(),V(12,"p-divider",29),a(13,"div",25)(14,"div",26)(15,"div",30),h(16,"Total"),l(),a(17,"div",31),h(18),l()(),a(19,"div")(20,"div",32),h(21,"Payment method"),l(),a(22,"div",33),Y(23,os,1,1,"div",34,ce),l(),a(25,"div",35),h(26,"Place Order"),l()()()()),e&2){let t=c(2);u(6),ne(" ",t.tableInput.bill.subTotal," "),u(5),ne(" ",t.setting.VAT_current*100," "),u(7),ne(" ",t.tableInput.bill.total," "),u(5),X(t.sanitizedSvgs)}}function ss(e,o){e&1&&(a(0,"p-splitter",7),E(1,ns,1,2,"ng-template",null,0,oe)(3,rs,27,3,"ng-template",null,0,oe),l()),e&2&&x("panelSizes",fe(2,Kr))("minSizes",fe(3,qr))}var kn=class e{constructor(o){this.sanitizer=o}searchKeyword="";tabOption="";tableInput=new je;selectedCategory="";displayItemServing=[];step=1;min=0;tempCount=0;setting=new Ae;sanitizedSvgs=[];paymentMethods=[];itemServings=[new v("I001","Burger",5.99,"burger.png","Delicious beef burger",0,"C001","Fast Food"),new v("I002","French Fries",3.49,"fries.png","Crispy golden fries",0,"C001","Fast Food"),new v("I003","Hot Dog",4.99,"hotdog.png","Classic hot dog with mustard",0,"C001","Fast Food"),new v("I004","Pasta",8.99,"pasta.png","Creamy Alfredo pasta",0,"C002","Italian"),new v("I005","Pizza",12.99,"pizza.png","Cheesy pepperoni pizza",0,"C002","Italian"),new v("I006","Lasagna",10.99,"lasagna.png","Layers of pasta, cheese, and sauce",0,"C002","Italian"),new v("I007","Salad",6.99,"salad.png","Fresh garden salad",0,"C003","Healthy"),new v("I008","Smoothie",5.49,"smoothie.png","Refreshing fruit smoothie",0,"C003","Healthy"),new v("I009","Vegan Wrap",7.99,"vegan_wrap.png","Nutritious vegan wrap",0,"C003","Healthy"),new v("I010","Steak",19.99,"steak.png","Juicy grilled steak",0,"C004","Grill"),new v("I011","Grilled Chicken",10.99,"grilled_chicken.png","Perfectly grilled chicken",0,"C004","Grill"),new v("I012","Wine",15.99,"wine.png","Premium red wine",0,"C005","Beverages")];ngOnInit(){this.getSetting(),this.CalculateBill(),this.setting.PaymentMethods.forEach(o=>{this.sanitizedSvgs.push(this.sanitizer.bypassSecurityTrustHtml(o))})}getSetting(){var o=['<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F8F5E9"><path d="M80-707v-173h173v60H140v113H80Zm0 627v-173h60v113h113v60H80Zm627 0v-60h113v-113h60v173H707Zm113-627v-113H707v-60h173v173h-60ZM708-251h63v63h-63v-63Zm0-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm126-126h63v63h-63v-63Zm-63 63h63v63h-63v-63Zm-63-63h63v63h-63v-63Zm252-332v252H519v-252h252ZM440-440v252H188v-252h252Zm0-332v252H188v-252h252Zm-50 534v-152H238v152h152Zm0-332v-152H238v152h152Zm331 0v-152H569v152h152Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F8F5E9"><path d="M540-420q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM220-280q-24.75 0-42.37-17.63Q160-315.25 160-340v-400q0-24.75 17.63-42.38Q195.25-800 220-800h640q24.75 0 42.38 17.62Q920-764.75 920-740v400q0 24.75-17.62 42.37Q884.75-280 860-280H220Zm100-60h440q0-42 29-71t71-29v-200q-42 0-71-29t-29-71H320q0 42-29 71t-71 29v200q42 0 71 29t29 71Zm480 180H100q-24.75 0-42.37-17.63Q40-195.25 40-220v-460h60v460h700v60ZM220-340v-400 400Z"/></svg>'];this.setting=new Ae(.1,o)}setTabOption(o){this.tabOption=o.toString(),console.log("Change tab to"+this.tabOption)}setTable(o){this.tableInput=o,console.log("Change tab to"+this.tableInput)}setTableAndOpenMenu(o){o==!0&&(this.tabOption="3",console.log("taboption "+this.tabOption))}setCategory(o){this.selectedCategory=o,this.displayItemServing=this.itemServings.filter(t=>t.category_id===o).map(t=>S({},t)),console.log(this.selectedCategory)}increase(o){this.displayItemServing[o].count+=this.step}decrease(o){this.displayItemServing[o].count>0&&(this.displayItemServing[o].count-=this.step)}onInputChange(o,t){let i=Number(t.target.value);i>=0?this.displayItemServing[o].count=i:this.displayItemServing[o].count=0}sendItemToBill(o){o.count>0&&this.tableInput.bill.id!=""&&(this.tableInput.bill.listArray.push(new v(o.id,o.name,o.price,o.image,o.descrip,o.count,o.category_id,o.category_name)),console.log(this.tableInput),this.CalculateBill())}CalculateBill(){this.tableInput.bill.VAT=this.setting.VAT_current,this.tableInput.bill.subTotal=0,this.tableInput.bill.listArray.forEach(o=>{this.tableInput.bill.subTotal+=o.price}),this.tableInput.bill.total=this.tableInput.bill.subTotal*(1+this.tableInput.bill.VAT),this.tableInput.bill.total=this.tableInput.bill.subTotal*(1+this.tableInput.bill.VAT),this.tableInput.bill.total=Number(this.tableInput.bill.total.toFixed(2))}static \u0275fac=function(t){return new(t||e)(G(ki))};static \u0275cmp=f({type:e,selectors:[["app-cafe-sys"]],decls:10,vars:7,consts:[["panel",""],["rel","stylesheet","href",vi`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0&icon_names=search`],[1,"card"],[1,"MenuCard"],["styleClass","mb-8 ",3,"panelSizes","minSizes"],[1,"col","flex","items-center","justify-center",2,"flex-grow","1"],[3,"tabOption"],["layout","vertical",3,"panelSizes","minSizes"],[2,"display","flex","width","100%"],[2,"overflow-y","auto","width","100%"],[2,"display","flex","width","100%","height","100%"],[1,"menuContent",2,"padding-top","50px"],[2,"overflow-y","auto","width","100%",3,"outputTable","outputDbcFlag"],[2,"display","flex","width","100%","height","100%",3,"selectedCategory"],[1,"box"],[1,"menuContent"],[3,"dblclick"],[2,"width","100%","height","50px","font-size","medium","font-weight","bold","color","#f8f5e9"],[2,"width","100%","height","10px","color","#f8f5e9"],[1,"custom-input-number"],[2,"width","50px","color","#f8f5e9","background-color","#d8a075","border-top-left-radius","10px","border-bottom-left-radius","10px","border-color","#d8a075",3,"click"],["step","1","type","number",2,"width","50px","font-size","larger","text-align","center","background-color","#db8645","color","#f8f5e9",3,"ngModelChange","input","ngModel"],[2,"width","50px","color","#f8f5e9","background-color","#d8a075","border-top-right-radius","10px","border-bottom-right-radius","10px","border-color","#d8a075",3,"click"],[2,"overflow-y","auto","width","100%",3,"currentTable","currentSetting"],[1,"col","flex","items-center","justify-center",2,"flex-grow","1","height","95%","overflow-y","auto","background-color","#8eb486","border-radius","5px","padding-left","5px","margin","10px","margin-right","20px"],[2,"margin","10px"],[1,"totalCount",2,"display","flex","align-items","center"],[2,"width","80%","flex-shrink","1","color","#f7f7f7"],[2,"width","20%","flex-shrink","2","color","#f7f7f7"],["type","dashed"],[2,"width","80%","flex-shrink","1"],[2,"width","20%","flex-shrink","2"],[2,"margin-top","20px"],[2,"display","flex","padding","20px"],[1,"payMethod",2,"height","80px","width","80px",3,"innerHTML"],["id","orderButton"]],template:function(t,i){t&1&&(V(0,"link",1),a(1,"div",2)(2,"div",3)(3,"p-splitter",4),E(4,Zr,2,0,"ng-template",null,0,oe)(6,is,5,4,"ng-template",null,0,oe)(8,ss,5,4,"ng-template",null,0,oe),l()()()),t&2&&(u(3),Fe(fe(4,jr)),x("panelSizes",fe(5,Hr))("minSizes",fe(6,Gr)))},dependencies:[Gi,Ki,it,xt,It,Dt,Ft,Vt,ze,Re,ei,Be,he,vn,ii,Lt,Pt,Rt,Bt,An],styles:["*[_ngcontent-%COMP%]{color:#f7f7f7}.card[_ngcontent-%COMP%]{margin-top:1rem;margin-left:1rem;margin-right:1rem;height:90%}.box[_ngcontent-%COMP%]{color:#f8f5e9;height:130px;width:150px;background:#df6d14;font-size:20px;border-radius:10px;padding:10px}.box[_ngcontent-%COMP%]:hover{cursor:pointer}.menuContent[_ngcontent-%COMP%]{width:100%;margin-top:10px;margin-left:20px;gap:20px;row-gap:20px;display:flex;justify-content:flex-start;align-content:flex-start;flex-wrap:wrap;overflow-y:auto}.SearchBar[_ngcontent-%COMP%]{margin-top:10px;margin-left:10px}.OrderScreen[_ngcontent-%COMP%]{margin-left:10px;height:90%;overflow-y:auto}.orderItem[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-grow:1;border-radius:5px;background-color:#eaeef5;align-content:center;justify-content:center;align-items:center;height:50px;padding-left:5px;margin-bottom:5px;margin-right:20px}.orderItem[_ngcontent-%COMP%]:hover{background-color:#e3e7ee;cursor:pointer}.orderItem[_ngcontent-%COMP%]:active{background-color:#d1d7dd;cursor:pointer}#orderButton[_ngcontent-%COMP%]:hover{cursor:pointer}#orderButton[_ngcontent-%COMP%]:active{background-color:#b5bcc4;cursor:pointer}#orderButton[_ngcontent-%COMP%]{border:5px;border-radius:20px;background-color:#a6adb9;height:60px;display:flex;align-items:center;justify-content:center}.payMethod[_ngcontent-%COMP%]:hover{cursor:pointer}.custom-input-number[_ngcontent-%COMP%]{display:flex;margin-top:20px}  .p-divider.p-divider-dashed{border-top:1px dashed black!important}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}input[_ngcontent-%COMP%]:focus{outline:none}"]})};export{kn as CafeSysComponent};
