import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../store/cart-context";
import "./Checkout.css";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, total, clearCart } = useCart();

  /* لو الكارت فاضي يرجع Cart */
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/cart");
    }
  }, [cart, navigate]);

  const phone = "201557992912"; // رقمك ✅

  const message = `
🛒 New Order - VOID

${cart
  .map(
    (item) =>
      `• ${item.name} x${item.qty} = ${item.price * item.qty} EGP`
  )
  .join("\n")}

------------------------
Total: ${total} EGP

📍 Name:
📍 Address:
📍 Phone:
📍 Notes:
`;

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  const handleCheckout = () => {
    window.open(whatsappUrl, "_blank");
    clearCart();
    navigate("/");
  };

  return (
    <div className="page checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-box">
        <p className="checkout-text">
          Your order will be sent via WhatsApp with all product details.
          Please complete your information in the message.
        </p>

        <div className="checkout-summary">
          <span>Total</span>
          <span>{total} EGP</span>
        </div>

        <button
          className="checkout-btn btn"
          onClick={handleCheckout}
        >
          Send Order via WhatsApp
        </button>
      </div>
    </div>
  );
}
