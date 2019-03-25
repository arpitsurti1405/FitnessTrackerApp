const {Log} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const logs = await Log.findAll({
                limit : 50
            })
            res.send(logs)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all log'
            })
        }
    },
    async getById (req,res) {
        try{
            const log = await Log.findByPk(req.params.id)
            res.send(log)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one log'
            })
        }
    },
    async add (req,res) {
        try{
            const log = await Log.create(req.body)
            res.send(log)
        }catch(err){
            console.log(err)
            res.status(500).send({
                    error:'Error occured in creating log'
            })
        }
    },
    async delete (req,res) {
        try{
            const {id} = req.params
            const log = await Log.findByPk(id)
            await log.destroy()
            res.send(log)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting log'
            })
        }
    },
}