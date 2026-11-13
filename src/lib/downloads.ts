import generated from "@/lib/downloads.generated.json";

/**
 * Metadata for the ZIP packages produced by `npm run generate:downloads`.
 * The JSON file is committed so the site builds without running the generator.
 */
export interface DownloadPackage {
  /** Public URL of the ZIP archive. */
  readonly href: string;
  /** Size of the compressed archive, in bytes. */
  readonly bytes: number;
  /** Size of the package contents before compression, in bytes. */
  readonly rawBytes: number;
  /** Number of files inside the archive. */
  readonly files: number;
  /** Short human-readable description shown in the cart. */
  readonly label: string;
}

type GeneratedManifest = Record<string, DownloadPackage | string>;

const manifest = generated as unknown as GeneratedManifest;

export function getDownload(slug: string): DownloadPackage | undefined {
  const entry = manifest[slug];
  return entry && typeof entry === "object" ? entry : undefined;
}

/** Human-readable file size, e.g. `206 KB`. */
export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
