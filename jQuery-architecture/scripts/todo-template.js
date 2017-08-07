function todoTemplate(name, id) {
	return `<div class="todo">${name}<button class="todo-details" value="${id}">Details</button></div>`
}

define({generate: todoTemplate})