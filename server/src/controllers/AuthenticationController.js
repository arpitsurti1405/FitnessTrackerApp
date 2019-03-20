const {User} = require('../models')
module.exports = {
    
    async register (req,res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        }catch(err){
            res.status(400).send({
                    error:'Email already exists!'
                })
        }
    },
    async login (req,res) {
        try{
            const {email,password} = req.body
            console.log(email)
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            console.log(user.email)
            if(!user){
                return res.status(403).send({
                    error: "Incorrect email provided"
                })
            }
            const isPasswordValid = password === user.password
            
            if(!isPasswordValid){
                return res.status(403).send({
                    error: "Incorrect password provided"
                })
            }

            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        }catch(err){
             res.status(500).send({
                    error:'Invalid credentials provided'
                })
        }
    }
}
