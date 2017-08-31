define(() => {
    return (id, name, internPic, internDescription) => `
    <div class="card-wrapper">
        <article class="intern-single-card">
            <div class="card-front">
                <div class="intern-image-wrapper">
                    <img class="intern-pic" src="./assets/images/interns/${internPic}" />
                </div>
                <h4 class="intern-name">${name}</h4>
                <button class="intern-more-info-btn" value="${id}">Виж повече</button>
            </div>
            <div class="card-back">
                <p class="intern-info">
                   ${internDescription}
                </p>
                <div class="btn-wrapper">
                    <button class="intern-more-info-btn" value="${id}">Виж повече</button>
                </div>
            </div>
        </article>
    </div>`
})
