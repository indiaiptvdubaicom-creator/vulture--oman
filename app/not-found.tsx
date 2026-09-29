import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col justify-center pt-32">
      <p className="text-sm tracking-[0.25em] text-gold">404</p>
      <h1 className="mt-3 font-display text-5xl">This page is not on the Oman site</h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        The address may be mistyped, or the story has not been published yet. Nothing here
        canonicalises to the homepage.
      </p>
      <Link href="/" className="mt-8 text-gold">
        Return home →
      </Link>
    </section>
  );
}
