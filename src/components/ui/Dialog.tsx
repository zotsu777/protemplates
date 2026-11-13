"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

interface DialogProps {
  open: boolean;
  onClose: () => void;
  /** id of the element that names the dialog. */
  labelledBy: string;
  children: ReactNode;
  panelClassName?: string;
  overlayClassName?: string;
  /** "center" renders a modal; "end" renders a side drawer on the inline end. */
  align?: "center" | "end";
}

/**
 * Accessible dialog shell: traps focus, closes on Escape or backdrop click,
 * locks body scroll and restores focus to the trigger when it unmounts.
 */
export function Dialog({
  open,
  onClose,
  labelledBy,
  children,
  panelClassName,
  overlayClassName,
  align = "center",
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);

  onCloseRef.current = onClose;

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const activeElement = document.activeElement;
    restoreFocusRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
      : [];
    (focusables[0] ?? panel)?.focus({ preventScroll: true });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const current = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      ).filter((element) => element.offsetParent !== null || element === document.activeElement);

      if (current.length === 0) {
        event.preventDefault();
        panel.focus({ preventScroll: true });
        return;
      }

      const first = current[0];
      const last = current[current.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        aria-hidden="true"
        className={cn(
          "animate-overlay-in absolute inset-0 bg-slate-950/70 backdrop-blur-sm",
          overlayClassName,
        )}
      />

      <div
        className={cn(
          "absolute inset-0 flex",
          align === "center"
            ? "items-center justify-center overflow-y-auto overscroll-contain p-4"
            : "justify-end",
        )}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onCloseRef.current();
        }}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          tabIndex={-1}
          className={cn("relative outline-none", panelClassName)}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
