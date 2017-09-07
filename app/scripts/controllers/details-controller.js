const detailsDependencies = [
	'../database/data.js',
	'../views/details/details.js',
    '../views/details/templates/section-details-question-info.js',
    '../utils/player-iframe-api.js'
]

define(detailsDependencies, (data, detailsView, questionInfoTemplate, playerApi) => {
    return class detailsController {
        static setConfigurations (listController, internId) {
            this.setState(internId)
            this.getDataFromDb()
            this.render()
            this.initDetailsPageConfigs()
            this.attachListeners(listController)
        }

        static setState (internId, questionId) {
            // Get current browser state
            this.state = history.state

            let isPageDetails = this.state && this.state.page === 'details'
            if (!isPageDetails) {
                // If page is not details
                let setInternId = internId || '0'

                history.pushState({
                    page: 'details',
                    internId: setInternId,
                    questionId: '0' }, "", "?=details")
            } else if (questionId && questionId !== this.state.questionId) {
                // If page is details and the question is different
                history.pushState({
                    page: 'details',
                    internId: this.state.internId,
                    questionId: questionId
                }, "", "?=details")
            } else {
                // If page is refreshed
                history.replaceState(this.state, "", "?=details")
            }

            // Change to new browser state
            this.state = history.state
        }

        static getDataFromDb () {
            this.db = {}
            this.db.internInfo = data.getSingleIntern(this.state.internId)
            this.db.internQuestionsData = data.getAllInternQuestions(this.state.internId).questions
            this.db.singleQuestionData = data.getQuestionInfo(this.state.internId, this.state.questionId)
        }

        static render () {
            // Load details view page skeleton
            let detailsViewHtml = detailsView(this.db.internInfo, this.db.internQuestionsData)

            // Render
            $('#root').html(detailsViewHtml)
            // Load iframe playlist
            this.renderIframePlaylist()
        }

        static renderIframePlaylist () {
            this.iframeApiModule = playerApi()

            let questionId = this.state.questionId
            let loadIframePlayerFunc = this.iframeApiModule.readyPlayer
            let allVideoIdsArr = this.db.internQuestionsData.map(q => q.videoId)

            loadIframePlayerFunc(allVideoIdsArr, questionId)
        }

        static initDetailsPageConfigs () {
            // Initial resize iframe and highlight li element
            resizeFrame()
            highLightQuestion($('.question')[this.state.questionId])
        }

        static attachListeners (listController) {
            changeQuestionListener(questionInfoTemplate, this)
            showListListener(listController, this)
            resizeListener()
        }
    }
})

// Listeners
function showListListener(listController, detailsController) {
    $('.close').on('click', null, null, () => {
        listController.setConfigurations(detailsController)
    })
}

function changeQuestionListener(questionInfoTemplate, detailsController) {
	$('.question').on('click', e => {
        const elemLi = e.currentTarget

        // To not load the current question if it is clicked again
        if (elemLi.classList.contains('active')) {
            return
        }

        let questionIdIndex = elemLi.value.toString()
        detailsController.setState(null, questionIdIndex)

		highLightQuestion(elemLi)
        detailsController.iframeApiModule.changeQuestion(questionIdIndex)
		renderQuestionInfo(questionInfoTemplate, detailsController.db.singleQuestionData)
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

function renderQuestionInfo(questionInfoTemplate, questionData) {
	let responseHtml = questionInfoTemplate(questionData.text)

	$('.description-wrapper').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}
