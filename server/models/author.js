'use strict';

module.exports = function(sequelize, DataTypes) {
  // sequelize.define('name', {attributes}, {options})
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Author;
};