require('dotenv').config();
var {projDetails:ProjDetails} = require('./models');


var addProject = async(req,resp,next,) =>{
    try
    {
        let request_data = {
            name:'Vedant',
            college:'Galgotias University',
            email:'admi3@mfma.com',
            mobile:'9999999999',
            github:'cnbnbj',
            domain:"AI/ML ",
            proj_desc:"AI/ML based project",
            college_year:'3',        
            proj_title:"Prediction using AI/ML",
        }; 
       
        let fields_data = ['name','college','email','mobile','domain','github','college_year', 'proj_desc', 'proj_title', 'created_at', 'updated_at'];
        console.log(request_data);
        let insert_user = await ProjDetails.create(request_data,{fields:fields_data});
        
        if(insert_user instanceof ProjDetails)
        {
            console.log('research added is created');
        }
        else
        {
            console.log('research is not added due to invalid parameters passed.');
        } 
    }
    catch(err)
    {
        console.log(err.message);
    }
}


addProject();



