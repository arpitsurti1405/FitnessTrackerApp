const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user)
{
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user,config.authentication.jwtSecret,{
        expiresIn:ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body)
            res.send({
                user: user.toJSON(),
                token : user.toJSON()
            })
        }catch(err){
            res.status(400).send({
                    error:'Email already exists!'
                })
        }
    },
    async updateUser (req, res) {
        try {
          await User.update(req.body, {
            where: {
              id: req.params.id
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to update the users'
          })
        }
    },
    async getAllUsers () {
        try{
            const user = await User.findAll()
            res.send({
                user: user.toJSON(),
            })
        }catch(err){
            res.status(400).send({
                    error:'No data found!'
                })
        }
    },
    async login (req,res) {
        try{
            const {email,password} = req.body
            console.log(req.body.email)
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user){
                return res.status(403).send({
                    error: "Incorrect email provided"
                })
            }
            const isPasswordValid = password === user.password
            //const isPasswordValid = await user.comparePassword(password)
            if(!isPasswordValid){
                return res.status(403).send({
                    error: "Incorrect password provided"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token : userJson
            })
        }catch(err){
             res.status(500).send({
                    error:'Invalid credentials provided'
                })
        }
    }
}
