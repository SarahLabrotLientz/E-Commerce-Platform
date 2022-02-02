// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {    //Category is the primary key and category name is the foreign?
  foreignKey: "category_name",
})


// Categories have many Products



// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
