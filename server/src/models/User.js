module.exports = (sequelize, DataTypes)=>
    sequelize.define('User',{
        email:{
            type: DataTypes.STRING,
            unique:true
        },
        password: DataTypes.STRING,
        age: DataTypes.NUMBER,
        weight: DataTypes.STRING,
        height: DataTypes.STRING,
        name: DataTypes.STRING,
    })