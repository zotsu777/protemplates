import type { PaymentMethodId } from "@/types/catalog";
import type { TranslationKey } from "@/lib/i18n/dictionaries";

export type PaymentIcon = "card" | "bank" | "cash";

export interface PaymentMethodOption {
  readonly id: PaymentMethodId;
  readonly labelKey: TranslationKey;
  readonly hintKey: TranslationKey;
  readonly icon: PaymentIcon;
}

export const PAYMENT_METHODS: readonly PaymentMethodOption[] = [
  {
    id: "cmi",
    labelKey: "payment.cmi",
    hintKey: "payment.cmiHint",
    icon: "card",
  },
  {
    id: "bank-transfer",
    labelKey: "payment.bank",
    hintKey: "payment.bankHint",
    icon: "bank",
  },
  {
    id: "cashplus",
    labelKey: "payment.cash",
    hintKey: "payment.cashHint",
    icon: "cash",
  },
];

export const DEFAULT_PAYMENT_METHOD: PaymentMethodId = "cmi";

export function isPaymentMethodId(value: unknown): value is PaymentMethodId {
  return PAYMENT_METHODS.some((method) => method.id === value);
}

export function getPaymentMethod(id: PaymentMethodId): PaymentMethodOption {
  const method = PAYMENT_METHODS.find((candidate) => candidate.id === id);
  if (!method) throw new Error(`Unknown payment method: ${id}`);
  return method;
}

/**
 * Payment provider abstraction.
 *
 * The storefront only ever talks to this interface, so wiring a real gateway
 * means adding one adapter (CMI e-commerce, Stripe, PayPal…) without touching
 * the cart, the API route or any UI component.
 */
export interface PaymentIntent {
  readonly reference: string;
  readonly amountMad: number;
  readonly currency: "MAD";
  readonly method: PaymentMethodId;
  readonly status: "paid";
  readonly createdAt: string;
}

export interface PaymentProvider {
  readonly id: string;
  createIntent(input: {
    amountMad: number;
    method: PaymentMethodId;
  }): Promise<PaymentIntent>;
}

export function createOrderReference(): string {
  const suffix = Math.floor(100000 + Math.random() * 900000);
  return `PT-${suffix}`;
}

/**
 * Development adapter. It approves every intent immediately and never touches
 * a network — swap it for `cmiProvider` / `stripeProvider` in production.
 */
export const mockPaymentProvider: PaymentProvider = {
  id: "mock",
  async createIntent({ amountMad, method }) {
    // Simulate a gateway round trip without slowing down local usage.
    await new Promise((resolve) => setTimeout(resolve, 120));

    return {
      reference: createOrderReference(),
      amountMad,
      currency: "MAD",
      method,
      status: "paid",
      createdAt: new Date().toISOString(),
    };
  },
};

export const paymentProvider: PaymentProvider = mockPaymentProvider;
