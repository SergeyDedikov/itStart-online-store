import React, { FC } from 'react';

interface CategorySelectorProps {
  value: string
  text: string
}

const CategorySelector: FC<CategorySelectorProps> = ({ value, text }) => {
  return (
    <label className='category'>
      <input
        name="category"
        type="radio"
        value={value} />
      {text}
    </label>

  );
}

export default CategorySelector;
