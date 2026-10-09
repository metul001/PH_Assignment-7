"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function AuthNotice() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("reason") === "login") {
      toast.error("Please sign in to view product details");
    }
  }, [searchParams]);

  return null;
}
