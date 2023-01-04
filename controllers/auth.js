
const mysql = require("mysql");
const jwt = require('jsonwebtoken');

const {Sequelize,DataTypes} = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    dialect:'mysql',
    logging:false
});
sequelize.authenticate().then(()=>{
    console.log('Database is connected');
}).catch(err=>{
    console.log('Error'+err);
});
const db = {};
db.sequelize=sequelize;
db.Sequelize=Sequelize;
db.projDetails = require('../models/projDetails')(sequelize,DataTypes);

exports.register= (req,res)=>{
    console.log(req.body);

    // const name=req.body.name;
    // const email=req.body.email;
    // const password=req.body.password;
    // const passwordConfirm = req.body.passwordConfirm;

    //REWRITING THE ABOVE CODE

    const {name, email, college, mobile,github,domain,proj_desc,college_year,proj_title}=req.body;
    
    db.sequelize.query('SELECT email FROM projDetails WHERE email = ?',[email],async (error,result)=>{
      if(error){
        console.log(error);
      }
      if(result.lenght >0){
            return res.render('register',{
                message : 'that email is in use'
            })
            
      }
    

   
    db.sequelize.query('INSERT INTO projDetails SET ?',{name:name, email:email,college:college, mobile:mobile, github:github,
        domain:domain,proj_desc:proj_desc,college_year:college_year,proj_title:proj_title},(error,result)=>{
        if(error){
            console.log(error);
          }
          else{
            console.log(result)
            return res.render('register',{
                message : 'User Registered'
            });
          }  
    })
    });
    
    
}