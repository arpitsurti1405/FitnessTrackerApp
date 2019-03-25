const {Exercise} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const exercises = await Exercise.findAll({
                limit : 50
            })
            res.send(exercises)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all Exercise'
            })
        }
    },
    async getById (req,res) {
        try{
            const exercise = await Exercise.findByPk(req.params.id)
            res.send(exercise)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one Exercise'
            })
        }
    },
    async add (req,res) {
        try{
            const {ExerciseName,ExerciseTypeId,ExerciseEquipmentId} = req.body;
            const record = await Exercise.findOne(
                {
                    where :{
                        ExerciseName: ExerciseName,
                        ExerciseTypeId: ExerciseTypeId,
                        ExerciseEquipmentId: ExerciseEquipmentId
                    }
                }
            )
            if(record) {
                return res.status(400).send({
                    error: "Same combination already exists"
                })
            }
            const exercise = await Exercise.create(req.body)
            res.send(exercise)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating Exercise'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const exercise = await Exercise.findByPk(id)
            await exercise.destroy()
            res.send(exercise)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting exercise'
            })
        }
    },
    async update (req, res) {
        try {
          await Exercise.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the exercise'
          })
        }
    }
}