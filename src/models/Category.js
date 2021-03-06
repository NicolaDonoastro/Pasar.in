const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { Product, ProductCategory } = models

      Category.belongsToMany(Product, {
        through: ProductCategory,
        foreignKey: 'categoryId',
      })
    }
  }
  Category.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        max: 25,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'Category',
      tableName: 'Category',
    }
  )

  return Category
}
