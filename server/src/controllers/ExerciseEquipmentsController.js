const {ExerciseEquipment} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const equipments = await ExerciseEquipment.findAll()
            res.send(equipments)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all equipments'
            })
        }
    },
    async getById (req,res) {
        try{
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
        console.log('In exercise type equiment controller')
        try{
            const {EquipmentName} = req.body;
            const eqpName = await ExerciseEquipment.findOne(
                {
                    where :{
                        EquipmentName: EquipmentName
                    }
                }
            )
            if(eqpName) {
                return res.status(400).send({
                    error: "Same equipment name already exists"
                })
            }
            const equipments = await ExerciseEquipment.create(req.body)
            res.send(equipments)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in creating equipments'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const equipment = await ExerciseEquipment.findByPk(id)
            await equipment.destroy()
            res.send(equipment)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting equipments'
            })
        }
    },
    async update (req, res) {
        try {
          await ExerciseEquipment.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the equipments'
          })
        }
    }
}