define(() => function(intern) {
    return `
    <div>
        <p>Id: ${intern.id}</p>
        <p>Name: ${intern.name}</p>
        <img src="./${intern.picture}" alt="intern picture">
        <button class="intern-list-btn">Back</button>
    </div>`
})