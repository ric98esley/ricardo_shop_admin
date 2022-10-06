import React, { useContext } from 'react';
import Image from 'next/image';

import ShoppingCartContext from '@context/ShoppingCartContext';
import close from '@icons/icon_close.png';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(ShoppingCartContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 mb-6 items-center">
      <figure className="m-0 w-16 h-16">
        <div className="rounded-xl object-cover w-full h-full overflow-hidden">
          <Image loader={() => product.images[0]} objectFit="cover" width="100" height="100" unoptimized={true} layout="responsive" src={product.images[0]} alt={product.title}/>
        </div>
      </figure>
      <p className="text-veryLightPink 1fr">{product.title}</p>
      <p className="text-md font-bold">${product.price}</p>
      <Image src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
