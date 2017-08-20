const indexDependencies = [
    './list-controller.js',
    './details-controller.js'
]

define(indexDependencies, (listController, detailsController) => {
    let indexController = {}

    indexController.loadListPage = () => {
        listController.setConfigurations(detailsController)
    }

    indexController.loadDetailsPage = () => {
        detailsController.setConfigurations(listController)
    }

    return indexController
})