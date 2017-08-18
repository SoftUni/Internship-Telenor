define(['./intern-card.js'], internCardTemplate => {
    return (interns) => {
        let generateInternsCards = `
            <section class="intern-cards">
                <h3 class="title">
                    Научете повече от други стажанти
                </h3>`

        for (let intern of interns) {
            generateInternsCards += internCardTemplate(intern.id, intern.name, intern.picture)
        }

        generateInternsCards += `</section>`

        return generateInternsCards
    }
})