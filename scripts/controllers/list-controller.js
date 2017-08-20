const listDependencies = [
	'../database/data.js',
	'../views/list.js'
]

define(listDependencies, (data, listView) => {
	let listController = {}

	listController.setConfigurations = (detailsController) => {
        listController.setState()
        listController.render()
        listController.removeListeners()
        listController.attachListeners(detailsController)
	}

	listController.setState = () => {
        let state = history.state

		// TODO: Below
        /** Do something when browser go to first history
		 * where state is null and history is refresh
		 * to length 2 (starting history) - state {page: 'list'} */
		if (!state) {
        	return
		}

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
    }

	listController.render = () => {
		// Get data from db
        let interns = data.getAllInterns()

		// Render
        $('#root').html(listView(interns))
	}

	listController.attachListeners = detailsController => {
		detailsListener(detailsController, listController)
	}

    listController.removeListeners = () => {
		removeResizeListener()
    }

	return listController
})

function detailsListener(detailsController, listController) {
	$('.intern-more-info-btn').on('click', null, null, e => {
		let internId = e.target.value

		detailsController.setConfigurations(listController, internId)
	})
}

function removeResizeListener() {
    $(window).off('resize')
}