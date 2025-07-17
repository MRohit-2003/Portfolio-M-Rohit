"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const galleryItems = [
    {
      id: 1,
      imageSrc: "/images/nptel-certificate.png",
      title: "NPTEL Online Certification",
      category: "Certificates",
      description: "Programming in Java by NPTEL, Top 5% & Silver Elite.",
    },
    {
      id: 2,
      imageSrc: "/images/apna-college-certificate.png",
      title: "Apna College Certificate",
      category: "Certificates",
      description: "Certificate of Completion for MERN Stack Web Development.",
    },
    {
      id: 3,
      imageSrc: "/images/javathon-certificate.png",
      title: "Javathon at CETA",
      category: "Events",
      description: "Champion of Javathon at CETA event, MBU.",
    },
    {
      id: 4,
      imageSrc: "/images/hindi-vidwan-certificate.png",
      title: "Hindi Vidwan Certificate",
      category: "Certificates",
      description: "Pearson Mepro English, Hindi Vidwan.",
    },
    {
      id: 5,
      imageSrc: "/images/ai-hackathon-certificate.png",
      title: "AI Autonomous Hackathon",
      category: "Hackathon",
      description: "3rd Prize in AI Autonomous Hackathon 2025.",
    },
    // Add more gallery items as needed
    {
      id: 6,
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "Mentoring Session 1",
      category: "Mentoring",
      description: "Leading a coding workshop for beginners.",
    },
    {
      id: 7,
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "Hackathon Project X",
      category: "Hackathon",
      description: "Developed an innovative solution for smart cities.",
    },
    {
      id: 8,
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "Club Event Y",
      category: "Events",
      description: "Organized a successful tech talk series.",
    },
  ]

  const filteredItems =
    activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
          Photo Gallery
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
          A showcase of my mentoring activities, hackathon participations, and professional certifications
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
        {["All", "Mentoring", "Hackathon", "Events", "Certificates"].map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            }
          >
            {filter}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50 overflow-hidden"
          >
            <div className="relative w-full h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src={item.imageSrc || "/placeholder.svg"}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 dark:text-gray-100">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
