import{r as a}from"./index-BMqnoUYj.js";/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...t)=>t.filter((e,o,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,r)=>r?r.toUpperCase():o.toLowerCase());/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>{const e=A(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},L=a.createContext({}),W=()=>a.useContext(L),v=a.forwardRef(({color:t,size:e,strokeWidth:o,absoluteStrokeWidth:r,className:n="",children:s,iconNode:m,...l},p)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:x=!1,color:C="currentColor",className:f=""}=W()??{},k=r??x?Number(o??u)*24/Number(e??c):o??u;return a.createElement("svg",{ref:p,...i,width:e??c??i.width,height:e??c??i.height,stroke:t??C,strokeWidth:k,className:h("lucide",f,n),...!s&&!b(l)&&{"aria-hidden":"true"},...l},[...m.map(([y,w])=>a.createElement(y,w)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=(t,e)=>{const o=a.forwardRef(({className:r,...n},s)=>a.createElement(v,{ref:s,iconNode:e,className:h(`lucide-${g(d(t))}`,`lucide-${t}`,r),...n}));return o.displayName=d(t),o};/**
 * @license lucide-react v1.37.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]],I=S("image-off",j);export{I,S as c};
