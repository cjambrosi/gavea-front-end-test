import Link from 'next/link'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <img
        src="/assets/images/logo.svg"
        alt="Gavea Marketplace"
        className={className}
      />
    </Link>
  )
}
