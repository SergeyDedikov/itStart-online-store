import React, { FC } from 'react';

import CategorySelector from './CategorySelector';

interface CategoriesListProps {

}

const CategoriesList: FC<CategoriesListProps> = () => {

  const categories: string[] = [
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средства для загара',
    'Средства для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
  ];


  return (
    <ul className='categories-list'>
      {
        categories.map((value, index) =>
          <li key={index}>
            <CategorySelector
              text={value}
              value={index.toString()} />
          </li>
        )
      }
    </ul>
  );
}

export default CategoriesList;
