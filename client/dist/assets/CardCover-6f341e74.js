import{_ as e,b as s,c as P,f as N,j as y,ar as U,l as z,g as $}from"./index-28413705.js";import{g as j,a as b,s as w,u as M,c as T,b as _,C as V}from"./useSlot-d16b7034.js";import{r as k}from"./styleUtils-af8ebb4c.js";function L(o){return j("MuiCard",o)}b("MuiCard",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid","sizeSm","sizeMd","sizeLg","horizontal","vertical"]);const A=["className","color","component","invertedColors","size","variant","children","orientation","slots","slotProps"],G=o=>{const{size:r,variant:t,color:a,orientation:l}=o,n={root:["root",l,t&&`variant${z(t)}`,a&&`color${z(a)}`,r&&`size${z(r)}`]};return $(n,L,{})},q=w("div",{name:"JoyCard",slot:"Root",overridesResolver:(o,r)=>r.root})(({theme:o,ownerState:r})=>{var t,a;return[e({"--Card-childRadius":"max((var(--Card-radius) - var(--variant-borderWidth, 0px)) - var(--Card-padding), min(var(--Card-padding) / 2, (var(--Card-radius) - var(--variant-borderWidth, 0px)) / 2))","--AspectRatio-radius":"var(--Card-childRadius)","--unstable_actionMargin":"calc(-1 * var(--variant-borderWidth, 0px))","--unstable_actionRadius":k({theme:o,ownerState:r},"borderRadius","var(--Card-radius)"),"--CardCover-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--CardOverflow-offset":"calc(-1 * var(--Card-padding))","--CardOverflow-radius":"calc(var(--Card-radius) - var(--variant-borderWidth, 0px))","--Divider-inset":"calc(-1 * var(--Card-padding))"},r.size==="sm"&&{"--Card-radius":o.vars.radius.sm,"--Card-padding":"0.5rem",gap:"0.375rem 0.5rem"},r.size==="md"&&{"--Card-radius":o.vars.radius.md,"--Card-padding":"1rem",gap:"0.75rem 1rem"},r.size==="lg"&&{"--Card-radius":o.vars.radius.lg,"--Card-padding":"1.5rem",gap:"1rem 1.5rem"},{padding:"var(--Card-padding)",borderRadius:"var(--Card-radius)",boxShadow:o.shadow.sm,backgroundColor:o.vars.palette.background.surface,fontFamily:o.vars.fontFamily.body,fontSize:o.vars.fontSize.md,position:"relative",display:"flex",flexDirection:r.orientation==="horizontal"?"row":"column"}),(t=o.variants[r.variant])==null?void 0:t[r.color],r.color!=="context"&&r.invertedColors&&((a=o.colorInversion[r.variant])==null?void 0:a[r.color])]}),B=s.forwardRef(function(r,t){const a=M({props:r,name:"JoyCard"}),{className:l,color:n="neutral",component:p="div",invertedColors:m=!1,size:f="md",variant:c="plain",children:u,orientation:d="vertical",slots:g={},slotProps:x={}}=a,h=P(a,A),{getColor:C}=T(c),R=C(r.color,n),I=e({},a,{color:R,component:p,orientation:d,size:f,variant:c}),W=G(I),E=e({},h,{component:p,slots:g,slotProps:x}),[F,D]=_("root",{ref:t,className:N(W.root,l),elementType:q,externalForwardedProps:E,ownerState:I}),S=y.jsx(F,e({},D,{children:s.Children.map(u,(i,O)=>{if(!s.isValidElement(i))return i;const v={};if(U(i,["Divider"])){v.inset="inset"in i.props?i.props.inset:"context";const J=d==="vertical"?"horizontal":"vertical";v.orientation="orientation"in i.props?i.props.orientation:J}return U(i,["CardOverflow"])&&(d==="horizontal"&&(v["data-parent"]="Card-horizontal"),d==="vertical"&&(v["data-parent"]="Card-vertical")),O===0&&(v["data-first-child"]=""),O===s.Children.count(u)-1&&(v["data-last-child"]=""),s.cloneElement(i,v)})}));return m?y.jsx(V,{variant:c,children:S}):S}),co=B;function H(o){return j("MuiCardContent",o)}b("MuiCardContent",["root"]);const K=b("MuiCardOverflow",["root","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]),Q=K,X=["className","component","children","orientation","slots","slotProps"],Y=()=>$({root:["root"]},H,{}),Z=w("div",{name:"JoyCardContent",slot:"Root",overridesResolver:(o,r)=>r.root})(({ownerState:o})=>({display:"flex",flexDirection:o.orientation==="horizontal"?"row":"column",flex:1,zIndex:1,columnGap:"calc(0.75 * var(--Card-padding))",padding:"var(--CardContent-padding)",[`.${Q.root} > &`]:{"--CardContent-padding":"calc(var(--Card-padding) * 0.75) 0px"}})),oo=s.forwardRef(function(r,t){const a=M({props:r,name:"JoyCardContent"}),{className:l,component:n="div",children:p,orientation:m="vertical",slots:f={},slotProps:c={}}=a,u=P(a,X),d=e({},u,{component:n,slots:f,slotProps:c}),g=e({},a,{component:n,orientation:m}),x=Y(),[h,C]=_("root",{ref:t,className:N(x.root,l),elementType:Z,externalForwardedProps:d,ownerState:g});return y.jsx(h,e({},C,{children:p}))}),Co=oo;function ro(o){return j("MuiCardCover",o)}b("MuiCardCover",["root"]);const ao=["className","component","children","slots","slotProps"],to=()=>$({root:["root"]},ro,{}),so=w("div",{name:"JoyCardCover",slot:"Root",overridesResolver:(o,r)=>r.root})({position:"absolute",zIndex:0,top:0,left:0,right:0,bottom:0,borderRadius:"var(--CardCover-radius)","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",objectFit:"cover",boxSizing:"border-box",borderRadius:"var(--CardCover-radius)",margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:"cover"}}}),eo=s.forwardRef(function(r,t){const a=M({props:r,name:"JoyCardCover"}),{className:l,component:n="div",children:p,slots:m={},slotProps:f={}}=a,c=P(a,ao),u=e({},a,{component:n}),d=to(),g=e({},c,{component:n,slots:m,slotProps:f}),[x,h]=_("root",{ref:t,className:N(d.root,l),elementType:so,externalForwardedProps:g,ownerState:u});return y.jsx(x,e({},h,{children:s.Children.map(p,(C,R)=>R===0&&s.isValidElement(C)?s.cloneElement(C,{"data-first-child":""}):C)}))}),vo=eo;export{co as C,vo as a,Co as b};
