const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../", "product_list.json"))
);

exports.getAllProducts = async (req, res) => {
  // get all
  let products = [...data];

  // sort
  if (req.query.sort) {
    if (req.query.sort === "price") {
      products = products.sort(
        (prodA, prodB) => prodA.actual_price * 1 - prodB.actual_price * 1
      );
    }
    if (req.query.sort === "-price") {
      products = products.sort(
        (prodA, prodB) => prodB.actual_price * 1 - prodA.actual_price * 1
      );
    }
  }

  // paginate
  let limit = 20;
  let queryLimit = req.query.limit * 1;
  if (queryLimit === 20 || queryLimit === 50 || queryLimit === 100) {
    limit = queryLimit;
  }

  let page = 1;
  let queryPage = req.query.page * 1;
  if (
    queryPage &&
    queryPage >= 1 &&
    queryPage <= Math.ceil(products.length / limit)
  ) {
    page = queryPage;
  }

  products = products.slice(page * limit - limit, page * limit);

  res.status(200).send(products);
};
