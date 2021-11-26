const getCatalogue = (request, response) => {
  const catalogServices = require("../services/productServices");
  //console.log(response);
  //console.log("now");
  catalogServices.searchService(function (err, rows) {
    response.render("catalogue", { products: rows });
    //response.json(rows);
    response.end();
  });
};

const getProductByID = (request, response) => {
  const catalogServices = require("../services/productServices");
  let reference = request.params.id;
  catalogServices.searchIDService(reference, function (err, rows) {
    response.render("article", { product: rows });
    //response.json(rows);
    response.end();
  });
};

const getProductsByCategory = (request, response) => {
  const catalogServices = require("../services/productServices");
  let category = request.params.category;
  catalogServices.searchCategoryService(category, function (err, rows) {
    response.json(rows);
    response.end();
  });
};

module.exports = {
  getCatalogue,
  getProductByID,
  getProductsByCategory
};
