import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { isUserAuth } from "@/lib/actions/auth";
import { redirect } from "next/navigation";
import React from "react";

async function layout({ children }: LayoutProps) {
  const isAuth = await isUserAuth();

  if (!isAuth) redirect("/sign-in");

  return (
    <div className="root-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
