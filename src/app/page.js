import Link from "next/link";

export default function Home() {
  return (
    <div className="capitalize min-h-screen flex flex-col gap-y-12 justify-center items-center bg-black text-white">
      <Link href="/animation" className="text-8xl">
        cube
      </Link>
      <Link href="/shirt" className="text-8xl">
        Shirt
      </Link>
      <Link href="/shirt-page" className="text-8xl">
        shirt-page
      </Link>
      <Link href="/galaxy" className="text-8xl">
        Galaxy background
      </Link>
    </div>
  );
}
