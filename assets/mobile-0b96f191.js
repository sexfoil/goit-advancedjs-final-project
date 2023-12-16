import{a as d}from"./vendor-b20efecd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const m={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"};function c(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function v(t){return t.length?t.map(({_id:e,name:o,bodyPart:a,burnedCalories:s,time:r,target:n})=>`
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
                        <span class="long-text">${s} / ${r} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${c(a)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${c(n)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${m.EMPTY_FAVORITES}</li>`}function h(t){return t.map(({filter:e,name:o,imgURL:a})=>`
            <li class="category-item">
                <div class="category-item-container">
                    <img class="category-img" src="${a}" alt="${o}" />
                    <div class="category-text-content">
                        <h3>${c(o)}</h3>
                        <p>${c(e)}</p>
                    </div>
                </div>
            </li>
        `).join("")}const i={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function S(t=1,e=12,o="Muscles"){const a={filter:o,page:t,limit:e},s=l(i.FILTERS,y(a));return u(s)}function E(t){const e=l(i.EXERCISES)+`/${t}`;return u(e)}async function b(t){const e=l(i.SUBSCRIPTION);return p(e,{email:t})}async function u(t){return d.get(t).then(e=>e.data).catch(e=>e.response)}async function p(t,e){return d.post(t,e).then(o=>o).catch(o=>o.response)}function y(t){return new URLSearchParams(t)}function l(t,e){return i.BASE_URL+t+(e?`?${e}`:"")}(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),a=document.querySelector(".js-menu-overlay"),s=document.querySelectorAll(".mobile-menu-nav-link"),r=()=>{const n=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),a.classList.toggle("is-shown");const f=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[f](document.body)};e.addEventListener("click",r),o.addEventListener("click",r),s.forEach(n=>n.addEventListener("click",r)),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),a.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{v as a,S as b,h as c,E as g,b as s};
//# sourceMappingURL=mobile-0b96f191.js.map
