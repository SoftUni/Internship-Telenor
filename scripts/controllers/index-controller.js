const indexDependencies = [
    './list-controller.js',
    './details-controller.js'
]

define(indexDependencies, (listController, detailsController) => {
    let indexController = {}

    indexController.loadListPage = () => {
        // console.log('Inside load list page!')
        listController.render()
        listController.removeListeners()
        listController.attachListeners(detailsController)
    }

    indexController.loadDetailsPage = () => {
        // console.log('Inside load details page!')
        detailsController.render()
        detailsController.attachListeners(listController)
    }

    return indexController
})