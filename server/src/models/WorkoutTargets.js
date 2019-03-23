module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('WorkoutTarget',{
        WorkoutJunctionId:{
            type: DataTypes.NUMBER,
        },
        SetNumber:{
            type: DataTypes.NUMBER
        },
        minreps:{
            type: DataTypes.NUMBER
        },
        maxreps:{
            type: DataTypes.NUMBER
        },
    })
    return et
}