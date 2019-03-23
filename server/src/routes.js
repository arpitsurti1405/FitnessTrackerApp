const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseTypesController = require('./controllers/ExerciseTypesController')
const ExerciseEquipmentsController = require('./controllers/ExerciseEquipmentsController')

module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.get('/exerciseTypes',ExerciseTypesController.getAll)
    app.post('/exerciseTypes',ExerciseTypesController.add)
    app.get('/exerciseTypes/:id',ExerciseTypesController.getById)
    app.get('/exerciseEquipments',ExerciseEquipmentsController.getAll)
    app.post('/exerciseEquipments',ExerciseEquipmentsController.add)
}
