"use client";

import { useState } from "react";

import { TemplateCard } from "@/components/catalog/TemplateCard";
import { PreviewDialog } from "@/components/preview/PreviewDialog";
import type { Template } from "@/types/catalog";

export function RelatedTemplates({
  templates,
}: {
  templates: readonly Template[];
}) {
  const [previewId, setPreviewId] = useState<string | null>(null);
  const previewTemplate =
    templates.find((template) => template.id === previewId) ?? null;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onPreview={setPreviewId}
          />
        ))}
      </div>

      <PreviewDialog
        template={previewTemplate}
        onClose={() => setPreviewId(null)}
      />
    </>
  );
}
