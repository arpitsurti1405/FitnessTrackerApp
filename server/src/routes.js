const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ExerciseTypesController = require('./controllers/ExerciseTypesController')
const ExerciseEquipmentsController = require('./controllers/ExerciseEquipmentsController')
const WorkoutTypesController = require('./controllers/WorkoutTypesController')
const ExercisesController = require('./controllers/ExercisesController')
const WorkoutsController = require('./controllers/WorkoutsController')
const WorkoutJunctionsController = require('./controllers/WorkoutJunctionsController')
const WorkoutTargetsController = require('./controllers/WorkoutTargetsController')
const LogsController = require('./controllers/LogsController')
const LogEntriesController = require('./controllers/LogEntriesController')

module.exports=(app)=>{
    app.post('/register',AuthenticationControllerPolicy.register,AuthenticationController.register)
    app.post('/login',AuthenticationController.login)

    app.get('/exerciseTypes',ExerciseTypesController.getAll)
    app.post('/exerciseTypes',ExerciseTypesController.add)
    app.get('/exerciseTypes/:id',ExerciseTypesController.getById)
    app.delete('/exerciseTypes/:id',ExerciseTypesController.delete)

    app.get('/exerciseEquipments',ExerciseEquipmentsController.getAll)
    app.post('/exerciseEquipments',ExerciseEquipmentsController.add)
    app.get('/exerciseEquipments/:id',ExerciseEquipmentsController.getById)
    app.delete('/exerciseEquipments/:id',ExerciseEquipmentsController.delete)

    app.get('/workoutTypes',WorkoutTypesController.getAll)
    app.get('/workoutTypes/:id',WorkoutTypesController.getById)
    app.post('/workoutTypes',WorkoutTypesController.add)
    app.delete('/workoutTypes/:id',WorkoutTypesController.delete)

    app.get('/exercises',ExercisesController.getAll)
    app.get('/exercises/:id',ExercisesController.getById)
    app.post('/exercises',ExercisesController.add)
    app.delete('/exercises/:id',ExercisesController.delete)

    app.get('/workout',WorkoutsController.getAll)
    app.get('/workout/:id',WorkoutsController.getById)
    app.post('/workout',WorkoutsController.add)
    app.delete('/workout/:id',WorkoutsController.delete)

    app.get('/workoutJunction',WorkoutJunctionsController.getAll)
    app.get('/workoutJunction/:id',WorkoutJunctionsController.getById)
    app.post('/workoutJunction',WorkoutJunctionsController.add)
    app.delete('/workoutJunction/:id',WorkoutJunctionsController.delete)
    
    app.get('/workoutTarget',WorkoutTargetsController.getAll)
    app.get('/workoutTarget/:id',WorkoutTargetsController.getById)
    app.post('/workoutTarget',WorkoutTargetsController.add)
    app.delete('/workoutTarget/:id',WorkoutTargetsController.delete)
    
    app.get('/log',LogsController.getAll)
    app.get('/log/:id',LogsController.getById)
    app.post('/log',LogsController.add)
    app.delete('/log/:id',LogsController.delete)
    
    app.get('/logEntry',LogEntriesController.getAll)
    app.get('/logEntry/:id',LogEntriesController.getById)
    app.post('/logEntry',LogEntriesController.add)
    app.delete('/logEntry/:id',LogEntriesController.delete)
    
}
