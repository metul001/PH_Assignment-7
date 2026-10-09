"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import AuthNotice from "@/components/AuthNotice";
import SocialButtons from "@/components/SocialButtons";
import { authClient } from "@/lib/auth-client";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setLoading(true);
    const result = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (result.error) {
      toast.error(result.error.message || "Could not sign in");
      return;
    }

    toast.success("Signed in successfully");
    router.push(searchParams.get("callbackURL") || "/");
    router.refresh();
  }

  return (
    <main className="container-main flex min-h-[70vh] items-center justify-center py-12">
      <AuthNotice />
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-7 card-shadow sm:p-9">
        <p className="text-sm font-bold uppercase tracking-widest text-green-700">Welcome back</p>
        <h1 className="mt-2 text-3xl font-extrabold">Sign In</h1>
        <p className="mt-2 text-sm text-gray-500">Sign in to open protected product details.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600" />
          </div>
          <button disabled={loading} className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white disabled:opacity-60">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-gray-400"><span className="h-px flex-1 bg-gray-200" />OR<span className="h-px flex-1 bg-gray-200" /></div>
        <SocialButtons />
        <p className="mt-6 text-center text-sm text-gray-500">New here? <Link href="/signup" className="font-bold text-green-700">Create an account</Link></p>
      </div>
    </main>
  );
}

export default function SignInPage() {
  return <Suspense fallback={<div className="container-main py-20 text-center">Loading...</div>}><SignInForm /></Suspense>;
}
