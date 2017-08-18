const detailsDependencies = [
	'../data.js',
	'../views/details.js',
    '../templates/details-view/section-details-question-info.js'
]

define(detailsDependencies, (data, detailsView, questionInfoTemplate) => {
	let detailsController = {}
	detailsController.render = () => {
		let intern = data.getSingleIntern(window.sessionStorage.intern)
		// In case session storage is lost - refresh and load list.
		if (!intern) {
			window.location.hash = '#list'
			window.location.search += '?refresh'
			return
		}
        let internInfo = data.getAllInternQuestions(intern.id)

		window.location.hash = '#details'
		$('#root').html(detailsView(intern, internInfo.questions))
		// Initial video reframe and highlight
        resizeFrame()
        highLightQuestion($('.question:first'))
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
        const elemLi = e.currentTarget

		highLightQuestion(elemLi)
		renderQuestionInfo(elemLi.value, questionInfoTemplate, data)
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
	console.log('User Id: ', internId)
	// TODO: internId needs to be passed as first param to getQuestionVideo when the db is full
	let questionData = data.getQuestionVideo(0, questionId)

	let responseHtml = questionInfoTemplate(questionData.videoId, questionData.text)

	$('.question-details').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}