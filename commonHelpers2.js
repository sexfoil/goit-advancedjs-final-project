import{H as S,i as w,b as C,s as q,c as H,d as l,e as L,f as T,h as E,j as h,k as p,l as k}from"./assets/mobile-15ca46ee.js";import"./assets/vendor-b20efecd.js";const m=document.querySelector(".footer-subscribe-form"),f=new S(m.querySelector(".input-loader"),"input-loader");m.addEventListener("submit",B);function B(t){t.preventDefault();const e=t.currentTarget,s=new FormData(e).get("subscriber-email").trim();if(w(s)){C("Email is empty");return}M(s)}async function M(t){try{f.show();const e=await q(t);if(e.status!==201)throw new Error(e.data.message);H(e.data.message)}catch(e){l(e.message)}finally{f.hide(),m.reset()}}const n=document.querySelector(".category_content"),I=document.querySelector(".exercises_nav"),y=document.querySelector(".exercises_content"),d=document.querySelector(".exercises_name"),b=document.querySelector(".exercises_search"),v=document.querySelector(".exercises_search-input"),D=document.querySelector(".exercises_search-img");let c=null,a=null;const F=await L(1,12);n.innerHTML=T(F.results);n.addEventListener("click",N);I.addEventListener("click",A);D.addEventListener("click",_);v.addEventListener("keydown",t=>{t.key==="Enter"&&_(t)});async function _(t){t.preventDefault();const{results:e}=await E(1,10,c,a,v.value);n.innerHTML="",y.innerHTML="",n.innerHTML=h(e,c,a),console.log(e)}async function A(t){try{let e=t.target,s=e.textContent.trim(),i=document.querySelector(".exercises__nav-item-current");const u=async(o,g)=>{o.classList.remove("exercises__nav-item-current"),g.classList.add("exercises__nav-item-current")},r=async(o,g)=>{const{results:x}=await L(1,12,o);n.innerHTML="",y.innerHTML="",n.innerHTML=T(x)};u(i,e),r(s,i),d.style="display: none;",b.style="display: none;"}catch(e){l(e.message)}}async function N(t){try{t.preventDefault();const e=t.target.dataset[p.DATA_INFO].split(p.DATA_INFO_DELIMETER);c=e[0].toLowerCase(),a=e[1];const s=async(r,o)=>await E(1,12,r,o),i=async({results:r})=>{n.innerHTML="",y.innerHTML=h(r,c,a)},u=()=>{d.style="display: block;",d.textContent=k(e[1]),b.style="display: block"};s(c,a).then(i).catch(l),u()}catch(e){l(e.message)}}document.querySelector(".nav-item_home").classList.add("active");document.querySelector(".nav-item_favorites").classList.remove("active");window.onscroll=function(){O()};function O(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("scrollToTopButton").style.display="block":document.getElementById("scrollToTopButton").style.display="none"}document.getElementById("scrollToTopButton").onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0};
//# sourceMappingURL=commonHelpers2.js.map
