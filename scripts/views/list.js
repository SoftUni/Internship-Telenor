const listViewDependencies = [
    '../templates/list-view/hub-img-and-info-box.js',
    '../templates/list-view/section-cards.js'
]

define(listViewDependencies, (imgAndInfoBoxTemplate, sectionInternsCardsTemplate) => {
    return (interns) => `
        <div class="list-container">
            ${imgAndInfoBoxTemplate()}
            ${sectionInternsCardsTemplate(interns)}
        </div>`
})