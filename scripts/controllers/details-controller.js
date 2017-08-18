let detailsDependencies = [
	'../data.js',
	'../views/details.js',
    '../templates/section-details-question-info.js'
]

define(detailsDependencies, (data, detailsView, questionInfoTemplate) => {
	let detailsController = {}
	detailsController.render = e => {
		let intern = data.getSingleIntern(e.target.value)
        let internInfo = data.getAllInternQuestions(intern.id)

		$('#root').html(detailsView(intern, internInfo.questions))
	}
	detailsController.attachListeners = listController => {
        questionInfoListener()
        showListListener(listController, detailsController)
	}

    function renderQuestionInfo(questionId) {
        let questionData = data.getQuestionVideo(0, questionId)

        let responseHtml = questionInfoTemplate(questionData.videoId, questionData.text)

        $('.question-details').html(responseHtml)
    }

    function questionInfoListener() {
        $('.question').on('click', null, null, (e) => {
            renderQuestionInfo(e.currentTarget.attributes.value.value)
        })
    }

    return detailsController
})

function showListListener(listController, detailsController) {
    $('.close').on('click', null, null, () => {
        listController.render()
        listController.attachListeners(detailsController)
    })
}
