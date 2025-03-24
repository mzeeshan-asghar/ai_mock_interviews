import React from "react";
import { Avatar } from "@/components/ui/avatar";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <Avatar src="user-avatar.png" alt="User Avatar" fallback="A" />
    </header>
  );
}

export default Header;
