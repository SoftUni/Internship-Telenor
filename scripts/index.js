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

        /** Do something when browser go to first history
         * where state is null and history is refresh
         * to length 2 (starting history) - state {page: 'list'} */
        if (!currentState) {
            // TODO: Decide what to do when state is null
        } else if (currentState.page === 'list') {
            indexController.loadListPage()
		} else if (currentState.page === 'details') {
            indexController.loadDetailsPage()
		}
    })
}
