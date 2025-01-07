import React from "react";

function QuantityButtons({ id, cart, setCart, updateSubtotal }) {
  const currentItem = cart.find((item) => item.id === id);
  const quantity = currentItem ? currentItem.quantity : 1;

  const handleQuantityChange = (id, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity =
          action === "increment"
            ? item.quantity + 1
            : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    updateSubtotal(updatedCart);
  };

  return (
    <div className="flex gap-5">
      <div className="flex items-center px-1 rounded-md border border-gray-200">
        <button
          onClick={() => handleQuantityChange(id, "decrement")}
          className="py-1 px-2 hover:text-white rounded-lg hover:bg-primary-100"
        >
          -
        </button>
        <p className="py-1 w-8 text-center">{quantity}</p>
        <button
          onClick={() => handleQuantityChange(id, "increment")}
          className="py-1 px-2 hover:text-white rounded-lg hover:bg-primary-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityButtons;
