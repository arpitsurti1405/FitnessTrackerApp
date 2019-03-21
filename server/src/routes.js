const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseTypesController = require('./controllers/ExerciseTypesController')

module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.get('/exerciseTypes',ExerciseTypesController.getAllExerciseTypes)
    app.post('/exerciseTypes',ExerciseTypesController.post)

}
