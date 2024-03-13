import { create } from "zustand";

// Define the store with initial state
const useStore = create((set) => ({
  cartItems: [], // Initial state with an empty cart
  addToCart: (
    newItem // Function to add an item to the cart or update its quantity
  ) =>
    set((state) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === newItem.name
      ); // Check if the item already exists in the cart.
      if (itemIndex >= 0) {
        // If the item exists then update quantity
        const updatedCartItems = state.cartItems.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { cartItems: updatedCartItems };
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        return {
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }
    }),
  increaseQuantity: (
    itemName // Function to increase the quantity of an item
  ) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (
    itemName // Function to decrease the quantity of an item and remove it if quantity becomes 0
  ) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.name === itemName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    })),
  emptyCart: () => set(() => ({ cartItems: [] })), // Function to empty the cart
}));
// Selector to calculate the total price of items in the cart
export const selectTotalPrice = (state) =>
  state.cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

export default useStore;
