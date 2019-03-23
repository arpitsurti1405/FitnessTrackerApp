module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('Log',{
        WorkoutId:{
            type: DataTypes.STRING,
            unique:true
        },
        Date:{
            type: DataTypes.DATE,
        },
    })
    return et
}