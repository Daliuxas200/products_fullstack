import React, { useState, useEffect } from 'react';
import Product from './Product';
import { createApiClient } from '../api';
import Navigation from './Navigation';
import Loaders from './Loaders';

const ProductsList = () => {
  const api = createApiClient();
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    limit: 20,
    sort: 'price',
  });

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setProducts([]);
      try {
        const data = await api.getOrders(searchParams);
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      } catch (err) {}
      setLoading(false);
    };
    getProducts();
  }, [searchParams]);

  const changePage = (page) => {
    setSearchParams({ ...searchParams, page });
  };

  const changeSearchParam = (e) => {
    const newParams = { ...searchParams, page: 1 };
    newParams[e.target.name] = e.target.value;
    setSearchParams(newParams);
  };

  return (
    <section className="products">
      <Navigation
        page={searchParams.page}
        maxPages={Math.ceil(totalProducts / searchParams.limit)}
        loading={loading}
        changePage={changePage}
        changeSearchParam={changeSearchParam}
      />
      <ul className="products__list">
        {!loading && products.length ? (
          products.map((prod) => {
            return (
              <Product
                key={prod.id}
                name={prod.product_name}
                actualPrice={prod.actual_price}
                basePrice={prod.base_price}
                brand={prod.brand_name}
                image={prod.filename}
              />
            );
          })
        ) : (
          <Loaders count={searchParams.limit} />
        )}
      </ul>
      <Navigation
        page={searchParams.page}
        maxPages={Math.ceil(totalProducts / searchParams.limit)}
        loading={loading}
        changePage={changePage}
        changeSearchParam={changeSearchParam}
      />
    </section>
  );
};

export default ProductsList;
