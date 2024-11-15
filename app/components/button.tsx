"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

interface ButtonProps {
  Icon: ReactElement;
  text: string;
  path: string;
}

export default function Button({ Icon, text, path = "/" }: ButtonProps) {
  const pathname = usePathname();
  return (
    <Link href={path}>
      <div
        className={`flex flex-col items-center *:size-7 text-xs  ${
          pathname === path ? "text-neutral-900" : "text-neutral-500"
        }`}
      >
        {Icon}
        {text}
      </div>
    </Link>
  );
}
