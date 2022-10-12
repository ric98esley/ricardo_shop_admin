import React, { useEffect, useContext, useState } from 'react';
import ProductItem from '@components/ProductItem';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

import ShoppingCartContext from '@context/ShoppingCartContext';
import NetflixLoader from '@common/productListSkeleton';

const ProductList = () => {
  const { categoryHeader } = useContext(ShoppingCartContext);
  const [endPoint, setEndPoint] = useState(endPoints.products.getProducts);
  const products = useFetch(endPoint);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [products]);

  useEffect(() => {
    setLoading(true);
    if (categoryHeader.id == 0) {
      return setEndPoint(endPoints.products.getProducts);
    } else {
      setEndPoint(endPoints.categories.getCategoriesProduct(categoryHeader.id));
    }
  }, [categoryHeader]);

  return (
    <>
      <section>
        <div className="grid grid-cols-[repeat(auto-fill,240px)] gap-6 place-content-center">
          {loading && <NetflixLoader />}
          {!loading &&
            products.map((product) => {
              if (product.images.length > 0 && Array.isArray(product.images) && product.images[0] !== null && product.images[0] !== '') return <ProductItem product={product} key={product.id} />;
            })}
        </div>
      </section>
    </>
  );
};

export default ProductList;
