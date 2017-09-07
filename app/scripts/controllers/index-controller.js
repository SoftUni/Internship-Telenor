const indexDependencies = [
    './list-controller.js',
    './details-controller.js'
]

define(indexDependencies, (listController, detailsController) => {
    return class indexController {
        static loadListPage () {
            listController.setConfigurations(detailsController)
        }

        static loadDetailsPage () {
            detailsController.setConfigurations(listController)
        }
    }
})