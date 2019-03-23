module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('Workout',{
        WorkoutName:{
            type: DataTypes.STRING,
            unique:true
        },
        WorkoutTypeId:{
            type: DataTypes.NUMBER,
        },
    })
    return et
}