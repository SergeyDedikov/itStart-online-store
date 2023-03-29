import React, { FC } from 'react';

import { IProduct } from "../types/types";
import { DB_URL } from '../api/api';
import { formatAmount } from '../utils/utils';
import Button from './UI/Button';

interface ProductItemProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, onClick }) => {

  const volumeString =
    product.quantity_in_package && product.quantity_in_package > 1
      ? `${product.quantity_in_package}X${product.volume} ${product.measure_unit}`
      : `${product.volume} ${product.measure_unit}`;

  let volumeIconClassName: string = '';

  switch (product.measure_unit) {
    case 'г':
      volumeIconClassName = 'card__volume-icon--box';
      break;

    case 'мл':
      volumeIconClassName = 'card__volume-icon--bottle';
      break;

  }

  return (
    <div className='card'>
      <img
        className='card__image'
        src={DB_URL + product.image.small?.url}
        alt={product.name} />

      <div className='card__volume'>
        <span className={`card__volume-icon ${volumeIconClassName}`}></span>{volumeString}
      </div>
      <h3
        className='card__title'
        onClick={() => onClick(product)}
      >
        <span>{product.brand.toLocaleUpperCase()}</span> {product.name}
      </h3>

      <ul className="card__parameters">
        <li>
          Штрихкод: <span>{product.barcode}</span>
        </li>
        <li>
          Производитель: <span>{product.manufacturer}</span>
        </li>
        <li>
          Бренд: <span>{product.brand.toUpperCase()}</span>
        </li>
      </ul>

      <div className="card__action">
        <span className='card__price'>
          {formatAmount(product.price)} &#8376;
        </span>
        <Button
          className='card__button'
          status='buy'
        >
          В корзину
        </Button>
      </div>

    </div>
  );
};

export default ProductItem;
