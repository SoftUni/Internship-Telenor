let detailsDependencies = [
	'../data.js',
	'..//views/details.js',
]

define(detailsDependencies, (data, detailsView) => {
	let detailsController = {}
	detailsController.render = e => {
		let intern = data.getSingleIntern(e.target.value)

		$('#root').html(detailsView(intern))
	}
	detailsController.attachListeners = listController => {
		showListListener(listController, detailsController)
	}

	return detailsController
})

function showListListener(listController, detailsController) {
	$('.intern-list-btn').on('click', null, null, () => {
		listController.render()
		listController.attachListeners(detailsController)
	})
}