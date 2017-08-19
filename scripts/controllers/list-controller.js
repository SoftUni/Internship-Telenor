const listDependencies = [
	'../database/data.js',
	'../views/list.js'
]

define(listDependencies, (data, listView) => {
	let listController = {}
	listController.render = () => {
        let state = history.state

        let isPageList = state && state.page === 'list'
        if (!isPageList) {
            history.pushState({page: 'list'}, "", "?=list")
        } else {
            // If page is refreshed
            history.replaceState(state, "", "?=list")
        }
        // TODO: Remove after debug state
        // console.log(state)
        // console.log(history)

		// Get data from db
        let interns = data.getAllInterns()

		// Render
        $('#root').html(listView(interns))
	}
	listController.attachListeners = detailsController => {
		detailsListener(detailsController, listController)
	}

	return listController
})

function detailsListener(detailsController, listController) {
	$('.intern-more-info-btn').on('click', null, null, e => {
		let internId = e.target.value

		detailsController.render(internId)
		detailsController.attachListeners(listController)
	})
}