import{H as n,i as c,b as u,s as m,c as l,d,e as y,f as p,h as a}from"./assets/mobile-87fecb33.js";import"./assets/vendor-b20efecd.js";const s=document.querySelector(".footer-subscribe-form"),i=new n(s.querySelector(".input-loader"),"input-loader");s.addEventListener("submit",f);function f(t){t.preventDefault();const e=t.currentTarget,r=new FormData(e).get("subscriber-email").trim();if(c(r)){u("Email is empty");return}g(r)}async function g(t){try{i.show();const e=await m(t);if(e.status!==201)throw new Error(e.data.message);l(e.data.message)}catch(e){d(e.message)}finally{i.hide(),s.reset()}}const o=document.querySelector(".category_content"),b=await y(1,12);o.innerHTML=p(b.results);o.addEventListener("click",E);function E(t){t.preventDefault();const e=t.target.dataset[a.DATA_INFO].split(a.DATA_INFO_DELIMETER);console.dir(e)}document.querySelector(".nav-item_home").classList.add("active");document.querySelector(".nav-item_favorites").classList.remove("active");
//# sourceMappingURL=commonHelpers2.js.map
