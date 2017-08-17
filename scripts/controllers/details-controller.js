let detailsDependencies = [
	'../data.js',
	'..//views/details.js',
]

define(detailsDependencies, (data, detailsView) => {
	let detailsController = {}
	detailsController.render = e => {
		let intern = data.getSingleIntern(e.target.value)

		$('#root').html(detailsView(intern))
		resizeFrame()
	}
	detailsController.attachListeners = listController => {
		showListListener(listController, detailsController)
		resizeListener()
	}

	return detailsController
})

// Listeners
function showListListener(listController, detailsController) {
	$('.intern-list-btn').on('click', null, null, () => {
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