"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialButtons from "@/components/SocialButtons";
import { authClient } from "@/lib/auth-client";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    const result = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (result.error) {
      toast.error(result.error.message || "Could not create account");
      return;
    }

    toast.success("Account created. Please sign in.");
    router.push("/signin");
  }

  return (
    <main className="container-main flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-7 card-shadow sm:p-9">
        <p className="text-sm font-bold uppercase tracking-widest text-green-700">Create account</p>
        <h1 className="mt-2 text-3xl font-extrabold">Sign Up</h1>
        <p className="mt-2 text-sm text-gray-500">Create a simple account to access product details.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="At least 8 characters" className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600" />
          </div>
          <button disabled={loading} className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white disabled:opacity-60">
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-xs text-gray-400"><span className="h-px flex-1 bg-gray-200" />OR<span className="h-px flex-1 bg-gray-200" /></div>
        <SocialButtons />
        <p className="mt-6 text-center text-sm text-gray-500">Already registered? <Link href="/signin" className="font-bold text-green-700">Sign in</Link></p>
      </div>
    </main>
  );
}
