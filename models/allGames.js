module.exports = function (sequelize, DataTypes) {
    const allGames = sequelize.define("Games", {
        ps5: {
            type: DataTypes.STRING
        },
        xbox_x: {
            type: DataTypes.STRING
        },
        thirdarty: {
            type: DataTypes.STRING
        }
    });
    return allGames;
}
