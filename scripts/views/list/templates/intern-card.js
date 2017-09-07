define(() => {
    return (intern) => `
    <div class="card-wrapper">
        <article class="intern-single-card">
            <div class="card-front">
                <div class="intern-image-wrapper">
                    <img class="intern-pic" src="./assets/images/interns/${intern.picture}" />
                </div>
                <h4 class="intern-name">${intern.name}</h4>
                <button class="intern-more-info-btn" value="${intern.id}">Виж повече</button>
            </div>
            <div class="card-back">
                <p class="intern-info">
                   ${intern.description}
                </p>
                <div class="btn-wrapper">
                    <button class="intern-more-info-btn" value="${intern.id}">Виж повече</button>
                </div>
            </div>
        </article>
    </div>`
})
