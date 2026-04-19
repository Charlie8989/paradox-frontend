import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-[20vh] font-bold text-[#504688]">404</h1>
      <p className="mt-2 text-lg text-gray-600">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#AB9FF2] rounded-full font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}