import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  const handleConfirmPayment = () => {
    // Logic for confirming payment (e.g., redirect to payment gateway)
    alert("Payment Confirmed!");
    navigate("/"); // Redirect to home or success page after payment
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Payment Summary</h2>
      <div className="border p-4 rounded shadow-md max-w-3xl mx-auto">
        <h3 className="text-lg font-bold mb-2">Items in Your Cart:</h3>
        <ul>
          {productCartItem.map((item) => (
            <li key={item._id} className="flex justify-between border-b py-2">
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              </div>
              <p className="font-bold">
                ₹{item.total} <span className="text-sm text-gray-500">({item.price} each)</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4 text-lg font-bold">
          <p>Total Price:</p>
          <p>₹{totalPrice}</p>
        </div>
        <button
          onClick={handleConfirmPayment}
          className="bg-green-500 text-white w-full py-2 mt-4 rounded hover:bg-green-600"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;