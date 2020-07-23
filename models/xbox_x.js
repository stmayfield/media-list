module.exports = function (sequelize, DataTypes) {
    const xCons = sequelize.define("xConsole", {
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
    return xCons;
}
