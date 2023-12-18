import{i as S,a as T}from"./vendor-599422a0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const w={EMPTY_SEARCH:"There is no result for such search query",EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},k={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function u(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function R(e,t,s){return e.length?I(e,t,s,!0):`<li class="empty-favorites usual-text">${w.EMPTY_FAVORITES}</li>`}function G(e,t,s){return e.length?I(e,t,s,!1):`<li class="empty-exercises usual-text">${w.EMPTY_SEARCH}</li>`}function I(e,t,s,a){return e.map(({_id:r,name:n,burnedCalories:i,time:d,target:c,rating:p})=>`
            <li class="exercises_item" id="${r}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${O(a,r,p)}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${y.arrow}</div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-body-logo">${y.runner}</div>
                    <div class="card-body-name card-text-name">
                        ${u(n)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">
                            ${i} / ${d} min
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">
                          ${u(t)}: </span>
                        <span class="long-text">
                            ${u(s)}
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">
                            ${u(c)}
                        </span>
                    </div>
                </div>
            </li>
        `).join("")}function Y(e){return e.map(({filter:t,name:s,imgURL:a})=>{const r=`data-${k.DATA_INFO}="${u(t)}:${s}"`;return`
            <li class="category-item" ${r}>
                <div class="category-item-container" ${r}>
                    <img class="category-img" src="${a}" alt="${s}" ${r}/>
                    <div class="category-text-content" ${r}>
                        <h3 ${r}>${u(s)}</h3>
                        <p  ${r}>${u(t)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}function O(e,t,s){return e?y.recycleBin.replace("CARD_ID",t):y.rating.replace("RATING",_(s))}const y={rating:`
    <p class="text-usuala">RATING</p>
    <svg class="card-icon-star" width="18" height="22">
        <use href="./img/icons.svg#yellow-star"></use>
    </svg>`,recycleBin:`
    <svg class="card-icon recycle-bin" data-card="CARD_ID" width="16" height="16">
        <use href="./img/icons.svg#icon-remove" data-card="CARD_ID" ></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};function _(e){const t=String(Math.round(e*10)/10),s=t.includes(".")?"":".0";return t+s}function F(e,t=""){S.error({title:t,message:e})}function Q(e,t=""){S.warning({title:t,message:e})}function z(e,t=""){S.info({title:t,message:e})}const J=e=>!/[^ \t\r\n\v\f]/.test(e);class X{constructor(t,s,a="display-none-js"){this.elementInstance=t,this.visibleClass=s,this.hiddenClass=a}show(){this.elementInstance.classList.replace(this.hiddenClass,this.visibleClass)}hide(){this.elementInstance.classList.replace(this.visibleClass,this.hiddenClass)}get element(){return this.elementInstance}}const m={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function K(e=1,t=12,s="Muscles"){const a={filter:s,page:e,limit:t},r=g(m.FILTERS,q(a));return E(r)}function V(e=1,t=10,s,a,r){const n={page:e,limit:t};n[s]=a,r&&(n.keyword=r);const i=g(m.EXERCISES,q(n));return E(i)}function Z(){return E(g(m.QUOTE))}function $(e){const t=g(m.EXERCISES)+`/${e}`;return E(t)}async function ee(e){const t=g(m.SUBSCRIPTION);return H(t,{email:e})}async function E(e){return T.get(e).then(t=>t.data).catch(t=>t.response)}async function H(e,t){return T.post(e,t).then(s=>s).catch(s=>s.response)}function q(e){return new URLSearchParams(e)}function g(e,t){return m.BASE_URL+e+(t?`?${t}`:"")}async function N(e){let t=x();if(!t.some(s=>s._id===e)){const s=await $(e);t.push(s),localStorage.setItem("FavoriteExercises",JSON.stringify(t))}}function A(e){let t=x();t=t.filter(s=>s._id!==e),localStorage.setItem("FavoriteExercises",JSON.stringify(t))}function x(){return JSON.parse(localStorage.getItem("FavoriteExercises"))||[]}function M(e){return x().some(t=>t._id===e)}const h={add:`
    <span>Add to favorites</span>
    <svg class="favorite-btn-icon" width="20" height="20">
      <use href="./img/icons.svg#icon-heart"></use>
    </svg>
  `,remove:`
    <span>Remove from favorites</span>
    <svg class="favorite-btn-icon" width="20" height="20">
      <use href="./img/icons.svg#icon-remove"></use>
    </svg>
  `};let o;async function P(e){const t={bodyPart:"Body part",burnedCalories:"Burned calories",equipment:"Equipment",popularity:"Popularity",target:"Target",time:"Time"};o={modal:document.querySelector(".modal-exercise"),loader:document.querySelector(".modal-exercise .loader"),modalContent:document.querySelector(".modal-exercise .modal-content"),imageWrapper:document.querySelector(".modal-exercise .image-wrapper"),title:document.querySelector(".modal-exercise .title"),rating:document.querySelector(".modal-exercise .rating"),ratingStars:document.querySelectorAll(".modal-exercise .star-icon"),dataWrapper:document.querySelector(".modal-exercise .data-wrapper"),description:document.querySelector(".modal-exercise .description"),favoriteBtn:document.querySelector(".modal-exercise .favorite-btn")},document.body.style.overflow="hidden",o.modal.removeAttribute("data-exercise-id"),o.imageWrapper.innerHTML="",o.dataWrapper.innerHTML="",o.modal.setAttribute("data-exercise-id",e);try{const s=await $(e);if(s.statusText==="Bad Request")throw new Error(s.statusText||"Something went wrong");const{description:a,name:r,rating:n,gifUrl:i}=s;i&&(o.imageWrapper.innerHTML=`<img class="image" src="${i}" alt="${r}" />`),o.title.innerHTML=r,o.rating.innerHTML=`${Number(n).toFixed(1)}`,o.description.innerHTML=a,o.favoriteBtn.innerHTML=M(e)?h.remove:h.add;for(let c of Object.keys(t))s[c]&&o.dataWrapper.insertAdjacentHTML("beforeend",`
          <div class="data-cell">
            <div class="data-name">${t[c]}</div>
            <div class="data-value">${s[c]}</div>
          </div>
        `);let d=0;for(let c of o.ratingStars)if(n-d>1)c.style.fill="#eea10c",d++;else{const p=(n-d)*100;c.insertAdjacentHTML("afterbegin",`
          <linearGradient id="linear-gradient">
            <stop offset="${p}%" stop-color="#eea10c"/>
            <stop offset="${p}%" stop-color="rgba(244, 244, 244, 0.2)"/>
          </linearGradient>
        `),c.style.fill="url(#linear-gradient)";break}o.modalContent.classList.remove("display-none-js"),o.loader.classList.add("display-none-js")}catch(s){throw s}}function j(){document.body.style.overflow="visible",o.modalContent.classList.add("display-none-js"),o.loader.classList.remove("display-none-js")}let B;const f=document.querySelector(".modal-overlay");let l;async function U(e){const t=e.target.closest(".exercises_item");if(B=e.currentTarget.closest(".exercises_content"),!t)return;const{id:s}=t;if(e.target.dataset&&e.target.dataset.card){A(t.id),b();return}f.classList.remove("display-none-js");try{await P(s),l={closeBtn:document.querySelector("#modal-close-button"),favoriteBtn:document.querySelector(".modal-exercise .favorite-btn")},f.addEventListener("click",v),l.closeBtn.addEventListener("click",v),l.favoriteBtn.addEventListener("click",C),document.addEventListener("keydown",D)}catch(a){f.classList.add("display-none-js"),F(a.message)}}function v(){f.classList.add("display-none-js"),l.closeBtn.removeEventListener("click",v),f.removeEventListener("click",v),l.favoriteBtn.removeEventListener("click",C),j()}function C(e){e.stopPropagation();const t=e.target.closest(".modal-exercise"),s=B.hasAttribute("data-info"),a=t.dataset.exerciseId;M(a)?(A(a),s&&b(),l.favoriteBtn.innerHTML=h.add):(N(a),l.favoriteBtn.innerHTML=h.remove),l.favoriteBtn.blur()}function D(e){e.key==="Escape"&&v()}const L=document.querySelector(".exercises_content");L.setAttribute("data-info","favorites");function b(){const e=x();L.innerHTML=R(e,"Equipment","barbell")}b();L.addEventListener("click",U);document.querySelector(".nav-item_home").classList.remove("active");document.querySelector(".nav-item_favorites").classList.add("active");(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),a=document.querySelector(".js-menu-overlay"),r=document.querySelectorAll(".mobile-menu-nav-link"),n=()=>{const i=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!i),e.classList.toggle("is-open"),a.classList.toggle("is-shown");const d=i?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[d](document.body)};t.addEventListener("click",n),s.addEventListener("click",n),r.forEach(i=>i.addEventListener("click",n)),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),a.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{X as H,z as a,F as b,Y as c,Q as d,k as e,V as f,K as g,G as h,J as i,u as j,U as k,Z as l,ee as s};
//# sourceMappingURL=mobile-2c8e4645.js.map
