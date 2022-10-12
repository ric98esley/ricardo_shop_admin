import React, {useEffect, useContext} from 'react';
import ProductItem from '@components/ProductItem';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

import ShoppingCartContext from '@context/ShoppingCartContext';


const ProductList = () => {
  const products = useFetch(endPoints.products.getProducts);
  const { categoryHeader } = useContext(ShoppingCartContext);

  useEffect(
    () => {
      console.log(categoryHeader)
    },
    [categoryHeader]
  );

  console.log(`here ${categoryHeader?.name}`)
  return (
    <section >
      <div className="grid grid-cols-[repeat(auto-fill,240px)] gap-6 place-content-center">
        {products.map((product) => {
          if (product.images.length > 0 && Array.isArray(product.images) && product.images[0] !== null && product.images[0] !== '') return <ProductItem product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
