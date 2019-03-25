module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('ExerciseType',{
        ExerciseTypeName:{
            type: DataTypes.STRING,
            unique:true
        },
    })
    return et
}