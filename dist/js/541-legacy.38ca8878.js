"use strict";(self["webpackChunkyes_cola"]=self["webpackChunkyes_cola"]||[]).push([[541],{3541:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>k,keyboardDidClose:()=>y,keyboardDidOpen:()=>l,keyboardDidResize:()=>w,resetKeyboardAssist:()=>h,setKeyboardClose:()=>g,setKeyboardOpen:()=>b,startKeyboardAssist:()=>p,trackViewportChanges:()=>D});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ionKeyboardDidShow",o="ionKeyboardDidHide",a=150;let d={},r={},n=!1;const h=()=>{d={},r={},n=!1},p=e=>{c(e),e.visualViewport&&(r=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),l()||w(e)?b(e):y(e)&&g(e)})},c=e=>{e.addEventListener("keyboardDidShow",(t=>b(e,t))),e.addEventListener("keyboardDidHide",(()=>g(e)))},b=(e,t)=>{f(e,t),n=!0},g=e=>{u(e),n=!1},l=()=>{const e=(d.height-r.height)*r.scale;return!n&&d.width===r.width&&e>a},w=e=>n&&!y(e),y=e=>n&&r.height===e.innerHeight,f=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-r.height,o=new CustomEvent(s,{detail:{keyboardHeight:i}});e.dispatchEvent(o)},u=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},D=e=>{d=Object.assign({},r),r=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541-legacy.38ca8878.js.map