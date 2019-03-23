const Joi = require('joi')

module.exports = {
    register (req,res,next){
        const schema = {
            email: Joi.string().email(),
            password:Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,60}$')
            )   
        }
        const {error,value} = Joi.validate(req.body,schema)
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error:`Email address format is invalid`
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error:`Password length must be 8-60 characters 
                        It must only contain lowercase, uppercase and numbers`
                    })
                break;
                default:
                    res.status(400).send({
                        error:`Invalid information provided`
                    })
                    break;
            }
        }
        else
            next()
    }
}