(this["webpackJsonpcolor-gen"]=this["webpackJsonpcolor-gen"]||[]).push([[0],{25:function(e,n,t){"use strict";t.r(n);var c,r,i,o,a,l,b,j,u,s,d,h,O,f,x,m,g,v,w,p,k,C,y,F,S,T,z,R,M,E,L,D=t(2),P=t.n(D),B=t(11),G=t.n(B),I=t(3),J=t(17),U=t(5),_=t(4),q=Object(_.a)(c||(c=Object(I.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-weight: 300;\n}\nbody{\n        font-family: 'Ubuntu', sans-serif;\n        button, svg{\n                cursor: pointer;\n        }\n        font-weight: 300;\n       background-color: var(--white);\n       color: var(--black)\n}\n\n:root{\n        --white: ",";\n        --black: ","; \n}\n"])),(function(e){return"white"===e.theme?"white":"black"}),(function(e){return"white"===e.theme?"black":"white"})),A=t(16),H=t.n(A),K=t(15),N=t(1),Q=_.c.a(r||(r=Object(I.a)([""]))),V=Object(_.c)(K.a)(i||(i=Object(I.a)(["\n    font-size: 1.6rem;\n    color: var(--white);\n    background-color: var(--black);\n    border-radius: 50%;\n    @media (min-width: 620px) {\n        font-size: 2rem;\n    }\n"]))),W=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(Q,{href:"https://github.com/vicky-yadav/tints-and-shades-generator",target:"_blank",children:Object(N.jsx)(V,{})})})},X=_.c.button(o||(o=Object(I.a)(["\n    height: 1.4rem;\n    width: 2.6rem;\n    border-radius: 2rem;\n    background-color: var(--black);\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    justify-content: ",";\n    border: 2px solid var(--black);\n    outline: none;\n    @media (min-width: 620px) {\n        height: 1.6rem;\n        width: 3rem;\n    }\n"])),(function(e){return"white"===e.theme?"flex-end":"flex: start"})),Y=_.c.span(a||(a=Object(I.a)(["\n    background-color: var(--white);\n    display: inline-block;\n    border-radius: 50%;\n    width: 1rem;\n    height: 15px;\n"]))),Z=function(e){var n=e.setTheme,t=e.theme;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(X,{onClick:function(){n("white"===t?"black":"white")},theme:t,children:Object(N.jsx)(Y,{})})})},$=_.c.header(l||(l=Object(I.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n"]))),ee=_.c.h1(b||(b=Object(I.a)(["\n    font-weight: 500;\n    font-size: 1.5rem;\n    @media (min-width: 620px) {\n        font-size: 2rem;\n    }\n"]))),ne=function(e){var n=e.setTheme,t=e.theme;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)($,{children:[Object(N.jsx)(W,{}),Object(N.jsx)(ee,{children:"Generate Color"}),Object(N.jsx)(Z,{setTheme:n,theme:t})]})})},te=Object(_.b)(j||(j=Object(I.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),ce=Object(_.b)(u||(u=Object(I.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),re=_.c.h3(s||(s=Object(I.a)(["\n    color: red;\n"]))),ie=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(re,{children:"Please enter valid hex code"})})},oe=_.c.div(d||(d=Object(I.a)(["\n    height: 122px;\n"]))),ae=_.c.h3(h||(h=Object(I.a)(["\n    padding: 0;\n"]))),le=function(e){var n=e.weight;return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(oe,{children:Object(N.jsx)(ae,{children:n})})})},be=t(7),je=_.c.div(O||(O=Object(I.a)(["\n    position: relative;\n"]))),ue=_.c.div(f||(f=Object(I.a)(["\n    height: 6rem;\n    width: 6rem;\n    background-color: #",";\n    ","\n    border-radius: 1rem;\n"])),(function(e){return e.bgColor}),(function(e){return e.flexRow})),se=_.c.h3(x||(x=Object(I.a)(["\n    text-align: center;\n"]))),de=Object(_.c)(be.a)(m||(m=Object(I.a)(["\n    background-color: var(--white);\n    font-size: 1.7rem;\n    width: 2rem;\n    height: 2rem;\n    padding: 0.2rem;\n    border-radius: 8px;\n    color: var(--black);\n"]))),he=function(e){var n=e.shade,t=n.hex,c=(n.weight,Object(D.useState)(!1)),r=Object(U.a)(c,2),i=r[0],o=r[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(je,{children:[Object(N.jsx)(ue,{flexRow:ce,bgColor:t,onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},onClick:function(){navigator.clipboard.writeText("#".concat(t))},children:i&&Object(N.jsx)(de,{})}),Object(N.jsx)(se,{children:"#".concat(t)})]})})},Oe=_.c.div(g||(g=Object(I.a)(["\n    position: relative;\n"]))),fe=_.c.div(v||(v=Object(I.a)(["\n    height: 6rem;\n    width: 6rem;\n    background-color: #",";\n    ","\n    border-radius: 1rem;\n"])),(function(e){return e.bgColor}),(function(e){return e.flexRow})),xe=_.c.h3(w||(w=Object(I.a)(["\n    text-align: center;\n"]))),me=Object(_.c)(be.a)(p||(p=Object(I.a)(["\n    background-color: var(--white);\n    font-size: 1.7rem;\n    width: 2rem;\n    height: 2rem;\n    padding: 0.2rem;\n    border-radius: 8px;\n    color: var(--black);\n"]))),ge=function(e){var n=e.tint,t=n.hex,c=(n.weight,Object(D.useState)(!1)),r=Object(U.a)(c,2),i=r[0],o=r[1];return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(Oe,{children:[Object(N.jsx)(fe,{flexRow:ce,bgColor:t,onMouseOver:function(){o(!0)},onMouseLeave:function(){o(!1)},onClick:function(){navigator.clipboard.writeText("#".concat(t))},children:i&&Object(N.jsx)(me,{})}),Object(N.jsx)(xe,{children:"#".concat(t)})]})})},ve=_.c.main(k||(k=Object(I.a)(["\n    ","\n    padding: 1rem;\n    height: 100%;\n"])),(function(e){return e.flexColumn})),we=_.c.form(C||(C=Object(I.a)(["\n    ","\n    & * {\n        margin: 0.4rem;\n    }\n"])),(function(e){return e.flexColumn})),pe=_.c.label(y||(y=Object(I.a)([""]))),ke=_.c.input(F||(F=Object(I.a)(["\n    border: none;\n    border-bottom: 2px solid var(--black);\n    outline: none;\n    padding: 0.5rem 1.3rem;\n    text-align: center;\n    background-color: var(--white);\n    color: var(--black);\n    /* ::placeholder {\n        color: var(--black);\n    } */\n"]))),Ce=_.c.div(S||(S=Object(I.a)([""]))),ye=_.c.button(T||(T=Object(I.a)(["\n    width: 10rem;\n    padding: 0.2rem 0;\n    border: 2px solid var(--black);\n    outline: none;\n    background-color: var(--white);\n    border-radius: 1rem;\n    font-size: 1rem;\n    cursor: pointer;\n    color: inherit;\n    &:hover {\n        background-color: var(--black);\n        color: var(--white);\n    }\n"]))),Fe=_.c.section(z||(z=Object(I.a)(["\n    ","\n    justify-content: space-around;\n    width: 100%;\n    align-items: flex-start;\n"])),(function(e){return e.flexRow})),Se=_.c.h3(R||(R=Object(I.a)(["\n    text-align: center;\n"]))),Te=_.c.section(M||(M=Object(I.a)(["\n    width: 33%;\n    ","\n"])),(function(e){return e.flexColumn})),ze=_.c.section(E||(E=Object(I.a)(["\n    width: 33%;\n    ","\n"])),(function(e){return e.flexColumn})),Re=_.c.section(L||(L=Object(I.a)(["\n    width: 33%;\n    ","\n"])),(function(e){return e.flexColumn})),Me=function(){var e=Object(D.useState)(!1),n=Object(U.a)(e,2),t=n[0],c=n[1],r=Object(D.useState)([]),i=Object(U.a)(r,2),o=i[0],a=i[1],l=Object(D.useState)([]),b=Object(U.a)(l,2),j=b[0],u=b[1],s=Object(D.useState)(""),d=Object(U.a)(s,2),h=d[0],O=d[1],f=Object(D.useState)("black"),x=Object(U.a)(f,2),m=x[0],g=x[1],v=function(e){e.preventDefault(),c(!1);try{var n=new H.a(h).all(5).sort((function(e,n){return e.weight-n.weight}));a(n.filter((function(e){return"shade"===e.type}))),u(n.filter((function(e){return"tint"===e.type})))}catch(t){c(!0),console.log(t)}},w=Object(D.useRef)(null);return Object(D.useEffect)((function(){w.current.focus()}),[]),Object(D.useEffect)((function(){var e=setTimeout((function(){t&&c(!1)}),2500);return function(){clearTimeout(e)}}),[t]),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(q,{theme:m}),Object(N.jsxs)(ve,{flexColumn:te,children:[Object(N.jsx)(ne,{setTheme:g,theme:m}),Object(N.jsxs)(we,{flexColumn:te,onSubmit:function(e){e.preventDefault(),v(e)},children:[Object(N.jsx)(pe,{children:"Enter color here"}),Object(N.jsx)(ke,{ref:w,placeholder:"#222222",type:"text",value:h,onChange:function(e){O((function(n){return e.target.value}))}}),Object(N.jsx)(Ce,{onClick:function(e){v(e)},children:Object(N.jsx)(ye,{type:"submit",children:"Get Colors"})})]}),t?Object(N.jsx)(ie,{}):null,0!==j.length&&Object(N.jsxs)(Fe,{flexRow:ce,children:[Object(N.jsxs)(Te,{flexColumn:te,children:[Object(N.jsx)(Se,{children:"%"}),o.map((function(e,n){return Object(N.jsx)(le,Object(J.a)({},e),n)}))]}),Object(N.jsxs)(ze,{flexColumn:te,children:[Object(N.jsx)(Se,{children:"Shade"}),o.map((function(e,n){return Object(N.jsx)(he,{shade:e},n)}))]}),Object(N.jsxs)(Re,{flexColumn:te,children:[Object(N.jsx)(Se,{children:"Tint"}),j.map((function(e,n){return Object(N.jsx)(ge,{tint:e},n)}))]})]})]})]})},Ee=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))};G.a.render(Object(N.jsx)(P.a.StrictMode,{children:Object(N.jsx)(Me,{})}),document.getElementById("root")),Ee()}},[[25,1,2]]]);
//# sourceMappingURL=main.06a8521b.chunk.js.map