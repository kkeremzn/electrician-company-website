import Image from 'next/image'

interface LogoProps {
  size?: number
  className?: string
  priority?: boolean
}

export default function Logo({ size = 40, className = '', priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Temizler Elektrik logosu"
      width={size}
      height={size}
      priority={priority}
      className={`shrink-0 object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.3)] ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
