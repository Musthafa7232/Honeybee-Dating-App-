import{L as m,b as o,j as e,G as r,T as h,o as p,p as g}from"./index-28413705.js";import{C as u,b,N as f}from"./Navbar-e52706e6.js";import{S as j}from"./Sidebar-044e1c58.js";import{K as C}from"./KeepMountedModal-14464c24.js";import{C as k,a as x,b as y}from"./CardCover-6f341e74.js";import{B as w}from"./Button-fc51ecf4.js";import{h as S}from"./api-db1365f0.js";import{L as v}from"./Loader-9e9aabef.js";import{S as M}from"./Skeleton-56c0d32f.js";import"./Favorite-5b34d57a.js";import"./ListItem-093db0ca.js";import"./ListItemText-9a7bb09b.js";import"./Chip-48e6d99e.js";import"./useSlot-d16b7034.js";import"./useButton-4f2b14bd.js";import"./ModalDialog-bd2fd92d.js";import"./Sheet-70ea06da.js";import"./styleUtils-af8ebb4c.js";/* empty css               */function R({matches:i,isLoading:a}){const[l,n]=m.useState(!1),[d,s]=o.useState(null),c=t=>{n(!0),s(t)};return e.jsxs(e.Fragment,{children:[e.jsx(r,{item:!0,xs:2,sm:0}),e.jsx(r,{item:!0,xs:8.2,lg:12,sx:{my:2},children:e.jsx(u,{className:"CardItems",variant:"outlined",sx:{height:"38rem",mb:4,borderRadius:6,backdropFilter:"brightness(0.9) blur(15px)",backgroundColor:"rgba(255, 255, 255, 0.5)",overflow:"hidden"},children:e.jsx(b,{sx:{height:"100%",overflowX:"hidden",overflowY:"scroll","&::-webkit-scrollbar":{width:"7px"},"&::-webkit-scrollbar-track":{background:"transparent"},"&::-webkit-scrollbar-thumb":{backgroundColor:"darkgrey",borderRadius:"2rem"},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"grey",borderRadius:"2rem"}},component:r,spacing:2,container:!0,children:i==null?void 0:i.map(t=>e.jsxs(r,{item:!0,xs:12,md:5,lg:5,xl:4,sx:{my:1,mx:{md:2,lg:0}},children:[e.jsxs(k,{sx:{width:{xs:300,sm:450,md:250,lg:250},height:{xs:500,sm:500,md:250,lg:250}},children:[e.jsx(x,{children:e.jsx("img",{src:t.profilePic,loading:"lazy",alt:""})}),e.jsx(x,{sx:{background:"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)"}}),e.jsxs(y,{sx:{justifyContent:"flex-end",color:"white"},children:[e.jsx(h,{level:"h2",fontSize:"lg",mb:1,children:t.fullName}),e.jsx(w,{sx:{m:1},color:"warning",variant:"outlined",onClick:()=>c(t),children:"View Profile"})]})]}),e.jsx(C,{user:d,setUser:s,open:l,setOpen:n,isLoading:a})]},t._id))})})})]})}function E(){p();const i=g(t=>t.user.user),[a,l]=o.useState(!0),[n,d]=o.useState(!1),[s,c]=o.useState([]);return o.useEffect(()=>{s&&l(!1)},[s]),o.useEffect(()=>{S().then(t=>{t.data.length>0?c(t.data):d(!0)})},[a]),e.jsx(r,{container:!0,sx:{minHeight:"84vh"},children:a?e.jsx(r,{item:!0,xs:12,md:6,children:e.jsx(M,{variant:"rectangular",height:118})}):e.jsx(r,{item:!0,xs:12,lg:11,container:!0,children:s.length>0?e.jsx(R,{matches:s,isLoading:a}):e.jsx(u,{variant:"outlined",sx:{width:"100%",height:"38rem",borderRadius:6,backdropFilter:"brightness(0.9) blur(15px)",backgroundColor:"rgba(255, 255, 255, 0.5)",display:"flex",justifyContent:"center"},children:n?e.jsx(r,{container:!0,sx:{display:"flex",justifyContent:"center",alignContent:"center",height:"100%"},children:e.jsx(r,{sx:{},children:e.jsx("lottie-player",{src:"https://lottie.host/fd72ffec-6def-4055-bd06-6cbd9333bb25/ajpBAR9H9V.json",background:"transparent",speed:"1",style:{width:"20rem",height:"20rem"},loop:!0,autoplay:!0})})}):e.jsx(v,{user:i})})})})}function q(){return e.jsxs(r,{container:!0,spacing:12,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(f,{})}),e.jsx(r,{item:!0,xs:!0,sx:{display:{xs:"none",md:"block",lg:"block"}},children:e.jsx(j,{})}),e.jsx(r,{item:!0,xs:12,sm:12,md:8,lg:8,children:e.jsx(E,{})})]})}export{q as default};
