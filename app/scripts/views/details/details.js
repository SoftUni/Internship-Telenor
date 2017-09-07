const viewDetailsDependancies = [
    './templates/header-details-intern-info.js',
    './templates/aside-details-questions.js',
    './templates/section-details-question-info.js'
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate, questionInfoTemplate) => {
    return (intern, internQuestions) => {
        const loadFirstQuestion = internQuestions[0]

        return `
            <div class="details-container">
                ${internInfoTemplate(intern)}
                <section class="position-details">
                    <section class="question-details">
                    <div class="player-wrapper">
                        <div id="ytplayer"></div>
                    </div>
                    <div class="description-wrapper">
                        ${questionInfoTemplate(loadFirstQuestion.text)}
                    </div>
                    </section>
                    ${asidebarTemplate(internQuestions)}
                </section>
            </div>`
    }
})