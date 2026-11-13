import {
  Bolt,
  CreditCard,
  Gem,
  Languages,
  PlayCircle,
  Tag,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import type { ContentIcon } from "@/lib/content";

const ICONS: Record<ContentIcon, LucideIcon> = {
  tag: Tag,
  languages: Languages,
  wallet: Wallet,
  bolt: Bolt,
  gem: Gem,
  play: PlayCircle,
  card: CreditCard,
};

export function ContentGlyph({
  name,
  className,
}: {
  name: ContentIcon;
  className?: string;
}) {
  const Icon = ICONS[name];
  return <Icon aria-hidden="true" className={className} />;
}
