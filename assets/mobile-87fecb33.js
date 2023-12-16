import{a as u,i as l}from"./vendor-b20efecd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const p={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},y={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function i(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}function E(t){return t.length?t.map(({_id:e,name:n,bodyPart:o,burnedCalories:s,time:r,target:a})=>`
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
                    <div class="card-body-name card-text-name">${i(n)}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${s} / ${r} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${i(o)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${i(a)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${p.EMPTY_FAVORITES}</li>`}function b(t){return t.map(({filter:e,name:n,imgURL:o})=>{const s=`data-${y.DATA_INFO}="${i(e)}:${n}"`;return`
            <li class="category-item" ${s}>
                <div class="category-item-container" ${s}>
                    <img class="category-img" src="${o}" alt="${n}" ${s}/>
                    <div class="category-text-content" ${s}>
                        <h3 ${s}>${i(n)}</h3>
                        <p  ${s}>${i(e)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}const c={BASE_URL:"https://your-energy.b.goit.study/api",EXERCISES:"/exercises",FILTERS:"/filters",QUOTE:"/quote",SUBSCRIPTION:"/subscription",RATING:"/rating"};function S(t=1,e=12,n="Muscles"){const o={filter:n,page:t,limit:e},s=d(c.FILTERS,h(o));return f(s)}function L(t){const e=d(c.EXERCISES)+`/${t}`;return f(e)}async function x(t){const e=d(c.SUBSCRIPTION);return g(e,{email:t})}async function f(t){return u.get(t).then(e=>e.data).catch(e=>e.response)}async function g(t,e){return u.post(t,e).then(n=>n).catch(n=>n.response)}function h(t){return new URLSearchParams(t)}function d(t,e){return c.BASE_URL+t+(e?`?${e}`:"")}function I(t,e=""){l.error({title:e,message:t})}function T(t,e=""){l.warning({title:e,message:t})}function $(t,e=""){l.info({title:e,message:t})}const A=t=>!/[^ \t\r\n\v\f]/.test(t);class O{constructor(e,n,o="display-none-js"){this.elementInstance=e,this.visibleClass=n,this.hiddenClass=o}show(){this.elementInstance.classList.replace(this.hiddenClass,this.visibleClass)}hide(){this.elementInstance.classList.replace(this.visibleClass,this.hiddenClass)}get element(){return this.elementInstance}}(()=>{const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector(".js-menu-overlay"),s=document.querySelectorAll(".mobile-menu-nav-link"),r=()=>{const a=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open"),o.classList.toggle("is-shown");const m=a?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[m](document.body)};e.addEventListener("click",r),n.addEventListener("click",r),s.forEach(a=>a.addEventListener("click",r)),window.matchMedia("(min-width: 768px)").addEventListener("change",a=>{a.matches&&(t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),o.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{O as H,E as a,T as b,$ as c,I as d,S as e,b as f,L as g,y as h,A as i,x as s};
//# sourceMappingURL=mobile-87fecb33.js.map
