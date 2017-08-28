const listDependencies = [
	'../database/data.js',
	'../views/list.js'
]

define(listDependencies, (data, listView) => {
	return class {
	    constructor () {
	        this.state = history.state
        }

        static setConfigurations(detailsController) {
            this.setState()
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

            // TODO: Remove after debug state
            // console.log(state)
            // console.log(history)
        }

        static attachListeners(detailsController) {
            detailsListener(detailsController, this)
        }

        static removeListeners () {
            removeResizeListener()
        }

        static render() {
            // Get data from db
            let interns = data.getAllInterns()

            // Render
            $('#root').html(listView(interns))
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