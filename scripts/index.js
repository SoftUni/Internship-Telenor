const dependencies = [
	'./scripts/controllers/list-controller.js',
	'./scripts/controllers/details-controller.js'
]

define(dependencies, (listController, detailsController) => {

	$(() => {
		let page = history.state ? history.state.page : 'list'
		switch (page) {
			case 'details':
                loadDetailsPage(detailsController, listController)
                break;
			default:
                loadListPage(listController, detailsController)
                break;
		}
        browserHistoryListener(listController, detailsController)
    })
})

function browserHistoryListener(listController, detailsController) {
    $(window).on('popstate', event => {
        let currentState = history.state

		if (!currentState || currentState.page === 'list') {
            loadListPage(listController, detailsController)
		} else if (currentState.page === 'details') {
            loadDetailsPage(detailsController, listController)
		}
    })
}

function loadListPage(listController, detailsController) {
    listController.render()
    listController.removeListeners()
    listController.attachListeners(detailsController)
}

function loadDetailsPage(detailsController, listController) {
    detailsController.render()
    detailsController.attachListeners(listController)
}

