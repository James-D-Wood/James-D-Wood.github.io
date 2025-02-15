"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9001],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),v=o,y=u["".concat(c,".").concat(v)]||u[v]||m[v]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:1},a="Overview",l={unversionedId:"home-lab/overview",id:"home-lab/overview",title:"Overview",description:"The goal of my homelab is to set up a development environment that allows me to experiment quickly and cheaply without deploying to a public cloud service. I'd like my homelab to support VM creation and a Kubernetes cluster.",source:"@site/docs/home-lab/overview.md",sourceDirName:"home-lab",slug:"/home-lab/overview",permalink:"/docs/home-lab/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Home Lab",permalink:"/docs/category/home-lab"},next:{title:"Services",permalink:"/docs/category/services"}},c={},s=[{value:"Virtualization",id:"virtualization",level:2},{value:"My LAN",id:"my-lan",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The goal of my homelab is to set up a development environment that allows me to experiment quickly and cheaply without deploying to a public cloud service. I'd like my homelab to support VM creation and a Kubernetes cluster."),(0,o.kt)("h2",{id:"virtualization"},"Virtualization"),(0,o.kt)("p",null,"I'm deploying ",(0,o.kt)("a",{parentName:"p",href:"https://www.proxmox.com/en/"},"Proxmox")," as my hypervisor. I have one device currently so no clustering or high availability configuration as of yet."),(0,o.kt)("h2",{id:"my-lan"},"My LAN"),(0,o.kt)("p",null,"This is a map of my home network. I'd like to enhance this with firewall and VLAN details eventually."),(0,o.kt)("mermaid",{value:"graph TD\n    R[Router]\n    S[Switch]\n    WAP[Wireless Access Point]\n    PC[Desktop]\n    HS[Home Server]\n    VM1[NVR Server]\n    VM2[K8s Nodes]\n    MB[MacBook]\n    MD[Mobile Devices]\n    IPC[IP Camera]\n\n    R --\x3e WAP\n    R --\x3e S\n\n    S --\x3e PC\n    S --\x3e HS\n\n    subgraph Virtual Machines\n        HS --\x3e VM1\n        HS --\x3e VM2\n    end\n\n    WAP --\x3e MB\n    WAP --\x3e MD\n    WAP --\x3e IPC"}))}u.isMDXComponent=!0}}]);