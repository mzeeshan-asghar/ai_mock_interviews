import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

function Logo({ className, width = 40, height = 40 }: LogoProps) {
  return (
    <div className={cn("flex justify-center gap-2", className)}>
      <Image src="logo.svg" alt="Logo" width={width} height={height} />
      <h2 className="text-primary-200">Prep Wise</h2>
    </div>
  );
}

export default Logo;
