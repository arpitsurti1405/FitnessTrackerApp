const {ExerciseType} = require('../models')
module.exports = {
    async getAll (req,res) {
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
    async getById (req,res) {
        try{
            console.log(req.params.id)
            const exerciseType = await ExerciseType.findByPk(req.params.id)
            res.send(exerciseType)
        }catch(err){
            console.log(err)

            res.status(500).send({
                    error:'Error occured in fetching one exerciseType'
            })
        }
    },
    async add (req,res) {
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