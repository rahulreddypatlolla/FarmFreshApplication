import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [orderTime, setOrderTime] = useState(null); // State to store order time

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  // Update the calculateDeliveryTime function
  const calculateDeliveryTime = () => {
    if (productCartItem.length > 0) {
      if (productCartItem[0].deliveryTime) {
        const deliveryTime = new Date(productCartItem[0].deliveryTime);
        return deliveryTime.toLocaleString();
      } else {
        // If deliveryTime is not set, calculate it with a 3-hour delay
        const dateAdded = new Date();
        const deliveryTime = new Date(dateAdded);
        deliveryTime.setHours(deliveryTime.getHours() + 3);
        return deliveryTime.toLocaleString();
      }
    }
    return "N/A"; // Fallback if no items in the cart
  };

  const deliveryTime = calculateDeliveryTime();

  const handlePayment = async () => {
    if (user.email) {
      const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(productCartItem),
      });
      if (res.statusCode === 500) return;

      const data = await res.json();
      console.log(data);

      toast("Redirect to payment Gateway...!");
      stripePromise.redirectToCheckout({ sessionId: data });

      // Set the order time
      const currentTime = new Date().toLocaleString(); // Get current date and time
      setOrderTime(currentTime);
    } else {
      toast("You have not Login!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ? (
          <div className="my-4 flex gap-3">
            {/* display cart items */}
            <div className="w-full max-w-3xl ">
              {productCartItem.map((el) => {
                return (
                  <div key={el._id} className="border-b pb-2 mb-2">
                    <CartProduct
                      id={el._id}
                      name={el.name}
                      image={el.image}
                      category={el.category}
                      qty={el.qty}
                      total={el.total}
                      price={el.price}
                    />
                    <p className="text-sm text-gray-500">
                      <strong>Date Added:</strong> {el.dateAdded || new Date().toLocaleString()}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* total cart item */}
            <div className="w-full max-w-md  ml-auto">
              <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Qty :</p>
                <p className="ml-auto w-32 font-bold">{totalQty}</p>
              </div>
              <div className="flex w-full py-2 text-lg border-b">
                <p>Total Price</p>
                <p className="ml-auto w-32 font-bold">
                  <span className="text-red-500">₹</span> {totalPrice}
                </p>
              </div>
              {orderTime && (
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Order Time:</p>
                  <p className="ml-auto w-32 font-bold">{orderTime}</p>
                </div>
              )}
              <div className="flex w-full py-2 text-lg border-b">
                <p>Delivery Time:</p>
                <p className="ml-auto w-32 font-bold">{deliveryTime}</p>
              </div>
              <button
                className="bg-red-500 w-full text-lg font-bold py-2 text-white"
                onClick={handlePayment}
              >
                Payment
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex w-full justify-center items-center flex-col">
              <img src={emptyCartImage} className="w-full max-w-sm" />
              <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

// Update the addToCart function to include a 3-hour delay for delivery time
export const addToCart = (item) => (dispatch) => {
  const dateAdded = new Date();
  const deliveryTime = new Date(dateAdded);
  deliveryTime.setHours(deliveryTime.getHours() + 3); // Add 3 hours for delivery time

  const itemWithDate = {
    ...item,
    dateAdded: dateAdded.toLocaleString(), // Add the current date and time
    deliveryTime: deliveryTime.toLocaleString(), // Add delivery time
  };

  dispatch({
    type: "ADD_TO_CART",
    payload: itemWithDate,
  });

  // Show a toast notification with the item name
  if (item.name) {
    toast.success(`${item.name} added to the cart successfully!`);
  } else {
    toast.error("Failed to add item to the cart!");
  }
};
