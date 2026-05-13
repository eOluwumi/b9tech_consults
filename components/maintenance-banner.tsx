'use client'

import { AlertCircle, X } from 'lucide-react'
import { useState } from 'react'

export function MaintenanceBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) {
    return null
  }

  return (
    <div className="w-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-b border-amber-400/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-5 w-5 text-amber-400 flex-shrink-0 animate-pulse" />
          <div className="flex-1">
            <p className="text-sm font-medium text-amber-100">
              Website Maintenance in Progress
            </p>
            <p className="text-xs text-amber-200 hidden sm:block">
              We&apos;re currently upgrading our platform. Services may be intermittently unavailable.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-amber-400/20 rounded-lg transition-colors flex-shrink-0"
          aria-label="Dismiss banner"
        >
          <X className="h-4 w-4 text-amber-300" />
        </button>
      </div>
    </div>
  )
}
