let {projDetails:ProjDetails,Sequelize} = require('../models');
var addProject = async (req,resp,next) => {
    try{
        let response = {}
        let status_code = '';
        /* var name = req.body.name;
        var email = req.body.email;
        var mobile = req.body.mobile;
        var state = req.body.state;
        var city = req.body.city;
        var profile_img = req.body.profile_img;
        var address = req.body.address; */
        let {name,email,mobile,college,college_year,domain,proj_desc,github,} = req.body;
        // status, last_updated_by, last_updated_date, ip
        if(name && email && mobile && state && city && address)
        {
            let request_data = {
                name,
                email,
                mobile,
                state,
                city,
                profile_img,
                address
            }; 
            request_data['status'] = 'Active';
            let fields_data = ['name','email','mobile','state','city','profile_img','status', 'address','created_at', 'updated_at'];
            let insert_manufacturer = await SystemManufacturer.create(request_data,{fields:fields_data});
            if(insert_manufacturer instanceof SystemManufacturer)
            {
                status_code = 201;
                response = {
                    status : true,
                    message:'System Manufacturer is created',
                    data : insert_manufacturer
                } 
            }
            else
            {
                status_code = 200;
                response = {
                    status : false,
                    message:'Manufacturer is not created due to some technical issues.',
                    data:null,
                }
            }
        }
        else
        {
            status_code = 200;
            response = {
                status : false,
                message:'Required parameters are missing.',
                data : null
            }
        }
        resp.status(status_code).json(response);
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
                message:'Form data validation error',
                data:null,
                formdata_error:messages
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