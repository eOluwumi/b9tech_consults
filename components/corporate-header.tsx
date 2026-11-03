import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function CorporateHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="B9TECH CONSULTS home">
          <span className="relative h-10 w-10">
            <Image src="/images/b9-logo-main.png" alt="" fill className="object-contain" priority />
          </span>
          <span className="text-sm font-extrabold tracking-tight sm:text-base">B9TECH <span className="text-blue-600 dark:text-blue-400">CONSULTS</span></span>
        </Link>
        <nav aria-label="Corporate navigation" className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <Link href="/enterprise" className="transition-colors hover:text-foreground">Enterprise</Link>
          <Link href="/#b3" className="transition-colors hover:text-foreground">B3 Product</Link>
          <Link href="/investors" className="transition-colors hover:text-foreground">Investors & Partners</Link>
          <Link href="/#about" className="transition-colors hover:text-foreground">About</Link>
          <Link href="/#contact" className="transition-colors hover:text-foreground">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/investors" className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:inline-flex">Investor relations</Link>
          <ThemeToggle />
        </div>
      </div>
      <nav aria-label="Mobile corporate navigation" className="flex gap-5 overflow-x-auto border-t border-border px-5 py-2 text-xs font-medium text-muted-foreground md:hidden">
        <Link href="/enterprise" className="whitespace-nowrap">Enterprise</Link>
        <Link href="/#b3" className="whitespace-nowrap">B3 Product</Link>
        <Link href="/investors" className="whitespace-nowrap">Investors</Link>
        <Link href="/#contact" className="whitespace-nowrap">Contact</Link>
      </nav>
    </header>
  )
}
