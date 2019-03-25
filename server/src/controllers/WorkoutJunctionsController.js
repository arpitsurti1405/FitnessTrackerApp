const {WorkoutJunction} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const workoutJunctions = await WorkoutJunction.findAll({
                limit : 50
            })
            res.send(workoutJunctions)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all workoutJunction'
            })
        }
    },
    async getById (req,res) {
        try{
            const workoutJunction = await WorkoutJunction.findByPk(req.params.id)
            res.send(workoutJunction)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one workoutJunction'
            })
        }
    },
    async add (req,res) {
        try{
            const workoutJunction = await WorkoutJunction.create(req.body)
            res.send(workoutJunction)
        }catch(err){
            console.log(err)
            res.status(500).send({
                    error:'Error occured in creating workoutJunction'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const workoutJunction = await WorkoutJunction.findByPk(id)
            await workoutJunction.destroy()
            res.send(workoutJunction)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting workoutJunction'
            })
        }
    },
    async update (req, res) {
        try {
          await WorkoutJunction.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the workoutJunction'
          })
        }
    }
}