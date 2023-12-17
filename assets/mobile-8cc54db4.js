import{a as m,i as f}from"./vendor-b20efecd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const h={EMPTY_SEARCH:"There is no result for such search query",EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},S={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function o(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}const l={rating:`
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
    </svg>`};function $(e,t,n){return e.length?p(e,t,n,!0):`<li class="empty-favorites usual-text">${h.EMPTY_FAVORITES}</li>`}function I(e,t,n){return e.length?p(e,t,n,!1):`<li class="empty-exercises usual-text">${h.EMPTY_SEARCH}</li>`}function p(e,t,n,i){return e.map(({_id:s,name:r,burnedCalories:a,time:u,target:y,rating:E})=>`
            <li class="exercises_item" id="${s}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${i?l.recycleBin:l.rating.replace("RATING",x(E))}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${l.arrow}</div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-body-logo">${l.runner}</div>
                    <div class="card-body-name card-text-name">
                        ${o(r)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">
                            ${a} / ${u} min
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">
                          ${o(t)}: </span>
                        <span class="long-text">
                            ${o(n)}
                        </span>
                    </div>
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">
                            ${o(y)}
                        </span>
                    </div>
                </div>
            </li>
        `).join("")}function L(e){return e.map(({filter:t,name:n,imgURL:i})=>{const s=`data-${S.DATA_INFO}="${o(t)}:${n}"`;return`
            <li class="category-item" ${s}>
                <div class="category-item-container" ${s}>
                    <img class="category-img" src="${i}" alt="${n}" ${s}/>
                    <div class="category-text-content" ${s}>
                        <h3 ${s}>${o(n)}</h3>
                        <p  ${s}>${o(t)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}function x(e){return Math.round(e*10)/10}const c={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function w(e=1,t=12,n="Muscles"){const i={filter:n,page:e,limit:t},s=d(c.FILTERS,v(i));return g(s)}function A(e=1,t=10,n,i,s){const r={page:e,limit:t};r[n]=i,s&&(r.keyword=s);const a=d(c.EXERCISES,v(r));return g(a)}function C(e){const t=d(c.EXERCISES)+`/${e}`;return g(t)}async function R(e){const t=d(c.SUBSCRIPTION);return b(t,{email:e})}async function g(e){return m.get(e).then(t=>t.data).catch(t=>t.response)}async function b(e,t){return m.post(e,t).then(n=>n).catch(n=>n.response)}function v(e){return new URLSearchParams(e)}function d(e,t){return c.BASE_URL+e+(t?`?${t}`:"")}function B(e,t=""){f.error({title:t,message:e})}function M(e,t=""){f.warning({title:t,message:e})}function O(e,t=""){f.info({title:t,message:e})}const k=e=>!/[^ \t\r\n\v\f]/.test(e);class P{constructor(t,n,i="display-none-js"){this.elementInstance=t,this.visibleClass=n,this.hiddenClass=i}show(){this.elementInstance.classList.replace(this.hiddenClass,this.visibleClass)}hide(){this.elementInstance.classList.replace(this.visibleClass,this.hiddenClass)}get element(){return this.elementInstance}}(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=document.querySelector(".js-menu-overlay"),s=document.querySelectorAll(".mobile-menu-nav-link"),r=()=>{const a=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!a),e.classList.toggle("is-open"),i.classList.toggle("is-shown");const u=a?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[u](document.body)};t.addEventListener("click",r),n.addEventListener("click",r),s.forEach(a=>a.addEventListener("click",r)),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),i.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{P as H,$ as a,M as b,O as c,B as d,w as e,L as f,C as g,A as h,k as i,I as j,S as k,o as l,R as s};
//# sourceMappingURL=mobile-8cc54db4.js.map
