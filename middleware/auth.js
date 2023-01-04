var jwt = require('jsonwebtoken');
const auth = (req,resp,next)=>{
    let response = {};
    if('authorization' in req.headers)
    {
        let token = req.headers.authorization;
        token = token.split(" ")[1];
        jwt.verify(token,process.env.PRIVATE_KEY,(err,decoded)=>{
            if(err){
                //console.log(err.message);
                response = {
                    status : false,
                    message:err.message,
                    data:null,
                }
               resp.status(404).json(response);
            }
            else
            {
                req.logged_userid = decoded.id; 
               
                next();
                /* if(decoded.role_id == 1 )
                {
                    next();
                }
                else
                {
                    response = {
                        status : false,
                        message:"Permission denied",
                        data:null,
                    }
                   resp.status(404).json(response);
                } */
            }
        });
    }
    else
    {
        response = {
            status : false,
            message:'Token is required',
            data:null,
        }
       resp.status(404).json(response);
    }
}
module.exports={auth}