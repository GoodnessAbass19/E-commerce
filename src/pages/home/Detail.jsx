import React, { useContext, useState } from "react";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import ProductDetails from "../../components/ProductDetails";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShopContext, QuantityContext } from "../../context/Shop-Context";

const Detail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [quantity, setQuantity] = useState(1);
  let result = [];
  result.push(data);
  const { AddToCart, cartItem } = useContext(ShopContext);
  const productQuantity = useContext(QuantityContext);
  const route = useNavigate();

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if (tempQty > result[0]?.stock) tempQty = result[0]?.stock;
      return tempQty;
    });
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if (tempQty < 1) tempQty = 1;
      return tempQty;
    });
  };

  const CartItemAmount = cartItem[result[0]?.id] || 0;

  const notify = () => {
    toast.success("Added To Cart!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      {result.map((item, index) => {
        let discount =
          item.price - item.price * (item.discountPercentage / 100);

        return (
          <>
            <div className="flex lg:flex-row flex-col justify-betweeen bg-white max-w-screen-lg p-5 rounded-md mx-auto m-5">
              <ProductDetails data={result} />
              <div className="p-10 flex flex-col gap-5">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>{item.description}</p>
                <div className="md:grid grid-cols-3 flex flex-wrap md:divide-x">
                  <p className="px-1.5">
                    <span className="text-cyan-500">Rating:</span> {item.rating}
                  </p>
                  <p className="px-1.5">
                    <span className="text-cyan-500">Brand:</span> {item.brand}
                  </p>
                  <p className="px-1.5">
                    <span className="text-cyan-500">Category:</span>{" "}
                    {item.category}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="line-through">{discount}</span> inclusive
                    of all taxes
                  </p>
                  <p className="text-3xl font-semibold">
                    ${item.price}{" "}
                    <span className="p-1 text-base rounded-md bg-orange-200">
                      {" "}
                      -{item.discountPercentage}%
                    </span>
                  </p>
                </div>

                {/* <div className="text-lg font-semibold flex gap-5 items-center">
                  <div>Quantity:</div>
                  <div>
                    <button type="button" onClick={decreaseQty}>
                      -
                    </button>
                  </div>
                  <div>{quantity}</div>
                  <div>
                    <button type="button" onClick={increaseQty}>
                      +
                    </button>
                  </div>
                </div> */}

                <div className="flex items-center justify-around">
                  <div>
                    <button
                      onClick={() => {
                        AddToCart(item.id, productQuantity, quantity);
                        notify();
                      }}
                      className="bg-orange-300 capitalize text-xl font-semibold text-white p-3"
                    >
                      <span>
                        <ion-icon name="cart"></ion-icon>
                      </span>{" "}
                      Add to cart
                    </button>
                    <ToastContainer />
                  </div>
                  <div>
                    <button
                      onClick={() => route("/cart")}
                      className="bg-orange-500 capitalize text-xl font-semibold text-white p-3"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Detail;

export const ProductDetailLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw Error("not found");
  }

  const data = await response.json();
  return data;
};
