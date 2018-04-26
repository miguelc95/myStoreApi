'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    productId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};