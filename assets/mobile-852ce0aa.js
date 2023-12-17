(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d={EMPTY_SEARCH:"There is no result for such search query",EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},v={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function a(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}const c={rating:`
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
    </svg>`};function p(t,s,o){return t.length?u(t,s,o,!0):`<li class="empty-exercises usual-text">${d.EMPTY_FAVORITES}</li>`}function h(t,s,o){return t.length?u(t,s,o,!1):`<li class="empty-exercises usual-text">${d.EMPTY_SEARCH}</li>`}function u(t,s,o,i){return t.map(({_id:e,name:r,burnedCalories:n,time:l,target:g,rating:m})=>`
            <li class="exercises_item" id="${e}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${i?c.recycleBin:c.rating.replace("RATING",f(m))}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${c.arrow}</div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-body-logo">${c.runner}</div>
                    <div class="card-body-name card-text-name">
                        ${a(r)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">
                            ${n} / ${l} min
                        </span>
                        <span class="info-item-name">${s}: </span>
                        <span class="long-text">
                            ${a(o)}
                        </span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">
                            ${a(g)}
                        </span>
                    </div>
                </div>
            </li>
        `).join("")}function y(t){return t.map(({filter:s,name:o,imgURL:i})=>{const e=`data-${v.DATA_INFO}="${a(s)}:${o}"`;return`
            <li class="category-item" ${e}>
                <div class="category-item-container" ${e}>
                    <img class="category-img" src="${i}" alt="${o}" ${e}/>
                    <div class="category-text-content" ${e}>
                        <h3 ${e}>${a(o)}</h3>
                        <p  ${e}>${a(s)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}function f(t){return Math.round(t*10)/10}(()=>{const t=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),i=document.querySelector(".js-menu-overlay"),e=document.querySelectorAll(".mobile-menu-nav-link"),r=()=>{const n=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!n),t.classList.toggle("is-open"),i.classList.toggle("is-shown");const l=n?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};s.addEventListener("click",r),o.addEventListener("click",r),e.forEach(n=>n.addEventListener("click",r)),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(t.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),i.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{y as a,h as b,v as c,p as g};
//# sourceMappingURL=mobile-852ce0aa.js.map
