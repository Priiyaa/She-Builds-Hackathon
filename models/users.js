//LOGIN PAGE CODE--- NO LONGER NEEDED FOR THIS PROJECT

let bcrypt = require('bcrypt');
module.exports=(sequelize,DataTypes)=>{
    const Users=sequelize.define("users",{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate : {
                notNull: {
                    msg: 'name is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide name'
                },
                is:{ 
                    args : /^[a-zA-Z ]*$/,
                    msg:'name must be allowed letters only'
                },
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate : {
                notNull: {
                    msg: 'password is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide password'
                },
            }
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:{
                args : true,
                msg:'Email is already exists'
            },
            validate : {
                notNull: {
                    msg: 'email is required'
                },
                notEmpty:
                {
                    args:true,
                    msg:'Please provide email'
                },
                isEmail:
                {
                    args:true,
                    msg:'Invalid email'
                }
            }
        },
        token:{
            type:DataTypes.TEXT,
        },
    },{
        createdAt:'created_at',
        updatedAt:'updated_at',
        hooks: {
            afterValidate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(10, 'a');
                    user.password = bcrypt.hashSync(user.password, salt);
                }
            }
        },
    });
    return Users;
}