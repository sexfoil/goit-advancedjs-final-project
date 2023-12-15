import"./assets/styles-8106555d.js";const v={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"};function r(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function f(e){return e.length?e.map(({_id:t,name:s,bodyPart:c,burnedCalories:d,time:l,target:u})=>`
            <li class="exercises_item" id="${t}">
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
                    <div class="card-body-name card-text-name">${r(s)}</div>
                </div>

                <div class="card-footer">
                    <div class="card-info card-text-info">
                        <span class="info-item-name">Burned calories: </span>
                        <span class="long-text">${d} / ${l} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${r(c)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${r(u)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${v.EMPTY_FAVORITES}</li>`}const a={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7415},i="FavoriteExercises",n=document.querySelector(".add-to-favourite");n.addEventListener("click",()=>{const e=n.getAttribute("data-id");let t=o();if(!t.some(s=>s._id===e)){const s=a;t.push(s),localStorage.setItem(i,JSON.stringify(t))}});document.querySelectorAll(".remove-from-favourite").forEach(e=>{e.addEventListener("click",()=>{const t=e.getAttribute("data-id");p(t)})});function p(e){let t=o();t=t.filter(s=>s._id!==e),localStorage.setItem(i,JSON.stringify(t)),m()}function o(){return JSON.parse(localStorage.getItem(i))||[]}function m(){const e=o();console.log(e)}const g=document.querySelector(".exercises_content"),y=[a,a,a,a,a,a,a,a,a];g.innerHTML=f(y);
//# sourceMappingURL=commonHelpers.js.map
