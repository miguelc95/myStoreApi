'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    orderId: DataTypes.INTEGER,
    subtotal: DataTypes.DOUBLE,
    total: DataTypes.DOUBLE,
    userId: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
