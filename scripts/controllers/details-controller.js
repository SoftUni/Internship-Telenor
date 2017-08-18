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
        resizeFrame()
	}
	detailsController.attachListeners = listController => {
        changeQuestionListener(questionInfoTemplate, data)
        showListListener(listController, detailsController)
        resizeListener()
	}

    return detailsController
})

// Listeners
function showListListener(listController, detailsController) {
    $('.close').on('click', null, null, () => {
        listController.render()
        listController.attachListeners(detailsController)
    })
}

function changeQuestionListener(questionInfoTemplate, data) {
	$('.question').on('click', null, null, (e) => {
		highLightQuestion(e.target)
		renderQuestionInfo(e.currentTarget.attributes.value.value, questionInfoTemplate, data)
		resizeFrame()
	})
}

function resizeListener() {
	$(window).on('resize', null, null, () => {
		resizeFrame()
	})
}

// Listener dependencies
function resizeFrame() {
	let playerFrame = $('iframe')
	let frameWidth = playerFrame.width()
	let frameHeight = Math.trunc(frameWidth / 1.777)
	playerFrame.height(frameHeight)
}

function renderQuestionInfo(questionId, questionInfoTemplate, data) {
	let internId = $('#intern-id')[0].value
	console.log(internId)
	// TODO: internId needs to be passed as first param to getQuestionVideo when the db is full
	let questionData = data.getQuestionVideo(0, questionId)

	let responseHtml = questionInfoTemplate(questionData.videoId, questionData.text)

	$('.question-details').html(responseHtml)
}

function highLightQuestion(element) {
	element = $(element)
	if (element.is('p')) {
		element = element.parent()
	}

	$('.question').removeClass('active')
	console.log(element)
	element.addClass('active')
}