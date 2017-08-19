const dependencies = [
	'./scripts/controllers/index-controller.js'
]

define(dependencies, indexController => {

	$(() => {
		let page = history.state ? history.state.page : 'list'
		switch (page) {
			case 'details':
                indexController.loadDetailsPage()
                break;
			default:
                indexController.loadListPage()
                break;
		}
        browserHistoryListener(indexController)
    })
})

function browserHistoryListener(indexController) {
    $(window).on('popstate', event => {
        let currentState = history.state

		if (!currentState || currentState.page === 'list') {
            indexController.loadListPage()
		} else if (currentState.page === 'details') {
            indexController.loadDetailsPage()
		}
    })
}
