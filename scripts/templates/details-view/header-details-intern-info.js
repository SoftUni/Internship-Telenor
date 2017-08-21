define(() => {
    return (intern) => `
        <header class="intern-detail-info">
            <div class="intern-image-wrapper">
                <img class="img-circle" src="./public/images/interns/${intern.picture}" />
            </div>
            <section class="intern-info">
                <h2 class="name">${intern.name}</h2>
                <p class="department"><strong>Отдел</strong>&#58; ${intern.department}</p>
                <p class="position"><strong>Позиция</strong>&#58; ${intern.position}</p>
            </section>
            <div class="back-btn-wrapper">
                <button type="button" class="close back-btn" aria-label="Close">
                    <span aria-hidden="true">X</span>
                </button>
            </div>
        </header>`
})