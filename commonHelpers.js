import{g as v,a as m,f as u,d as f,c as E,b as x,r as y,e as c,h as L}from"./assets/mobile-7396d450.js";import"./assets/vendor-b20efecd.js";const i=document.querySelector(".exercises_content"),r=document.querySelector(".modal-overlay");let e;const a=v();console.log(a);i.innerHTML=m(a,"Equipment","barbell");i.addEventListener("click",k);async function k(t){const s=t.target.closest(".exercises_item");if(!s)return;const{id:l}=s;r.classList.remove("display-none-js");try{await u(l),e={closeBtn:document.querySelector("#modal-close-button"),favoriteBtn:document.querySelector(".modal-exercise .favorite-btn")},r.addEventListener("click",o),e.closeBtn.addEventListener("click",o),e.favoriteBtn.addEventListener("click",n),document.addEventListener("keydown",p)}catch(d){r.classList.add("display-none-js"),f(d.message)}}function o(){r.classList.add("display-none-js"),e.closeBtn.removeEventListener("click",o),r.removeEventListener("click",o),e.favoriteBtn.removeEventListener("click",n),E()}function n(t){t.stopPropagation();const s=t.target.closest(".modal-exercise").dataset.exerciseId;x(s)?(y(s),e.favoriteBtn.innerHTML=c.add):(L(s),e.favoriteBtn.innerHTML=c.remove),e.favoriteBtn.blur()}function p(t){t.key==="Escape"&&o()}document.querySelector(".nav-item_home").classList.remove("active");document.querySelector(".nav-item_favorites").classList.add("active");
//# sourceMappingURL=commonHelpers.js.map
