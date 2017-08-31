define(['./intern-card.js'], internCardTemplate => {
    return (interns) => {
        let generateInternsCards = `
            <section class="intern-cards">
                <h2 class="title">
                    Научете повече от други стажанти
                </h2>`

        for (let intern of interns) {
            generateInternsCards += internCardTemplate(intern.id, intern.name, intern.picture, intern.description)
        }

        generateInternsCards += `</section>`

        return generateInternsCards
    }
})