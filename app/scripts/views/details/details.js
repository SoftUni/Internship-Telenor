const viewDetailsDependancies = [
    './templates/header-details-intern-info.js',
    './templates/aside-details-questions.js',
    './templates/section-details-question-info.js'
]

define(viewDetailsDependancies, (internInfoTemplate, asidebarTemplate, questionInfoTemplate) => {
    return (dataObj) => {
        return `
            <div class="details-container">
                ${internInfoTemplate(dataObj.internInfo)}
                <section class="position-details">
                    <section class="question-details">
                        ${questionInfoTemplate(dataObj.currentQuestionText)}
                    </section>
                    ${asidebarTemplate(dataObj.allInternQuestions)}
                </section>
            </div>`
    }
})