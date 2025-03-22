import Logo from "@/components/Logo";
import React from "react";

function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="auth-layout">
      <div className="card-border lg:min-w-[566px]">
        <div className="space-y-6 card py-14 px-10">
          <Logo />
          <h3 className="text-center">Practice job interviews with AI</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
