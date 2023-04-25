const { User } = require('../../db')

function throwError (message){
    throw message
}



module.exports = {
    createUser: async (req, res)=>{
        

        const { email } = req.body
        try {
            const emailVerify = await User.findAll({where:{email}})

            if(!email){throwError('this email is required')}
            else if(emailVerify) throwError('this email is all ready exist')
            
            const newUser = await User.create(req.body)
            
            res.status(200).json({               //{status:"created", {user}}
                status: 'created',               //{status:"error", {error}}
                newUser
            })

        } catch (error) {
            res.status(500).json({
                status: 'error',
                error
            })   
        }
    }
}