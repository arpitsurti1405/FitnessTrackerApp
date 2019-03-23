const {ExerciseEquipment} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const equipments = await ExerciseEquipment.findAll({
                limit : 50
            })
            res.send(equipments)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all equipments'
            })
        }
    },
    async getById (req,res) {
        try{
            console.log('sd'+req.params.id)
            const equipment = await ExerciseEquipment.findByPk(req.params.id)
            res.send(equipment)
        }catch(err){
            console.log(err)

            res.status(500).send({
                    error:'Error occured in fetching one equipments'
            })
        }
    },
    async getByIds (req,res) {
        try{
            console.log(req.params.id)
            const equipment = await ExerciseEquipment.findByPk(req.params.id)
            res.send(equipment)
        }catch(err){
            console.log(err)

            res.status(500).send({
                    error:'Error occured in fetching one equipments'
            })
        }
    },
    async add (req,res) {
        try{
            const equipments = await ExerciseEquipment.create(req.body)
            res.send(equipments)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating equipments'
            })
        }
    },
}