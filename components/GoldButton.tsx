import { Link } from "@/i18n/navigation";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function GoldButton({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-gold text-gold-foreground hover:bg-[#e8c07a]"
      : "border border-gold/70 text-foreground hover:border-gold hover:bg-gold/10";

  return (
    <Link href={href} prefetch={false} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
