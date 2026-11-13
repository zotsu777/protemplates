"use client";

import { Handshake } from "lucide-react";

import { useI18n } from "@/components/providers/LocaleProvider";
import { useToast } from "@/components/providers/ToastProvider";

export function PartnerButton() {
  const { t } = useI18n();
  const { toast } = useToast();

  return (
    <button
      type="button"
      onClick={() => toast(t("toast.partner"))}
      className="mt-4 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-4 py-2.5 text-xs font-bold text-emerald-400 transition-colors hover:bg-emerald-500/25"
    >
      <Handshake aria-hidden="true" className="h-4 w-4" />
      <span>{t("footer.partner")}</span>
    </button>
  );
}
