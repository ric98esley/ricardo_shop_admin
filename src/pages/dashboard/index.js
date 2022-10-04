import React, { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Chart from '@common/Chart';

export default function Dashboard() {

  const totalProducts = useFetch(endPoints.products.getProducts).length;
  const products = useFetch(endPoints.products.getProducts);

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),{});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
    </>
  );
}
