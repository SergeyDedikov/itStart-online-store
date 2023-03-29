import React, { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { IProduct } from "../types/types";
import { getProducts } from './api/api';

const ProductItemPage: FC = () => {

  const [product, setProduct] = useState<IProduct | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProducts(id);
  }, [])

  async function fetchProducts(id: string | undefined) {
    if (id) {
      getProducts()
        .then(res => setProduct(getProductFromId(id, res)))
        .catch(err => console.log(err));
    }
  }

  function getProductFromId(id: string, array: IProduct[]): IProduct {
    return array.filter(item => item.id === +id)[0];
  }

  return (
    <div>
      <Link to={'/'}>Главная</Link>
      <Link to={'/catalog'}>Каталог</Link>
      <span>{product?.name}</span>
      <h1>Страница товара {product?.name}</h1>
      <div>
        {product?.description}
      </div>

    </div>
  );
};

export default ProductItemPage;
