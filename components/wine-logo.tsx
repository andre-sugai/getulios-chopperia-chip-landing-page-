import Image from "next/image"

export function WineLogo() {
  return (
    <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full shadow-xl shadow-black/20 ring-4 ring-amber-700/30 md:h-36 md:w-36">
      <Image
        src="/images/getulios.jpg"
        alt="Getulios Logo"
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
