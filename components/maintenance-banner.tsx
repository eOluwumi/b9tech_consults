"use client"

import { AlertCircle, X } from "lucide-react"
import { useState } from "react"

export function MaintenanceBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 border-b border-yellow-500/30 sticky top-0 z-50">
      <div className="max-w-full px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-yellow-900 dark:text-yellow-200">
                Website Maintenance
              </p>
              <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                We&apos;re currently updating our site. <span className="font-medium">https://b9techafrica.com</span> will be live shortly. Thank you for your patience!
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 text-yellow-500 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
