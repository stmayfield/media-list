module.exports = function (sequelize, DataTypes) {
    const Games = sequelize.define('Games', {
        ps5: DataTypes.STRING,
        xbox_x: DataTypes.STRING,
        thirdparty: DataTypes.STRING
    });
    return Games;
}