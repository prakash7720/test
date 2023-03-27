/** @format */

import React from 'react';
import Email from './Email';
import { useGlobalDispatch } from './GlobalContext';

const Category = () => {
  const categories = ['primary', 'updates'];
  const dispatch = useGlobalDispatch();

  const handleCategoryChange = (item) => {
    console.log('clicked', item);
    dispatch({ type: item, payload: item });
  };

  return (
    <div>
      {categories.map((item, index) => (
        <p onClick={() => handleCategoryChange(item)} key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Category;
