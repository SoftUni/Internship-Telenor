const detailsDependencies = [
	'../database/data.js',
	'../views/details.js',
    '../templates/details-view/section-details-question-info.js'
]

define(detailsDependencies, (data, detailsView, questionInfoTemplate) => {
	let detailsController = {}
	detailsController.render = (internId) => {
        let state = history.state

        let isPageDetails = state && state.page !== 'details'
        if (isPageDetails || !state) {
        	// If state and internId are falsy
        	let setInternId = internId || 0

            history.pushState({
                page: 'details',
                internId: setInternId,
                questionId: 0 }, "", "?=details")
        } else {
        	// If page is refreshed
            history.replaceState(state, "", "?=details")
        }
        // TODO: Remove after debug state
        // console.log(state)
        // console.log(history)

		// Needs to be set because setting and getting state is not fast enough
		let currentInternId = internId || history.state.internId || 0
		let currentQuestionId = history.state.questionId || 0

		// Get data from db
        let intern = data.getSingleIntern(currentInternId)

        let internInfo = data.getAllInternQuestions(intern.id)

		// Render
        $('#root').html(detailsView(intern, internInfo.questions))
		// Initial video reframe and highlight
        resizeFrame()
        highLightQuestion($('.question')[currentQuestionId])
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
    let state = history.state
	console.log('User Id: ', state.internId)
	// TODO: internId needs to be passed as first param to getQuestionVideo when the db is full
	let questionData = data.getQuestionInfo(0, questionId)

	if (questionData.id !== state.questionId) {
        history.pushState({
            page: 'details',
            internId: state.internId,
            questionId: questionId
        }, "", "?=details")
	}

	// TODO: Remove after debug state
	// console.log('QuestionId: ', questionId)
	// console.log(state)
	// console.log(history)

	let responseHtml = questionInfoTemplate(questionData.videoId, questionData.text)

	$('.question-details').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}