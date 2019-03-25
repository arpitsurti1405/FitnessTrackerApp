const {WorkoutTarget} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const workoutTargets = await WorkoutTarget.findAll({
                limit : 50
            })
            res.send(workoutTargets)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all WorkoutTarget'
            })
        }
    },
    async getById (req,res) {
        try{
            const workoutTarget = await WorkoutTarget.findByPk(req.params.id)
            res.send(workoutTarget)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one WorkoutTarget'
            })
        }
    },
    async add (req,res) {
        try{
            const workoutTarget = await WorkoutTarget.create(req.body)
            res.send(workoutTarget)
        }catch(err){
            console.log(err)
            res.status(500).send({
                    error:'Error occured in creating WorkoutTarget'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const workout = await WorkoutTarget.findByPk(id)
            await workoutTarget.destroy()
            res.send(workoutTarget)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting workoutTarget'
            })
        }
    },
    async update (req, res) {
        try {
          await WorkoutTarget.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the WorkoutTarget'
          })
        }
    }
}