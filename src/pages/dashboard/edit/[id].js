import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import FormProduct from '@components/FormProduct';
import endPoints from '@services/api';

const Edit = () => {
  const [product, setProduct] = useState({})
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if(!router.isReady) return;
    async function getProducts() {
      const response = await axios.get(endPoints.products.getProduct(id));
      setProduct(response.data)
    }
    
    getProducts();

  }, [router?.isReady]);


  return <FormProduct product={product}/>;
};

export default Edit;
