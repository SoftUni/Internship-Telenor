let viewDetailsDependancies = [
    '../templates/header-details-intern-info.js',
    '../templates/aside-details-questions.js',
    '../templates/section-details-question-info.js',
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate, questionInfoTemplate) => {
    return (intern, internQuestions) => {
        const firstQuestionId = 0
        let loadFirstQuestion = internQuestions[firstQuestionId]

        return `
            <div class="details-container">
                ${internInfoTemplate(intern)}
                <section class="position-details">
                    <section class="question-details">
                        ${questionInfoTemplate(loadFirstQuestion.videoId, loadFirstQuestion.text)}
                    </section>
                    ${asidebarTemplate(internQuestions)}
                </section>
            </div>`
    }
})