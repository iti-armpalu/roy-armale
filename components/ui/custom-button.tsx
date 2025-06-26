import type { ReactNode, ButtonHTMLAttributes } from "react"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  children: ReactNode
}

export function CustomButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: CustomButtonProps) {
  const baseClasses = "font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantClasses = {
    primary: "bg-[#FF6B35] hover:bg-[#E55A2B] text-white focus:ring-[#FF6B35]",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}
