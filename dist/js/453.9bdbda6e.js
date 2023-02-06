"use strict";(self["webpackChunkyes_cola"]=self["webpackChunkyes_cola"]||[]).push([[453],{6453:(t,e,r)=>{r.r(e),r.d(e,{GESTURE_CONTROLLER:()=>n,createGesture:()=>p});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class s{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var e;return new i(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)}createBlocker(t={}){return new l(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(a)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(a)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}class i{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class l{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const a="backdrop-no-scroll",n=new s,c=(t,e,r,s)=>{const i=o(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let l,a;return t["__zone_symbol__addEventListener"]?(l="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(l="addEventListener",a="removeEventListener"),t[l](e,r,i),()=>{t[a](e,r,i)}},o=t=>{if(void 0===d)try{const e=Object.defineProperty({},"passive",{get:()=>{d=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){d=!1}return!!d};let d;const u=2e3,h=(t,e,r,s,i)=>{let l,a,n,o,d,h,v,p=0;const m=s=>{p=Date.now()+u,e(s)&&(!a&&r&&(a=c(t,"touchmove",r,i)),n||(n=c(s.target,"touchend",y,i)),o||(o=c(s.target,"touchcancel",y,i)))},S=s=>{p>Date.now()||e(s)&&(!h&&r&&(h=c(b(t),"mousemove",r,i)),v||(v=c(b(t),"mouseup",f,i)))},y=t=>{g(),s&&s(t)},f=t=>{X(),s&&s(t)},g=()=>{a&&a(),n&&n(),o&&o(),a=n=o=void 0},X=()=>{h&&h(),v&&v(),h=v=void 0},Y=()=>{g(),X()},w=(e=!0)=>{e?(l||(l=c(t,"touchstart",m,i)),d||(d=c(t,"mousedown",S,i))):(l&&l(),d&&d(),l=d=void 0,Y())},_=()=>{w(!1),s=r=e=void 0};return{enable:w,stop:Y,destroy:_}},b=t=>t instanceof Document?t:t.ownerDocument,v=(t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,l=Math.cos(s),a=e*e;let n=0,c=0,o=!1,d=0;return{start(t,e){n=t,c=e,d=0,o=!0},detect(t,e){if(!o)return!1;const r=t-n,s=e-c,u=r*r+s*s;if(u<a)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>l?1:b<-l?-1:0,o=!1,!0},isGesture(){return 0!==d},getDirection(){return d}}},p=t=>{let e=!1,r=!1,s=!0,i=!1;const l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=l.canStart,c=l.onWillStart,o=l.onStart,d=l.onEnd,u=l.notCaptured,b=l.onMove,p=l.threshold,f=l.passive,g=l.blurOnStart,X={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},Y=v(l.direction,l.threshold,l.maxAngle),w=n.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),_=t=>{const e=y(t);return!(r||!s)&&(S(t,X),X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime=e,X.velocityX=X.velocityY=X.deltaX=X.deltaY=0,X.event=t,(!a||!1!==a(X))&&(w.release(),!!w.start()&&(r=!0,0===p?D():(Y.start(X.startX,X.startY),!0))))},G=t=>{e?!i&&s&&(i=!0,m(X,t),requestAnimationFrame(E)):(m(X,t),Y.detect(X.currentX,X.currentY)&&(Y.isGesture()&&D()||z()))},E=()=>{e&&(i=!1,b&&b(X))},D=()=>!!w.capture()&&(e=!0,s=!1,X.startX=X.currentX,X.startY=X.currentY,X.startTime=X.currentTime,c?c(X).then(T):T(),!0),I=()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}},T=()=>{g&&I(),o&&o(X),s=!0},L=()=>{e=!1,r=!1,i=!1,s=!0,w.release()},k=t=>{const r=e,i=s;L(),i&&(m(X,t),r?d&&d(X):u&&u(X))},q=h(l.el,_,G,k,{capture:!1,passive:f}),z=()=>{L(),q.stop(),u&&u(X)};return{enable(t=!0){t||(e&&k(void 0),L()),q.enable(t)},destroy(){w.destroy(),q.destroy()}}},m=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;S(e,t);const l=t.currentX,a=t.currentY,n=t.currentTime=y(e),c=n-i;if(c>0&&c<100){const e=(l-r)/c,i=(a-s)/c;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=l-t.startX,t.deltaY=a-t.startY,t.event=e},S=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},y=t=>t.timeStamp||Date.now()}}]);
//# sourceMappingURL=453.9bdbda6e.js.map