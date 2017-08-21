const viewDetailsDependancies = [
    '../templates/details-view/header-details-intern-info.js',
    '../templates/details-view/aside-details-questions.js',
    '../templates/details-view/section-details-question-info.js',
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate, questionInfoTemplate) => {
    return (intern, internQuestions) => {
        const questionId = history.state.questionId
        const questionText = internQuestions[questionId].text

        return `
            <div class="details-container">
                ${internInfoTemplate(intern)}
                <section class="position-details">
                    <section class="question-details">
                        ${questionInfoTemplate(questionText)}
                    </section>
                    ${asidebarTemplate(internQuestions)}
                </section>
            </div>`
    }
})