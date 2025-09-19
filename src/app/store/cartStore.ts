import { create } from 'zustand';
import { persist } from 'zustand/middleware'; 

interface CartItem {
  id: number; 
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (id: number) => void; 
  removeItem: (id: number) => void; 
  updateQuantity: (id: number, quantity: number) => void; 
  clearCart: () => void;
  totalItems: () => number;
  getItemQuantity: (id: number) => number; 
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (id: number) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id);
          if (existingItem) {
           
            return {
              items: state.items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          } else {
           
            return { items: [...state.items, { id, quantity: 1 }] };
          }
        });
      },
      removeItem: (id: number) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      updateQuantity: (id: number, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id); 
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },
      getItemQuantity: (id: number) => {
        const state = get();
        const item = state.items.find((item) => item.id === id);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: 'cart-storage', 
    }
  )
);