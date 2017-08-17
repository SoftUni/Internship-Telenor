define(['../intern-card-template.js'], internCardTemplate => {
    return (interns) => {
        let generateListOfAllCards = `
            <div class="hub-image-wrapper">
                <img src="./images/hub-by-telenor-v3.png" alt="telenor image hub" class="hub-image">
            </div>
            <section class="info-box">
                <div class="info-text-wrapper">
                    <h4 class="info-title">
                        Lorem Ipsum is simply dummy text of the print
                    </h4>
                    <p class="info-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery
                    </p>
                </div>
                <div class="btn-wrapper">
                    <button class="apply-btn">Кандидатствай</button>
                </div>
            </section>
            <section class="intern-cards">
                <h3 class="title">
                    Научете повече от други стажанти
                </h3>`

        for (let intern of interns) {
            generateListOfAllCards += internCardTemplate.generate(intern.id, intern.name, intern.picture)
        }

        generateListOfAllCards += '</section>'

        return generateListOfAllCards
    }
})