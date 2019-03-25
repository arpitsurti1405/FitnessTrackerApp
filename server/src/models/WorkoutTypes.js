module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('WorkoutType',{
        WorkoutTypeName:{
            type: DataTypes.STRING,
            unique:true
        }
    })
    return et
}