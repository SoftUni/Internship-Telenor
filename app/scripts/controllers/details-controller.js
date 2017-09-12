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
            this.getInternData()
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

        static getInternData () {
            this.db = {}
            this.db.internInfo = data.getSingleIntern(this.state.internId)
            this.db.internQuestionsData = data.getAllInternQuestions(this.state.internId)
            this.db.singleQuestionData = data.getQuestionInfo(this.state.internId, this.state.questionId)

            this.playerApiQuestionsInfo = {
                videoId: this.db.internQuestionsData.videoId,
                currentQuestionId: Number(this.state.questionId),
                questionsInfo: this.db.internQuestionsData.questions
                    .map(q => q.video)
            }

            this.detailsViewDataObj = {
                internInfo: this.db.internInfo,
                currentQuestionText: this.db.singleQuestionData.text,
                allInternQuestions: this.db.internQuestionsData.questions
            }
        }

        static render () {
            // Load details view page skeleton
            let detailsViewHtml = detailsView(this.detailsViewDataObj)

            // Render
            $('#root').html(detailsViewHtml)
            // Load iframe player
            this.renderIframePlayer()
        }

        static renderIframePlayer () {
            this.IframePlayerFunc = playerApi()

            this.IframePlayerFunc.readyPlayer(this.playerApiQuestionsInfo)
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
        detailsController.IframePlayerFunc.clearTimeInterval()
        listController.setConfigurations(detailsController)
    })
}

function changeQuestionListener(questionInfoTemplate, detailsController) {
	$('.question').on('click', (e, fakeClick) => {
        const elemLi = e.currentTarget

        let questionObj = {
            fakeClick,
            elemLi,
            questionInfoTemplate,
            detailsController
        }

        setUpQuestionDetails(questionObj)
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

function setUpQuestionDetails(obj) {
    let telenorThumpImage = $('.img-thump-wrapper')

    if (telenorThumpImage.is(':visible')) {
        telenorThumpImage.hide()
        $('#ytplayer').show()
    }

    // Update state if question is different from previous
    if (!obj.elemLi.classList.contains('active')) {
        // Update state
        let questionIdIndex = obj.elemLi.value.toString()
        obj.detailsController.setState(null, questionIdIndex)

        // Update controller data
        obj.detailsController.getInternData()
    }

    highLightQuestion(obj.elemLi)
    renderQuestionInfo(obj.questionInfoTemplate, obj.detailsController.db.singleQuestionData)

    // Update iframe data/clip
    obj.detailsController.IframePlayerFunc.updatePlayerData(obj.detailsController.playerApiQuestionsInfo)
    if (!obj.fakeClick) {
        obj.detailsController.IframePlayerFunc.loadQuestionVideoClip()
    }
}

function renderQuestionInfo(questionInfoTemplate, questionData) {
	let responseHtml = questionInfoTemplate(questionData.text)

	$('.description-wrapper').html(responseHtml)
}

function highLightQuestion(elemLi) {
	$('.question').removeClass('active')
	$(elemLi).addClass('active')
}
