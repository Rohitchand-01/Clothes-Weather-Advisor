// components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <Link href="/" className="text-2xl font-bold">CWA</Link>
      <div className="space-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/settings">Settings</Link>
      </div>
    </nav>
  );
}