import { ReactElement } from "react";

interface ButtonProps {
  Icon: ReactElement;
  text: string;
  match?: boolean;
}

export default function Button({ Icon, text, match }: ButtonProps) {
  return (
    <div
      className={`flex flex-col items-center *:size-7 text-xs  ${
        match ? "text-neutral-900" : "text-neutral-500"
      }`}
    >
      {Icon}
      {text}
    </div>
  );
}
