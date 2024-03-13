// store.js
import { create } from "zustand";

const useStore = create((set) => ({
  cartItems: [],
  addToCart: (newItem) =>
    set((state) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === newItem.name
      );
      if (itemIndex >= 0) {
        // Item exists, update quantity
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { cartItems: updatedCartItems };
      } else {
        // Item does not exist, add new item
        return {
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }
    }),
  increaseQuantity: (itemName) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (itemName) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  emptyCart: () => set(() => ({ cartItems: [] })),
}));

export const selectTotalPrice = (state) =>
  state.cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default useStore;
