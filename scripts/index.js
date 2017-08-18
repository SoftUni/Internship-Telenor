const dependencies = [
	'./scripts/controllers/list-controller.js',
	'./scripts/controllers/details-controller.js'
]

define(dependencies, (listController, detailsController) => {

	$(document).ready(() => {
		listController.render()
		listController.attachListeners(detailsController)
	})
})

