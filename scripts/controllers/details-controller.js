const detailsDependencies = [
	'../database/data.js',
	'../views/details.js',
    '../templates/details-view/section-details-question-info.js',
	'../yt-api/iframe-api.js'
]

define(detailsDependencies, (data, detailsView, questionInfoTemplate, ytApi) => {
	let detailsController = {}
	detailsController.render = (internId) => {
        let state = history.state

        let isPageDetails = state && state.page === 'details'
        if (!isPageDetails) {
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

		//TODO: dummy id for testing. Replace with actual data.
		let PLAYLIST_ID = 'PLutnSuoPxkdxDj_j4OsT51bQtVGe-zDdK'

		// Get data from db
        let intern = data.getSingleIntern(currentInternId)

        let internInfo = data.getAllInternQuestions(intern.id)

		// Render
        $('#root').html(detailsView(intern, internInfo.questions))

		// Create and load playlist
		loadPlaylist(ytApi, PLAYLIST_ID)

		// Initial video reframe and highlight
        highLightQuestion($('.question')[currentQuestionId])
	}
	detailsController.attachListeners = listController => {
        changeQuestionListener(questionInfoTemplate, data, ytApi)
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

function changeQuestionListener(questionInfoTemplate, data, ytApi) {
	$('.question').on('click', null, null, (e) => {
        const elemLi = e.currentTarget

		highLightQuestion(elemLi)
		renderQuestionInfo(elemLi.value, questionInfoTemplate, data)
		loadVideo(ytApi, elemLi.value)
		resizeFrame()
	})
}

function resizeListener() {
	$(window).on('resize', null, null, () => {
		resizeFrame()
	})
}

// Listener dependencies
function resizeFrame(ytApi) {
	let playerFrame = $('iframe')
	let width = playerFrame.width()
	let height = Math.trunc(width / 1.777)

	ytApi.resize(width, height)
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

	let responseHtml = questionInfoTemplate(questionData.text)

	$('.question-details').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}

function loadPlaylist(ytApi, id) {
	ytApi.init(id)
}

function loadVideo(ytApi, index) {
	ytApi.changeVideo(index)
}