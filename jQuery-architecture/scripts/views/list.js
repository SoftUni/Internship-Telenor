define(['../todo-template.js'], todoTemplate => {
	return (todos) => {
		let tmp = '<div><h1>Todos:</h1>'
		for (let todo of todos) {
			tmp += todoTemplate.generate(todo.name, todo.id)
		}
		tmp += '</div>'

		return tmp
	}
})