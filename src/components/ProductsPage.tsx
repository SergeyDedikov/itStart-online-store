import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProduct } from "../types/types";
import { getProducts } from './api/api';
import List from "./List";
import ProductItem from "./ProductItem";


const ProductsPage: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, [])

  async function fetchProducts() {
    getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err));
  }

  return (
    <List
      items={products}
      renderItem={(product: IProduct) =>
        <ProductItem
          onClick={(product) => navigate('/catalog/' + product.id)}
          product={product}
          key={product.id}
        />}

    />
  );
};

export default ProductsPage;
