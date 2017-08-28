const detailsDependencies = [
	'../database/data.js',
	'../views/details.js',
    '../templates/details-view/section-details-question-info.js'
]

define(detailsDependencies, (data, detailsView, questionInfoTemplate) => {
	let detailsController = {}

	detailsController.setConfigurations = (listController, internId) => {
        detailsController.setState(internId)
        detailsController.render()
        detailsController.attachListeners(listController)
    }

	detailsController.setState = (internId, questionId) => {
        let state = history.state

        let isPageDetails = state && state.page === 'details'
        if (!isPageDetails) {
            // If page is not details
            let setInternId = internId || 0

            history.pushState({
                page: 'details',
                internId: setInternId,
                questionId: 0 }, "", "?=details")
        } else if (questionId  && questionId !== state.questionId) {
            // If page is details and the question is different
            history.pushState({
                page: 'details',
                internId: state.internId,
                questionId: questionId
            }, "", "?=details")
        } else {
            // If page is refreshed
            history.replaceState(state, "", "?=details")
        }

        // TODO: Remove after debug state
        // console.log(state)
        // console.log(history)
    }

	detailsController.render = () => {
        let state = history.state

		let currentInternId = state.internId || 0
		let currentQuestionId = state.questionId || 0

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
        changeQuestionListener(questionInfoTemplate, data, detailsController)
        showListListener(listController, detailsController)
        resizeListener()
	}

    return detailsController
})

// Listeners
function showListListener(listController, detailsController) {
    $('.close').on('click', null, null, () => {
        listController.setConfigurations(detailsController)
    })
}

function changeQuestionListener(questionInfoTemplate, data, detailsController) {
	$('.question').on('click', null, null, (e) => {
        const elemLi = e.currentTarget

        let questionId = elemLi.value
        detailsController.setState(null, questionId)

		highLightQuestion(elemLi)
		renderQuestionInfo(questionInfoTemplate, data)
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

function renderQuestionInfo(questionInfoTemplate, data) {
    let state = history.state

    console.log('Change intern Id: ', state.internId)
	// TODO: internId needs to be passed as first param to getQuestionVideo when the db is full
	let questionData = data.getQuestionInfo(0, state.questionId)

	let responseHtml = questionInfoTemplate(questionData.videoId, questionData.text)

	$('.question-details').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}