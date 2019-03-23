module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('WorkoutJunction',{
        ExerciseId:{
            type: DataTypes.NUMBER,
        },
        WorkoutId:{
            type: DataTypes.NUMBER
        }
    })
    return et
}