module.exports = (sequelize, DataTypes)=>{
    const et = sequelize.define('LogEntries',{
        LogId:{
            type: DataTypes.NUMBER,
        },
        JunctionId:{
            type: DataTypes.NUMBER,
        },
        SetNumber:{
            type: DataTypes.NUMBER,
        },
        Weight:{
            type: DataTypes.NUMBER,
        },
        Reps:{
            type: DataTypes.NUMBER,
        },
        Entrydate:{
            type: DataTypes.DATE,
        },
    })
    return et
}