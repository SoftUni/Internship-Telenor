const listViewDependencies = [
    './templates/hub-img-and-info-box.js',
    './templates/section-cards.js'
]

define(listViewDependencies, (imgAndInfoBoxTemplate, sectionInternsCardsTemplate) => {
    return (interns) => `
        <div class="list-container">
            ${imgAndInfoBoxTemplate()}
            ${sectionInternsCardsTemplate(interns)}
        </div>`
})