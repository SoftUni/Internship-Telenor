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
        questionInfoListener()
        showListListener(listController, detailsController)
        resizeListener()
	}

    function renderQuestionInfo(questionId) {
	    let internId = $('#intern-id')[0].value
        console.log(internId)
        // TODO: internId needs to be passed as first param to getQuestionVideo when the db is full
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

// Listeners
function showListListener(listController, detailsController) {
    $('.close').on('click', null, null, () => {
        listController.render()
        listController.attachListeners(detailsController)
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