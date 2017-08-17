let dependencies = [ './scripts/views/list.js', './scripts/views/details.js', './scripts/data.js' ]

define(dependencies, (listView, detailsView, data) => {

    $(document).ready(() => {
        renderList()
        attachDetailsListener()
    })

    function renderDetails(e) {
        let intern = data.getSingleIntern(e.target.value)

        $('#root').html(detailsView(intern))
    }

    function renderList() {
        let interns = data.getAllInterns()

        $('#root').html(listView(interns))
    }

    function attachDetailsListener() {
        $('.intern-more-info-btn').on('click', null, null, (e) => {
            renderDetails(e)
            attachListListener()
        })
    }

    function attachListListener() {
        $('.intern-list-btn').on('click', null, null, () => {
            renderList()
            attachDetailsListener()
        })
    }
})
