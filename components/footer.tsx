"use client"

import Link from "next/link"
import { Linkedin, Mail, Github } from "lucide-react"

// Import `usePathname` from `next/navigation`
import { usePathname } from "next/navigation"

export default function Footer() {
  // Inside the Footer component, get the current pathname
  const pathname = usePathname()

  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Branding */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg dark:text-gray-100">M Rohit</h3>
              <p className="text-gray-500 text-sm dark:text-gray-400">© 2025 All Rights Reserved</p>
            </div>
          </div>

          {/* Right side - Links and Social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
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
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "text-blue-500 font-medium hover:text-blue-600 transition-colors"
                    : "text-gray-600 hover:text-gray-800 transition-colors dark:text-gray-300 dark:hover:text-gray-100"
                }
              >
                Contact
              </Link>
            </nav>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/m-rohit-138a76246/"
                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="mailto:mrohit582003@gmail.com"
                className="w-10 h-10 bg-gray-200 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors group dark:bg-gray-700 dark:hover:bg-blue-500"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white dark:text-gray-300" />
              </Link>
              <Link
                href="https://github.com/MRohit-2003"
                className="w-10 h-10 bg-gray-200 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors group dark:bg-gray-700 dark:hover:bg-blue-500"
              >
                <Github className="w-5 h-5 text-gray-600 group-hover:text-white dark:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center dark:border-gray-700">
          <p className="text-gray-500 text-sm dark:text-gray-400">
            <span className="text-red-500">🚀</span> Made by M Rohit
          </p>
        </div>
      </div>
    </footer>
  )
}
