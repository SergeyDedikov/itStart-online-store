import React, { FC } from 'react';
import { IProduct } from "../types/types";
import { DB_URL } from './api/api';

interface ProductItemProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      style={{ padding: 15, border: '1px solid gray' }}>
      <img src={DB_URL + product.image.small?.url} alt={product.name}/>
      <h2>
        {product.id}. {product.name}
      </h2>
      {product.description}
    </div>
  );
};

export default ProductItem;
