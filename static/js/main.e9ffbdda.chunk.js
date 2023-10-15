(this.webpackJsonpprotfolio=this.webpackJsonpprotfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),s=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),c=Object(s.a)(n,2),r=c[0],o=c[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://abdurrahmanseyidoglu.github.io/protfolio",j="My Protfolio",u="Abdurrahman Seyido\u011flu",b="Front End Engineer",d="I enjoy challenges and thrive when working on projects that push my boundaries. With a solid background in solving problems and creating solutions, I have a proven track record of effectively addressing issues. I'm passionate about using technology to empower individuals and help new developers find their way. This drives my enthusiasm for front-end development. Continuously learning and embracing new languages and techniques are essential to me. I believe that this not only benefits me personally but also contributes significantly to a company's success. I'm dedicated to expanding my skills and knowledge to create better experiences through technology",h="https://drive.google.com/file/d/1AXPUJwOKhmiglBu-q_RPzujhvJhARhu1/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/abdurrahmanseyidoglu/",github:"https://github.com/abdurrahmanseyidoglu"},O=[{name:"ILAJAK Website",description:"The official website of ILAJAK Company in Istanbul.",stack:["Vue.js","Nuxt.js","Vuex","SASS","Bootstrap"],sourceCode:"",livePreview:"https://www.ilajak.com"},{name:"Imtilak Global",description:"Features: The official website of Imtilak Group Company in UAE.",stack:["Blade","HTML","SASS","Jquery"],sourceCode:"",livePreview:"https://www.imtilakglobal.ae"},{name:"Oragon",description:"The official website of OragnGPYCompany in Istanbul.",stack:["Blade","HTML","SCSS","JavaScript"],sourceCode:"",livePreview:"https://www.oragongpy.com/"},{name:"InceGroup",description:"The official website of INCE Group Company in Istanbul.",stack:["React.js","SASS"],sourceCode:"",livePreview:"https://incegroup.com.tr"}],f=["HTML","CSS","SASS","JavaScript","Jquery","React","Vue","Vuex","Pinia","Nuxt","SASS","Bootstrap","Tailwindcss","Git"],p="abdurrahmanseyidoglu@gmail.com",x=n(16),g=n.n(x),v=n(14),k=n.n(v),N=n(18),w=n.n(N),_=n(17),y=n.n(_),S=(n(28),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(i.useState)(!1),o=Object(s.a)(r,2),j=o[0],u=o[1],b=function(){return u(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:b,className:"link link--nav",children:"Projects"})}):null,f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:b,className:"link link--nav",children:"Skills"})}):null,p?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:b,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(k.a,{}):Object(a.jsx)(g.a,{})}),Object(a.jsx)("button",{type:"button",onClick:b,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(y.a,{}):Object(a.jsx)(w.a,{})})]})}),C=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(S,{})]})}),I=n(11),A=n.n(I),P=n(19),E=n.n(P),T=(n(33),function(){var e=u,t=b,n=d,c=h,s=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(A.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(E.a,{})})]})]})]})}),J=n(7),L=n.n(J),B=n(20),G=n.n(B),M=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(A.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(G.a,{})})]})}),R=(n(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(M,{project:e},L()())}))})]}):null}),q=(n(37),function(){return f.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),H=n(21),V=n.n(H),F=(n(38),function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(V.a,{fontSize:"large"})})}):null}),K=(n(39),function(){return p?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(p),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/abdurrahmanseyidoglu/protfolio",className:"link footer__link",children:"Abdurrahman Seyido\u011flu"})})}),U=(n(41),function(){var e=Object(i.useContext)(l),t=Object(s.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(C,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(T,{}),Object(a.jsx)(R,{}),Object(a.jsx)(q,{}),Object(a.jsx)(K,{})]}),Object(a.jsx)(F,{}),Object(a.jsx)(z,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e9ffbdda.chunk.js.map