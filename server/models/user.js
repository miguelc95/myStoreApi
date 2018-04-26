module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    userId: DataTypes.STRING,
    pass: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Order,{
      foreignKey:'orderId',
      as: 'userOrders'
    });
  };
  return User;
};
