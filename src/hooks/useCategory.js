import { useState } from 'react';

const useCategoryHeader = () => {
  const [categoryHeader, setCategoryHeader] = useState({});

  const changeCategory = (category) => {
    setCategoryHeader({...categoryHeader, category});
    }

  return {
    categoryHeader,
    changeCategory
  };
};

export default useCategoryHeader;
