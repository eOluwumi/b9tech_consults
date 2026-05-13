"use client"

import { AlertCircle, X } from "lucide-react"
import { useState } from "react"

export function MaintenanceBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-gradient-to-r from-yellow-500/15 via-amber-500/15 to-orange-500/15 border-b border-yellow-500/40 relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center justify-center gap-4">
          <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
          <div className="flex-1 text-center">
            <p className="text-sm sm:text-base font-semibold text-yellow-900 dark:text-yellow-100">
              Website Maintenance
            </p>
            <p className="text-xs sm:text-sm text-yellow-800 dark:text-yellow-200 mt-1">
              We&apos;re currently updating our site. <span className="font-semibold text-yellow-700 dark:text-yellow-100">https://b9techafrica.com</span> will be live shortly. Thank you for your patience!
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
