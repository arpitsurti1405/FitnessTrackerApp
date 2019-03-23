module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('Exercise',{
        ExerciseName:{
            type: DataTypes.STRING,
            unique:true
        },
        ExerciseTypeId:{
            type: DataTypes.NUMBER,
        },
        ExerciseEquipmentId:{
            type: DataTypes.NUMBER,
        }
    })
    return et
}