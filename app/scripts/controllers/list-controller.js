const listDependencies = [
	'../database/data.js',
	'../views/list/list.js',
    '../utils/clearAllBrowserIntervals.js'
]

define(listDependencies, (data, listView, clearAllIntervals) => {
	return class listController {
        static setConfigurations(detailsController) {
            this.setState()
            this.getDataFromDb()
            clearAllIntervals()
            this.render()
            this.removeListeners()
            this.attachListeners(detailsController)
        }

        static setState () {
            let isPageList = this.state && this.state.page === 'list'
            if (!isPageList) {
                history.pushState({page: 'list'}, "", "?=list")
            } else {
                // If page is refreshed
                history.replaceState(this.state, "", "?=list")
            }

            this.state = history.state
        }

        static getDataFromDb () {
            this.internsData = data.getAllInterns()
        }

        static attachListeners(detailsController) {
            detailsListener(detailsController, this)
        }

        static removeListeners () {
            removeResizeListener()
        }

        static render() {
            $('#root').html(listView(this.internsData))
        }
    }
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