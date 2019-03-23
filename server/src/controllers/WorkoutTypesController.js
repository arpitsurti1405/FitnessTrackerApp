const {WorkoutType} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const workoutTypes = await WorkoutType.findAll({
                limit : 50
            })
            res.send(workoutTypes)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all workoutTypes'
            })
        }
    },
    async getById (req,res) {
        try{
            const workoutType = await WorkoutType.findByPk(req.params.id)
            res.send(workoutType)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one workoutType'
            })
        }
    },
    async add (req,res) {
        try{
            const workoutType = await WorkoutType.create(req.body)
            res.send(workoutType)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating workoutTypes'
            })
        }
    },
}