import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectTotalQuantity,
  selectTotalCost,
} from "./CartSlice";
import { Navbar } from "./ProductList";

// ─── Cart Item Card ────────────────────────────────────────────────────────────
const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, amount: 1 }));
  };

  const handleDecrease = () => {
    dispatch(updateQuantity({ id: item.id, amount: -1 }));
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item-card">
      <img src={item.image} alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p className="cart-item-unit-price">Unit Price: ${item.price.toFixed(2)}</p>
        <p className="cart-item-subtotal">Subtotal: ${subtotal}</p>
      </div>

      <div className="cart-item-controls">
        <div className="qty-controls">
          <button
            className="qty-btn"
            onClick={handleDecrease}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={handleIncrease}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button className="delete-btn" onClick={handleDelete}>
          🗑 Remove
        </button>
      </div>
    </div>
  );
};

// ─── Cart Page ─────────────────────────────────────────────────────────────────
const CartItem = () => {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalCost = useSelector(selectTotalCost);

  const handleCheckout = () => {
    alert("🌿 Coming Soon! Checkout will be available shortly. Thank you for shopping at Paradise Nursery!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Navbar />
        <div className="cart-empty">
          <h2>Your cart is empty 🌱</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <Link to="/products" className="btn-continue">
            ← Browse Plants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-page-hero">
        <h1>🛒 Your Cart</h1>
        <p>Review your plants before checkout</p>
      </div>

      <div className="cart-container">
        {/* Summary Bar */}
        <div className="cart-summary-bar">
          <div className="summary-stat">
            <span className="stat-label">Total Plants</span>
            <span className="stat-value">{totalQuantity}</span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Total Cost</span>
            <span className="stat-value">${totalCost}</span>
          </div>
        </div>

        {/* Cart Items */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="cart-actions">
          <Link to="/products" className="btn-continue">
            ← Continue Shopping
          </Link>
          <button className="btn-checkout" onClick={handleCheckout}>
            Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
