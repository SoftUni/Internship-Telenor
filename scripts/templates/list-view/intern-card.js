define(() => {
    return (id, name, internPic) => `
    <div class="card-wrapper">
        <article class="intern-single-card">
            <div class="card-front">
                <div class="intern-image-wrapper">
                    <img class="img-circle" src="${internPic}" />
                </div>
                <h4 class="intern-name">${name}</h4>
                <button class="intern-more-info-btn" value="${id}">Виж повече</button>
            </div>
            <div class="card-back">
                <p class="intern-info">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
                </p>
                <div class="btn-wrapper">
                    <button class="intern-more-info-btn" value="${id}">Виж повече</button>
                </div>
            </div>
        </article>
    </div>`
})
