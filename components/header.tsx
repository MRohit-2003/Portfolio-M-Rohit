"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import { usePathname } from "next/navigation"

function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
            className="rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-800 dark:text-gray-200" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-800 dark:text-gray-200" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">M</span>
            </div>
            <span className="text-gray-800 font-semibold text-base sm:text-lg dark:text-gray-200">M Rohit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-blue-500 font-medium hover:text-blue-600 transition-colors"
                  : "text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
              }
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={
                pathname === "/projects"
                  ? "text-blue-500 font-medium hover:text-blue-600 transition-colors"
                  : "text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
              }
            >
              Projects
            </Link>
            <Link
              href="/gallery"
              className={
                pathname === "/gallery"
                  ? "text-blue-500 font-medium hover:text-blue-600 transition-colors"
                  : "text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
              }
            >
              Gallery
            </Link>
            <Link
              href="/contact" // Updated href for Contact
              className={
                pathname === "/contact"
                  ? "text-blue-500 font-medium hover:text-blue-600 transition-colors"
                  : "text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
              }
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div>
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                <span
                  className={`block h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""} dark:bg-gray-300`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? "opacity-0" : ""} dark:bg-gray-300`}
                ></span>
                <span
                  className={`block h-0.5 bg-gray-600 transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""} dark:bg-gray-300`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 dark:border-gray-700">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "text-blue-500 font-medium hover:text-blue-600 transition-colors px-2 py-1"
                    : "text-gray-600 hover:text-gray-800 transition-colors px-2 py-1 dark:text-gray-300 dark:hover:text-gray-100"
                }
              >
                Home
              </Link>
              <Link
                href="/projects"
                className={
                  pathname === "/projects"
                    ? "text-blue-500 font-medium hover:text-blue-600 transition-colors px-2 py-1"
                    : "text-gray-600 hover:text-gray-800 transition-colors px-2 py-1 dark:text-gray-300 dark:hover:text-gray-100"
                }
              >
                Projects
              </Link>
              <Link
                href="/gallery"
                className={
                  pathname === "/gallery"
                    ? "text-blue-500 font-medium hover:text-blue-600 transition-colors px-2 py-1"
                    : "text-gray-600 hover:text-gray-800 transition-colors px-2 py-1 dark:text-gray-300 dark:hover:text-gray-100"
                }
              >
                Gallery
              </Link>
              <Link
                href="/contact" // Updated href for Contact
                className={
                  pathname === "/contact"
                    ? "text-blue-500 font-medium hover:text-blue-600 transition-colors px-2 py-1"
                    : "text-gray-600 hover:text-gray-800 transition-colors px-2 py-1 dark:text-gray-300 dark:hover:text-gray-100"
                }
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
