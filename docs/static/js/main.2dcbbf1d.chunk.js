(this["webpackJsonpmy-exercices"]=this["webpackJsonpmy-exercices"]||[]).push([[0],{25:function(e,s,a){},26:function(e,s,a){},33:function(e,s,a){},34:function(e,s,a){},35:function(e,s,a){},36:function(e,s,a){},37:function(e,s,a){},38:function(e,s,a){},39:function(e,s,a){},40:function(e,s,a){},41:function(e,s,a){"use strict";a.r(s);var o=a(1),t=a(18),c=a.n(t),n=a(11),i=a(13),r=a(16),l=(a(25),a(2)),d=(a(26),a(7)),j=a(0),m=function(e){return Object(j.jsx)("main",{className:"mainDetails",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)(d.a,{className:"comeBack",to:"/",children:[Object(j.jsx)("i",{className:"fas fa-chevron-right"})," Volver"]}),Object(j.jsxs)("article",{className:"characterDetails",children:[Object(j.jsx)("a",{href:e.character.image,target:"_blank",children:Object(j.jsx)("img",{className:"characterDetails__img",src:e.character.image,alt:"image "+e.character.name})}),Object(j.jsxs)("div",{className:"characterDetails__elements",children:[Object(j.jsx)("h3",{className:"characterDetails__elements__name",children:e.character.name}),Object(j.jsxs)("p",{children:["Status:"," ",Object(j.jsx)("span",{className:"characterDetails__elements__item",children:e.character.status})]}),Object(j.jsxs)("p",{children:["Specie:"," ",Object(j.jsx)("span",{className:"characterDetails__elements__item",children:e.character.species})]}),Object(j.jsxs)("p",{children:["Origin:"," ",Object(j.jsx)("span",{className:"characterDetails__elements__item",children:e.character.origin.name})]}),Object(j.jsxs)("p",{children:["Episodes:"," ",Object(j.jsx)("span",{className:"characterDetails__elements__item",children:e.character.episode.length})]})]})]})]})})},p=(a(33),function(e){return Object(j.jsxs)("main",{className:"mainNotFound",children:[Object(j.jsx)("p",{children:"El personaje que buscas no existe"}),Object(j.jsx)(d.a,{to:"/",children:Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"button",onClick:function(){e.handleReset()},value:"Busca de nuevo AQU\xcd",className:"button"})})})]})}),h=(a(34),function(e){var s=function(s){s.preventDefault();var a=s.currentTarget.name,o=s.target.value;e.handleSearch(a,o)};return Object(j.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("label",{className:"form__label",htmlFor:"name"}),Object(j.jsx)("input",{className:"form__inputs",placeholder:"Busca por nombre",name:"name",type:"text",onChange:s,value:e.data.name}),Object(j.jsxs)("div",{className:"filtersContainer",children:[Object(j.jsxs)("div",{className:"genderContainer",children:[Object(j.jsx)("label",{className:"form__labels",children:"Busca por g\xe9nero"}),Object(j.jsxs)("select",{className:"form__inputs form__inputs--selectGender",name:"gender",id:"",onChange:s,value:e.data.gender,children:[Object(j.jsx)("option",{className:"form__options",value:""}),Object(j.jsx)("option",{className:"form__options",value:"Female",children:"Mujer"}),Object(j.jsx)("option",{className:"form__options",value:"Male",children:"Hombre"}),Object(j.jsx)("option",{className:"form__options",value:"unknown",children:"Desconocido"})]})]}),Object(j.jsxs)("div",{className:"episodeContainer",children:[Object(j.jsx)("label",{htmlFor:"gender",className:"form__labels",children:"Busca por episodio"}),Object(j.jsxs)("select",{className:"form__inputs form__inputs--selectEpisode",name:"episode",id:"",onChange:s,value:e.data.episode,children:[" ",'className="form__options"',Object(j.jsx)("option",{className:"form__options",value:"Cualquiera",children:"Cualquiera"}),Object(j.jsx)("option",{className:"form__options",value:"1",children:"Episodio 1"}),Object(j.jsx)("option",{className:"form__options",value:"2",children:"Episodio 2"}),Object(j.jsx)("option",{className:"form__options",value:"3",children:"Episodio 3"}),Object(j.jsx)("option",{className:"form__options",value:"4",children:"Episodio 4"}),Object(j.jsx)("option",{className:"form__options",value:"5",children:"Episodio 5"}),Object(j.jsx)("option",{className:"form__options",value:"6",children:"Episodio 6"}),Object(j.jsx)("option",{className:"form__options",value:"7",children:"Episodio 7"}),Object(j.jsx)("option",{className:"form__options",value:"8",children:"Episodio 8"}),Object(j.jsx)("option",{className:"form__options",value:"9",children:"Episodio 9"}),Object(j.jsx)("option",{className:"form__options",value:"10",children:"Episodio 10"}),Object(j.jsx)("option",{className:"form__options",value:"11",children:"Episodio 11"}),Object(j.jsx)("option",{className:"form__options",value:"12",children:"Episodio 12"}),Object(j.jsx)("option",{className:"form__options",value:"13",children:"Episodio 13"}),Object(j.jsx)("option",{className:"form__options",value:"14",children:"Episodio 14"}),Object(j.jsx)("option",{className:"form__options",value:"15",children:"Episodio 15"}),Object(j.jsx)("option",{className:"form__options",value:"16",children:"Episodio 16"}),Object(j.jsx)("option",{className:"form__options",value:"17",children:"Episodio 17"}),Object(j.jsx)("option",{className:"form__options",value:"18",children:"Episodio 18"}),Object(j.jsx)("option",{className:"form__options",value:"19",children:"Episodio 19"}),Object(j.jsx)("option",{className:"form__options",value:"20",children:"Episodio 20"}),Object(j.jsx)("option",{className:"form__options",value:"21",children:"Episodio 21"}),Object(j.jsx)("option",{className:"form__options",value:"22",children:"Episodio 22"}),Object(j.jsx)("option",{className:"form__options",value:"23",children:"Episodio 23"}),Object(j.jsx)("option",{className:"form__options",value:"24",children:"Episodio 24"}),Object(j.jsx)("option",{className:"form__options",value:"25",children:"Episodio 25"}),Object(j.jsx)("option",{className:"form__options",value:"26",children:"Episodio 26"}),Object(j.jsx)("option",{className:"form__options",value:"27",children:"Episodio 27"}),Object(j.jsx)("option",{className:"form__options",value:"28",children:"Episodio 28"}),Object(j.jsx)("option",{className:"form__options",value:"29",children:"Episodio 29"}),Object(j.jsx)("option",{className:"form__options",value:"30",children:"Episodio 30"}),Object(j.jsx)("option",{className:"form__options",value:"31",children:"Episodio 31"}),Object(j.jsx)("option",{className:"form__options",value:"32",children:"Episodio 32"}),Object(j.jsx)("option",{className:"form__options",value:"33",children:"Episodio 33"}),Object(j.jsx)("option",{className:"form__options",value:"34",children:"Episodio 34"}),Object(j.jsx)("option",{className:"form__options",value:"35",children:"Episodio 35"}),Object(j.jsx)("option",{className:"form__options",value:"36",children:"Episodio 36"}),Object(j.jsx)("option",{className:"form__options",value:"37",children:"Episodio 37"}),Object(j.jsx)("option",{className:"form__options",value:"38",children:"Episodio 38"}),Object(j.jsx)("option",{className:"form__options",value:"39",children:"Episodio 39"}),Object(j.jsx)("option",{className:"form__options",value:"40",children:"Episodio 40"}),Object(j.jsx)("option",{className:"form__options",value:"41",children:"Episodio 41"})]})]})]})]})}),u=(a(35),a(36),function(e){return Object(j.jsx)("article",{children:Object(j.jsx)(d.a,{to:"/characterdetail/"+e.data.id,children:e.children})})}),_=function(e){var s=e.data.sort((function(e,s){return e.name>s.name?1:e.name<s.name?-1:0})).map((function(e){return Object(j.jsx)("li",{className:"characterList__elements",children:Object(j.jsxs)(u,{data:e,children:[Object(j.jsx)("img",{className:"characterList__elements--img",src:e.image,alt:"image "+e.name}),Object(j.jsx)("h3",{className:"characterList__elements--name",children:e.name}),Object(j.jsx)("h4",{className:"characterList__elements--specie",children:e.species})]})},e.id)}));return Object(j.jsx)("ul",{className:"characterList",children:s})},b=(a(37),a(38),function(e){return Object(j.jsxs)("main",{className:"mainTryAgain",children:[Object(j.jsxs)("p",{children:["No existe coincidencia con un personaje llamado"," ",e.data.name.toUpperCase()||"X"," cuyo g\xe9nero es ",function(){var s;switch(e.data.gender){case"Female":s="mujer";break;case"Male":s="hombre";break;case"unknown":s="desconocido";break;default:s="desconocido"}return s}(),", que haya salido en el episodio ",e.data.episode.toLowerCase(),"."]}),Object(j.jsx)("form",{children:Object(j.jsx)("input",{type:"button",onClick:function(){e.handleReset()},value:"Int\xe9ntalo de nuevo",className:"button"})})]})}),O=function(e){return 0===e.characters.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{data:e.data,characters:e.characters,handleSearch:e.handleSearch,handleReset:e.handleReset}),Object(j.jsx)(b,{data:e.data,handleReset:e.handleReset})]}):Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(h,{data:e.data,characters:e.characters,handleSearch:e.handleSearch,handleReset:e.handleReset}),Object(j.jsx)(_,{data:e.characters})]})},f=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results}))},x=a.p+"static/media/logoR&M.de13d484.png",N=(a(39),function(){Object(o.useEffect)((function(){f().then((function(e){t(e)}))}),[]);var e=Object(o.useState)([]),s=Object(r.a)(e,2),a=s[0],t=s[1];console.log(a);var c=Object(o.useState)({name:"",gender:"",episode:"Cualquiera"}),d=Object(r.a)(c,2),h=d[0],u=d[1],_=a.filter((function(e){return e.name.toLowerCase().includes(h.name.toLowerCase())})).filter((function(e){return""===h.gender||e.gender===h.gender})).filter((function(e){return"Cualquiera"===h.episode||e.episode.find((function(e){return e==="https://rickandmortyapi.com/api/episode/".concat(h.episode)}))})),b=function(){u({name:"",gender:"",episode:"Cualquiera"})};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("img",{className:"header__logo",src:x,alt:"Rick and Morty logo"})}),Object(j.jsxs)(l.Switch,{children:[Object(j.jsx)(l.Route,{exact:!0,path:"/",children:Object(j.jsx)(O,{data:h,characters:_,handleSearch:function(e,s){u(Object(i.a)(Object(i.a)({},h),{},Object(n.a)({},e,s)))},handleReset:b})}),Object(j.jsx)(l.Route,{path:"/characterdetail/:id",render:function(e){var s=parseInt(e.match.params.id),o=a.find((function(e){return e.id===s}));return o?Object(j.jsx)(m,{character:o}):Object(j.jsx)(p,{handleReset:b})}})]})]})}),v=(a(40),a(20));c.a.render(Object(j.jsx)(v.HashRouter,{children:Object(j.jsx)(N,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.2dcbbf1d.chunk.js.map