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
            this.db.internQuestionsData = data.getAllInternQuestions(this.state.internId)
            this.db.singleQuestionData = data.getQuestionInfo(this.state.internId, this.state.questionId)
        }

        static render () {
            let detailsViewDataObj = {
                internInfo: this.db.internInfo,
                currentQuestionText: this.db.singleQuestionData.text,
                allInternQuestions: this.db.internQuestionsData.questions
            }

            // Load details view page skeleton
            let detailsViewHtml = detailsView(detailsViewDataObj)

            // Render
            $('#root').html(detailsViewHtml)
            // Load iframe playlist
            this.renderIframePlayer()
        }

        static renderIframePlayer () {
            let loadIframePlayerFunc = playerApi()

            let videoQuestionsInfo = {
                videoId: this.db.internQuestionsData.videoId,
                currentQuestionId: Number(this.state.questionId),
                lastQuestionId: this.db.internQuestionsData.questions.length - 1,
                videoInfo: this.db.singleQuestionData.video
            }

            loadIframePlayerFunc(videoQuestionsInfo)
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

        // If question different from previous is loaded
        if (!elemLi.classList.contains('active')) {
            // Update state
            let questionIdIndex = elemLi.value.toString()
            detailsController.setState(null, questionIdIndex)

            // Update controller data
            detailsController.getDataFromDb()
        }

		highLightQuestion(elemLi)
		renderQuestionInfo(questionInfoTemplate, detailsController.db.singleQuestionData)
        detailsController.renderIframePlayer()
        resizeFrame()
        scrollToVideo()
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
    let imgClass = $('.img-thump-wrapper')

	let frameWidth = playerFrame.width()
	let frameHeight = Math.trunc(frameWidth / 1.777)
    
	playerFrame.height(frameHeight)
    imgClass.height(frameHeight)
}

function renderQuestionInfo(questionInfoTemplate, questionData) {
	let responseHtml = questionInfoTemplate(questionData.text)

	$('.question-details').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}

function scrollToVideo() {
	$('html, body').animate({
		scrollTop: $('.details-container').offset().top
	}, 500)

	$('#ytplayer').focus()
}