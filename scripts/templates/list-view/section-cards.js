define(['./intern-card.js'], internCardTemplate => {
    return (interns) => {
        let generateInternsCards = `
            <section class="intern-cards">
                <h2 class="title">
                    Научете повече от други стажанти
                </h2>`

        for (let intern of interns) {
            generateInternsCards += internCardTemplate(intern)
        }

        generateInternsCards += `</section>`

        return generateInternsCards
    }
})