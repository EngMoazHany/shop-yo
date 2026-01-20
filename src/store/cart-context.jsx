import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* =======================
   Context
======================= */
const CartContext = createContext(null);

/* =======================
   Helpers
======================= */
function loadCart() {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/* =======================
   Provider
======================= */
export function CartProvider({ children }) {
  const [cart, setCart] = useState(loadCart);

  /* Persist cart */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* Add item */
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  /* Decrease quantity */
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  /* Remove item */
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  /* Clear cart */
  const clearCart = () => {
    setCart([]);
  };

  /* Cart count */
  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }, [cart]);

  /* Total price */
  const total = useMemo(() => {
    return cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [cart]);

  /* Context value */
  const value = {
    cart,
    cartCount,
    total,
    addToCart,
    decreaseQty,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/* =======================
   Hook
======================= */
export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
