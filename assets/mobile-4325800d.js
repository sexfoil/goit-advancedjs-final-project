(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"},d={DATA_INFO:"info",DATA_INFO_DELIMETER:":"};function i(o){return o?o.charAt(0).toUpperCase()+o.slice(1):""}function u(o){return o.length?o.map(({_id:s,name:n,bodyPart:a,burnedCalories:e,time:t,target:r})=>`
            <li class="exercises_item" id="${s}">
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
                        <span class="long-text">${e} / ${t} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${i(a)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${i(r)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${l.EMPTY_FAVORITES}</li>`}function m(o){return o.map(({filter:s,name:n,imgURL:a})=>{const e=`data-${d.DATA_INFO}="${i(s)}:${n}"`;return`
            <li class="category-item" ${e}>
                <div class="category-item-container" ${e}>
                    <img class="category-img" src="${a}" alt="${n}" ${e}/>
                    <div class="category-text-content" ${e}>
                        <h3 ${e}>${i(n)}</h3>
                        <p  ${e}>${i(s)}</p>
                    </div>
                </div>
            </li>
        `}).join("")}(()=>{const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),a=document.querySelector(".js-menu-overlay"),e=document.querySelectorAll(".mobile-menu-nav-link"),t=()=>{const r=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!r),o.classList.toggle("is-open"),a.classList.toggle("is-shown");const c=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[c](document.body)};s.addEventListener("click",t),n.addEventListener("click",t),e.forEach(r=>r.addEventListener("click",t)),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(o.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),a.classList.remove("is-shown"),bodyScrollLock.enableBodyScroll(document.body))})})();export{m as a,d as b,u as g};
//# sourceMappingURL=mobile-4325800d.js.map
