"use client"

import Link from "next/link"
import { Mail, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-blue-900/20">
          <Mail className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
          Contact Me
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
          I'd love to hear from you! Feel free to reach out for project inquiries, collaborations, or just to say hello.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto p-6 sm:p-8 shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="flex flex-col items-center justify-center gap-8">
          <Link
            href="mailto:mrohit582003@gmail.com"
            className="flex items-center space-x-3 text-blue-500 hover:text-blue-600 transition-colors text-lg sm:text-xl font-medium"
          >
            <Mail className="w-6 h-6" />
            <span>mrohit582003@gmail.com</span>
          </Link>

          <div className="w-full border-t border-gray-200 dark:border-gray-700 my-4"></div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Connect With Me</h3>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </Link>
            <Link
              href="mailto:mrohit582003@gmail.com"
              className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors group"
            >
              <Mail className="w-6 h-6 text-white" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
