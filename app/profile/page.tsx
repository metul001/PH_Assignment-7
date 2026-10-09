import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/signin?reason=login&callbackURL=/profile");

  return (
    <main className="container-main flex min-h-[65vh] items-center justify-center py-12">
      <div className="w-full max-w-xl rounded-3xl border border-gray-100 bg-white p-8 card-shadow">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-extrabold text-green-800">
          {session.user.name?.charAt(0).toUpperCase() || "U"}
        </div>
        <h1 className="mt-5 text-3xl font-extrabold">My Profile</h1>
        <div className="mt-6 space-y-4 rounded-2xl bg-gray-50 p-5">
          <div><p className="text-xs uppercase text-gray-400">Name</p><p className="mt-1 font-semibold">{session.user.name}</p></div>
          <div><p className="text-xs uppercase text-gray-400">Email</p><p className="mt-1 font-semibold">{session.user.email}</p></div>
        </div>
        <Link href="/profile/edit" className="mt-6 inline-flex rounded-xl bg-green-700 px-5 py-3 font-bold text-white">Update Information</Link>
      </div>
    </main>
  );
}
