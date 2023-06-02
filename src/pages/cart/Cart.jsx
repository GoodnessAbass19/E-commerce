import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/Shop-Context";
import { useLoaderData, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, totalCartAmount, AddToCart, RemoveCart, checkout } =
    useContext(ShopContext); // Update the destructured values
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const responseData = await response.json();
        if (responseData) {
          setData(responseData.products);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold capitalize">
        Your cart items
      </h2>
      <div className="flex flex-col justify-center items-center">
        {data.map((item) => {
          const quantity = cartItem[item.id] || 0;

          if (quantity !== 0) {
            return (
              <div
                key={item.id}
                className="flex w-[700px] h-[250px] items-center shadow-sm rounded-3xl m-10 p-5 gap-5 bg-white"
              >
                <img src={item.images[0]} alt={item.title} width={200} />
                <div>
                  <h3 className="text-2xl font-medium text-center">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-medium text-center">
                    ${item.price}
                  </h4>
                  <div className="countHandler font-semibold text-lg space-x-5 py-8">
                    <button onClick={() => RemoveCart(item.id)}> - </button>
                    <input
                      value={cartItem[item.id]}
                      onChange={(e) =>
                        totalCartAmount(Number(e.target.value), item.id)
                      }
                    />
                    <button onClick={() => AddToCart(item.id)}> + </button>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="text-center text-xl font-semibold grid gap-5 my-10">
        {totalCartAmount > 0 ? (
          <div className="space-y-8">
            <p>SubTotal: ${totalCartAmount}</p>{" "}
            <div className="flex justify-center items-center gap-8">
              <button
                onClick={() => navigate("/")}
                className="bg-black text-white text-xl font-medium p-2 rounded-md"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => checkout()}
                className="bg-black text-white text-xl font-medium p-2 rounded-md"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div>Your cart is empty</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
