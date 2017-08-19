const dependencies = [
	'./scripts/controllers/list-controller.js',
	'./scripts/controllers/details-controller.js'
]

define(dependencies, (listController, detailsController) => {

	$(() => {
		let page = history.state ? history.state.page : 'list'
		switch (page) {
			case 'details':
				detailsController.render()
				detailsController.attachListeners(listController)
                break;
			default:
				listController.render()
        		listController.attachListeners(detailsController)
                break;
		}
        browserHistoryListener(listController, detailsController)
    })
})

function browserHistoryListener(listController, detailsController) {
    $(window).on('popstate', event => {
        let currentState = history.state

		if (currentState.page === 'list' || !currentState) {
            listController.render()
            listController.attachListeners(detailsController)
		} else if (currentState.page === 'details') {
            detailsController.render()
            detailsController.attachListeners(listController)
		}
		// console.log(history)
    })
}

