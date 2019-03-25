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
    async delete (req,res) {
        try{
            const {id} = req.params
            const entry = await LogEntries.findByPk(id)
            await entry.destroy()
            res.send(entry)
        }catch(err){
            res.status(500).send({
                    error:'Error occured in deleting entry'
            })
        }
    },
    async update (req, res) {
        try {
          await LogEntries.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the entry'
          })
        }
    }
}