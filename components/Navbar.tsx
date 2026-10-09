"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { Category } from "@/types";

export default function Navbar({ categories }: { categories: Category[] }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [open, setOpen] = useState(false);

  const dateText = new Intl.DateTimeFormat("en-BD", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  async function handleSignOut() {
    await authClient.signOut();
    toast.success("Signed out successfully");
    router.push("/");
    router.refresh();
  }

  return (
    <header className="border-b border-green-100 bg-white">
      <div className="container-main py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.png" alt="Bazar Dor logo" width={44} height={44} className="h-11 w-11" />
            <div>
              <p className="text-xl font-bold text-green-800">Bazar Dor</p>
              <p className="text-xs text-gray-500">{dateText}</p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {session?.user ? (
              <>
                <Link href="/profile" className="flex items-center gap-2 rounded-lg border border-green-200 px-4 py-2 text-sm font-semibold text-green-800 hover:bg-green-50">
                  <UserRound size={17} /> Profile
                </Link>
                <button onClick={handleSignOut} className="flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">
                  <LogOut size={17} /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/signin" className="rounded-lg border border-green-700 px-4 py-2 text-sm font-semibold text-green-800 hover:bg-green-50">Sign In</Link>
                <Link href="/signup" className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800">Sign Up</Link>
              </>
            )}
          </div>

          <button onClick={() => setOpen(!open)} className="rounded-lg border border-gray-200 p-2 md:hidden" aria-label="Open menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className="mt-3 hidden flex-wrap items-center gap-2 border-t border-gray-100 pt-3 md:flex">
          <Link href="/" className={`rounded-full px-3 py-1.5 text-sm ${pathname === "/" ? "bg-green-700 text-white" : "text-gray-600 hover:bg-green-50"}`}>All Products</Link>
          {categories.slice(0, 8).map((category) => {
            const href = `/category/${category.slug}`;
            const active = pathname === href;
            return (
              <Link key={category.slug} href={href} className={`rounded-full px-3 py-1.5 text-sm ${active ? "bg-green-700 text-white" : "text-gray-600 hover:bg-green-50"}`}>
                {category.icon} {category.name}
              </Link>
            );
          })}
        </nav>

        {open && (
          <div className="mt-3 border-t border-gray-100 pt-3 md:hidden">
            <div className="grid grid-cols-2 gap-2">
              <Link onClick={() => setOpen(false)} href="/" className="rounded-lg bg-gray-50 p-2 text-sm">All Products</Link>
              {categories.slice(0, 8).map((category) => (
                <Link onClick={() => setOpen(false)} key={category.slug} href={`/category/${category.slug}`} className="rounded-lg bg-gray-50 p-2 text-sm">
                  {category.icon} {category.name}
                </Link>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              {session?.user ? (
                <>
                  <Link onClick={() => setOpen(false)} href="/profile" className="flex-1 rounded-lg border border-green-700 px-3 py-2 text-center text-sm font-semibold text-green-800">Profile</Link>
                  <button onClick={handleSignOut} className="flex-1 rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white">Sign Out</button>
                </>
              ) : (
                <>
                  <Link onClick={() => setOpen(false)} href="/signin" className="flex-1 rounded-lg border border-green-700 px-3 py-2 text-center text-sm font-semibold text-green-800">Sign In</Link>
                  <Link onClick={() => setOpen(false)} href="/signup" className="flex-1 rounded-lg bg-green-700 px-3 py-2 text-center text-sm font-semibold text-white">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
