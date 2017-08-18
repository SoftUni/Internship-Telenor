let listDependencies = [
	'../data.js',
	'../views/list.js'
]

define(listDependencies, (data, listView) => {
	let listController = {}
	listController.render = () => {
		let interns = data.getAllInterns()

		window.location.hash = '#list'
		$('#root').html(listView(interns))
	}
	listController.attachListeners = detailsController => {
		detailsListener(detailsController, listController)
	}

	return listController
})

function detailsListener(detailsController, listController) {
	$('.intern-more-info-btn').on('click', null, null, e => {
		window.sessionStorage.setItem('intern', e.target.value)
		detailsController.render()
		detailsController.attachListeners(listController)
	})
}