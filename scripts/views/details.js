const viewDetailsDependancies = [
    '../templates/details-view/header-details-intern-info.js',
    '../templates/details-view/aside-details-questions.js',
    '../templates/details-view/section-details-question-info.js'
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate, questionInfoTemplate) => {
    return (intern, internQuestions) => {
        const questionId = history.state.questionId
        const loadFirstQuestion = internQuestions[questionId]

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