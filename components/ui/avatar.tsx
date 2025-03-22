"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  src: string;
  alt: string;
  fallback: string;
}

function Avatar({
  src,
  alt,
  fallback,
  className,
  children,
  ...props
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        data-slot="avatar-image"
        className="aspect-square size-full"
      />

      <AvatarPrimitive.Fallback
        data-slot="avatar-fallback"
        className="bg-muted flex size-full items-center justify-center rounded-full"
      >
        {fallback}
      </AvatarPrimitive.Fallback>
      {children}
    </AvatarPrimitive.Root>
  );
}

export { Avatar };
