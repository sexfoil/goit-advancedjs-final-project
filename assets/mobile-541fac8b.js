import{a as d}from"./vendor-b20efecd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},p={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function c(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}function h(s){return s.length?s.map(({_id:e,name:o,bodyPart:a,burnedCalories:t,time:r,target:n})=>`
            <li class="exercises_item" id="${e}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div>🎁</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name">Start</div>
                        <div class="card-start-arrow">=></div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-logo">♿</div>
                    <div class="card-body-name card-text-name">${c(o)}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${t} / ${r} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${c(a)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${c(n)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${m.EMPTY_FAVORITES}</li>`}function E(s){return s.map(({filter:e,name:o,imgURL:a})=>{const t=`data-${p.DATA_INFO}="${c(e)}:${o}"`;return`
            <li class="category-item" ${t}>
                <div class="category-item-container" ${t}>
                    <img class="category-img" src="${a}" alt="${o}" ${t}/>
                    <div class="category-text-content" ${t}>
                        <h3 ${t}>${c(o)}</h3>
                        <p  ${t}>${c(e)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}const i={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function S(s=1,e=12,o="Muscles"){const a={filter:o,page:s,limit:e},t=l(i.FILTERS,g(a));return u(t)}function b(s){const e=l(i.EXERCISES)+`/${s}`;return u(e)}async function L(s){const e=l(i.SUBSCRIPTION);return y(e,{email:s})}async function u(s){return d.get(s).then(e=>e.data).catch(e=>e.response)}async function y(s,e){return d.post(s,e).then(o=>o).catch(o=>o.response)}function g(s){return new URLSearchParams(s)}function l(s,e){return i.BASE_URL+s+(e?`?${e}`:"")}(()=>{const s=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=document.querySelector(".js-menu-overlay"),t=document.querySelectorAll(".mobile-menu-nav-link"),r=()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!n),s.classList.toggle("is-open"),a.classList.toggle("is-shown");const f=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[f](document.body)};e.addEventListener("click",r),o.addEventListener("click",r),t.forEach(n=>n.addEventListener("click",r)),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),a.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{h as a,S as b,E as c,p as d,b as g,L as s};
//# sourceMappingURL=mobile-541fac8b.js.map
