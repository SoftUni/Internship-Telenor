define(() => {
    return (internQuestions) => {
        let generateInternQuestions = `
        <aside class="questions">
            <nav>
                <ul class="question-list">`

        for (let questionInfo of internQuestions) {
            generateInternQuestions += `
                    <li class="question" value="${questionInfo.id}">
                        <div class="separator">
                            <div class="bl"></div>
                            <div class="br"></div>
                            <div class="tl"></div>
                            <div class="tr"></div>
                        </div>
                        <p>${questionInfo.title}&quest;</p>
                    </li>`
        }

        generateInternQuestions += `
                </ul>
            </nav>
        </aside>`

        return generateInternQuestions
    }
})