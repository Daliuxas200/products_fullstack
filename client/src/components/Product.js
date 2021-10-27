import React from 'react';
import { formatPrice } from '../helperFunctions';

const Product = ({ name, brand, image, basePrice, actualPrice }) => {
  return (
    <li className="products__item">
      <img src={image} alt={name} className="products__item__image" />
      <div className="products__item__details">
        <h3 className="products__item__name">{name}</h3>
        <span className="products__item__brand">{brand}</span>

        <span className="products__item__price">
          {formatPrice(actualPrice)}
        </span>
        {basePrice !== actualPrice && (
          <span className="products__item__price-old">
            {formatPrice(basePrice)}
          </span>
        )}
      </div>
    </li>
  );
};

export default Product;
