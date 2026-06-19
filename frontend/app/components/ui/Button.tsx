import type { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}
export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClass = "px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50";
  const variants = {
    primary: "bg-tom-thumb-600 text-white hover:bg-tom-thumb-700",
    secondary: "bg-stone-200 text-stone-700 hover:bg-stone-300",
  };
  return (
    <button
      className={`${baseClass} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}