import{r as L}from"./index.ed373d49.js";var P={};function Q(r){if(!r||typeof window>"u")return;const t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=r,document.head.appendChild(t),r}Object.defineProperty(P,"__esModule",{value:!0});var e=L;function V(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var s=V(e);Q(`.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`);const F=e.forwardRef(function({style:t={},className:v="",autoFill:n=!1,play:i=!0,pauseOnHover:l=!1,pauseOnClick:d=!1,direction:a="left",speed:h=50,delay:$=0,loop:b=0,gradient:T=!1,gradientColor:E=[255,255,255],gradientWidth:y=200,onFinish:B,onCycleComplete:D,onMount:k,children:g},U){const[R,X]=e.useState(0),[x,G]=e.useState(0),[w,O]=e.useState(1),[q,J]=e.useState(!1),Y=e.useRef(null),u=U||Y,m=e.useRef(null),p=e.useCallback(()=>{if(m.current&&u.current){const o=u.current.getBoundingClientRect(),N=m.current.getBoundingClientRect();let c=o.width,f=N.width;(a==="up"||a==="down")&&(c=o.height,f=N.height),O(n&&c&&f&&f<c?Math.ceil(c/f):1),X(c),G(f)}},[n,u,a]);e.useEffect(()=>{if(q&&(p(),m.current&&u.current)){const o=new ResizeObserver(()=>p());return o.observe(u.current),o.observe(m.current),()=>{o&&o.disconnect()}}},[p,u,q]),e.useEffect(()=>{p()},[p,g]),e.useEffect(()=>{J(!0)},[]),e.useEffect(()=>{typeof k=="function"&&k()},[]);const C=e.useMemo(()=>n?x*w/h:x<R?R/h:x/h,[n,R,x,w,h]),M=`rgba(${E[0]}, ${E[1]}, ${E[2]}`,Z=e.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!i||l?"paused":"running","--pause-on-click":!i||l&&!d||d?"paused":"running","--width":a==="up"||a==="down"?"100vh":"100%","--transform":a==="up"?"rotate(-90deg)":a==="down"?"rotate(90deg)":"none"}),[t,i,l,d,a]),K=e.useMemo(()=>({"--gradient-color":`${M}, 1), ${M}, 0)`,"--gradient-width":typeof y=="number"?`${y}px`:y}),[M,y]),A=e.useMemo(()=>({"--play":i?"running":"paused","--direction":a==="left"?"normal":"reverse","--duration":`${C}s`,"--delay":`${$}s`,"--iteration-count":b?`${b}`:"infinite","--min-width":n?"auto":"100%"}),[i,a,C,$,b,n]),S=e.useMemo(()=>({"--transform":a==="up"?"rotate(90deg)":a==="down"?"rotate(-90deg)":"none"}),[a]),I=e.useCallback(o=>[...Array(Number.isFinite(o)&&o>=0?o:0)].map((N,c)=>s.default.createElement(e.Fragment,{key:c},e.Children.map(g,f=>s.default.createElement("div",{style:S,className:"child"},f)))),[S,g]);return q?s.default.createElement("div",{ref:u,style:Z,className:"marquee-container "+v},T&&s.default.createElement("div",{style:K,className:"overlay"}),s.default.createElement("div",{className:"marquee",style:A,onAnimationIteration:D,onAnimationEnd:B},s.default.createElement("div",{className:"initial-child-container",ref:m},e.Children.map(g,o=>s.default.createElement("div",{style:S,className:"child"},o))),I(w-1)),s.default.createElement("div",{className:"marquee",style:A},I(w))):null});var H=P.default=F,W={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee=L,te=Symbol.for("react.element"),ne=Symbol.for("react.fragment"),re=Object.prototype.hasOwnProperty,ae=ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function z(r,t,v){var n,i={},l=null,d=null;v!==void 0&&(l=""+v),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(d=t.ref);for(n in t)re.call(t,n)&&!oe.hasOwnProperty(n)&&(i[n]=t[n]);if(r&&r.defaultProps)for(n in t=r.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:te,type:r,key:l,ref:d,props:i,_owner:ae.current}}_.Fragment=ne;_.jsx=z;_.jsxs=z;W.exports=_;var j=W.exports;function se(){return j.jsx(H,{speed:110,children:j.jsxs("h1",{className:"leading-none text-9xl uppercase font-black [word-spacing:30px] overflow-hidden",children:[j.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-tr from-mars-red to-mars-fuchsia",children:[" ","404"," "]}),"Exploración fallida. "," "]})})}export{se as default};
