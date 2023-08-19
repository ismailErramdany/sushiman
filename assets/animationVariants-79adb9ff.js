import{r as s,i as L,L as T,a as j,b as R,c as w,l as k,d as v,e as p,f as N,g as D,h as F,k as G,m as Y,n as $,o as q,p as z,s as X,q as J,t as K}from"./index-01d344da.js";const H=s.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),S=s.createContext({}),I=s.createContext(null),E=L?s.useLayoutEffect:s.useEffect;function Q(t,e,o,n){const{visualElement:a}=s.useContext(S),i=s.useContext(T),r=s.useContext(I),l=s.useContext(H).reducedMotion,m=s.useRef();n=n||i.renderer,!m.current&&n&&(m.current=n(t,{visualState:e,parent:a,props:o,presenceContext:r,blockInitialAnimation:r?r.initial===!1:!1,reducedMotionConfig:l}));const u=m.current;return s.useInsertionEffect(()=>{u&&u.update(o,r)}),E(()=>{u&&u.render()}),s.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?E:s.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function Z(t,e,o){return s.useCallback(n=>{n&&t.mount&&t.mount(n),e&&(n?e.mount(n):e.unmount()),o&&(typeof o=="function"?o(n):j(o)&&(o.current=n))},[e])}function tt(t,e){if(R(t)){const{initial:o,animate:n}=t;return{initial:o===!1||w(o)?o:void 0,animate:w(n)?n:void 0}}return t.inherit!==!1?e:{}}function et(t){const{initial:e,animate:o}=tt(t,s.useContext(S));return s.useMemo(()=>({initial:e,animate:o}),[A(e),A(o)])}function A(t){return Array.isArray(t)?t.join(" "):t}const nt=s.createContext({}),ot=s.createContext({}),at=Symbol.for("motionComponentSymbol");function st({preloadedFeatures:t,createVisualElement:e,useRender:o,useVisualState:n,Component:a}){t&&k(t);function i(l,m){let u;const d={...s.useContext(H),...l,layoutId:it(l)},{isStatic:c}=d,f=et(l),g=n(l,c);if(!c&&L){f.visualElement=Q(a,g,d,e);const V=s.useContext(ot),x=s.useContext(T).strict;f.visualElement&&(u=f.visualElement.loadFeatures(d,x,t,V))}return s.createElement(S.Provider,{value:f},u&&f.visualElement?s.createElement(u,{visualElement:f.visualElement,...d}):null,o(a,l,Z(g,f.visualElement,m),g,c,f.visualElement))}const r=s.forwardRef(i);return r[at]=a,r}function it({layoutId:t}){const e=s.useContext(nt).id;return e&&t!==void 0?e+"-"+t:t}function rt(t){function e(n,a={}){return st(t(n,a))}if(typeof Proxy>"u")return e;const o=new Map;return new Proxy(e,{get:(n,a)=>(o.has(a)||o.set(a,e(a)),o.get(a))})}const P=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function W(t,e,o){for(const n in e)!v(e[n])&&!p(n,o)&&(t[n]=e[n])}function ut({transformTemplate:t},e,o){return s.useMemo(()=>{const n=P();return N(n,e,{enableHardwareAcceleration:!o},t),Object.assign({},n.vars,n.style)},[e])}function ct(t,e,o){const n=t.style||{},a={};return W(a,n,t),Object.assign(a,ut(t,e,o)),t.transformValues?t.transformValues(a):a}function lt(t,e,o){const n={},a=ct(t,e,o);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=a,n}const ft=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function M(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||ft.has(t)}let _=t=>!M(t);function dt(t){t&&(_=e=>e.startsWith("on")?!M(e):t(e))}try{dt(require("@emotion/is-prop-valid").default)}catch{}function mt(t,e,o){const n={};for(const a in t)a==="values"&&typeof t.values=="object"||(_(a)||o===!0&&M(a)||!e&&!M(a)||t.draggable&&a.startsWith("onDrag"))&&(n[a]=t[a]);return n}const B=()=>({...P(),attrs:{}});function yt(t,e,o,n){const a=s.useMemo(()=>{const i=B();return D(i,e,{enableHardwareAcceleration:!1},F(n),t.transformTemplate),{...i.attrs,style:{...i.style}}},[e]);if(t.style){const i={};W(i,t.style,t),a.style={...i,...a.style}}return a}function gt(t=!1){return(o,n,a,{latestValues:i},r)=>{const m=(G(o)?yt:lt)(n,i,r,o),d={...mt(n,typeof o=="string",t),...m,ref:a},{children:c}=n,f=s.useMemo(()=>v(c)?c.get():c,[c]);return s.createElement(o,{...d,children:f})}}function Ct(t){const e=s.useRef(null);return e.current===null&&(e.current=t()),e.current}function ht(t){const e=v(t)?t.get():t;return Y(e)?e.toValue():e}function Vt({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:o},n,a,i){const r={latestValues:xt(n,a,i,t),renderState:e()};return o&&(r.mount=l=>o(n,l,r)),r}const O=t=>(e,o)=>{const n=s.useContext(S),a=s.useContext(I),i=()=>Vt(t,e,n,a);return o?i():Ct(i)};function xt(t,e,o,n){const a={},i=n(t,{});for(const f in i)a[f]=ht(i[f]);let{initial:r,animate:l}=t;const m=R(t),u=$(t);e&&u&&!m&&t.inherit!==!1&&(r===void 0&&(r=e.initial),l===void 0&&(l=e.animate));let d=o?o.initial===!1:!1;d=d||r===!1;const c=d?l:r;return c&&typeof c!="boolean"&&!q(c)&&(Array.isArray(c)?c:[c]).forEach(g=>{const V=z(t,g);if(!V)return;const{transitionEnd:x,transition:Pt,...b}=V;for(const C in b){let y=b[C];if(Array.isArray(y)){const U=d?y.length-1:0;y=y[U]}y!==null&&(a[C]=y)}for(const C in x)a[C]=x[C]}),a}const Mt={useVisualState:O({scrapeMotionValuesFromProps:X,createRenderState:B,onMount:(t,e,{renderState:o,latestValues:n})=>{try{o.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{o.dimensions={x:0,y:0,width:0,height:0}}D(o,n,{enableHardwareAcceleration:!1},F(e.tagName),t.transformTemplate),J(e,o)}})},St={useVisualState:O({scrapeMotionValuesFromProps:K,createRenderState:P})};function vt(t,{forwardMotionProps:e=!1},o,n){return{...G(t)?Mt:St,preloadedFeatures:o,useRender:gt(e),createVisualElement:n,Component:t}}const wt=rt(vt),h={duration:.5,ease:"linear"},Et={hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:h}},At={hidden:{opacity:0,y:-100},show:{opacity:1,y:0,transition:h}},Lt={hidden:{opacity:0,x:100},show:{opacity:1,x:0,transition:h}},Tt={hidden:{opacity:0,x:-100},show:{opacity:1,x:0,transition:h}},Rt={hidden:{opacity:0,scaleY:0},show:{opacity:1,scaleY:1,transition:h}};export{At as D,Tt as L,Lt as R,Et as U,wt as m,Rt as s};