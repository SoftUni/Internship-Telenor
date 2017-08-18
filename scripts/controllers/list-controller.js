const listDependencies = [
	'../data.js',
	'../views/list.js'
]

define(listDependencies, (data, listView) => {
	let listController = {}
	listController.render = () => {
		let interns = data.getAllInterns()

		$('#root').html(listView(interns))
	}
	listController.attachListeners = detailsController => {
		detailsListener(detailsController, listController)
	}

	return listController
})

function detailsListener(detailsController, listController) {
	$('.intern-more-info-btn').on('click', null, null, (e) => {
		detailsController.render(e)
		detailsController.attachListeners(listController)
	})
}