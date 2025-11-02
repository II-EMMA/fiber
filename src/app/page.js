import Link from "next/link";

export default function Home() {
  return (
    <div className="capitalize min-h-screen flex flex-col gap-y-14 justify-center items-center bg-black text-white text-center">
      <Link
        href="/animation"
        className="md:text-8xl text-5xl lg:font-normal font-bold"
      >
        cube
      </Link>

      <Link
        href="/shirt-page"
        className="md:text-8xl text-5xl lg:font-normal font-bold"
      >
        shirt
      </Link>
      <Link
        href="/galaxy"
        className="md:text-8xl text-5xl lg:font-normal font-bold"
      >
        Galaxy background
      </Link>
    </div>
  );
}
