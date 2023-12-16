(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},g={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function i(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}const c={rating:`
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
    </svg>`};function m(s,o=!1){return s.length?s.map(({_id:n,name:a,bodyPart:e,burnedCalories:t,time:r,target:l,rating:d})=>`
            <li class="exercises_item" id="${n}">
                <div class="exercise-card-header">
                    <div class="card-workout">
                        <div class="card-workout-logo card-text-logo">Workout</div>
                        <div class="workout-logo-addon text-usual">${o?c.recycleBin:c.rating.replace("RATING",v(d))}</div>
                    </div>
                    <div class="card-start">
                        <div class="card-start-name usual-text">Start</div>
                        <div class="card-start-arrow">${c.arrow}</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-body-logo">${c.runner}</div>
                    <div class="card-body-name card-text-name">${i(a)}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${t} / ${r} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${i(e)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${i(l)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${u.EMPTY_FAVORITES}</li>`}function f(s){return s.map(({filter:o,name:n,imgURL:a})=>{const e=`data-${g.DATA_INFO}="${i(o)}:${n}"`;return`
            <li class="category-item" ${e}>
                <div class="category-item-container" ${e}>
                    <img class="category-img" src="${a}" alt="${n}" ${e}/>
                    <div class="category-text-content" ${e}>
                        <h3 ${e}>${i(n)}</h3>
                        <p  ${e}>${i(o)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}function v(s){return Math.round(s*10)/10}(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),a=document.querySelector(".js-menu-overlay"),e=document.querySelectorAll(".mobile-menu-nav-link"),t=()=>{const r=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!r),s.classList.toggle("is-open"),a.classList.toggle("is-shown");const l=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};o.addEventListener("click",t),n.addEventListener("click",t),e.forEach(r=>r.addEventListener("click",t)),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),a.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{f as a,g as b,m as g};
//# sourceMappingURL=mobile-5b38b47d.js.map
