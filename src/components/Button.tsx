import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "#111827",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        padding: "0.625rem 1rem",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
