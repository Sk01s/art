"use client";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Admin = () => {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        // User is not authenticated, redirect to /auth
        router.push("/admin/auth");
      } else {
        router.push("/admin/dashboard");
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [router]);
  return <div></div>;
};

export default Admin;
