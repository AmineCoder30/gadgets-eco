// File: src/components/CartPage.js

import React, { useState, useEffect } from "react";
import { QuantityButtons } from "../ui";
import { Button } from "../ui";
const CartElements = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [subtotal, setSubtotal] = useState(29.0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCart(cart || []);
    updateSubtotal(cart || []);
  }, []);

  const updateSubtotal = (updatedCart) => {
    const newSubtotal = updatedCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
  };

  const handleApplyCoupon = () => {
    alert(`Coupon "${couponCode}" applied!`);
  };

  return (
    <div className="my-20 text-gray-500">
      <div className="container mx-auto px-4">
        {/* Cart Table */}
        <h2 className="text-2xl font-bold mb-6">Cart</h2>
        <div className="flex flex-col relative lg:flex-row gap-10 items-start">
          <div className=" flex-1">
            <table className="w-full ">
              <thead>
                <tr className="text-left font-medium text-gray-500 border-b">
                  <th className="p-4">Product</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart !== null && cart.length > 0 ? (
                  cart.map((item) => (
                    <tr key={item?.id} className="border-b border-dashed  ">
                      <td className="p-4 flex items-center">
                        <img
                          src={item?.image}
                          alt={item?.name}
                          className="w-16 h-16 mr-4"
                        />
                        <div className="text-gray-500">
                          <p className="font-medium">{item?.name}</p>
                          <p>${item?.price.toFixed(2)}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <QuantityButtons
                          id={item.id}
                          cart={cart}
                          setCart={setCart}
                          updateSubtotal={updateSubtotal}
                        />
                      </td>
                      <td className="p-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="p-4 text-center">
                      Your cart is empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* Coupon and Update Cart */}
            <div className="flex mt-6 gap-5 flex-wrap justify-between">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="px-4 py-2 border rounded-lg"
                />
                <Button handleClick={handleApplyCoupon} title=" Apply Coupon" />
              </div>
              <Button
                title="Update Cart"
                handleClick={() => updateSubtotal(cart)}
              />
            </div>
          </div>
          {/* Cart Totals */}
          <div className="mt-6 w-full lg:sticky top-5 lg:w-80 flex border rounded-lg border-gray-200 justify-end">
            <div className="rounded-lg p-4 w-full">
              <h3 className="text-lg font-semibold mb-4">Cart Totals</h3>
              <div className="flex justify-between font-medium text-gray-800 py-5 ">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-5 mb-10 border-dashed border-t font-medium text-gray-800  border-gray-200 ">
                <span>Total</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <Button title=" Proceed to Checkout" width="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartElements;
