import{g as d,f as v,d as m,c as u,a as f,r as E,b as c,e as y}from"./assets/mobile-ca91ca12.js";import"./assets/vendor-b20efecd.js";const i=document.querySelector(".exercises_content"),s=document.querySelector(".modal-overlay");let e;const L=[];i.innerHTML=d(L,"Equipment","barbell");i.addEventListener("click",x);async function x(t){const r=t.target.closest(".exercises_item");if(!r)return;const{id:n}=r;s.classList.remove("display-none-js");try{await v(n),e={closeBtn:document.querySelector("#modal-close-button"),favoriteBtn:document.querySelector(".modal-exercise .favorite-btn")},s.addEventListener("click",o),e.closeBtn.addEventListener("click",o),e.favoriteBtn.addEventListener("click",a),document.addEventListener("keydown",k)}catch(l){s.classList.add("display-none-js"),m(l.message)}}function o(){s.classList.add("display-none-js"),e.closeBtn.removeEventListener("click",o),s.removeEventListener("click",o),e.favoriteBtn.removeEventListener("click",a),u()}function a(t){t.stopPropagation();const r=t.target.closest(".modal-exercise").dataset.exerciseId;f(r)?(E(r),e.favoriteBtn.innerHTML=c.add):(y(r),e.favoriteBtn.innerHTML=c.remove),e.favoriteBtn.blur()}function k(t){t.key==="Escape"&&o()}document.querySelector(".nav-item_home").classList.remove("active");document.querySelector(".nav-item_favorites").classList.add("active");
//# sourceMappingURL=commonHelpers.js.map
