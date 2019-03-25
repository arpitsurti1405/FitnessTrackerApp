const {Workout} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const workouts = await Workout.findAll({
                limit : 50
            })
            res.send(workouts)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all Workout'
            })
        }
    },
    async getById (req,res) {
        try{
            const workout = await Workout.findByPk(req.params.id)
            res.send(workout)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one Workout'
            })
        }
    },
    async add (req,res) {
        try{
            const workout = await Workout.create(req.body)
            res.send(workout)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating Workout'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const workout = await Workout.findByPk(id)
            await workout.destroy()
            res.send(workout)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting workout'
            })
        }
    },
}