module.exports = function (sequelize, DataTypes) {
    const ps5Cons = sequelize.define("PS5Console", {
        name: {
            type: DataTypes.STRING
        },
        releaseDate: {
            type: DataTypes.STRING
        },
        exclusive: {
            type: DataTypes.BOOLEAN
        }
    });
    return ps5Cons;
}
