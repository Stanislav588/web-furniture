import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function useTotalPrice() {
  const [totalAmount, setTotalAmount] = useState(null);
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const total = cartStore.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
    setTotalAmount(total);
  }, [cartStore]);
  return { totalAmount };
}

export default useTotalPrice;
