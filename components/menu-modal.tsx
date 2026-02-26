"use client"

import { X } from "lucide-react"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex h-[90vh] w-full max-w-2xl flex-col rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-bold text-card-foreground">Nosso Cardápio</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-card-foreground"
            aria-label="Fechar cardápio"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden rounded-b-2xl">
          <iframe
            src="/cardapio.pdf"
            className="h-full w-full"
            title="Cardápio Getúlio's Chopperia"
          />
        </div>
      </div>
    </div>
  )
}
