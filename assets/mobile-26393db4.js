import{a as x,i as y}from"./vendor-b20efecd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const E={EMPTY_SEARCH:"There is no result for such search query",EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},L={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function d(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const g={rating:`
    <p class="text-usuala">RATING</p>
    <svg class="card-icon-star" width="18" height="22">
        <use href="./img/icons.svg#yellow-star"></use>
    </svg>`,recycleBin:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-remove"></use>
    </svg>`,arrow:`
    <svg class="card-icon" width="16" height="16">
        <use href="./img/icons.svg#icon-arrow"></use>
    </svg>`,runner:`
    <svg class="card-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-running-stick"></use>
    </svg>`};function B(t,e,s){return t.length?S(t,e,s,!0):`<li class="empty-favorites usual-text">${E.EMPTY_FAVORITES}</li>`}function k(t,e,s){return t.length?S(t,e,s,!1):`<li class="empty-exercises usual-text">${E.EMPTY_SEARCH}</li>`}function S(t,e,s,n){return t.map(({_id:r,name:a,burnedCalories:i,time:l,target:c,rating:f})=>`
            <li class="exercises_item" id="${r}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${n?g.recycleBin:g.rating.replace("RATING",w(f))}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${g.arrow}</div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-body-logo">${g.runner}</div>
                    <div class="card-body-name card-text-name">
                        ${d(a)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">
                            ${i} / ${l} min
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">
                          ${d(e)}: </span>
                        <span class="long-text">
                            ${d(s)}
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">
                            ${d(c)}
                        </span>
                    </div>
                </div>
            </li>
        `).join("")}function O(t){return t.map(({filter:e,name:s,imgURL:n})=>{const r=`data-${L.DATA_INFO}="${d(e)}:${s}"`;return`
            <li class="category-item" ${r}>
                <div class="category-item-container" ${r}>
                    <img class="category-img" src="${n}" alt="${s}" ${r}/>
                    <div class="category-text-content" ${r}>
                        <h3 ${r}>${d(s)}</h3>
                        <p  ${r}>${d(e)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}function w(t){return Math.round(t*10)/10}const h="FavoriteExercises";function R(t){let e=p();const s=t._id;if(!e.some(n=>n._id===s)){const n=q;e.push(n),localStorage.setItem(h,JSON.stringify(e))}}function P(t){let e=p();e=e.filter(s=>s._id!==t),localStorage.setItem(h,JSON.stringify(e)),I()}function p(){return JSON.parse(localStorage.getItem(h))||[]}function $(t){return p().some(e=>e._id===t)}function I(){const t=p();console.log(t)}const q={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7415},u={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function N(t=1,e=12,s="Muscles"){const n={filter:s,page:t,limit:e},r=m(u.FILTERS,T(n));return v(r)}function _(t=1,e=10,s,n,r){const a={page:t,limit:e};a[s]=n,r&&(a.keyword=r);const i=m(u.EXERCISES,T(a));return v(i)}function F(){return v(m(u.QUOTE))}function A(t){const e=m(u.EXERCISES)+`/${t}`;return v(e)}async function H(t){const e=m(u.SUBSCRIPTION);return C(e,{email:t})}async function v(t){return x.get(t).then(e=>e.data).catch(e=>e.response)}async function C(t,e){return x.post(t,e).then(s=>s).catch(s=>s.response)}function T(t){return new URLSearchParams(t)}function m(t,e){return u.BASE_URL+t+(e?`?${e}`:"")}const b={add:`
    <span>Add to favorites</span>
    <svg class="favorite-btn-icon" width="20" height="20">
      <use href="./img/icons.svg#icon-heart"></use>
    </svg>
  `,remove:`
    <span>Remove from favorites</span>
    <svg class="favorite-btn-icon" width="20" height="20">
      <use href="./img/icons.svg#icon-remove"></use>
    </svg>
  `};let o;async function U(t){const e={bodyPart:"Body part",burnedCalories:"Burned calories",equipment:"Equipment",popularity:"Popularity",target:"Target",time:"Time"};o={modal:document.querySelector(".modal-exercise"),loader:document.querySelector(".modal-exercise .loader"),modalContent:document.querySelector(".modal-exercise .modal-content"),imageWrapper:document.querySelector(".modal-exercise .image-wrapper"),title:document.querySelector(".modal-exercise .title"),rating:document.querySelector(".modal-exercise .rating"),ratingStars:document.querySelectorAll(".modal-exercise .star-icon"),dataWrapper:document.querySelector(".modal-exercise .data-wrapper"),description:document.querySelector(".modal-exercise .description"),favoriteBtn:document.querySelector(".modal-exercise .favorite-btn")},document.body.style.overflow="hidden",o.modal.removeAttribute("data-exercise-id"),o.imageWrapper.innerHTML="",o.dataWrapper.innerHTML="",o.modal.setAttribute("data-exercise-id",t);try{const s=await A(t);if(s.statusText==="Bad Request")throw new Error(s.statusText||"Something went wrong");const{description:n,name:r,rating:a,gifUrl:i}=s;i&&(o.imageWrapper.innerHTML=`<img class="image" src="${i}" alt="${r}" />`),o.title.innerHTML=r,o.rating.innerHTML=`${Number(a).toFixed(1)}`,o.description.innerHTML=n,o.favoriteBtn.innerHTML=$(t)?b.remove:b.add;for(let c of Object.keys(e))s[c]&&o.dataWrapper.insertAdjacentHTML("beforeend",`
          <div class="data-cell">
            <div class="data-name">${e[c]}</div>
            <div class="data-value">${s[c]}</div>
          </div>
        `);let l=0;for(let c of o.ratingStars)if(a-l>1)c.style.fill="#eea10c",l++;else{const f=(a-l)*100;c.insertAdjacentHTML("afterbegin",`
          <linearGradient id="linear-gradient">
            <stop offset="${f}%" stop-color="#eea10c"/>
            <stop offset="${f}%" stop-color="rgba(244, 244, 244, 0.2)"/>
          </linearGradient>
        `),c.style.fill="url(#linear-gradient)";break}o.modalContent.classList.remove("display-none-js"),o.loader.classList.add("display-none-js")}catch(s){throw s}}function j(){document.body.style.overflow="visible",o.modalContent.classList.add("display-none-js"),o.loader.classList.remove("display-none-js")}function W(t,e=""){y.error({title:e,message:t})}function G(t,e=""){y.warning({title:e,message:t})}function Y(t,e=""){y.info({title:e,message:t})}const z=t=>!/[^ \t\r\n\v\f]/.test(t);class D{constructor(e,s,n="display-none-js"){this.elementInstance=e,this.visibleClass=s,this.hiddenClass=n}show(){this.elementInstance.classList.replace(this.hiddenClass,this.visibleClass)}hide(){this.elementInstance.classList.replace(this.visibleClass,this.hiddenClass)}get element(){return this.elementInstance}}(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),n=document.querySelector(".js-menu-overlay"),r=document.querySelectorAll(".mobile-menu-nav-link"),a=()=>{const i=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!i),t.classList.toggle("is-open"),n.classList.toggle("is-shown");const l=i?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};e.addEventListener("click",a),s.addEventListener("click",a),r.forEach(i=>i.addEventListener("click",a)),window.matchMedia("(min-width: 768px)").addEventListener("change",i=>{i.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),n.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{D as H,$ as a,b,j as c,W as d,R as e,U as f,B as g,G as h,z as i,Y as j,N as k,O as l,L as m,_ as n,k as o,d as p,F as q,P as r,H as s};
//# sourceMappingURL=mobile-26393db4.js.map
