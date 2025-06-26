import type { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <a href={href} className={`hover:opacity-80 transition-opacity ${className}`}>
      {children}
    </a>
  )
}
