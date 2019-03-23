module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('ExerciseEquipment',{
        EquipmentName:{
            type: DataTypes.STRING,
            unique:true
        },
        isActive:{
            type: DataTypes.BOOLEAN
        }
    })
    return et
}