import Logo from "@/components/Logo";
import React from "react";

function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="auth-layout">
      <div>
        <div>
          <Logo />
          <h3>Practice job interviews with AI</h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
