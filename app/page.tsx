"use client"

import { useState } from "react"
import { MapPin, Instagram, UtensilsCrossed } from "lucide-react"
import { WineLogo } from "@/components/wine-logo"
import { StarRating } from "@/components/star-rating"
import { ActionButton } from "@/components/action-button"
import { MenuModal } from "@/components/menu-modal"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <main className="flex min-h-dvh items-center justify-center bg-background px-4 py-8">
        <div className="w-full max-w-md">
          <div className="rounded-2xl bg-card px-6 py-10 shadow-2xl shadow-black/30 md:px-8 md:py-12">
            {/* Logo */}
            <div className="mb-8 animate-scale-in delay-100">
              <WineLogo />
            </div>

            {/* Heading */}
            <div className="mb-8 text-center animate-fade-in-up delay-300">
              <h1 className="mb-3 text-xl font-bold text-card-foreground text-balance md:text-3xl">
                Sua opinião é muito importante!
              </h1>
              <div className="my-4 animate-fade-in-up delay-500">
                <StarRating count={5} />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-base">
                Avalie sua experiência e ajude outros clientes a nos conhecer
              </p>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <div className="animate-fade-in-up delay-600">
                <ActionButton
                  href="https://g.page/r/Cb3vi4fpAbMqEAE/review"
                  icon={<MapPin className="h-5 w-5" />}
                  label="Avaliar no Google Maps"
                  variant="primary"
                />
              </div>
              <div className="animate-fade-in-up delay-700">
                <ActionButton
                  href="https://www.instagram.com/getuliosshopping/"
                  icon={<Instagram className="h-5 w-5" />}
                  label="Siga no Instagram"
                  variant="secondary"
                />
              </div>
              <div className="animate-fade-in-up delay-900">
                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border-2 border-[oklch(0.75_0.01_260)] bg-[oklch(0.97_0.005_260)] px-6 py-4 text-base font-semibold text-[oklch(0.3_0_0)] transition-all duration-200 hover:bg-[oklch(0.93_0.005_260)] active:scale-[0.98] md:text-lg"
                >
                  <span className="flex-shrink-0"><UtensilsCrossed className="h-5 w-5" /></span>
                  <span>Veja nosso Cardápio</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-foreground/40 animate-fade-in-up delay-1000">
            Desenvolvido por{" "}
            <a
              href="https://www.orbee360.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground/80 hover:underline transition-colors block md:inline mt-1 md:mt-0"
            >
              Orbee360
            </a>
          </p>
        </div>
      </main>

      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
