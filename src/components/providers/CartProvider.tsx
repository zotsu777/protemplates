"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "protemplates.cart.v1";

interface CartContextValue {
  /** Template ids, in the order they were added. */
  readonly items: readonly string[];
  readonly count: number;
  readonly isOpen: boolean;
  /** False until localStorage has been read, so SSR and first paint match. */
  readonly isHydrated: boolean;
  readonly openCart: () => void;
  readonly closeCart: () => void;
  readonly toggleCart: (open: boolean) => void;
  readonly add: (templateId: string) => "added" | "exists";
  readonly remove: (templateId: string) => void;
  readonly clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function readStoredCart(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((value): value is string => typeof value === "string");
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<readonly string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  // Mirrors `items` synchronously so `add()` can report a duplicate before
  // React commits the state update.
  const itemsRef = useRef<readonly string[]>([]);

  useEffect(() => {
    const stored = readStoredCart();
    itemsRef.current = stored;
    setItems(stored);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage can be unavailable (private mode, quota); the cart still works
      // for the current session.
    }
  }, [items, isHydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const toggleCart = useCallback((open: boolean) => setIsOpen(open), []);

  const add = useCallback((templateId: string): "added" | "exists" => {
    if (itemsRef.current.includes(templateId)) return "exists";

    itemsRef.current = [...itemsRef.current, templateId];
    setItems(itemsRef.current);
    return "added";
  }, []);

  const remove = useCallback((templateId: string) => {
    setItems((current) => current.filter((id) => id !== templateId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count: items.length,
      isOpen,
      isHydrated,
      openCart,
      closeCart,
      toggleCart,
      add,
      remove,
      clear,
    }),
    [items, isOpen, isHydrated, openCart, closeCart, toggleCart, add, remove, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside <CartProvider>");
  }
  return context;
}
