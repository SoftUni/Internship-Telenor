const dependencies = [
	'./scripts/controllers/list-controller.js',
	'./scripts/controllers/details-controller.js'
]

define(dependencies, (listController, detailsController) => {

	$(document).ready(() => {
		switch (window.location.hash) {
			case '#details':
				detailsController.render()
				detailsController.attachListeners(listController)
				break;
			default:
				listController.render()
				listController.attachListeners(detailsController)
				break;
		}
	})
})

