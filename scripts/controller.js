let dependencies = [ 
    './scripts/views/list.js',
    './scripts/views/details.js',
    './scripts/question-info-template.js',
    './scripts/data.js' 
]

define(dependencies, (listView, detailsView, questionInfoTemplate, data) => {

    $(document).ready(() => {
        attachQuestionListener()
    })

    function renderDetails(e) {
        let intern = data.getSingleIntern(e.target.value)

        $('#root').html(detailsView(intern))
    }

    function renderList() {
        let interns = data.getAllInterns()

        $('#root').html(listView(interns))
    }

    function attachListListener() {
        $('.intern-more-info-btn').on('click', null, null, (e) => {
            renderDetails(e)
            attachDetailsListener()
        })
    }

    function attachDetailsListener() {
        $('.intern-list-btn').on('click', null, null, () => {
            renderList()
            attachListListener()
        })
    }

    function attachQuestionListener() {
        $('.question').on('click', null, null, (e) => {
            // e.preventDefault()
            console.log(e)
            renderQuestionInfo(e.target.value)
        })
    }

    function renderQuestionInfo(questionInfo) {
        console.log(questionInfo)
        // let [videoId, internId] = questionInfo.split("^").map(Number)
        let video = data.getQuestionVideo(0, 1)
        console.log(video)
        let asd = questionInfoTemplate.generate(video.videoId, video.text)
        // console.log(asd)
        $('.question-details')
            .html(asd)
    }
})
