'use strict';
module.exports = (sequelize, DataTypes) => {
  var ProductOrders = sequelize.define('ProductOrders', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {});
  ProductOrders.associate = function(models) {
    // associations can be defined here
    ProductOrders.belongsTo(models.Product);
    ProductOrders.belongsTo(models.Order);
  };
  return ProductOrders;
};
