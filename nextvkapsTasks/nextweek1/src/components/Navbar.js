import  Link  from "next/link";
export default function Navbar() {
  return (
    <nav className="flex gap-4 bg-gray-900 text-white">
      <Link href="/">Home</Link>
      <Link href="/tasks">Tasks</Link>
    </nav>
  );
}

