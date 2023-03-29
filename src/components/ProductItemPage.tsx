import React, { FC, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import './ProductItem.sass';
import { IProduct } from "../types/types";
import { getProducts } from '../api/api';
import Container from './Container';

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
    <Container>
      <nav>
        <ul className='breadcrumbs'>
          <li>
            <Link to={'/'}>Главная</Link>
          </li>
          <li>
            <Link to={'/catalog'}>Каталог</Link>
          </li>
          <li>
            {product?.name}
          </li>
        </ul>
      </nav>

      <h1>{product?.name}</h1>
      <p>
        {product?.description}
      </p>
    </Container>

  );
};

export default ProductItemPage;
