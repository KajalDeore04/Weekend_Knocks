(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{1143:function(e,r,t){Promise.resolve().then(t.bind(t,4094))},4094:function(e,r,t){"use strict";let n,s;t.r(r),t.d(r,{default:function(){return w}});var a=t(7437),l=t(2265),i=l.forwardRef((e,r)=>{let{children:t,...n}=e,s=l.Children.toArray(t),i=s.find(d);if(i){let e=i.props.children,t=s.map(r=>r!==i?r:l.Children.count(e)>1?l.Children.only(null):l.isValidElement(e)?e.props.children:null);return(0,a.jsx)(o,{...n,ref:r,children:l.isValidElement(e)?l.cloneElement(e,void 0,t):null})}return(0,a.jsx)(o,{...n,ref:r,children:t})});i.displayName="Slot";var o=l.forwardRef((e,r)=>{let{children:t,...n}=e;if(l.isValidElement(t)){let e,s;let a=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return l.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let s=e[n],a=r[n];/^on[A-Z]/.test(n)?s&&a?t[n]=(...e)=>{a(...e),s(...e)}:s&&(t[n]=s):"style"===n?t[n]={...s,...a}:"className"===n&&(t[n]=[s,a].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?function(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}(r,a):a})}return l.Children.count(t)>1?l.Children.only(null):null});o.displayName="SlotClone";var c=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function d(e){return l.isValidElement(e)&&e.type===c}let u=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,x=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,s="";if("string"==typeof r||"number"==typeof r)s+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(s&&(s+=" "),s+=n);else for(t in r)r[t]&&(s&&(s+=" "),s+=t)}return s}(e))&&(n&&(n+=" "),n+=r);return n};var m=t(4508);let f=(n="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",s={variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}},e=>{var r;if((null==s?void 0:s.variants)==null)return x(n,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:t,defaultVariants:a}=s,l=Object.keys(t).map(r=>{let n=null==e?void 0:e[r],s=null==a?void 0:a[r];if(null===n)return null;let l=u(n)||u(s);return t[r][l]}),i=e&&Object.entries(e).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return x(n,l,null==s?void 0:null===(r=s.compoundVariants)||void 0===r?void 0:r.reduce((e,r)=>{let{class:t,className:n,...s}=r;return Object.entries(s).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...a,...i}[r]):({...a,...i})[r]===t})?[...e,t,n]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),h=l.forwardRef((e,r)=>{let{className:t,variant:n,size:s,asChild:l=!1,...o}=e,c=l?i:"button";return(0,a.jsx)(c,{className:(0,m.cn)(f({variant:n,size:s,className:t})),ref:r,...o})});h.displayName="Button";let p=l.forwardRef((e,r)=>{let{className:t,type:n,...s}=e;return(0,a.jsx)("input",{type:n,className:(0,m.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...s})});p.displayName="Input";let g=l.forwardRef((e,r)=>{let{className:t,...n}=e;return(0,a.jsx)("textarea",{className:(0,m.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...n})});g.displayName="Textarea";var b=t(2611),v=t(8185),y=t(9089);let j=[{icon:(0,a.jsx)(y.V2E,{}),title:"YouTube",link:"https://www.youtube.com/@WEEKENDKNOCKS",text:"@WEEKENDKNOCKS"},{icon:(0,a.jsx)(y.SRX,{}),title:"Email",link:"#",text:"weekendknocks@wgmail.com"},{icon:(0,a.jsx)(y.Zf_,{}),title:"Instagram",link:"https://www.instagram.com/weekendknocks_/",text:"@weekendknocks_"}];var w=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.default,{}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-center h-screen mt-[9em]",children:(0,a.jsx)("section",{className:"container mx-auto p-6 bg-[var(--color-background)] rounded-lg shadow-lg",children:(0,a.jsxs)("div",{className:"flex flex-col xl:flex-row gap-[30px]",children:[(0,a.jsx)("div",{className:"xl:w-[54%] order-2 xl:order-none bg-white bg-opacity-20 rounded-xl backdrop-blur-md border border-white border-opacity-30",children:(0,a.jsxs)("form",{className:"flex flex-col gap-6 p-10 bg-[var(--color-secondary-bg)] rounded-xl shadow-md transition-all duration-300",children:[(0,a.jsx)("h3",{className:"text-4xl text-[var(--color-accent)] font-bold",children:"Let's work together"}),(0,a.jsx)("p",{className:"text-[var(--color-text-muted)]",children:"Got a Technical issue? Want to send feedback? Need details about our Business plan? Let us know.                                         "}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,a.jsx)(p,{type:"email",placeholder:"Email"}),(0,a.jsx)(p,{type:"text",placeholder:"Subject"})]}),(0,a.jsx)(g,{className:"h-40",placeholder:"Type your message here"}),(0,a.jsx)(h,{size:"default",className:"max-w-40 mt-4",children:"Send Message"})]})}),(0,a.jsx)("div",{className:"flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0",children:(0,a.jsx)("ul",{className:"flex flex-col gap-10",children:j.map((e,r)=>(0,a.jsxs)("li",{className:"flex items-center gap-6 transition-transform transform hover:scale-105",children:[(0,a.jsx)("div",{className:"w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[var(--color-secondary-bg)] text-[var(--color-accent)] rounded-md flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300",children:(0,a.jsx)("div",{className:"text-[28px]",children:e.icon})}),(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("p",{className:"text-[var(--color-text-muted)]",children:e.title}),(0,a.jsx)("a",{href:e.link,children:(0,a.jsx)("h3",{className:"text-xl text-[var(--color-accent)]",children:e.text})})]})]},r))})})]})})}),(0,a.jsx)(v.default,{})]})}},8185:function(e,r,t){"use strict";t.d(r,{default:function(){return h}});var n=t(7437),s=t(2222),a=t.n(s),l=t(4295),i=t(7996),o=t(9089),c=t(1841),d=t.n(c),u=t(2265);let x=["Thank you","gracias","धन्यवाद","merci","danke","ありがとう","谢谢","Спасибо","شكراً","감사합니다"];function m(){let[e,r]=(0,u.useState)(x[0]);return(0,u.useEffect)(()=>{let t=setInterval(()=>{let t=(x.indexOf(e)+1)%x.length;r(x[t])},1500);return()=>{clearInterval(t)}},[e]),(0,n.jsx)("div",{className:"".concat(d().className," md:pl-36 flex flex-col items-center justify-center text-6xl font-semibold"),children:(0,n.jsxs)("p",{children:["شكراً"===e&&"!"," ",e," ","شكراً"!==e&&"!"]})})}var f=t(5129),h=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("footer",{className:"bg-black ".concat(a().className),children:[(0,n.jsxs)("div",{className:"flex flex-col-reverse items-center justify-between space-y-8 md:space-y-0 md:grid md:grid-cols-2 py-12 border-t border-t-neutral-300 dark:border-neutral-700",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center md:items-start justify-start pt-16 md:pl-24 md:pt-0",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:f.default.src,style:{height:"120px",width:"auto"},alt:"Logo"})}),(0,n.jsx)("p",{className:"text-gray-400 text-center",children:"A way to share stories anonymously."}),(0,n.jsxs)("div",{className:"flex mt-4 space-x-4 items-baseline justify-center md:items-start md:justify-start",children:[(0,n.jsx)("a",{href:"https://www.instagram.com/raw_shots29/",target:"_blank",children:(0,n.jsx)(i.JID,{className:"dark:text-white text-2xl "})}),(0,n.jsx)("a",{href:"",target:"_blank",children:(0,n.jsx)(o.V2E,{className:"dark:text-white text-2xl"})}),(0,n.jsx)("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=sbhunia2903@gmail.com",target:"_blank",children:(0,n.jsx)(l.JwT,{className:"dark:text-white text-2xl "})})]}),(0,n.jsx)("a",{href:"/docs/privacy-policy",className:"text-md text-neutral-500 uppercase mt-2 hover:underline hover:underline-offset-4",children:"Privacy Policy"}),(0,n.jsx)("a",{href:"/docs/terms",className:"text-md text-neutral-500 uppercase hover:underline hover:underline-offset-4",children:"TERMS AND CONDITIONS"})]}),(0,n.jsx)(m,{})]}),(0,n.jsx)("div",{className:"pb-8",children:(0,n.jsxs)("p",{className:"text-sm dark:text-neutral-400 text-center",children:["\xa9 ",new Date().getFullYear()," Weekend Knocks | All rights reserved."]})})]})})},2611:function(e,r,t){"use strict";t.d(r,{default:function(){return o}});var n=t(7437),s=t(7648),a=t(2265),l=t(1269),i=t(5129);function o(){let[e,r]=(0,a.useState)(!1),[t,o]=(0,a.useState)(!1),[c,d]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.scrollY>50?d(!0):d(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,n.jsx)("nav",{className:"w-full fixed top-0 z-10 transition-all duration-300 ".concat(c?"bg-[#1c1c1c] bg-opacity-30 backdrop-blur-lg border border-white border-opacity-10":"bg-background bg-opacity-90"),onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:(0,n.jsxs)("div",{className:"container mx-auto flex items-center justify-between px-8 py-6",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)("img",{src:i.default.src,alt:"",className:"h-20 w-auto pr-4 "}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-lg font-bold tracking-wide text-primary-foreground",children:"Weekend Knocks"}),(0,n.jsx)("p",{className:"text-xs font-medium tracking-wider text-muted-foreground",children:"GAMING & ENTERTAINMENT"})]})]}),(0,n.jsx)("ul",{className:"flex space-x-6 text-sm font-semibold text-primary-foreground transition-all duration-1000 ".concat(e&&c?"gap-8":""," ").concat(c&&!e?"gap-6":""," ").concat(!c&&e?"gap-10":""," ").concat(c||e?"":"gap-12"),children:[{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Services",link:"/services"},{name:"Our Work",link:"/ourwork"},{name:"Contact",link:"/contact"},{name:"Events",link:"/events"},{name:"Search",link:"#"}].map((e,r)=>(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:e.link,children:(0,n.jsx)(l.E.span,{initial:{y:-10},whileHover:{y:5},transition:{type:"spring",stiffness:300},className:"hover:text-primary transition-all duration-300 cursor-pointer",children:e.name})})},r))}),(0,n.jsx)("div",{className:"flex space-x-4",children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{href:"/account",children:(0,n.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"My Account"})}),(0,n.jsx)(s.default,{href:"/logout",children:(0,n.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Logout"})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{href:"/login",children:(0,n.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Login"})}),(0,n.jsx)(s.default,{href:"/signup",children:(0,n.jsx)("button",{className:"px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-semibold transition-all duration-300 shadow-lg hover:shadow-[0px_0px_20px_rgba(255,255,255,0.5)]",children:"Signup"})})]})})]})})}},4508:function(e,r,t){"use strict";t.d(r,{cn:function(){return a}});var n=t(1994),s=t(3335);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,s.m6)((0,n.W)(r))}},5129:function(e,r,t){"use strict";t.r(r),r.default={src:"/_next/static/media/logo.5103b2b0.png",height:918,width:1136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEWjwcFAQkSNiYogIip/gIIWICyMjI6ZmZumpqigoaKOj5E8PEFkaWxqbnF2eHsABg1FRUW7u7umpqeOjpCvr7GwsLBUVFahlZKtra5wcXJQgu8tAAAAGXRSTlMBNc02+xeC/f39/XpjlLwmC7bT7JBEiNviFAF5PQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlJREFUeJwVxUkSgCAMAMEBIklARcH1/x+17EsDTIntLyzr3ODM4qrxYFe14vbQi5vIO6j1indO4QMl2wGrM832CgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[351,699,452,956,694,137,971,117,744],function(){return e(e.s=1143)}),_N_E=e.O()}]);