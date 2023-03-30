import React, { FC, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { IProduct } from "../types/types";
import { getProducts } from '../api/api';
import Container from './Container';
import List from "./List";
import ProductItem from "./ProductItem";
import CategoriesList from './CategoriesList';
import { SortControl } from './SortControl';
import { SortableListItem } from '../types/sortTypes';

const listSortOptions = [
  { label: "Название", value: "name" },
  { label: "Цена", value: "price" },
];

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

  const handleSortChange = useCallback((data: IProduct[]) => {
    setProducts(data);
  }, []);

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

      <SortControl<SortableListItem>
        data={products}
        onSortChange={handleSortChange}
        sortOptions={listSortOptions}
      />

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
