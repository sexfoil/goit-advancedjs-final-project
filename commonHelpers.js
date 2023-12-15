import"./assets/styles-8106555d.js";const u={EMPTY_FAVORITES:"It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",EMPTY_QUOTE:"There is no quote"};function r(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function v(e){return e.length?e.map(({_id:a,name:s,bodyPart:n,burnedCalories:c,time:d,target:l})=>`
            <li class="exercises_item" id="${a}">
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
                        <span class="long-text">${c} / ${d} min</span>
                        <span class="info-item-name">Body part: </span>
                        <span class="long-text">${r(n)}</span>
                        <span class="info-item-name">Target: </span>
                        <span class="long-text">${r(l)}</span>
                    </div>
                </div>
            </li>
        `).join(""):`<li class="empty-exercises usual-text">${u.EMPTY_FAVORITES}</li>`}const t={_id:"64f389465ae26083f39b17c2",bodyPart:"back",equipment:"barbell",gifUrl:"https://ftp.goit.study/img/power-pulse/gifs/0037.gif",name:"barbell decline wide-grip pullover",target:"lats",description:"These large back muscles are responsible for shoulder adduction and horizontal extension. Pull-ups and lat pulldowns are common exercises targeting the lats.",rating:3,burnedCalories:307,time:3,popularity:7415},i="FavoriteExercises";document.querySelectorAll(".remove-from-favourite").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-id");p(a)})});function p(e){let a=o();a=a.filter(s=>s._id!==e),localStorage.setItem(i,JSON.stringify(a)),f()}function o(){return JSON.parse(localStorage.getItem(i))||[]}function f(){const e=o();console.log(e)}const m=document.querySelector(".exercises_content"),g=[t,t,t,t,t,t,t,t,t];m.innerHTML=v(g);
//# sourceMappingURL=commonHelpers.js.map
