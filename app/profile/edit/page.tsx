"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function EditProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (session?.user?.name) setName(session.user.name);
  }, [session]);

  useEffect(() => {
    if (!isPending && !session) router.replace("/signin?reason=login&callbackURL=/profile/edit");
  }, [isPending, session, router]);

  async function handleUpdate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    setSaving(true);
    const result = await authClient.updateUser({ name: name.trim() });
    setSaving(false);

    if (result.error) {
      toast.error(result.error.message || "Could not update profile");
      return;
    }

    toast.success("Profile updated");
    router.push("/profile");
    router.refresh();
  }

  if (isPending) return <main className="container-main py-20 text-center">Loading profile...</main>;
  if (!session) return null;

  return (
    <main className="container-main flex min-h-[65vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 card-shadow">
        <h1 className="text-3xl font-extrabold">Update Information</h1>
        <p className="mt-2 text-gray-500">Change the name shown on your Bazar Dor profile.</p>
        <form onSubmit={handleUpdate} className="mt-7 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-green-600" />
          </div>
          <button disabled={saving} className="w-full rounded-xl bg-green-700 px-4 py-3 font-bold text-white disabled:opacity-60">
            {saving ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </main>
  );
}
