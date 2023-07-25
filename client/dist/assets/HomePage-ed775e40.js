import{m as D,n as I,j as e,b as o,G as i,t as p,T as v,o as M,p as H,S as R}from"./index-28413705.js";import{C as U,b as P,N as F}from"./Navbar-e52706e6.js";import{S as T}from"./Sidebar-044e1c58.js";import{d as E}from"./LocationOn-aad88f45.js";import{L}from"./Loader-9e9aabef.js";import{K as V}from"./KeepMountedModal-14464c24.js";import{S as b}from"./Skeleton-56c0d32f.js";import{B as y}from"./Button-fc51ecf4.js";import{D as $,l as N,d as q}from"./api-db1365f0.js";import"./Favorite-5b34d57a.js";import"./ListItem-093db0ca.js";import"./ListItemText-9a7bb09b.js";/* empty css               */import"./Chip-48e6d99e.js";import"./useSlot-d16b7034.js";import"./useButton-4f2b14bd.js";import"./ModalDialog-bd2fd92d.js";import"./Sheet-70ea06da.js";import"./styleUtils-af8ebb4c.js";var S={},B=I;Object.defineProperty(S,"__esModule",{value:!0});var z=S.default=void 0,O=B(D()),G=e,K=(0,O.default)((0,G.jsx)("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");z=S.default=K;var C={},W=I;Object.defineProperty(C,"__esModule",{value:!0});var A=C.default=void 0,J=W(D()),Q=e,X=(0,J.default)((0,Q.jsx)("path",{d:"M22 4h-2c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h2V4zM2.17 11.12c-.11.25-.17.52-.17.8V13c0 1.1.9 2 2 2h5.5l-.92 4.65c-.05.22-.02.46.08.66.23.45.52.86.88 1.22L10 22l6.41-6.41c.38-.38.59-.89.59-1.42V6.34C17 5.05 15.95 4 14.66 4h-8.1c-.71 0-1.36.37-1.72.97l-2.67 6.15z"}),"ThumbDownAlt");A=C.default=X;function Y({user:m,isLoading:r,filteredUsers:l,likeHandler:u,dislikeHandler:h}){const[f,c]=o.useState(!1),[j,d]=o.useState(""),g=s=>{d(s),c(!0)};return e.jsx(e.Fragment,{children:r?e.jsx(i,{item:!0,xs:12,sx:{my:2,position:"absolute",width:"100%"},children:e.jsx(L,{user:m})}):l.length>0?l.map(s=>e.jsxs(i,{item:!0,xs:12,sx:{my:2,position:"absolute",width:"100%"},children:[e.jsxs(U,{className:"CardItems",variant:"outlined",sx:{mb:4,minHeight:"70vh",borderRadius:6,backdropFilter:"brightness(0.9) blur(15px)",backgroundColor:"rgba(255, 255, 255, 0.7)"},children:[e.jsxs(p,{sx:{width:"100%",height:"40vh",position:"relative"},children:[e.jsx(p,{sx:{objectFit:"cover",width:"100%",height:"100%"},component:"img",loading:"lazy",src:s!=null&&s.coverPic?s==null?void 0:s.coverPic:"/cover-picture.png"}),e.jsx(p,{sx:{objectFit:"cover",width:150,height:150,borderRadius:"5rem",position:"absolute",top:"100%",left:{xs:"10%",lg:"0%"},transform:"translate(50%, -50%)"},loading:"lazy",component:"img",src:s!=null&&s.profilePic?s==null?void 0:s.profilePic:"/avatar.jpg"})]}),e.jsx(P,{children:e.jsxs(i,{container:!0,sx:{width:"100%"},children:[e.jsx(i,{item:!0,xs:2.6}),e.jsxs(i,{item:!0,xs:7,lg:8,sx:{mt:{xs:10,lg:0}},children:[e.jsxs(v,{sx:{textAlign:{xs:"center",lg:""},fontFamily:"sans-serif",fontSize:{lg:"2rem"},fontWeight:"bold"},children:[r?e.jsx(b,{width:"15rem"}):s.fullName," ",r?e.jsx(b,{width:"5rem"}):e.jsx(v,{variant:"caption",children:s.age})]}),e.jsx(v,{sx:{textAlign:{xs:"center",lg:""},fontSize:{xs:7,lg:14}},variant:"subtitle2",children:r?e.jsx(b,{width:"13rem"}):e.jsxs(p,{sx:{display:"flex",justifyContent:"center",alignItems:"end"},children:[e.jsx(E,{}),"Lives in ",s.location]})})]}),e.jsx(i,{item:!0,xs:1}),e.jsxs(i,{sx:{mt:10},item:!0,xs:12,children:[e.jsxs(i,{sx:{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"space-around"},children:[e.jsx(y,{startIcon:e.jsx(A,{}),color:"inherit",variant:"outlined",sx:{borderRadius:"1rem",px:{xs:1,lg:13}},size:`medium\r
                            \r
                            `,onClick:()=>h(s._id),children:"DisLike"}),e.jsx(y,{startIcon:e.jsx(z,{}),color:"error",variant:"outlined",sx:{borderRadius:"1rem",px:{xs:1,lg:13}},size:"medium",onClick:()=>u(s._id),children:"Like"})]}),e.jsx(i,{item:!0,sx:{mt:3},xs:12,children:e.jsx(i,{sx:{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"space-around"},children:e.jsx(y,{color:"primary",variant:"outlined",sx:{borderRadius:"1rem",px:{xs:1,lg:13}},size:"medium",onClick:()=>g(s),children:"Vist Profile"})})})]})]})})]}),e.jsx(V,{user:j,setUser:d,open:f,setOpen:c,isLoading:r})]},s._id)):e.jsx(i,{item:!0,xs:11.9,lg:11,container:!0,sx:{mb:10,position:"relative"},children:e.jsx(U,{className:"CardItems",variant:"outlined",sx:{width:"100%",minHeight:"70vh",borderRadius:6,backdropFilter:"brightness(0.9) blur(15px)",backgroundColor:"rgba(255, 255, 255, 0.7)"},children:e.jsx(i,{container:!0,sx:{display:"flex",justifyContent:"center",alignContent:"center",height:"100%"},children:e.jsx(i,{sx:{},children:e.jsx("lottie-player",{src:"https://lottie.host/fd72ffec-6def-4055-bd06-6cbd9333bb25/ajpBAR9H9V.json",background:"transparent",speed:"1",style:{width:"20rem",height:"20rem"},loop:!0,autoplay:!0})})})})})})}function Z(){var k,_;const m=M(),r=H(n=>n.user.user),[l,u]=o.useState([]),[h,f]=o.useState(!0),[c,j]=o.useState([]);o.useEffect(()=>{r&&setTimeout(()=>{f(!1)},4e3)},[r]),o.useEffect(()=>{$().then(n=>{u(n.data)}).catch(n=>{window.location.reload()})},[h]);let d=[];if(l){const n=(k=r==null?void 0:r.likedUsers)==null?void 0:k.map(t=>t.toString()),a=(_=r==null?void 0:r.dislikedUsers)==null?void 0:_.map(t=>t.toString());d=c==null?void 0:c.filter(t=>!n.includes(t==null?void 0:t._id.toString())&&!a.includes(t==null?void 0:t._id.toString()))}o.useEffect(()=>{j((a=>{const t=a.slice();for(let x=t.length-1;x>0;x--){const w=Math.floor(Math.random()*(x+1));[t[x],t[w]]=[t[w],t[x]]}return t})(l))},[l]);const g=async n=>{const a={User:n};try{const t=await N(a);m(R(t.data))}catch(t){console.log(t)}},s=async n=>{const a={User:n};try{const t=await q(a);m(R(t.data))}catch(t){console.log(t)}};return e.jsx(e.Fragment,{children:e.jsx(i,{container:!0,children:e.jsx(i,{item:!0,xs:12,lg:11,container:!0,sx:{position:"relative",minHeight:{xs:"85.7vh",lg:0}},children:e.jsx(Y,{user:r,isLoading:h,filteredUsers:d,likeHandler:g,dislikeHandler:s})})})})}function ve(){return e.jsxs(i,{container:!0,spacing:12,children:[e.jsx(i,{item:!0,xs:12,children:e.jsx(F,{})}),e.jsx(i,{item:!0,xs:!0,sx:{display:{xs:"none",md:"block",lg:"block"}},children:e.jsx(T,{})}),e.jsx(i,{item:!0,xs:12,sm:12,md:8,lg:8,children:e.jsx(Z,{})})]})}export{ve as default};
