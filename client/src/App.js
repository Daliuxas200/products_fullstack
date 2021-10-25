import React from 'react';
import './style.scss';

const App = () => {
  return (
    <div className="page">
      <section className="products">
        <ul className="products__list">
          <li className="products__item">
            <figure>
              <img src="" alt="" className="products__item__image" />
            </figure>
            <div className="products__item__details">
              <h3 className="products__item__name">Some Products</h3>
              <span className="products__item__brand">Prodactan</span>
              <span className="products__item__price">99.87$</span>
            </div>
          </li>
          <li className="products__item">
            <figure>
              <img src="" alt="" className="products__item__image" />
            </figure>
            <div className="products__item__details">
              <h3 className="products__item__name">Some Products</h3>
              <span className="products__item__brand">Prodactan</span>
              <span className="products__item__price">99.87$</span>
            </div>
          </li>
          <li className="products__item">
            <figure>
              <img src="" alt="" className="products__item__image" />
            </figure>
            <div className="products__item__details">
              <h3 className="products__item__name">Some Products</h3>
              <span className="products__item__brand">Prodactan</span>
              <span className="products__item__price">99.87$</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default App;
