"use client";

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function SocialButtons() {
  async function socialLogin(provider: "google" | "github") {
    try {
      const result = await authClient.signIn.social({ provider, callbackURL: "/" });
      if (result.error) {
        toast.error(result.error.message || `${provider === "google" ? "Google" : "GitHub"} login is not configured yet`);
      }
    } catch {
      toast.error(`${provider === "google" ? "Google" : "GitHub"} login is not configured yet`);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <button type="button" onClick={() => socialLogin("google")} className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50">Google</button>
      <button type="button" onClick={() => socialLogin("github")} className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold hover:bg-gray-50">GitHub</button>
    </div>
  );
}
