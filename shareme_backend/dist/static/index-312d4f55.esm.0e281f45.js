import{r as d,j as i,ah as oe,ae as V,aF as ie,ai as ae,cp as ce,v as G,y as ue,E as le,at as de,e as R,P as pe,cq as me,M as fe,cr as he,cs as ye,ct as ge,b9 as Te,bx as be,G as Y,h as F,ac as N,a4 as Pe,bn as Le,a3 as w,a2 as C,af as Ie,F as xe,aN as Oe,cu as Se,aa as q,l as Re,q as ve,t as je,aR as A,cv as _e,cw as we,cx as Ce,cy as De,aL as M,d as Ee,cz as Fe,c1 as Ae,c2 as $e,aP as Ne,cA as qe,cB as Me,br as B,bt as Be,cC as ke,bi as We,aS as Ue,aV as He,cD as Ve,cE as Ge,cF as Ye,bj as ze}from"./sanity.51b45b46.js";import{u as Ke,c as k,b as Xe}from"./index-989e9e04.esm.a453f31c.js";import{P as Qe}from"./PaneItem-c5593821.esm.a4fdfd2b.js";import"./index.25ebbd9b.js";function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?W(Object(t),!0).forEach(function(r){Je(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Je(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const U=100,$=2e3,z={by:[{field:"_createdAt",direction:"desc"}]},Ze={};function et(e,n){return e._id?Y(e._id):"item-".concat(n)}function tt(e){return Ce(e).map(n=>{const t=n.draft||n.published;return f(f({},t),{},{hasPublished:!!n.published,hasDraft:!!n.draft})})}const nt=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function rt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=e.match(nt);if(!t)return null;const r=(t[1]||t[2]).trim().replace(/^["']|["']$/g,"");if(r[0]==="$"){const o=r.slice(1),u=n[o];return typeof u=="string"?u:null}return r}function st(e){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(e.trim())}function ot(e){return e.map(n=>[it(n),(n.direction||"").toLowerCase()].map(t=>t.trim()).filter(Boolean).join(" ")).join(",")}function it(e){return e.mapWith?"".concat(e.mapWith,"(").concat(e.field,")"):e.field}function at(e,n){const t=e.by.map(r=>{if(r.mapWith)return r;const o=ct(n,r.field);return o?lt(o,"datetime")?f(f({},r),{},{mapWith:"dateTime"}):o.jsonType==="string"?f(f({},r),{},{mapWith:"lower"}):r:r});return t.every((r,o)=>r===e.by[o])?e:f(f({},e),{},{by:t})}function ct(e,n){const t=fe(n);let r=e;for(const o of t){if(!r)return;if(typeof o=="string"){r=ut(r,o);continue}if(!(he(o)||ye(o))||r.jsonType!=="array")return;const[s,a]=r.of||[];if(a||!s)return;if(!ge(s)){r=s;continue}const[p,y]=s.to||[];if(y||!p)return;r=p}return r}function ut(e,n){if(!("fields"in e))return;const t=e.fields.find(r=>r.name===n);return t?t.type:void 0}function lt(e,n){let t=e.type;for(;t;){if(t.name===n||!t.type&&t.jsonType===n)return!0;t=t.type}return!1}function dt(e){const{childItemId:n,error:t,filterIsSimpleTypeContraint:r,fullList:o,isActive:u,isLoading:s,items:a,layout:p,onListChange:y,onRetry:m,showIcons:l}=e,P=G(),{collapsed:v}=Te(),{collapsed:g,index:x}=be(),[L,j]=d.exports.useState(!1);d.exports.useEffect(()=>{if(g)return;const c=setTimeout(()=>{j(!0)},0);return()=>{clearTimeout(c)}},[g]);const O=d.exports.useCallback(c=>{const T=Y(c._id),h=n===T;return i(Qe,{icon:l===!1?!1:void 0,id:T,pressed:!u&&h,selected:u&&h,layout:p,schemaType:P.get(c._type),value:c})},[n,u,p,P,l]),I=d.exports.useMemo(()=>{if(!L)return null;if(t)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(N,{width:1,children:R(Pe,{paddingX:4,paddingY:5,space:4,children:[i(Le,{as:"h3",children:"Could not fetch list items"}),R(w,{as:"p",children:["Error: ",i("code",{children:t.message})]}),m&&i(C,{children:i(V,{icon:Ie,onClick:m,text:"Retry",tone:"primary"})})]})})});if(a===null)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(Xe,{ms:300,children:R(xe,{children:[i(Oe,{muted:!0}),i(C,{marginTop:3,children:i(w,{align:"center",muted:!0,size:1,children:"Loading documents\u2026"})})]})})});if(!s&&a.length===0)return i(F,{align:"center",direction:"column",height:"fill",justify:"center",children:i(N,{width:1,children:i(C,{paddingX:4,paddingY:5,children:i(w,{align:"center",muted:!0,size:2,children:r?"No documents of this type":"No matching documents"})})})});const c=o&&a.length===$;return R(C,{padding:2,children:[a.length>0&&i(Se,{gap:1,getItemKey:et,items:a,renderItem:O,onChange:y},"".concat(x,"-").concat(g)),s&&i(q,{borderTop:!0,marginTop:1,paddingX:3,paddingY:4,children:i(w,{align:"center",muted:!0,size:1,children:"Loading\u2026"})}),c&&i(q,{marginTop:1,paddingX:3,paddingY:4,radius:2,tone:"transparent",children:R(w,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",$," documents"]})})]})},[t,r,o,y,s,a,m,O,L,g,x]);return i(Re,{overflow:v?void 0:"auto",children:I})}const K=d.exports.memo(e=>{let{index:n,initialValueTemplates:t=[],menuItems:r=[],menuItemGroups:o=[],setLayout:u,setSortOrder:s,title:a}=e;const{features:p}=Ke(),y=d.exports.useMemo(()=>({setLayout:m=>{let{layout:l}=m;u(l)},setSortOrder:m=>{s(m)}}),[u,s]);return i(oe,{backButton:p.backButton&&n>0&&i(V,{as:ie,"data-as":"a",icon:ae,mode:"bleed"}),title:a,actions:i(ce,{initialValueTemplateItems:t,actionHandlers:y,menuItemGroups:o,menuItems:r})})});K.displayName="DocumentListPaneHeader";const pt={result:null,error:!1},mt=e=>({result:{documents:e},loading:!1,error:!1}),ft=e=>({result:null,loading:!1,error:e}),ht=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const t=new De,r=t.next.bind(t);return e.pipe(M(s=>({client:s.client,query:s.query,params:s.params})),Ee(Fe),Ae(1),$e()).pipe(Ne(s=>{const a=qe(s.client,s.query,s.params,n).pipe(M(mt),Me());return B(A({loading:!0}).pipe(Be(400),ke(a)),a)})).pipe(We(pt),Ue((s,a)=>He(A(ft(s)),B(Ve(window,"online"),t).pipe(Ge(1),Ye(a)))),ze((s,a)=>f(f(f({},s),a),{},{onRetry:r})))};function yt(e){var n;const{apiVersion:t,defaultOrdering:r,filter:o,params:u,sortOrder:s}=e,a=ve(je),[p,y]=d.exports.useState(!1),m=d.exports.useRef(p),[l,P]=d.exports.useState(null),v=(l==null?void 0:l.error)||null,g=(l==null?void 0:l.loading)||l===null,x=l==null?void 0:l.onRetry,L=(n=l==null?void 0:l.result)==null?void 0:n.documents,j=d.exports.useMemo(()=>L?tt(L):null,[L]),O=d.exports.useMemo(()=>{const c=s==null?void 0:s.extendedProjection,T=["_id","_type"],h=T.join(","),b=r||(s==null?void 0:s.by)||[],_=p?$:U,D=b.length>0?b:z.by,S=ot(D);if(c){const E=T.concat(c).join(",");return["*[".concat(o,"] {").concat(E,"}"),"order(".concat(S,") [0...").concat(_,"]"),"{".concat(h,"}")].join("|")}return"*[".concat(o,"]|order(").concat(S,")[0...").concat(_,"]{").concat(h,"}")},[r,o,p,s]),I=d.exports.useCallback(c=>{let{toIndex:T}=c;g||m.current||T>=U/2&&(y(!0),m.current=!0)},[g]);return d.exports.useEffect(()=>{const c=p?b=>Boolean(b.result):()=>!0;P(b=>b?f(f({},b),{},{loading:!0}):null);const h=ht(A({client:a,query:O,params:u}),{apiVersion:t,tag:"desk.document-list"}).pipe(_e(c)).subscribe(P);return()=>h.unsubscribe()},[t,a,p,O,u]),d.exports.useEffect(()=>{P(null),y(!1),m.current=!1},[o,u,s,t]),{error:v,fullList:p,handleListChange:I,isLoading:g,items:j,onRetry:x}}const H=[];function gt(e){const n=d.exports.useRef(e);return we(n.current,e)||(n.current=e),n.current}const It=d.exports.memo(function(n){const{childItemId:t,index:r,isActive:o,isSelected:u,pane:s,paneKey:a}=n,p=G(),{name:y}=ue(),{defaultLayout:m="default",displayOptions:l,initialValueTemplates:P=H,menuItems:v,menuItemGroups:g,options:x,title:L}=s,{apiVersion:j,defaultOrdering:O=H,filter:I}=x,c=gt(x.params||Ze),T=s.source,h=d.exports.useMemo(()=>rt(I,c),[I,c]),b=(l==null?void 0:l.showIcons)!==!1,[_,D]=k(h,"layout",m),[S,E]=k(h,"sortOrder",z),X=h&&S?at(S,p.get(h)):S,Q=le(X),J=st(I),{error:Z,fullList:ee,handleListChange:te,isLoading:ne,items:re,onRetry:se}=yt({defaultOrdering:O,filter:I,params:c,sortOrder:Q,apiVersion:j});return i(de,{name:T||y,children:R(pe,{currentMaxWidth:350,id:a,maxWidth:640,minWidth:320,selected:u,children:[me,i(K,{index:r,initialValueTemplates:P,menuItems:v,menuItemGroups:g,setLayout:D,setSortOrder:E,title:L}),i(dt,{childItemId:t,error:Z,filterIsSimpleTypeContraint:J,fullList:ee,isActive:o,isLoading:ne,items:re,layout:_,onListChange:te,onRetry:se,showIcons:b})]})})});export{It as default};
