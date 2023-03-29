import React, { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IProduct } from "../types/types";
import { getProducts } from '../api/api';
import Container from './Container';
import List from "./List";
import ProductItem from "./ProductItem";
import CategoriesList from './CategoriesList';


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
    <Container>
      <nav>
        <ul className='breadcrumbs'>
          <li>
            <Link to={'/'}>Главная</Link>
          </li>
          <li>Косметика и гигиена</li>
        </ul>
      </nav>

      <h2 className='page-title'>
        Косметика и гигиена
      </h2>

      <div id='selectSort'>
        <span>Сортировка: </span>
        <select>
          <optgroup label='Название'>
            <option defaultValue={'nameAscending'}>Название по возрастанию</option>
            <option value='nameDescending'>Название по убыванию</option>
          </optgroup>
          <optgroup label='Цена'>
            <option value="priceAscending">Цена по возрастанию</option>
            <option value="priceDescending">Цена по убыванию</option>
          </optgroup>
        </select>
      </div>

      <CategoriesList />

      <List
        className='product-list'
        items={products}
        renderItem={(product: IProduct) =>
          <ProductItem
            onClick={(product) => navigate('/catalog/' + product.id)}
            product={product}
            key={product.id}
          />}
      />
    </Container>
  );
};

export default ProductsPage;
