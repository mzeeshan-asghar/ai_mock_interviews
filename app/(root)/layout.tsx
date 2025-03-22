import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function layout({ children }: LayoutProps) {
  return (
    <div className="root-layout">
      <Header />
      <main className="space-y-6 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
