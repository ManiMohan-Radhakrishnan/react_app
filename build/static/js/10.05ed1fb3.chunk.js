(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[10,4],{1460:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(1),r=a(682),o=a(635),i=a.n(o),s=a(534),l=a(757);t.default=function(){return Object(c.useEffect)((function(){i.a.init("584955516640343"),i.a.pageView(),i.a.track("CompleteRegistration")}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(r.a,{children:[Object(n.jsx)("title",{children:"Jump.trade - Sign Up"}),Object(n.jsx)("meta",{name:"description",content:"Are you a first-time visitor? Sign-up with Jump.trade and become a part of the NFT revolution in the sub-continent."}),Object(n.jsx)("meta",{property:"og:title",content:"Jump.trade - Sign Up"}),Object(n.jsx)("meta",{property:"og:description",content:"Are you a first-time visitor? Sign-up with Jump.trade and become a part of the NFT revolution in the sub-continent."}),Object(n.jsx)("meta",{name:"twitter:title",content:"Jump.trade - Sign Up"}),Object(n.jsx)("meta",{name:"twitter:description",content:"Are you a first-time visitor? Sign-up with Jump.trade and become a part of the NFT revolution in the sub-continent."}),Object(n.jsx)("script",{src:"https://pixel.whistle.mobi/track_pixel.js?v=".concat(Date.now()),type:"text/javascript"})]}),Object(n.jsx)(s.a,{}),Object(n.jsx)(l.a,{show_success:!0})]})}},510:function(e,t,a){"use strict";var n=a(7),c=(a(1),a(1466)),r=a(928);a(552);t.a=function(e){var t=e.icon,a=e.className,o=e.placement,i=e.content,s=e.temp,l=void 0!==s&&s;e.verified;return Object(n.jsx)(n.Fragment,{children:l?Object(n.jsx)("span",{children:t}):Object(n.jsx)(c.a,{className:a,placement:o,overlay:Object(n.jsx)(r.a,{className:"tooltip-text",children:i}),children:Object(n.jsx)("span",{children:t})},o)})}},514:function(e,t,a){"use strict";var n=a(7),c=a(4),r=a(141),o=(a(1),a(1443)),i=a(1466),s=a(110);a(549);t.a=function(e){var t=e.tooltip,a=e.title,l=e.name,d=void 0===l?"":l,u=e.type,j=void 0===u?"text":u,b=e.className,O=void 0===b?"":b,m=e.required,p=void 0!==m&&m,f=e.boxRequired,v=void 0!==f&&f,h=e.requiredBottom,g=void 0!==h&&h,x=e.restrictChar,w=void 0!==x&&x,N=e.scrollIncrese,k=void 0!==N&&N,A=e.placeholder,y=void 0===A?" ":A,_=e.onChange,C=void 0===_?function(){}:_,E=e.value,S=e.isPop,M=void 0!==S&&S,D=e.lengthValue,R=void 0===D?100:D,I=e.popText,q=e.disabled,T=void 0!==q&&q,Q=e.upiPayment,J=void 0!==Q&&Q,U=Object(r.a)(e,["tooltip","title","name","type","className","required","boxRequired","requiredBottom","restrictChar","scrollIncrese","placeholder","onChange","value","isPop","lengthValue","popText","disabled","upiPayment"]),P=Math.floor(100*Math.random()+1),G=Object(n.jsx)(o.a,{children:Object(n.jsx)(o.a.Body,{children:Object(n.jsx)("p",{className:"password-terms",children:I})})}),L=["e","E","."];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("label",{htmlFor:"floatingInput".concat(P),className:"input-title",children:[a," ",t&&t]})," ",!g&&p&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),M?Object(n.jsx)(i.a,{trigger:"focus",placement:"top",overlay:G,children:Object(n.jsx)("input",Object(c.a)(Object(c.a)({},U),{},{id:"floatingInput".concat(P),type:j,name:d,className:"form-control ".concat(p&&"border-danger"," ").concat(O," ").concat(T&&"input-disabled"),placeholder:y,onChange:C,value:E,autoComplete:"off",readOnly:T,onKeyDown:function(e){"number"===j&&J&&(null===L||void 0===L?void 0:L.includes(e.key))&&e.preventDefault()}}))}):Object(n.jsx)("input",Object(c.a)(Object(c.a)({},U),{},{id:"floatingInput".concat(P),type:j,name:d,className:"form-control ".concat((p||v)&&"border-danger","\n            ").concat(O," ").concat(T&&"input-disabled"),placeholder:y,onChange:C,value:E,maxLength:R,onKeyDown:function(e){w&&Object(s.g)(e),"number"===j&&J&&(null===L||void 0===L?void 0:L.includes(e.key))&&e.preventDefault()},autoComplete:"off",onWheel:function(e){k&&e.currentTarget.blur()},readOnly:T})),g&&0===E.length&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"})]})}},519:function(e,t,a){"use strict";var n=a(7),c=a(33),r=a(1);a(540);t.a=function(e){var t=e.time,a=e.cTime,o=e.timeClass,i=void 0===o?"":o,s=e.intervalClass,l=void 0===s?"":s,d=e.intervalGapClass,u=void 0===d?"":d,j=e.customClass,b=void 0===j?"":j,O=e.handleEndEvent,m=void 0===O?function(){}:O,p=Object(r.useRef)(!1),f=function(e,t){var a,n=(new Date).getTimezoneOffset(),c=new Date(e);if(c.setMinutes(c.getMinutes()-n),t){var r=new Date(t);r.setMinutes(r.getMinutes()-n),a=+new Date(c)-+new Date(r)}else{var o=new Date;o.setMinutes(o.getMinutes()-n),a=+new Date(c)-+new Date(o)}var i=new Date;i.setMinutes(i.getMinutes()-n);var s={days:0,hours:0,minutes:0,seconds:.1};return(a=+new Date(c)-+new Date(i))>0&&(s={days:Math.floor(a/864e5),hours:Math.floor(a/36e5%24),minutes:Math.floor(a/1e3/60%60),seconds:Math.floor(a/1e3%60)}),s},v=Object(r.useState)(f(t,a)),h=Object(c.a)(v,2),g=h[0],x=h[1];Object(r.useEffect)((function(){setTimeout((function(){x(f(t,a));var e=f(t,a),n=e.days,c=e.hours,r=e.minutes,o=e.seconds;n||c||r||!(o<=.1)||p.current||(m(),p.current=!0)}),1e3)}));var w=[];return Object.keys(g).forEach((function(e){if(g[e]){var t="";switch(e){case"days":t="d";break;case"hours":t="h";break;case"minutes":t="m";break;case"seconds":t="s";break;default:t=""}var a=Math.floor(100*Math.random()+1);w.push(Object(n.jsxs)("span",{className:"counter-time ".concat(i),children:[.1===g[e]?0:g[e],Object(n.jsx)("span",{className:"counter-interval interval-gap ".concat(l," ").concat(u),children:t})]},"".concat(t).concat(a)))}})),Object(n.jsx)("div",{className:"nft-counter ".concat(b),children:w.length?w:Object(n.jsxs)("span",{className:"counter-time ".concat(i),children:["0",Object(n.jsx)("span",{className:"counter-interval interval-gap ".concat(l," ").concat(u),children:"s"})]})})}},528:function(e,t,a){"use strict";var n=a(7);a(1),a(551);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"bl_signup_wrapper",children:[Object(n.jsx)("div",{className:"container-fluid position-relative",children:Object(n.jsx)("div",{className:"row align-items-center",children:Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"flex-block",children:[t,Object(n.jsxs)("div",{className:"text-block",children:[Object(n.jsx)("h2",{children:"ONE ACCOUNT\u2026"}),Object(n.jsx)("h3",{children:"MULTI-NFT METAVERSE ACCESS!"})]})]})})})}),Object(n.jsx)("div",{className:"container-fluid bl_copyright",children:Object(n.jsxs)("p",{children:["Grab the latest and trendy NFTs exclusively on"," ",Object(n.jsx)("a",{href:"https://www.jump.trade",target:"_self",children:"Jump.trade"})]})})]})}},534:function(e,t,a){"use strict";var n=a(7),c=a(33),r=a(1),o=a.n(r),i=a(1467),s=(a(110),a(535)),l=(a(539),a(519),a(53)),d=a(56);t.a=function(){var e="Jan 22, 2022 15:00:00",t=Object(r.useState)(),a=Object(c.a)(t,2),u=(a[0],a[1]),j=Object(l.c)(),b=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=(new Date).getTimezoneOffset(),n=new Date(e);n.setMinutes(n.getMinutes()-a);var c=new Date;t&&c.setSeconds(c.getSeconds()+2),new Date(n)<c?j(Object(d.f)()):u(n)};Object(r.useEffect)((function(){b(!1)}),[]);var O=o.a.forwardRef((function(e,t){var a=e.onClick;return Object(n.jsx)("a",{ref:t,className:"drop_login",onClick:function(e){e.preventDefault(),a(e)},href:"#",children:"Drops"})}));return Object(n.jsx)("div",{className:"bl_header",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsxs)("div",{className:"flex-nav",children:[Object(n.jsx)("div",{className:"bl_logo pt-2 pb-2",children:Object(n.jsx)("img",{className:"brand-logo",src:s.a,onClick:function(){return window.open("https://www.jump.trade","_self")},role:"button"})}),Object(n.jsx)(i.a,{autoClose:["inside","outside"],children:Object(n.jsx)(i.a.Toggle,{align:"start",drop:"start",as:O,onClick:function(){return window.open("".concat("https://www.jump.trade"),"_blank")}})})]})})})})})}},535:function(e,t,a){"use strict";t.a=a.p+"static/media/jump-trade.d35d8752.svg"},538:function(e,t,a){"use strict";t.a="data:image/png;base64,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"},539:function(e,t,a){},540:function(e,t,a){},549:function(e,t,a){},551:function(e,t,a){},552:function(e,t,a){},554:function(e,t,a){"use strict";var n=a(7),c=(a(1),a(633)),r=a.n(c);a(634),a(573);t.a=function(e){var t=e.defaultCountry,a=void 0===t?"in":t,c=e.onChange,o=void 0===c?function(){}:c,i=e.value,s=e.required,l=void 0!==s&&s,d=e.className,u=void 0===d?"":d,j=e.onEnterKeyPress,b=void 0===j?function(){}:j,O=e.title,m="";return m+=u,m+=l?" border-danger":"",Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{className:"input-title",children:O})," ",l&&Object(n.jsx)("small",{className:"text-danger font-10",children:"(Required)"}),Object(n.jsx)(r.a,{onEnterKeyPress:b,country:a,value:i,onChange:o,inputClass:m})]})}},564:function(e,t,a){},570:function(e,t,a){"use strict";var n=a(7),c=a(9),r=a.n(c),o=a(23),i=(a(1),a(53)),s=a(26),l=a(683),d=a(73),u=a(24),j=a(178),b=a(28),O=a.p+"static/media/google.9a7800d0.svg",m=a(56);a(564);function p(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.user})),a=Object(s.h)(),c=Object(s.g)(),p=Object(j.a)(a.search).get("redirect"),f=function(){var e=Object(o.a)(r.a.mark((function e(a){var n,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t?void 0:t.login)||!Object(u.a)()){e.next=4;break}p?window.open(p,"_self"):c.push("/account/profile"),e.next=15;break;case 4:if(!a.access_token){e.next=12;break}return n=a.token_type?a.token_type:"",o=a.access_token?a.access_token:"",i="".concat(n," ").concat(o),e.next=10,v(i);case 10:e.next=15;break;case 12:if(!a.credential){e.next=15;break}return e.next=15,v("Bearer ".concat(a.credential));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,i,s,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.Tb)({provider:"google",token:a});case 3:(null===(i=t.sent)||void 0===i||null===(n=i.data)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.token)&&(e(Object(m.i)(null===i||void 0===i||null===(s=i.data)||void 0===s||null===(l=s.data)||void 0===l?void 0:l.token)),Object(u.e)(i.data.data.token),c.push("/account/profile")),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),d.b.error("An unexpected error occured. Please try again  later"),console.log("\ud83d\ude80 ~ file: index.js ~ line 92 ~ responseGoogle ~ error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),h=Object(l.b)({onSuccess:f,onError:f,uxMode:"popup"});return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"social-login-btn-box",children:Object(n.jsx)("button",{onClick:function(){h()},className:"login-with-btn",type:"button",children:Object(n.jsx)("img",{src:O})})})})}t.a=function(){return Object(n.jsx)(l.a,{clientId:"202459086370-pu5aotf7rhh5lp0tv4emtnniihifnjq4.apps.googleusercontent.com",className:"signup_button",children:Object(n.jsx)(p,{})})}},573:function(e,t,a){},581:function(e,t,a){"use strict";a(7),a(9),a(23),a(1),a(53),a(26),a(73),a(684),a(178),a(24),a(28),a(56),a.p,a(564)},635:function(e,t,a){window,e.exports=function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){e.exports=a(1)},function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.r(t);var c=!!window.fbq,r=!1,o=function(){var e;if(r){for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];(e=console).info.apply(e,n(["[react-facebook-pixel]"].concat(a)))}},i=function(){var e;if(r){for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];(e=console).info.apply(e,n(["[react-facebook-pixel]"].concat(a)))}},s=function(){return c||o("Pixel not initialized before using call ReactPixel.init with required params"),c},l={autoConfig:!0,debug:!1};t.default={init:function(e){var t,a,n,i,s,d,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},j=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l;t=window,a=document,n="script",t.fbq||(i=t.fbq=function(){i.callMethod?i.callMethod.apply(i,arguments):i.queue.push(arguments)},t._fbq||(t._fbq=i),i.push=i,i.loaded=!0,i.version="2.0",i.queue=[],(s=a.createElement(n)).async=!0,s.src="https://connect.facebook.net/en_US/fbevents.js",(d=a.getElementsByTagName(n)[0]).parentNode.insertBefore(s,d)),e?(!1===j.autoConfig&&fbq("set","autoConfig",!1,e),fbq("init",e,u),c=!0,r=j.debug):o("Please insert pixel id for initializing")},pageView:function(){s()&&(fbq("track","PageView"),r&&i("called fbq('track', 'PageView');"))},track:function(e,t){s()&&(fbq("track",e,t),r&&(i("called fbq('track', '".concat(e,"');")),t&&i("with data",t)))},trackSingle:function(e,t,a){s()&&(fbq("trackSingle",e,t,a),r&&(i("called fbq('trackSingle', '".concat(e,"', '").concat(t,"');")),a&&i("with data",a)))},trackCustom:function(e,t){s()&&(fbq("trackCustom",e,t),r&&(i("called fbq('trackCustom', '".concat(e,"');")),t&&i("with data",t)))},trackSingleCustom:function(e,t,a){s()&&(fbq("trackSingle",e,t,a),r&&(i("called fbq('trackSingleCustom', '".concat(e,"', '").concat(t,"');")),a&&i("with data",a)))},grantConsent:function(){s()&&(fbq("consent","grant"),r&&i("called fbq('consent', 'grant');"))},revokeConsent:function(){s()&&(fbq("consent","revoke"),r&&i("called fbq('consent', 'revoke');"))},fbq:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){if(s()){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];fbq.apply(void 0,t),r&&(i("called fbq('".concat(t.slice(0,2).join("', '"),"')")),t[2]&&i("with data",t[2]))}}))}}])},685:function(e,t,a){},686:function(e,t,a){},757:function(e,t,a){"use strict";var n=a(7),c=a(37),r=a(9),o=a.n(r),i=a(23),s=a(4),l=a(33),d=a(756),u=a(182),j=a.n(u),b=a(635),O=a.n(b),m=a(1),p=a(73),f=a(26),v=a(177),h=a(142),g=a(528),x=a(110),w=(a.p,a(685),a(514)),N=a(554),k=a(510),A=a(538),y=a(24),_=a(28),C=a(178),E=a(570);a(581),a(686),t.a=function(e){var t=e.show_success,a=void 0!==t&&t,r=Object(f.j)().params,u=r.fsz,b=r.guild_source,S=Object(m.useState)(!1),M=Object(l.a)(S,2),D=M[0],R=M[1],I=Object(m.useState)("in"),q=Object(l.a)(I,2),T=q[0],Q=q[1],J=Object(m.useState)(!1),U=Object(l.a)(J,2),P=(U[0],U[1],Object(m.useState)(!1)),G=Object(l.a)(P,2),L=G[0],K=G[1],W=Object(m.useState)(!0),z=Object(l.a)(W,2),F=z[0],Z=z[1],B=Object(m.useState)(""),H=Object(l.a)(B,2),V=H[0],Y=H[1],X=Object(m.useState)(""),$=Object(l.a)(X,2),ee=$[0],te=$[1],ae=Object(m.useState)(""),ne=Object(l.a)(ae,2),ce=ne[0],re=ne[1],oe=Object(m.useState)({first_name:"",last_name:"",email:"",password:"",phone_no:"",phone_code:"",accepted_terms_and_condition:!0,invite_code:""}),ie=Object(l.a)(oe,2),se=ie[0],le=ie[1],de=Object(m.useState)(!1),ue=Object(l.a)(de,2),je=ue[0],be=ue[1],Oe=Object(m.useState)({first_name:!1,valid_first_name:!1,last_name:!1,valid_last_name:!1,email:!1,valid_email:!1,password:!1,valid_password:!1,phone_no:!1,valid_phone_no:!1,captcha:!1,accepted_terms_and_condition:!1,invite_code:!1,valid_invite_code:!1}),me=Object(l.a)(Oe,2),pe=me[0],fe=me[1],ve=Object(f.h)(),he=Object(C.a)(ve.search),ge="jump";Object(m.useEffect)((function(){xe(),O.a.init("584955516640343"),O.a.pageView(),O.a.track("Lead")}),[]),Object(m.useEffect)((function(){var e=he.get("referralcode")?he.get("referralcode"):"";if((e||Object(y.b)("referralcode"))&&(be(!0),le(Object(s.a)(Object(s.a)({},se),{},{invite_code:e||Object(y.b)("referralcode")}))),Object(y.a)())return window.open("/accounts/profile","_self")}),[]);var xe=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.Ub)();case 3:a=e.sent,(n=null===(t=a.data)||void 0===t?void 0:t.country_code)&&Q(n.toLowerCase()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("\ud83d\ude80 ~ file: index.js ~ line 70 ~ getLocationDetails ~ error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),we=function(e){e.target.value?"name"===e.target.name?Object(x.Q)(e.target.value)&&(le(Object(s.a)(Object(s.a)({},se),{},Object(c.a)({},e.target.name,Object(x.R)(e.target.value)))),fe(Object(s.a)(Object(s.a)({},pe),{},Object(c.a)({},e.target.name,!1)))):"email"===e.target.name?(le(Object(s.a)(Object(s.a)({},se),{},Object(c.a)({},e.target.name,e.target.value.trim()))),fe(Object(s.a)(Object(s.a)({},pe),{},Object(c.a)({},e.target.name,!1)))):(le(Object(s.a)(Object(s.a)({},se),{},Object(c.a)({},e.target.name,e.target.value))),fe(Object(s.a)(Object(s.a)({},pe),{},Object(c.a)({},e.target.name,!1)))):(le(Object(s.a)(Object(s.a)({},se),{},Object(c.a)({},e.target.name,e.target.value))),fe(Object(s.a)(Object(s.a)({},pe),{},Object(c.a)({},e.target.name,!0))))},Ne=function(){var e=Object(s.a)({},pe);return e=se.first_name?Object(x.Q)(se.first_name)?Object(s.a)(Object(s.a)({},e),{},{valid_first_name:!1}):Object(s.a)(Object(s.a)({},e),{},{valid_first_name:!0}):Object(s.a)(Object(s.a)({},e),{},{first_name:!0}),e=se.last_name?Object(x.Q)(se.last_name)?Object(s.a)(Object(s.a)({},e),{},{valid_last_name:!1}):Object(s.a)(Object(s.a)({},e),{},{valid_last_name:!0}):Object(s.a)(Object(s.a)({},e),{},{last_name:!0}),e=se.email?Object(x.O)(se.email)?Object(s.a)(Object(s.a)({},e),{},{valid_email:!1}):Object(s.a)(Object(s.a)({},e),{},{valid_email:!0}):Object(s.a)(Object(s.a)({},e),{},{email:!0}),e=se.password?Object(x.U)(se.password)?Object(s.a)(Object(s.a)({},e),{},{valid_password:!1}):Object(s.a)(Object(s.a)({},e),{},{valid_password:!0}):Object(s.a)(Object(s.a)({},e),{},{password:!0}),e=se.phone_no?Object(x.K)(se.phone_no,se.phone_code)?Object(s.a)(Object(s.a)({},e),{},{valid_phone_no:!1}):Object(s.a)(Object(s.a)({},e),{},{valid_phone_no:!0}):Object(s.a)(Object(s.a)({},e),{},{phone_no:!0}),se.accepted_terms_and_condition||(e=Object(s.a)(Object(s.a)({},e),{},{accepted_terms_and_condition:!0})),e=je&&!se.invite_code?Object(s.a)(Object(s.a)({},e),{},{invite_code:!0}):Object(s.a)(Object(s.a)({},e),{},{valid_invite_code:!1}),e=L?Object(s.a)(Object(s.a)({},e),{},{captcha:!1}):Object(s.a)(Object(s.a)({},e),{},{captcha:!0}),fe(e),!(e.first_name||e.valid_first_name||e.last_name||e.valid_last_name||e.email||e.password||e.phone_no||e.valid_email||e.valid_phone_no||e.valid_password||e.accepted_terms_and_condition||e.invite_code||e.valid_invite_code||e.captcha)},ke=function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n,c,r,i,l,d,O,m,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Ne()){e.next=31;break}return e.prev=1,R(!0),t=Object(s.a)({},se),je||(t=Object(s.a)(Object(s.a)({},se),{},{invite_code:null})),a=u||Object(y.c)(),n=b||Object(y.b)("guild_source"),a&&void 0!==a&&"undefined"!==a&&n&&void 0!==n&&"undefined"!==n?t=Object(s.a)(Object(s.a)({},se),{},{fsz:a,guild_source:n,source:ge}):a&&void 0!==a&&"undefined"!==a?t=Object(s.a)(Object(s.a)({},se),{},{fsz:a,source:ge}):n&&void 0!==n&&"undefined"!==n&&(t=Object(s.a)(Object(s.a)({},se),{},{guild_source:n,source:ge})),e.next=10,Object(_.Ib)(t);case 10:if(201!==(c=e.sent).status){e.next=23;break}if(Object(x.t)(null===x.b||void 0===x.b?void 0:x.b.USER_SIGN_UP,{"First Name":null===se||void 0===se?void 0:se.first_name,"Last Name":null===se||void 0===se?void 0:se.last_name,email:null===se||void 0===se?void 0:se.email,Phone:"+".concat(null===se||void 0===se?void 0:se.phone_no)}),!Object(y.b)("aid")){e.next=21;break}return e.next=16,Object(_.uc)({code:10033,uid:null===c||void 0===c||null===(r=c.data)||void 0===r||null===(i=r.data)||void 0===i?void 0:i.user_id,aid:Object(y.b)("aid"),campaign:Object(y.b)("campaign"),source:Object(y.b)("source"),vid:Object(y.b)("vid"),click_id:Object(y.b)("click_id"),event_name:"registration"});case 16:l=e.sent,j.a.track("Sign up"),200===l.status&&window.open("/signup/success","_self"),e.next=23;break;case 21:j.a.track("Sign up"),window.open("/signup/success","_self");case 23:e.next=30;break;case 25:e.prev=25,e.t0=e.catch(1),R(!1),console.log(e.t0),422===(null===e.t0||void 0===e.t0?void 0:e.t0.status)?(0===(null===e.t0||void 0===e.t0||null===(d=e.t0.data)||void 0===d?void 0:d.error_code)&&("Email has already been taken"===(null===e.t0||void 0===e.t0||null===(f=e.t0.data)||void 0===f?void 0:f.message)?se.email?window.open("/signin?email=".concat(encodeURIComponent(se.email)),"_self"):Y("This Email is already associated with a GuardianLink ID. Please Login or use a different email to register."):re("Phone number has already been taken")),2===(null===e.t0||void 0===e.t0||null===(O=e.t0.data)||void 0===O?void 0:O.error_code)&&te("You have entered an invaild referral/promo code"),3===(null===e.t0||void 0===e.t0||null===(m=e.t0.data)||void 0===m?void 0:m.error_code)&&re("Phone number has already been taken")):(p.b.error("An unexpected error occured. Please try again "),console.log("\ud83d\ude80 ~ file: index.js ~ line 106 ~ handleSignUp ~ err",e.t0));case 30:R(!1);case 31:case"end":return e.stop()}}),e,null,[[1,25]])})));return function(){return e.apply(this,arguments)}}(),Ae=function(e){"Enter"===e.key&&ke()};return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(g.a,{children:Object(n.jsx)(n.Fragment,{children:a?Object(n.jsxs)("div",{className:"bl_form_box",children:[Object(n.jsx)("div",{className:"log_top",children:Object(n.jsx)("div",{className:"login_logos",children:Object(n.jsxs)("a",{children:[" ",Object(n.jsx)(k.a,{icon:Object(n.jsx)("img",{src:A.a,alt:"Guardian-Logo",role:"button",onClick:function(){return Object(x.x)("https://www.guardianlink.io/")}}),content:Object(n.jsx)(n.Fragment,{children:"Your GuardianLink ID gives access to all NFT drops, marketplaces, & other platforms powered by GuardianLink."}),placement:"top"})]})})}),Object(n.jsxs)("div",{className:"form-cntnt-box",children:[Object(n.jsx)("h4",{children:"Welcome to Jump.trade! "}),Object(n.jsx)("p",{children:"You're just a step away from accessing a world of unique NFTs!"}),Object(n.jsxs)("p",{className:"mb-4",children:["Please ",Object(n.jsx)(v.b,{to:"/signin",children:" login "})," to continue"," "]})]})]}):Object(n.jsxs)("div",{className:"bl_form_box",children:[Object(n.jsx)("div",{className:"log_top",children:Object(n.jsx)("div",{className:"login_logos",children:Object(n.jsxs)("a",{children:[" ",Object(n.jsx)(k.a,{icon:Object(n.jsx)("img",{src:A.a,alt:"Guardian-Logo",role:"button",onClick:function(){return Object(x.x)("https://www.guardianlink.io/")}}),content:Object(n.jsx)(n.Fragment,{children:"Your GuardianLink ID gives access to all NFT drops, marketplaces, & other platforms powered by GuardianLink."}),placement:"top"})]})})}),Object(n.jsxs)("div",{className:"form-cntnt-box",children:[Object(n.jsx)("p",{className:"text-center etc_text",children:"You are one step away from Joining our Meta world!"}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)(w.a,{title:"First Name",name:"first_name",value:se.first_name,required:pe.first_name,onKeyPress:Ae,onChange:we}),pe.valid_first_name&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid first name"})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)(w.a,{title:"Last Name",name:"last_name",value:se.last_name,required:pe.last_name,onKeyPress:Ae,onChange:we}),pe.valid_last_name&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid last name"})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)(w.a,{title:"Email Address",name:"email",required:pe.email,value:se.email,onKeyPress:Ae,onChange:we}),pe.valid_email&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid email address"}),V&&Object(n.jsx)("p",{className:"error_text",children:V})]}),Object(n.jsxs)("div",{className:"form-group mb-3 float-icon",children:[Object(n.jsx)(w.a,{title:"Password",type:F?"password":"text",name:"password",required:pe.password,value:se.password,onKeyPress:Ae,onChange:we,isPop:!0,popText:"Your password should have a minimum of 6 characters, and should include an uppercase letter and a number."}),F?Object(n.jsx)(h.l,{className:"eye",role:"button",onClick:function(){return Z(!F)}}):Object(n.jsx)(h.m,{role:"button",onClick:function(){return Z(!F)},className:"eye"})]}),pe.valid_password&&Object(n.jsx)("p",{className:"error_text",children:"Your password does not comply with our password policy."}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)(N.a,{title:"Mobile",defaultCountry:T,value:se.phone_no,required:pe.phone_no,onEnterKeyPress:ke,onChange:function(e,t){le(Object(s.a)(Object(s.a)({},se),{},{phone_no:e,phone_code:t.countryCode.toUpperCase()})),re(""),fe(Object(s.a)(Object(s.a)({},pe),{},{phone_no:!e}))}}),pe.valid_phone_no&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid mobile number"}),ce&&Object(n.jsx)("p",{className:"error_text",children:ce})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)("input",{type:"checkbox",role:"button",checked:je,onChange:function(){return be(!je)}})," ","I have a Referral/Promo Code"," "]}),je&&Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)(w.a,{title:"Referral/Promo Code",type:"text",value:se.invite_code,required:pe.invite_code,onKeyPress:Ae,onChange:function(e){le(Object(s.a)(Object(s.a)({},se),{},{invite_code:e.target.value.trim()})),fe(e?Object(s.a)(Object(s.a)({},pe),{},{invite_code:!1}):Object(s.a)(Object(s.a)({},pe),{},{invite_code:!0}))}}),pe.valid_invite_code&&Object(n.jsx)("p",{className:"error_text",children:"Please enter a valid Referral/Promo Code"}),ee&&Object(n.jsx)("p",{className:"error_text",children:ee})]}),Object(n.jsxs)("div",{className:"form-group mb-3",children:[Object(n.jsx)(d.a,{className:"recaptcha_box",sitekey:"6LdOM9gcAAAAAMs5U1ZCI4riUezhXi7O7e2z7YCw",onChange:function(e){console.log("Captcha value:",e),K(!0)}}),pe.captcha&&Object(n.jsx)("p",{className:"error_text",children:"Please verify the CAPTCHA to proceed"})]}),Object(n.jsx)("p",{className:"mt-3 ",children:Object(n.jsxs)("span",{className:"terms-text-reg",children:["By Proceeding Further & Clicking on 'Submit' You Agree to Jump.trade's"," ",Object(n.jsx)("a",{className:"terms-link",href:"https://www.jump.trade/terms-and-conditions",target:"_blank",children:"Terms & Conditions."})]})}),Object(n.jsx)("div",{className:"form-group mb-2",children:Object(n.jsx)("button",{disabled:D,type:"button",className:"btn btn-dark w-100",onClick:ke,children:D?"Loading...":"Submit"})}),Object(n.jsxs)("div",{className:"social-login-block",children:[Object(n.jsx)("h5",{className:"social_OR",children:"or"}),Object(n.jsx)("p",{className:"login-with-heading",children:"Sign In with"}),Object(n.jsx)("div",{className:"social-login-btn-block",children:Object(n.jsx)(E.a,{})})]}),Object(n.jsx)("div",{className:"form-group bl_forgot mb-2",children:Object(n.jsxs)("p",{className:"text-center",children:[Object(n.jsx)("span",{children:"Already have a GuardianLink ID? "}),Object(n.jsx)(v.b,{to:"/signin",className:"bold-font",children:"Sign In"})]})})]})]})})})})}}}]);
//# sourceMappingURL=10.05ed1fb3.chunk.js.map