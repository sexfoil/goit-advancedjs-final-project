(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const l={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"};function i(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}function d(s){return s.length?s.map(({_id:o,name:a,bodyPart:n,burnedCalories:e,time:t,target:r})=>`
            <li class="exercises_item" id="${o}">
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
                    <div class="card-body-name card-text-name">${i(a)}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${e} / ${t} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${i(n)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${i(r)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${l.EMPTY_FAVORITES}</li>`}function u(s){return s.map(({filter:o,name:a,imgURL:n})=>`
            <li class="category-item">
                <div class="category-item-container">
                    <img class="category-img" src="${n}" alt="${a}" />
                    <div class="category-text-content">
                        <h3>${i(a)}</h3>
                        <p>${i(o)}</p>
                    </div>
                </div>
            </li>
        `).join("")}(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),a=document.querySelector(".js-close-menu"),n=document.querySelector(".js-menu-overlay"),e=document.querySelectorAll(".mobile-menu-nav-link"),t=()=>{const r=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!r),s.classList.toggle("is-open"),n.classList.toggle("is-shown");const c=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)};o.addEventListener("click",t),a.addEventListener("click",t),e.forEach(r=>r.addEventListener("click",t)),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),n.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{u as a,d as g};
//# sourceMappingURL=mobile-ddde5301.js.map
