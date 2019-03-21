module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('ExerciseType',{
        ExerciseType:{
            type: DataTypes.STRING,
            unique:true
        },
        isActive:{
            type: DataTypes.BOOLEAN
        }
    })
    return et
}