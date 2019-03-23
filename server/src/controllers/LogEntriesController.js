const {LogEntries} = require('../models')
module.exports = {
    async getAll (req,res) {
        try{
            const entries = await LogEntries.findAll({
                limit : 50
            })
            res.send(entries)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching all LogEntry'
            })
        }
    },
    async getById (req,res) {
        try{
            const entry = await LogEntries.findByPk(req.params.id)
            res.send(entry)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in fetching one LogEntry'
            })
        }
    },
    async add (req,res) {
        try{
            const entry = await LogEntries.create(req.body)
            res.send(entry)
        }catch(err){
            console.log(err)
            res.status(500).send({
                    error:'Error occured in creating LogEntry'
            })
        }
    },
}