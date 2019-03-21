const {ExerciseType} = require('../models')
module.exports = {
    async getAllExerciseTypes (req,res) {
        try{
            const exerciseTypes = await ExerciseType.findAll({
                limit : 50
            })
            res.send(exerciseTypes)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all exerciseTypes'
            })
        }
    },
    async post (req,res) {
        try{
            const exerciseType = await ExerciseType.create(req.body)
            res.send(exerciseType)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating exerciseTypes'
            })
        }
    },
}