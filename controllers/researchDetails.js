var db = require('../models');
const ProfDetails = db.profDetails; 
var addResearchDetails = async (req,resp,next)=>{
    let response = {};
    try
    {
        let req_name = req.body.name ? req.body.name.trim() : '';
        if(req_name != "")
        {
            let insert_data = {name:req_name.trim()}
            let addResearchDetails = await ProfDetails.create(insert_data,{fields:['current_research','created_at','updated_at']});
            console.log(addResearchDetails)
            if(addResearchDetails === null)
            {
                response={
                    status:false,
                    message:'Something went wrong',
                    data:null,
                }
            }
            else
            {
                if(addResearchDetails instanceof ProfDetails)
                {
                    response={
                        status:true,
                        message:'Role is added successfully',
                        data:addrole,
                    }
                }
            } 
        }
        else
        {
            response={
                status:false,
                message:'name is required',
                data:null,
            }
        }
        resp.status(200).json(response);
    }
    catch(err)
    {
        if('errors' in err)
        {
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
        else if('original' in err)
        {
            response = {
                status:false,
                message:err.original.message,
                data:null,
            }
            resp.status(500).json(response); 
        }
        else
        {
            response = {
                status:false,
                message:err.message,
                data:null,
            }
            resp.status(500).json(response); 
        }
    }
}
module.exports(addResearchDetails);