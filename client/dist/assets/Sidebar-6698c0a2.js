import{x as a,j as r,G as s}from"./index-4a74cd17.js";import{b as i,C as o,a as c}from"./Navbar-6be72a4f.js";import{L as m}from"./ListItem-ba1a828d.js";import{B as x}from"./Button-f907d954.js";import{L as d}from"./ListItemText-f8b3386d.js";function b(){const e=a(),n=["Discover","LikedUsers","Matches","Chat","Search","HoneyVip"];return r.jsx(r.Fragment,{children:r.jsx(s,{container:!0,justifyContent:"start",alignItems:"center",sx:{mt:15},children:r.jsx(s,{item:!0,xs:12,children:r.jsx(i,{sx:{borderRadius:6,backdropFilter:"brightness(0.9) blur(15px)",backgroundColor:"rgba(255, 255, 255, 0.5)"},children:r.jsx(o,{children:r.jsx(c,{component:"nav",children:n.map(t=>r.jsx(m,{children:r.jsx(x,{component:"a",onClick:()=>e(`/${t}`),fullWidth:!0,children:r.jsx(d,{sx:{color:"black"},primary:t})})},t))})})})})})})}export{b as S};