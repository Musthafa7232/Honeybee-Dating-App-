import{s as Q,L as E,j as t,t as B,b as j,T,p as X,o as Y,q as Z,G as g,W as _,A as ee}from"./index-d1f1fba9.js";import{T as te}from"./TextField-fc0ac885.js";import{B as L}from"./Button-f9927e4f.js";import{p as ne,o as re}from"./api-0223901b.js";import{C as ae,b as se,N as oe}from"./Navbar-5bafe060.js";import"./Favorite-a7aa2104.js";const ie=Q(te)`
  input {
    text-align: center;
  }
`,ce={TextFieldStyled:ie},le=a=>t.jsx(ce.TextFieldStyled,{...a}),I={left:"ArrowLeft",right:"ArrowRight",backspace:"Backspace"};function ue(a,o){return a<=0?[]:Array.from({length:a},o)}function de(a,o,i){return a.map((s,h)=>o===h?i:s)}function w(a){return a.join("")}function M(a,o){return[...a,o]}function he(a,o,i){return a.reduce((s,h,c)=>{const{characters:p,restArrayMerged:u}=s;if(c<i)return{restArrayMerged:u,characters:M(p,h)};const[x,...m]=u;return{restArrayMerged:m,characters:M(p,x||"")}},{restArrayMerged:o,characters:[]}).characters}function pe(a){return a.split("")}const $=E.forwardRef((a,o)=>{const{value:i,length:s,autoFocus:h,onChange:c,TextFieldsProps:p,onComplete:u,validateChar:x,className:m,...F}=a,{onPaste:b,onFocus:C,onKeyDown:l,className:y,...d}=p||{},v=ue(s,(e,r)=>({character:i[r]||"",inputRef:E.createRef()})),A=e=>v.findIndex(({inputRef:r})=>r.current===e),O=()=>v.map(({character:e})=>e),z=(e,r)=>{const n=de(O(),e,r);return w(n)},D=e=>{var r,n;(n=(r=v[e])==null?void 0:r.inputRef.current)==null||n.focus()},R=e=>{var r,n;(n=(r=v[e])==null?void 0:r.inputRef.current)==null||n.select()},k=e=>{e+1!==s&&(v[e+1].character?R(e+1):D(e+1))},G=e=>{e>0&&R(e-1)},K=e=>{const r=e.target.value[0]||"",n=A(e.target);if(typeof x=="function"&&!x(r,n))return;const f=z(n,r);c==null||c(f),f.length===s&&(u==null||u(f)),r!==""?f.length<s?k(f.length-1):k(n):f[n]?R(n):G(n)},U=e=>{e.preventDefault(),e.target.select(),C==null||C(e)},W=e=>{const r=e.target,n=A(r);r.value===e.key?(e.preventDefault(),k(n)):!r.value&&I.backspace===e.key||I.left===e.key?(e.preventDefault(),R(n-1)):I.right===e.key&&(e.preventDefault(),R(n+1)),l==null||l(e)},q=e=>{e.preventDefault();const r=e.target,n=e.clipboardData.getData("text/plain"),f=A(r),H=O(),S=he(H,pe(n),f),N=S.findIndex((J,V)=>V>f&&J===""),P=w(S);if(c==null||c(P),P.length===s){u==null||u(P),D(s-1);return}N!==-1&&D(N),b==null||b(e)};return t.jsx(B,{display:"flex",gap:"20px",alignItems:"center",ref:o,className:`MuiOtpInput-Box ${m||""}`,...F,children:v.map(({character:e,inputRef:r},n)=>t.jsx(le,{autoFocus:h?n===0:!1,autoComplete:"one-time-code",value:e,inputRef:r,className:`MuiOtpInput-TextField MuiOtpInput-TextField-${n+1} ${y||""}`,onPaste:q,onFocus:U,onChange:K,onKeyDown:W,...d},n))})});$.defaultProps={value:"",length:4,autoFocus:!1,validateChar:()=>!0,onChange:()=>{},onComplete:()=>{},TextFieldsProps:{}};const fe=({initialTime:a,onResend:o})=>{const[i,s]=j.useState(a);j.useEffect(()=>{if(i>0){const c=setTimeout(()=>s(i-1),1e3);return()=>clearTimeout(c)}},[i]);const h=()=>{s(a),o()};return t.jsx("div",{style:{display:"flex",justifyContent:"end",alignContent:"end"},children:i>0?t.jsxs(T,{variant:"body1",gutterBottom:!0,children:["Resend OTP in: ",i]}):t.jsx(L,{variant:"text",size:"small",onClick:h,children:"Resend OTP"})})};function xe(){const a=X(l=>l.phone),o=Y(),i=Z(),[s,h]=j.useState(""),[c,p]=j.useState(!1),[u,x]=j.useState(!1),m=j.useRef(null);j.useEffect(()=>{if(m.current){const l=m.current.querySelector("input");l&&l.focus()}},[]);const F=l=>{h(l)},b=()=>{const l={phone:a.number};ne(l).then(y=>{y.data.success||p(y.data.message)})},C=l=>{if(s.length!==6)p("Enter the otp");else if(p(!1),!u){x(!0);const y={otp:s,phone:a.number};re(y).then(d=>{x(!1),d.data.success?d.data.newUser?(o(_()),i(d.data.redirect)):(localStorage.setItem("authorization.user",JSON.stringify(d.data.token)),o(ee()),i(d.data.redirect)):p(d.data.message)}).catch(d=>{console.log(d)})}};return t.jsx(t.Fragment,{children:t.jsx(g,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"100vh"},children:t.jsx(g,{item:!0,xs:12,sm:10,md:8,lg:6,xl:4,children:t.jsx(ae,{variant:"outlined",sx:{borderRadius:6,backdropFilter:"brightness(0.9) blur(15px)",backgroundColor:"rgba(255, 255, 255, 0.5)"},children:t.jsx(se,{children:t.jsxs(B,{component:"form",noValidate:!0,sx:{my:4,display:"flex",flexDirection:"column",alignItems:"center",p:2},children:[t.jsxs(g,{container:!0,justifyContent:"center",spacing:2,children:[t.jsx(g,{item:!0,xs:12,children:t.jsx(T,{variant:"h6",sx:{textAlign:"center",mb:{xs:1,sm:0},fontFamily:"Roboto",fontWeight:700,color:"inherit",textDecoration:"none"},children:"Enter the OTP"})}),t.jsx(g,{item:!0,xs:12,children:t.jsx(T,{sx:{textAlign:"center",mb:3},children:"We have sent an OTP to the phone number you provided"})}),t.jsxs(g,{children:[t.jsx($,{ref:m,...c?{color:"tomato"}:{},length:6,value:s,onChange:F}),c&&t.jsxs(T,{variant:"subtitle1",sx:{color:"red"},children:["*",c]}),t.jsx(fe,{initialTime:30,onResend:b})]})]}),t.jsx(L,{variant:"outlined",color:"warning",sx:{mt:3,mb:2},onClick:C,children:u?"Loading":"Continue"}),t.jsx(g,{container:!0})]})})})})})})}function Ce(){return t.jsxs("div",{children:[t.jsx(oe,{}),t.jsx(xe,{})]})}export{Ce as default};