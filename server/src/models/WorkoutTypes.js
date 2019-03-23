module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('WorkoutType',{
        WorkoutName:{
            type: DataTypes.STRING,
            unique:true
        },
        isActive:{
            type: DataTypes.BOOLEAN
        }
    })
    return et
}