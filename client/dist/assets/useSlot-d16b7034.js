import{c as E,a8 as R,_ as h,f as ut,av as At,y as kt,z as zt,aw as j,ax as Et,ay as Vt,az as Wt,a2 as jt,am as Pt,a4 as Rt,b as mt,j as Ot,e as Nt}from"./index-28413705.js";function oe(a=""){function r(...o){if(!o.length)return"";const c=o[0];return typeof c=="string"&&!c.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${a?`${a}-`:""}${c}${r(...o.slice(1))})`:`, ${c}`}return(o,...c)=>`var(--${a?`${a}-`:""}${o}${r(...c)})`}const vt=(a,r,i,o=[])=>{let c=a;r.forEach((t,g)=>{g===r.length-1?Array.isArray(c)?c[Number(t)]=i:c&&typeof c=="object"&&(c[t]=i):c&&typeof c=="object"&&(c[t]||(c[t]=o.includes(t)?[]:{}),c=c[t])})},Tt=(a,r,i)=>{function o(c,t=[],g=[]){Object.entries(c).forEach(([e,p])=>{(!i||i&&!i([...t,e]))&&p!=null&&(typeof p=="object"&&Object.keys(p).length>0?o(p,[...t,e],Array.isArray(p)?[...g,e]:g):r([...t,e],p,g))})}o(a)},Mt=(a,r)=>typeof r=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(o=>a.includes(o))||a[a.length-1].toLowerCase().indexOf("opacity")>=0?r:`${r}px`:r;function ae(a,r){const{prefix:i,shouldSkipGeneratingVar:o}=r||{},c={},t={},g={};return Tt(a,(e,p,$)=>{if((typeof p=="string"||typeof p=="number")&&(!o||!o(e,p))){const C=`--${i?`${i}-`:""}${e.join("-")}`;Object.assign(c,{[C]:Mt(e,p)}),vt(t,e,`var(${C})`,$),vt(g,e,`var(${C}, ${p})`,$)}},e=>e[0]==="vars"),{css:c,vars:t,varsWithDefaults:g}}const Gt=["colorSchemes","components"],Ut=["light"];function Kt(a,r){const{colorSchemes:i={}}=a,o=E(a,Gt),{vars:c,css:t,varsWithDefaults:g}=ae(o,r);let e=g;const p={},{light:$}=i,C=E(i,Ut);if(Object.entries(C||{}).forEach(([b,F])=>{const{vars:D,css:_,varsWithDefaults:V}=ae(F,r);e=R(e,V),p[b]={css:_,vars:D}}),$){const{css:b,vars:F,varsWithDefaults:D}=ae($,r);e=R(e,D),p.light={css:b,vars:F}}return{vars:e,generateCssVars:b=>b?{css:h({},p[b].css),vars:p[b].vars}:{css:h({},t),vars:c}}}function Lt(a){return typeof a=="string"}function Jt(a,r,i){return a===void 0||Lt(a)?r:h({},r,{ownerState:h({},r.ownerState,i)})}function Zt(a,r=[]){if(a===void 0)return{};const i={};return Object.keys(a).filter(o=>o.match(/^on[A-Z]/)&&typeof a[o]=="function"&&!r.includes(o)).forEach(o=>{i[o]=a[o]}),i}function qt(a,r){return typeof a=="function"?a(r):a}function $t(a){if(a===void 0)return{};const r={};return Object.keys(a).filter(i=>!(i.match(/^on[A-Z]/)&&typeof a[i]=="function")).forEach(i=>{r[i]=a[i]}),r}function Qt(a){const{getSlotProps:r,additionalProps:i,externalSlotProps:o,externalForwardedProps:c,className:t}=a;if(!r){const F=ut(c==null?void 0:c.className,o==null?void 0:o.className,t,i==null?void 0:i.className),D=h({},i==null?void 0:i.style,c==null?void 0:c.style,o==null?void 0:o.style),_=h({},i,c,o);return F.length>0&&(_.className=F),Object.keys(D).length>0&&(_.style=D),{props:_,internalRef:void 0}}const g=Zt(h({},c,o)),e=$t(o),p=$t(c),$=r(g),C=ut($==null?void 0:$.className,i==null?void 0:i.className,t,c==null?void 0:c.className,o==null?void 0:o.className),A=h({},$==null?void 0:$.style,i==null?void 0:i.style,c==null?void 0:c.style,o==null?void 0:o.style),b=h({},$,i,p,e);return C.length>0&&(b.className=C),Object.keys(A).length>0&&(b.style=A),{props:b,internalRef:$.ref}}const ne="$$joy",Xt=h({},At,{borderRadius:{themeKey:"radius"},boxShadow:{themeKey:"shadow"},fontFamily:{themeKey:"fontFamily"},fontSize:{themeKey:"fontSize"},fontWeight:{themeKey:"fontWeight"},letterSpacing:{themeKey:"letterSpacing"},lineHeight:{themeKey:"lineHeight"}}),Yt=Xt,el={grey:{50:"#F7F7F8",100:"#EBEBEF",200:"#D8D8DF",300:"#B9B9C6",400:"#8F8FA3",500:"#73738C",600:"#5A5A72",700:"#434356",800:"#25252D",900:"#131318"},blue:{50:"#F4FAFF",100:"#DDF1FF",200:"#ADDBFF",300:"#6FB6FF",400:"#3990FF",500:"#096BDE",600:"#054DA7",700:"#02367D",800:"#072859",900:"#00153C"},yellow:{50:"#FFF8C5",100:"#FAE17D",200:"#EAC54F",300:"#D4A72C",400:"#BF8700",500:"#9A6700",600:"#7D4E00",700:"#633C01",800:"#4D2D00",900:"#3B2300"},red:{50:"#FFF8F6",100:"#FFE9E8",200:"#FFC7C5",300:"#FF9192",400:"#FA5255",500:"#D3232F",600:"#A10E25",700:"#77061B",800:"#580013",900:"#39000D"},green:{50:"#F3FEF5",100:"#D7F5DD",200:"#77EC95",300:"#4CC76E",400:"#2CA24D",500:"#1A7D36",600:"#0F5D26",700:"#034318",800:"#002F0F",900:"#001D09"},purple:{50:"#FDF7FF",100:"#F4EAFF",200:"#E1CBFF",300:"#C69EFF",400:"#A374F9",500:"#814DDE",600:"#5F35AE",700:"#452382",800:"#301761",900:"#1D0A42"}},P=el;function tl(a){var r;return!!a[0].match(/^(typography|variants|breakpoints|colorInversion|colorInversionConfig)$/)||!!a[0].match(/sxConfig$/)||a[0]==="palette"&&!!((r=a[1])!=null&&r.match(/^(mode)$/))||a[0]==="focus"&&a[1]!=="thickness"}const ll=(a,r)=>zt(a,r,"Joy"),Cl=(a,r)=>kt(a,r,"Joy"),re=a=>a&&typeof a=="object"&&Object.keys(a).some(r=>{var i;return(i=r.match)==null?void 0:i.call(r,/^(plain(Hover|Active|Disabled)?(Color|Bg)|outlined(Hover|Active|Disabled)?(Color|Border|Bg)|soft(Hover|Active|Disabled)?(Color|Bg)|solid(Hover|Active|Disabled)?(Color|Bg))$/)}),ft=(a,r,i)=>{r.includes("Color")&&(a.color=i),r.includes("Bg")&&(a.backgroundColor=i),r.includes("Border")&&(a.borderColor=i)},Ct=(a,r,i)=>{const o={};return Object.entries(r||{}).forEach(([c,t])=>{if(c.match(new RegExp(`${a}(color|bg|border)`,"i"))&&t){const g=i?i(c):t;c.includes("Disabled")&&(o.pointerEvents="none",o.cursor="default"),c.match(/(Hover|Active|Disabled)/)||(o["--variant-borderWidth"]||(o["--variant-borderWidth"]="0px"),c.includes("Border")&&(o["--variant-borderWidth"]="1px",o.border="var(--variant-borderWidth) solid")),ft(o,c,g)}}),o},bt=a=>r=>`--${a?`${a}-`:""}${r.replace(/^--/,"")}`,x=(a,r)=>{let i={};if(r){const{getCssVar:o,palette:c}=r;Object.entries(c).forEach(t=>{const[g,e]=t;re(e)&&typeof e=="object"&&(i=h({},i,{[g]:Ct(a,e,p=>o(`palette-${g}-${p}`,c[g][p]))}))})}return i.context=Ct(a,{plainColor:"var(--variant-plainColor)",plainHoverColor:"var(--variant-plainHoverColor)",plainHoverBg:"var(--variant-plainHoverBg)",plainActiveBg:"var(--variant-plainActiveBg)",plainDisabledColor:"var(--variant-plainDisabledColor)",outlinedColor:"var(--variant-outlinedColor)",outlinedBorder:"var(--variant-outlinedBorder)",outlinedHoverColor:"var(--variant-outlinedHoverColor)",outlinedHoverBorder:"var(--variant-outlinedHoverBorder)",outlinedHoverBg:"var(--variant-outlinedHoverBg)",outlinedActiveBg:"var(--variant-outlinedActiveBg)",outlinedDisabledColor:"var(--variant-outlinedDisabledColor)",outlinedDisabledBorder:"var(--variant-outlinedDisabledBorder)",softColor:"var(--variant-softColor)",softBg:"var(--variant-softBg)",softHoverColor:"var(--variant-softHoverColor)",softHoverBg:"var(--variant-softHoverBg)",softActiveBg:"var(--variant-softActiveBg)",softDisabledColor:"var(--variant-softDisabledColor)",softDisabledBg:"var(--variant-softDisabledBg)",solidColor:"var(--variant-solidColor)",solidBg:"var(--variant-solidBg)",solidHoverColor:"var(--variant-solidHoverColor)",solidHoverBg:"var(--variant-solidHoverBg)",solidActiveBg:"var(--variant-solidActiveBg)",solidDisabledColor:"var(--variant-solidDisabledColor)",solidDisabledBg:"var(--variant-solidDisabledBg)"}),i},al=(a,r)=>{const i=oe(a.cssVarPrefix),o=bt(a.cssVarPrefix),c={},t=r?g=>{var e,p;const $=g.split("-"),C=$[1],A=$[2];return i(g,(e=a.palette)==null||(p=e[C])==null?void 0:p[A])}:i;return Object.entries(a.palette).forEach(g=>{const[e,p]=g;re(p)&&(c[e]={"--Badge-ringColor":t(`palette-${e}-softBg`),[o("--shadowChannel")]:t(`palette-${e}-darkChannel`),[a.getColorSchemeSelector("dark")]:{[o("--palette-focusVisible")]:t(`palette-${e}-300`),[o("--palette-background-body")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.1)`,[o("--palette-background-surface")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.08)`,[o("--palette-background-level1")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.2)`,[o("--palette-background-level2")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.4)`,[o("--palette-background-level3")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.6)`,[o("--palette-text-primary")]:t(`palette-${e}-100`),[o("--palette-text-secondary")]:`rgba(${t(`palette-${e}-lightChannel`)} / 0.72)`,[o("--palette-text-tertiary")]:`rgba(${t(`palette-${e}-lightChannel`)} / 0.6)`,[o("--palette-divider")]:`rgba(${t(`palette-${e}-lightChannel`)} / 0.2)`,"--variant-plainColor":`rgba(${t(`palette-${e}-lightChannel`)} / 1)`,"--variant-plainHoverColor":t(`palette-${e}-50`),"--variant-plainHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.16)`,"--variant-plainActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,"--variant-plainDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-outlinedColor":`rgba(${t(`palette-${e}-lightChannel`)} / 1)`,"--variant-outlinedHoverColor":t(`palette-${e}-50`),"--variant-outlinedBg":"initial","--variant-outlinedBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.4)`,"--variant-outlinedHoverBorder":t(`palette-${e}-600`),"--variant-outlinedHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.16)`,"--variant-outlinedActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,"--variant-outlinedDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-outlinedDisabledBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.2)`,"--variant-softColor":t(`palette-${e}-100`),"--variant-softBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.24)`,"--variant-softHoverColor":"#fff","--variant-softHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,"--variant-softActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.48)`,"--variant-softDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-softDisabledBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-solidColor":"#fff","--variant-solidBg":t(`palette-${e}-500`),"--variant-solidHoverColor":"#fff","--variant-solidHoverBg":t(`palette-${e}-400`),"--variant-solidActiveBg":t(`palette-${e}-400`),"--variant-solidDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-solidDisabledBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`},[a.getColorSchemeSelector("light")]:{[o("--palette-focusVisible")]:t(`palette-${e}-500`),[o("--palette-background-body")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.1)`,[o("--palette-background-surface")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.08)`,[o("--palette-background-level1")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.2)`,[o("--palette-background-level2")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,[o("--palette-background-level3")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.48)`,[o("--palette-text-primary")]:t(`palette-${e}-700`),[o("--palette-text-secondary")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.8)`,[o("--palette-text-tertiary")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.68)`,[o("--palette-divider")]:`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,"--variant-plainColor":`rgba(${t(`palette-${e}-darkChannel`)} / 0.8)`,"--variant-plainHoverColor":`rgba(${t(`palette-${e}-darkChannel`)} / 1)`,"--variant-plainHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-plainActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.24)`,"--variant-plainDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.6)`,"--variant-outlinedColor":`rgba(${t(`palette-${e}-mainChannel`)} / 1)`,"--variant-outlinedBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.4)`,"--variant-outlinedHoverColor":t(`palette-${e}-600`),"--variant-outlinedHoverBorder":t(`palette-${e}-300`),"--variant-outlinedHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-outlinedActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.24)`,"--variant-outlinedDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.6)`,"--variant-outlinedDisabledBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-softColor":t(`palette-${e}-600`),"--variant-softBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.72)`,"--variant-softHoverColor":t(`palette-${e}-700`),"--variant-softHoverBg":t(`palette-${e}-200`),"--variant-softActiveBg":t(`palette-${e}-300`),"--variant-softDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.6)`,"--variant-softDisabledBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.08)`,"--variant-solidColor":t("palette-common-white"),"--variant-solidBg":t(`palette-${e}-600`),"--variant-solidHoverColor":t("palette-common-white"),"--variant-solidHoverBg":t(`palette-${e}-500`),"--variant-solidActiveBg":t(`palette-${e}-500`),"--variant-solidDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.6)`,"--variant-solidDisabledBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.08)`}})}),c},ol=(a,r)=>{const i=oe(a.cssVarPrefix),o=bt(a.cssVarPrefix),c={},t=r?g=>{const e=g.split("-"),p=e[1],$=e[2];return i(g,a.palette[p][$])}:i;return Object.entries(a.palette).forEach(g=>{const[e,p]=g;re(p)&&(e==="warning"?c.warning={"--Badge-ringColor":t(`palette-${e}-solidBg`),[o("--shadowChannel")]:t(`palette-${e}-darkChannel`),[o("--palette-focusVisible")]:t(`palette-${e}-700`),[o("--palette-background-body")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.16)`,[o("--palette-background-surface")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.1)`,[o("--palette-background-popup")]:t(`palette-${e}-100`),[o("--palette-background-level1")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.2)`,[o("--palette-background-level2")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.36)`,[o("--palette-background-level3")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.6)`,[o("--palette-text-primary")]:t(`palette-${e}-900`),[o("--palette-text-secondary")]:t(`palette-${e}-700`),[o("--palette-text-tertiary")]:t(`palette-${e}-500`),[o("--palette-divider")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.2)`,"--variant-plainColor":t(`palette-${e}-700`),"--variant-plainHoverColor":t(`palette-${e}-800`),"--variant-plainHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-plainActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,"--variant-plainDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-outlinedColor":t(`palette-${e}-700`),"--variant-outlinedBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.5)`,"--variant-outlinedHoverColor":t(`palette-${e}-800`),"--variant-outlinedHoverBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.6)`,"--variant-outlinedHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-outlinedActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.32)`,"--variant-outlinedDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-outlinedDisabledBorder":`rgba(${t(`palette-${e}-mainChannel`)} / 0.2)`,"--variant-softColor":t(`palette-${e}-800`),"--variant-softHoverColor":t(`palette-${e}-900`),"--variant-softBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.2)`,"--variant-softHoverBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.28)`,"--variant-softActiveBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.12)`,"--variant-softDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-softDisabledBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.08)`,"--variant-solidColor":"#fff","--variant-solidBg":t(`palette-${e}-600`),"--variant-solidHoverColor":"#fff","--variant-solidHoverBg":t(`palette-${e}-700`),"--variant-solidActiveBg":t(`palette-${e}-800`),"--variant-solidDisabledColor":`rgba(${t(`palette-${e}-mainChannel`)} / 0.72)`,"--variant-solidDisabledBg":`rgba(${t(`palette-${e}-mainChannel`)} / 0.08)`}:c[e]={colorScheme:"dark","--Badge-ringColor":t(`palette-${e}-solidBg`),[o("--shadowChannel")]:t(`palette-${e}-darkChannel`),[o("--palette-focusVisible")]:t(`palette-${e}-200`),[o("--palette-background-body")]:"rgba(0 0 0 / 0.1)",[o("--palette-background-surface")]:"rgba(0 0 0 / 0.06)",[o("--palette-background-popup")]:t(`palette-${e}-700`),[o("--palette-background-level1")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.2)`,[o("--palette-background-level2")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.36)`,[o("--palette-background-level3")]:`rgba(${t(`palette-${e}-darkChannel`)} / 0.6)`,[o("--palette-text-primary")]:t("palette-common-white"),[o("--palette-text-secondary")]:t(`palette-${e}-100`),[o("--palette-text-tertiary")]:t(`palette-${e}-200`),[o("--palette-divider")]:`rgba(${t(`palette-${e}-lightChannel`)} / 0.32)`,"--variant-plainColor":t(`palette-${e}-50`),"--variant-plainHoverColor":"#fff","--variant-plainHoverBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.12)`,"--variant-plainActiveBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.32)`,"--variant-plainDisabledColor":`rgba(${t(`palette-${e}-lightChannel`)} / 0.72)`,"--variant-outlinedColor":t(`palette-${e}-50`),"--variant-outlinedBorder":`rgba(${t(`palette-${e}-lightChannel`)} / 0.5)`,"--variant-outlinedHoverColor":"#fff","--variant-outlinedHoverBorder":t(`palette-${e}-300`),"--variant-outlinedHoverBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.12)`,"--variant-outlinedActiveBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.32)`,"--variant-outlinedDisabledColor":`rgba(${t(`palette-${e}-lightChannel`)} / 0.72)`,"--variant-outlinedDisabledBorder":"rgba(255 255 255 / 0.2)","--variant-softColor":t("palette-common-white"),"--variant-softHoverColor":t("palette-common-white"),"--variant-softBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.24)`,"--variant-softHoverBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.36)`,"--variant-softActiveBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.16)`,"--variant-softDisabledColor":`rgba(${t(`palette-${e}-lightChannel`)} / 0.72)`,"--variant-softDisabledBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.1)`,"--variant-solidColor":t(`palette-${e}-${e==="neutral"?"600":"500"}`),"--variant-solidBg":t("palette-common-white"),"--variant-solidHoverColor":t(`palette-${e}-700`),"--variant-solidHoverBg":t("palette-common-white"),"--variant-solidActiveBg":t(`palette-${e}-200`),"--variant-solidDisabledColor":`rgba(${t(`palette-${e}-lightChannel`)} / 0.72)`,"--variant-solidDisabledBg":`rgba(${t(`palette-${e}-lightChannel`)} / 0.1)`})}),c},nl=["cssVarPrefix","breakpoints","spacing","components","variants","colorInversion","shouldSkipGeneratingVar"],rl=["colorSchemes"],il=(a="joy")=>oe(a);function sl(a){var r,i,o,c,t,g,e,p,$,C,A,b,F,D,_,V,J,W,Z,O,q,N,z,Q,T,M,G,X,ie,se,ce,de,pe,he,ge,ue,ve,$e,fe,Ce,me,be,Se,xe,Be,ye,we,He,De,Ie,Fe,_e,Ae,ke,ze,Ee,Ve,We,je,Pe,Re,Oe,Ne,Te,Me,Ge,Ue,Ke,Le,Je,Ze,qe,Qe,Xe,Ye,et,tt,lt,at,ot,nt,rt;const it=a||{},{cssVarPrefix:ee="joy",breakpoints:st,spacing:xt,components:Bt,variants:yt,colorInversion:te,shouldSkipGeneratingVar:ct=tl}=it,u=E(it,nl),n=il(ee),m={primary:P.blue,neutral:P.grey,danger:P.red,info:P.purple,success:P.green,warning:P.yellow,common:{white:"#FFF",black:"#09090D"}},l=s=>{var v;const f=s.split("-"),I=f[1],_t=f[2];return n(s,(v=m[I])==null?void 0:v[_t])},U=s=>({plainColor:l(`palette-${s}-600`),plainHoverBg:l(`palette-${s}-100`),plainActiveBg:l(`palette-${s}-200`),plainDisabledColor:l(`palette-${s}-200`),outlinedColor:l(`palette-${s}-500`),outlinedBorder:l(`palette-${s}-200`),outlinedHoverBg:l(`palette-${s}-100`),outlinedHoverBorder:l(`palette-${s}-300`),outlinedActiveBg:l(`palette-${s}-200`),outlinedDisabledColor:l(`palette-${s}-100`),outlinedDisabledBorder:l(`palette-${s}-100`),softColor:l(`palette-${s}-600`),softBg:l(`palette-${s}-100`),softHoverBg:l(`palette-${s}-200`),softActiveBg:l(`palette-${s}-300`),softDisabledColor:l(`palette-${s}-300`),softDisabledBg:l(`palette-${s}-50`),solidColor:"#fff",solidBg:l(`palette-${s}-500`),solidHoverBg:l(`palette-${s}-600`),solidActiveBg:l(`palette-${s}-700`),solidDisabledColor:"#fff",solidDisabledBg:l(`palette-${s}-200`)}),K=s=>({plainColor:l(`palette-${s}-300`),plainHoverBg:l(`palette-${s}-800`),plainActiveBg:l(`palette-${s}-700`),plainDisabledColor:l(`palette-${s}-800`),outlinedColor:l(`palette-${s}-200`),outlinedBorder:l(`palette-${s}-700`),outlinedHoverBg:l(`palette-${s}-800`),outlinedHoverBorder:l(`palette-${s}-600`),outlinedActiveBg:l(`palette-${s}-900`),outlinedDisabledColor:l(`palette-${s}-800`),outlinedDisabledBorder:l(`palette-${s}-800`),softColor:l(`palette-${s}-200`),softBg:l(`palette-${s}-900`),softHoverBg:l(`palette-${s}-800`),softActiveBg:l(`palette-${s}-700`),softDisabledColor:l(`palette-${s}-800`),softDisabledBg:l(`palette-${s}-900`),solidColor:"#fff",solidBg:l(`palette-${s}-600`),solidHoverBg:l(`palette-${s}-700`),solidActiveBg:l(`palette-${s}-800`),solidDisabledColor:l(`palette-${s}-700`),solidDisabledBg:l(`palette-${s}-900`)}),d={palette:{mode:"light",primary:h({},m.primary,U("primary")),neutral:h({},m.neutral,{plainColor:l("palette-neutral-800"),plainHoverColor:l("palette-neutral-900"),plainHoverBg:l("palette-neutral-100"),plainActiveBg:l("palette-neutral-200"),plainDisabledColor:l("palette-neutral-300"),outlinedColor:l("palette-neutral-800"),outlinedBorder:l("palette-neutral-200"),outlinedHoverColor:l("palette-neutral-900"),outlinedHoverBg:l("palette-neutral-100"),outlinedHoverBorder:l("palette-neutral-300"),outlinedActiveBg:l("palette-neutral-200"),outlinedDisabledColor:l("palette-neutral-300"),outlinedDisabledBorder:l("palette-neutral-100"),softColor:l("palette-neutral-800"),softBg:l("palette-neutral-100"),softHoverColor:l("palette-neutral-900"),softHoverBg:l("palette-neutral-200"),softActiveBg:l("palette-neutral-300"),softDisabledColor:l("palette-neutral-300"),softDisabledBg:l("palette-neutral-50"),solidColor:l("palette-common-white"),solidBg:l("palette-neutral-600"),solidHoverBg:l("palette-neutral-700"),solidActiveBg:l("palette-neutral-800"),solidDisabledColor:l("palette-neutral-300"),solidDisabledBg:l("palette-neutral-50")}),danger:h({},m.danger,U("danger")),info:h({},m.info,U("info")),success:h({},m.success,U("success")),warning:h({},m.warning,U("warning"),{solidColor:l("palette-warning-800"),solidBg:l("palette-warning-200"),solidHoverBg:l("palette-warning-300"),solidActiveBg:l("palette-warning-400"),solidDisabledColor:l("palette-warning-200"),solidDisabledBg:l("palette-warning-50"),softColor:l("palette-warning-800"),softBg:l("palette-warning-50"),softHoverBg:l("palette-warning-100"),softActiveBg:l("palette-warning-200"),softDisabledColor:l("palette-warning-200"),softDisabledBg:l("palette-warning-50"),outlinedColor:l("palette-warning-800"),outlinedHoverBg:l("palette-warning-50"),plainColor:l("palette-warning-800"),plainHoverBg:l("palette-warning-50")}),common:{white:"#FFF",black:"#09090D"},text:{primary:l("palette-neutral-800"),secondary:l("palette-neutral-600"),tertiary:l("palette-neutral-500")},background:{body:l("palette-common-white"),surface:l("palette-common-white"),popup:l("palette-common-white"),level1:l("palette-neutral-50"),level2:l("palette-neutral-100"),level3:l("palette-neutral-200"),tooltip:l("palette-neutral-800"),backdrop:"rgba(255 255 255 / 0.5)"},divider:`rgba(${n("palette-neutral-mainChannel",j(m.neutral[500]))} / 0.28)`,focusVisible:l("palette-primary-500")},shadowRing:"0 0 #000",shadowChannel:"187 187 187"},wt={palette:{mode:"dark",primary:h({},m.primary,K("primary")),neutral:h({},m.neutral,{plainColor:l("palette-neutral-200"),plainHoverColor:l("palette-neutral-50"),plainHoverBg:l("palette-neutral-800"),plainActiveBg:l("palette-neutral-700"),plainDisabledColor:l("palette-neutral-700"),outlinedColor:l("palette-neutral-200"),outlinedBorder:l("palette-neutral-800"),outlinedHoverColor:l("palette-neutral-50"),outlinedHoverBg:l("palette-neutral-800"),outlinedHoverBorder:l("palette-neutral-700"),outlinedActiveBg:l("palette-neutral-800"),outlinedDisabledColor:l("palette-neutral-800"),outlinedDisabledBorder:l("palette-neutral-800"),softColor:l("palette-neutral-200"),softBg:l("palette-neutral-800"),softHoverColor:l("palette-neutral-50"),softHoverBg:l("palette-neutral-700"),softActiveBg:l("palette-neutral-600"),softDisabledColor:l("palette-neutral-700"),softDisabledBg:l("palette-neutral-900"),solidColor:l("palette-common-white"),solidBg:l("palette-neutral-600"),solidHoverBg:l("palette-neutral-700"),solidActiveBg:l("palette-neutral-800"),solidDisabledColor:l("palette-neutral-700"),solidDisabledBg:l("palette-neutral-900")}),danger:h({},m.danger,K("danger")),info:h({},m.info,K("info")),success:h({},m.success,K("success"),{solidColor:"#fff",solidBg:l("palette-success-600"),solidHoverBg:l("palette-success-700"),solidActiveBg:l("palette-success-800")}),warning:h({},m.warning,K("warning"),{solidColor:l("palette-common-black"),solidBg:l("palette-warning-300"),solidHoverBg:l("palette-warning-400"),solidActiveBg:l("palette-warning-500")}),common:{white:"#FFF",black:"#09090D"},text:{primary:l("palette-neutral-100"),secondary:l("palette-neutral-300"),tertiary:l("palette-neutral-400")},background:{body:l("palette-neutral-900"),surface:l("palette-common-black"),popup:l("palette-neutral-900"),level1:l("palette-neutral-800"),level2:l("palette-neutral-700"),level3:l("palette-neutral-600"),tooltip:l("palette-neutral-600"),backdrop:`rgba(${n("palette-neutral-darkChannel",j(m.neutral[800]))} / 0.5)`},divider:`rgba(${n("palette-neutral-mainChannel",j(m.neutral[500]))} / 0.24)`,focusVisible:l("palette-primary-500")},shadowRing:"0 0 #000",shadowChannel:"0 0 0"},le='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',y=h({body:`"Public Sans", ${n("fontFamily-fallback",le)}`,display:`"Public Sans", ${n("fontFamily-fallback",le)}`,code:"Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",fallback:le},u.fontFamily),k=h({xs:200,sm:300,md:500,lg:600,xl:700,xl2:800,xl3:900},u.fontWeight),w=h({xs3:"0.5rem",xs2:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem",xl2:"1.5rem",xl3:"1.875rem",xl4:"2.25rem",xl5:"3rem",xl6:"3.75rem",xl7:"4.5rem"},u.fontSize),H=h({sm:1.25,md:1.5,lg:1.7},u.lineHeight),L=h({sm:"-0.01em",md:"0.083em",lg:"0.125em"},u.letterSpacing),dt={colorSchemes:{light:d,dark:wt},fontSize:w,fontFamily:y,fontWeight:k,focus:{thickness:"2px",selector:`&.${ll("","focusVisible")}, &:focus-visible`,default:{outlineOffset:`var(--focus-outline-offset, ${n("focus-thickness",(r=(i=u.focus)==null?void 0:i.thickness)!=null?r:"2px")})`,outline:`${n("focus-thickness",(o=(c=u.focus)==null?void 0:c.thickness)!=null?o:"2px")} solid ${n("palette-focusVisible",m.primary[500])}`}},lineHeight:H,letterSpacing:L,radius:{xs:"4px",sm:"8px",md:"12px",lg:"16px",xl:"20px"},shadow:{xs:`${n("shadowRing",(t=(g=u.colorSchemes)==null||(e=g.light)==null?void 0:e.shadowRing)!=null?t:d.shadowRing)}, 0 1px 2px 0 rgba(${n("shadowChannel",(p=($=u.colorSchemes)==null||(C=$.light)==null?void 0:C.shadowChannel)!=null?p:d.shadowChannel)} / 0.12)`,sm:`${n("shadowRing",(A=(b=u.colorSchemes)==null||(F=b.light)==null?void 0:F.shadowRing)!=null?A:d.shadowRing)}, 0.3px 0.8px 1.1px rgba(${n("shadowChannel",(D=(_=u.colorSchemes)==null||(V=_.light)==null?void 0:V.shadowChannel)!=null?D:d.shadowChannel)} / 0.11), 0.5px 1.3px 1.8px -0.6px rgba(${n("shadowChannel",(J=(W=u.colorSchemes)==null||(Z=W.light)==null?void 0:Z.shadowChannel)!=null?J:d.shadowChannel)} / 0.18), 1.1px 2.7px 3.8px -1.2px rgba(${n("shadowChannel",(O=(q=u.colorSchemes)==null||(N=q.light)==null?void 0:N.shadowChannel)!=null?O:d.shadowChannel)} / 0.26)`,md:`${n("shadowRing",(z=(Q=u.colorSchemes)==null||(T=Q.light)==null?void 0:T.shadowRing)!=null?z:d.shadowRing)}, 0.3px 0.8px 1.1px rgba(${n("shadowChannel",(M=(G=u.colorSchemes)==null||(X=G.light)==null?void 0:X.shadowChannel)!=null?M:d.shadowChannel)} / 0.12), 1.1px 2.8px 3.9px -0.4px rgba(${n("shadowChannel",(ie=(se=u.colorSchemes)==null||(ce=se.light)==null?void 0:ce.shadowChannel)!=null?ie:d.shadowChannel)} / 0.17), 2.4px 6.1px 8.6px -0.8px rgba(${n("shadowChannel",(de=(pe=u.colorSchemes)==null||(he=pe.light)==null?void 0:he.shadowChannel)!=null?de:d.shadowChannel)} / 0.23), 5.3px 13.3px 18.8px -1.2px rgba(${n("shadowChannel",(ge=(ue=u.colorSchemes)==null||(ve=ue.light)==null?void 0:ve.shadowChannel)!=null?ge:d.shadowChannel)} / 0.29)`,lg:`${n("shadowRing",($e=(fe=u.colorSchemes)==null||(Ce=fe.light)==null?void 0:Ce.shadowRing)!=null?$e:d.shadowRing)}, 0.3px 0.8px 1.1px rgba(${n("shadowChannel",(me=(be=u.colorSchemes)==null||(Se=be.light)==null?void 0:Se.shadowChannel)!=null?me:d.shadowChannel)} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${n("shadowChannel",(xe=(Be=u.colorSchemes)==null||(ye=Be.light)==null?void 0:ye.shadowChannel)!=null?xe:d.shadowChannel)} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${n("shadowChannel",(we=(He=u.colorSchemes)==null||(De=He.light)==null?void 0:De.shadowChannel)!=null?we:d.shadowChannel)} / 0.16), 4.8px 12px 17px -0.5px rgba(${n("shadowChannel",(Ie=(Fe=u.colorSchemes)==null||(_e=Fe.light)==null?void 0:_e.shadowChannel)!=null?Ie:d.shadowChannel)} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${n("shadowChannel",(Ae=(ke=u.colorSchemes)==null||(ze=ke.light)==null?void 0:ze.shadowChannel)!=null?Ae:d.shadowChannel)} / 0.21)`,xl:`${n("shadowRing",(Ee=(Ve=u.colorSchemes)==null||(We=Ve.light)==null?void 0:We.shadowRing)!=null?Ee:d.shadowRing)}, 0.3px 0.8px 1.1px rgba(${n("shadowChannel",(je=(Pe=u.colorSchemes)==null||(Re=Pe.light)==null?void 0:Re.shadowChannel)!=null?je:d.shadowChannel)} / 0.11), 1.8px 4.5px 6.4px -0.2px rgba(${n("shadowChannel",(Oe=(Ne=u.colorSchemes)==null||(Te=Ne.light)==null?void 0:Te.shadowChannel)!=null?Oe:d.shadowChannel)} / 0.13), 3.2px 7.9px 11.2px -0.4px rgba(${n("shadowChannel",(Me=(Ge=u.colorSchemes)==null||(Ue=Ge.light)==null?void 0:Ue.shadowChannel)!=null?Me:d.shadowChannel)} / 0.16), 4.8px 12px 17px -0.5px rgba(${n("shadowChannel",(Ke=(Le=u.colorSchemes)==null||(Je=Le.light)==null?void 0:Je.shadowChannel)!=null?Ke:d.shadowChannel)} / 0.19), 7px 17.5px 24.7px -0.7px rgba(${n("shadowChannel",(Ze=(qe=u.colorSchemes)==null||(Qe=qe.light)==null?void 0:Qe.shadowChannel)!=null?Ze:d.shadowChannel)} / 0.21), 10.2px 25.5px 36px -0.9px rgba(${n("shadowChannel",(Xe=(Ye=u.colorSchemes)==null||(et=Ye.light)==null?void 0:et.shadowChannel)!=null?Xe:d.shadowChannel)} / 0.24), 14.8px 36.8px 52.1px -1.1px rgba(${n("shadowChannel",(tt=(lt=u.colorSchemes)==null||(at=lt.light)==null?void 0:at.shadowChannel)!=null?tt:d.shadowChannel)} / 0.27), 21px 52.3px 74px -1.2px rgba(${n("shadowChannel",(ot=(nt=u.colorSchemes)==null||(rt=nt.light)==null?void 0:rt.shadowChannel)!=null?ot:d.shadowChannel)} / 0.29)`},zIndex:{badge:1,table:10,popup:1e3,modal:1300,tooltip:1500},typography:{display1:{fontFamily:n("fontFamily-display",y.display),fontWeight:n("fontWeight-xl",k.xl.toString()),fontSize:n("fontSize-xl7",w.xl7),lineHeight:n("lineHeight-sm",H.sm.toString()),letterSpacing:n("letterSpacing-sm",L.sm),color:n("palette-text-primary",d.palette.text.primary)},display2:{fontFamily:n("fontFamily-display",y.display),fontWeight:n("fontWeight-xl",k.xl.toString()),fontSize:n("fontSize-xl6",w.xl6),lineHeight:n("lineHeight-sm",H.sm.toString()),letterSpacing:n("letterSpacing-sm",L.sm),color:n("palette-text-primary",d.palette.text.primary)},h1:{fontFamily:n("fontFamily-display",y.display),fontWeight:n("fontWeight-lg",k.lg.toString()),fontSize:n("fontSize-xl5",w.xl5),lineHeight:n("lineHeight-sm",H.sm.toString()),letterSpacing:n("letterSpacing-sm",L.sm),color:n("palette-text-primary",d.palette.text.primary)},h2:{fontFamily:n("fontFamily-display",y.display),fontWeight:n("fontWeight-lg",k.lg.toString()),fontSize:n("fontSize-xl4",w.xl4),lineHeight:n("lineHeight-sm",H.sm.toString()),letterSpacing:n("letterSpacing-sm",L.sm),color:n("palette-text-primary",d.palette.text.primary)},h3:{fontFamily:n("fontFamily-body",y.body),fontWeight:n("fontWeight-md",k.md.toString()),fontSize:n("fontSize-xl3",w.xl3),lineHeight:n("lineHeight-sm",H.sm.toString()),color:n("palette-text-primary",d.palette.text.primary)},h4:{fontFamily:n("fontFamily-body",y.body),fontWeight:n("fontWeight-md",k.md.toString()),fontSize:n("fontSize-xl2",w.xl2),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-primary",d.palette.text.primary)},h5:{fontFamily:n("fontFamily-body",y.body),fontWeight:n("fontWeight-md",k.md.toString()),fontSize:n("fontSize-xl",w.xl),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-primary",d.palette.text.primary)},h6:{fontFamily:n("fontFamily-body",y.body),fontWeight:n("fontWeight-md",k.md.toString()),fontSize:n("fontSize-lg",w.lg),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-primary",d.palette.text.primary)},body1:{fontFamily:n("fontFamily-body",y.body),fontSize:n("fontSize-md",w.md),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-primary",d.palette.text.primary)},body2:{fontFamily:n("fontFamily-body",y.body),fontSize:n("fontSize-sm",w.sm),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-secondary",d.palette.text.secondary)},body3:{fontFamily:n("fontFamily-body",y.body),fontSize:n("fontSize-xs",w.xs),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-tertiary",d.palette.text.tertiary)},body4:{fontFamily:n("fontFamily-body",y.body),fontSize:n("fontSize-xs2",w.xs2),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-tertiary",d.palette.text.tertiary)},body5:{fontFamily:n("fontFamily-body",y.body),fontSize:n("fontSize-xs3",w.xs3),lineHeight:n("lineHeight-md",H.md.toString()),color:n("palette-text-tertiary",d.palette.text.tertiary)}}},pt=u?R(dt,u):dt,{colorSchemes:ht}=pt,gt=E(pt,rl),B=h({colorSchemes:ht},gt,{breakpoints:Et(st??{}),components:R({MuiSvgIcon:{defaultProps:{fontSize:"xl"},styleOverrides:{root:({ownerState:s,theme:v})=>{var f;const I=s.instanceFontSize;return h({color:"var(--Icon-color)",margin:"var(--Icon-margin)"},s.fontSize&&s.fontSize!=="inherit"&&{fontSize:`var(--Icon-fontSize, ${v.vars.fontSize[s.fontSize]})`},s.color&&s.color!=="inherit"&&s.color!=="context"&&v.vars.palette[s.color]&&{color:`rgba(${(f=v.vars.palette[s.color])==null?void 0:f.mainChannel} / 1)`},s.color==="context"&&{color:v.vars.palette.text.secondary},I&&I!=="inherit"&&{"--Icon-fontSize":v.vars.fontSize[I]})}}}},Bt),cssVarPrefix:ee,getCssVar:n,spacing:Vt(xt),colorInversionConfig:{soft:["plain","outlined","soft","solid"],solid:["plain","outlined","soft","solid"]}});function Ht(s,v){Object.keys(v).forEach(f=>{const I={main:"500",light:"200",dark:"800"};s==="dark"&&(I.main=400),!v[f].mainChannel&&v[f][I.main]&&(v[f].mainChannel=j(v[f][I.main])),!v[f].lightChannel&&v[f][I.light]&&(v[f].lightChannel=j(v[f][I.light])),!v[f].darkChannel&&v[f][I.dark]&&(v[f].darkChannel=j(v[f][I.dark]))})}Object.entries(B.colorSchemes).forEach(([s,v])=>{Ht(s,v.palette)});const Dt={prefix:ee,shouldSkipGeneratingVar:ct},{vars:It,generateCssVars:Ft}=Kt(h({colorSchemes:ht},gt),Dt);B.vars=It,B.generateCssVars=Ft,B.unstable_sxConfig=h({},Yt,a==null?void 0:a.unstable_sxConfig),B.unstable_sx=function(v){return Wt({sx:v,theme:this})},B.getColorSchemeSelector=s=>s==="light"?"&":`&[data-joy-color-scheme="${s}"], [data-joy-color-scheme="${s}"] &`;const S={getCssVar:n,palette:B.colorSchemes.light.palette};return B.variants=R({plain:x("plain",S),plainHover:x("plainHover",S),plainActive:x("plainActive",S),plainDisabled:x("plainDisabled",S),outlined:x("outlined",S),outlinedHover:x("outlinedHover",S),outlinedActive:x("outlinedActive",S),outlinedDisabled:x("outlinedDisabled",S),soft:x("soft",S),softHover:x("softHover",S),softActive:x("softActive",S),softDisabled:x("softDisabled",S),solid:x("solid",S),solidHover:x("solidHover",S),solidActive:x("solidActive",S),solidDisabled:x("solidDisabled",S)},yt),B.palette=h({},B.colorSchemes.light.palette,{colorScheme:"light"}),B.shouldSkipGeneratingVar=ct,B.colorInversion=typeof te=="function"?te:R({soft:al(B,!0),solid:ol(B,!0)},te||{},{clone:!1}),B}const cl=sl(),Y=cl,dl=jt({defaultTheme:Y,themeId:ne}),ml=dl,pl=()=>{const a=Pt(Y);return a[ne]||a};function bl({props:a,name:r}){return Rt({props:a,name:r,defaultTheme:h({},Y,{components:{}}),themeId:ne})}const St=mt.createContext(void 0),hl=a=>{const r=mt.useContext(St);return{getColor:(i,o)=>r&&a&&r.includes(a)?i||"context":i||o}};function Sl({children:a,variant:r}){var i;const o=pl();return Ot.jsx(St.Provider,{value:r?((i=o.colorInversionConfig)!=null?i:Y.colorInversionConfig)[r]:void 0,children:a})}const gl=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],ul=["component","slots","slotProps"],vl=["component"],$l=["disableColorInversion"];function xl(a,r){const{className:i,elementType:o,ownerState:c,externalForwardedProps:t,getSlotOwnerState:g,internalForwardedProps:e}=r,p=E(r,gl),{component:$,slots:C={[a]:void 0},slotProps:A={[a]:void 0}}=t,b=E(t,ul),F=C[a]||o,D=qt(A[a],c),_=Qt(h({className:i},p,{externalForwardedProps:a==="root"?b:void 0,externalSlotProps:D})),{props:{component:V},internalRef:J}=_,W=E(_.props,vl),Z=Nt(J,D==null?void 0:D.ref,r.ref),O=g?g(W):{},{disableColorInversion:q=!1}=O,N=E(O,$l),z=h({},c,N),{getColor:Q}=hl(z.variant);if(a==="root"){var T;z.color=(T=W.color)!=null?T:c.color}else q||(z.color=Q(W.color,z.color));const M=a==="root"?V||$:V,G=Jt(F,h({},a==="root"&&!$&&!C[a]&&e,a!=="root"&&!C[a]&&e,W,M&&{as:M},{ref:Z}),z);return Object.keys(N).forEach(X=>{delete G[X]}),[F,G]}export{Sl as C,Cl as a,xl as b,hl as c,Jt as d,Zt as e,ll as g,Qt as m,qt as r,ml as s,bl as u};
