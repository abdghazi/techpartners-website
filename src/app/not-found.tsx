import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="font-display text-4xl font-semibold text-navy-deep">
        That page is not here.
      </h1>
      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-teal-deep hover:text-navy"
      >
        Back to home
      </Link>
    </main>
  );
}
