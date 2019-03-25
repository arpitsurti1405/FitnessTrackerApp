const {WorkoutType} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const workoutTypes = await WorkoutType.findAll({
                where :{
                    isActive : true
                }
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
            const {WorkoutTypeName} = req.body;
            const record = await WorkoutType.findOne(
                {
                    where :{
                        WorkoutTypeName: WorkoutTypeName,
                    }
                }
            )
            if(record) {
                return res.status(400).send({
                    error: "Same workout name already exists"
                })
            }
            const workoutType = await WorkoutType.create(req.body)
            res.send(workoutType)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating workoutTypes'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const workoutType = await WorkoutType.findByPk(id)
            await workoutType.destroy()
            res.send(workoutType)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting workoutTarget'
            })
        }
    },
    async update (req, res) {
        try {
          await WorkoutType.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the WorkoutType'
          })
        }
    }
}