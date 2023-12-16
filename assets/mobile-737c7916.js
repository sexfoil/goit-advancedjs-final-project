(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const g={EMPTY_SEARCH:"There is no result for such search query",EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},m={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function a(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}const c={rating:`
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
    </svg>`};function p(s,r,n){return s.length?v(s,r,n,!0):`<li class="empty-exercises usual-text">${g.EMPTY_FAVORITES}</li>`}function v(s,r,n,i){return s.map(({_id:e,name:t,burnedCalories:o,time:l,target:d,rating:u})=>`
            <li class="exercises_item" id="${e}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${i?c.recycleBin:c.rating.replace("RATING",f(u))}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${c.arrow}</div>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-body-logo">${c.runner}</div>
                    <div class="card-body-name card-text-name">
                        ${a(t)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">
                            ${o} / ${l} min
                        </span>
                        <span class="info-item-name">${r}: </span>
                        <span class="long-text">
                            ${a(n)}
                        </span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">
                            ${a(d)}
                        </span>
                    </div>
                </div>
            </li>
        `).join("")}function h(s){return s.map(({filter:r,name:n,imgURL:i})=>{const e=`data-${m.DATA_INFO}="${a(r)}:${n}"`;return`
            <li class="category-item" ${e}>
                <div class="category-item-container" ${e}>
                    <img class="category-img" src="${i}" alt="${n}" ${e}/>
                    <div class="category-text-content" ${e}>
                        <h3 ${e}>${a(n)}</h3>
                        <p  ${e}>${a(r)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}function f(s){return Math.round(s*10)/10}(()=>{const s=document.querySelector(".js-menu-container"),r=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=document.querySelector(".js-menu-overlay"),e=document.querySelectorAll(".mobile-menu-nav-link"),t=()=>{const o=r.getAttribute("aria-expanded")==="true"||!1;r.setAttribute("aria-expanded",!o),s.classList.toggle("is-open"),i.classList.toggle("is-shown");const l=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};r.addEventListener("click",t),n.addEventListener("click",t),e.forEach(o=>o.addEventListener("click",t)),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(s.classList.remove("is-open"),r.setAttribute("aria-expanded",!1),i.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{h as a,m as b,p as g};
//# sourceMappingURL=mobile-737c7916.js.map
