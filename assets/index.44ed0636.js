var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,m=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))r.call(t,n)&&u(e,n,t[n]);return e},c=(e,l)=>t(e,n(l));import{r as p,R as i,l as s,a as o}from"./vendor.0fe4088b.js";var d={App:"_App_1olo3_1",resultsTable:"_resultsTable_1olo3_10"};var E="_btn_zjw4o_1";var q={spacer:"_spacer_vgiv4_1","spacer-inline":"_spacer-inline_vgiv4_5","spacer-xs":"_spacer-xs_vgiv4_9","spacer-sn":"_spacer-sn_vgiv4_13","spacer-md":"_spacer-md_vgiv4_17","spacer-lg":"_spacer-lg_vgiv4_21","spacer-xl":"_spacer-xl_vgiv4_25"};function f(e){var t=e,{size:n="md",inline:u=!1,className:p}=t,s=((e,t)=>{var n={};for(var u in e)a.call(e,u)&&t.indexOf(u)<0&&(n[u]=e[u]);if(null!=e&&l)for(var u of l(e))t.indexOf(u)<0&&r.call(e,u)&&(n[u]=e[u]);return n})(t,["size","inline","className"]);return i.createElement("div",c(m({},s),{className:`${q.spacer} ${u&&q["spacer-inline"]} ${q["spacer-"+n]} ${p}`}))}function g(){const[e,t]=function(e,t){const[n,l]=p.exports.useState(JSON.parse(window.localStorage.getItem(e))||t);return[n,t=>{l(t),window.localStorage.setItem(e,JSON.stringify(t))}]}("questinoareeAnswers",{q1a:1,q1b:1,q1c:1,q1d:1,q1e:1,q1f:1,q1g:1,q2a:1,q2b:1,q2c:1,q2d:1,q2e:1,q2f:1,q2g:1,q3a:1,q3b:1,q3c:1,q3d:1,q3e:1,q3f:1,q3g:1}),n=n=>l=>t(c(m({},e),{[n]:parseInt(l.target.value)}));return i.createElement("div",{className:d.App},i.createElement("h2",null,"Ответы на опросник"),i.createElement("table",{className:d.resultsTable},i.createElement("thead",null,i.createElement("tr",{className:d.resultsTableHeader},i.createElement("th",null),i.createElement("th",null,"Qeustion a"),i.createElement("th",null,"Qeustion b"),i.createElement("th",null,"Qeustion c"),i.createElement("th",null,"Qeustion d"),i.createElement("th",null,"Qeustion e"),i.createElement("th",null,"Qeustion f"),i.createElement("th",null,"Qeustion g"))),i.createElement("tbody",null,i.createElement("tr",null,i.createElement("td",null,"Emotional State"),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1a,onInput:n("q1a")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1b,onInput:n("q1b")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1c,onInput:n("q1c")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1d,onInput:n("q1d")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1e,onInput:n("q1e")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1f,onInput:n("q1f")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q1g,onInput:n("q1g")}))),i.createElement("tr",null,i.createElement("td",null,"Workplace"),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2a,onInput:n("q2a")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2b,onInput:n("q2b")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2c,onInput:n("q2c")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2d,onInput:n("q2d")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2e,onInput:n("q2e")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2f,onInput:n("q2f")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q2g,onInput:n("q2g")}))),i.createElement("tr",null,i.createElement("td",null,"Performance"),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3a,onInput:n("q3a")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3b,onInput:n("q3b")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3c,onInput:n("q3c")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3d,onInput:n("q3d")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3e,onInput:n("q3e")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3f,onInput:n("q3f")})),i.createElement("td",null,i.createElement("input",{type:"range",min:1,max:5,step:1,defaultValue:e.q3g,onInput:n("q3g")}))))),i.createElement(f,null),i.createElement("a",{className:E,target:"_blank",href:`http://localhost:5000/typeform_redirect?${s.stringify(e)}`},"Создать Рекомандацию"),i.createElement(f,{size:"lg"}))}o.render(i.createElement(i.StrictMode,null,i.createElement(g,null)),document.getElementById("root"));
