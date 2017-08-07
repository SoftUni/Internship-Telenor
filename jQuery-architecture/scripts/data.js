const todos = [
	{ id: 0, name: 'Wash the dishes' },
	{ id: 1, name: 'Go home' },
	{ id: 2, name: 'Feed the cats' }
]

define({
	get: () => todos,
	getOne: (id) => todos[id]
})