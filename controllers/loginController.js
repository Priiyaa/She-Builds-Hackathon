require('dotenv').config();

let {users:Users} = require('../models');

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//VERIFYING Email

var login = async (req,resp,next)=>{
    try{
        let response ='';
        let status ='';
        let email = req.body.email;
        let password = req.body.password;

        if(email && password){

            //if email and password are entered then Get Users.db data into user variable
            let user = await Users.findOne({
                where:{
                    email:email.trim()
                },
                attributes:['id','name','password','token']
            });

            // if we get the user info in database (that is user is not null) then we will varify the password
            if(user !== null){
                let match = bcrypt.compareSync(password.trim(),user.password);
                if (match){
                    let payload_data = {id:user.id,name:user.name}
                    let token = await jwt.sign(payload_data,process.env.PRIVATE_KEY,{expiresIn:"1h"});
                    response={
                        status:true,
                        message:'Success',
                        data:token
                    }
                    status=200;
                    // update the token in users table
                    /* user.token = token;
                    await user.save(); */
                }
                else
                {
                    response = {
                        status:false,
                        message:"Invalid login credentials",
                        data:null
                    }
                    status = 200;
                }
            }
            else
            {
                response = {
                    status:false,
                    message:"Parameters are missing",
                    data:null
                }
                status = 200;
            }
            resp.status(status).json(response);
        }
        
    }
    catch(err){
        
            if('original' in err)
            {
                response = {
                    status:false,
                    message:err.original.message,
                    data:null,
                }
                resp.status(500).json(response); 
            }
            if('errors' in err)
            {
                // Validation errors
                let messages = {}
                err.errors.forEach((error)=>{
                    messages[error.path] = error.message
                });
                response={
                    status:false,
                    message:messages,
                    data:null,
                }
                resp.status(200).json(response);
            } 
        

    }
}

module.exports={login}