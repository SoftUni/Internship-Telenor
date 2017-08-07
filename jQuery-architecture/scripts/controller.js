let dependencies = [ './scripts/views/list.js', './scripts/views/details.js', './scripts/data.js' ]

define(dependencies, (listView, detailsView, data) => {

	$(document).ready(() => {
		renderList()
		attachDetailsListener()
		attachListListener()
	})

	function renderDetails(e) {
		let todo = data.getOne(e.target.value)

		$('#root').html(detailsView(todo))
	}

	function renderList() {
		let todos = data.get()

		$('#root').html(listView(todos))
	}

	function attachDetailsListener() {
		$('.todo-details').on('click', null, null, (e) => {
			renderDetails(e)
		})
	}

	function attachListListener() {
		$('.todo-list').on('click', null, null, () => {
			renderList()
			attachDetailsListener()
		})
	}
})




