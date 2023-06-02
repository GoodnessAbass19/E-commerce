import React, { createContext, useContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
export const QuantityContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [productList, setProductList] = useState([]);
  const [productQuantity, setProductQuantity] = useState({});
  const [totalCartAmount, setTotalCartAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=0");
        const data = await res.json();
        const products = data.products;
        setProductList(products);

        // Set the productQuantity context to the total stock quantity
        const quantity = {};
        for (let i = 0; i < products.length; i++) {
          const item = products[i];
          quantity[item.id] = item.stock;
        }
        setProductQuantity(quantity);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const getDefaultCart = () => {
      let cart = {};
      for (let i = 0; i < productList.length; i++) {
        const item = productList[i];
        cart[item.id] = 0;
      }
      return cart;
    };

    const cart = getDefaultCart();
    setCartItem(cart);
  }, [productList]);

  useEffect(() => {
    const updateTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItem) {
        if (cartItem[item] > 0) {
          const itemInfo = productList.find(
            (product) => product.id === Number(item)
          );
          totalAmount += cartItem[item] * itemInfo.price;
        }
      }
      setTotalCartAmount(totalAmount);
    };

    updateTotalCartAmount();
  }, [cartItem, productList]);

  const AddToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const RemoveCart = (itemId) => {
    if (cartItem[itemId] > 0) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const checkout = () => {
    setCartItem(getDefaultCart());
  };

  const shopContextValue = {
    cartItem,
    productQuantity,
    AddToCart,
    RemoveCart,
    totalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={shopContextValue}>
      <QuantityContext.Provider value={productQuantity}>
        {productList.length > 0 ? props.children : "Loading..."}
      </QuantityContext.Provider>
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
