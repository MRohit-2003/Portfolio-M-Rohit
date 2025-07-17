"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      imageSrc: "/images/iste-mbu-svec-club-website.png",
      title: "ISTE MBU & SVEC Club Website",
      description:
        "We proudly developed the official website for ISTE MBU & SVEC - a vibrant digital space to showcase our club's events, team, and achievements.",
      isFeatured: true,
      technologies: [],
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "The Coding Club MBU Portal",
      description:
        "An all-in-one interactive platform crafted to empower thousands of students through tech events, learning, resources, and community engagement.",
      isFeatured: true,
      technologies: [],
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "AI Business Insights Hub",
      description: "AI-driven platform for real-time financial insights, market trends, and business intelligence.",
      isFeatured: false,
      technologies: [],
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "Explore and Stay",
      description:
        "A full-stack Airbnb-inspired platform for discovering villas, rooms, and unique stays at tourist and adventure destinations.",
      isFeatured: false,
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      imageSrc: "/placeholder.svg?height=200&width=400",
      title: "Personal Portfolio",
      description: "Responsive and animated portfolio site showcasing resume, projects, and contact information.",
      isFeatured: false,
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <div className="mb-3 sm:mb-4">
          <span className="text-blue-500 text-xs sm:text-sm font-medium uppercase tracking-wide">My Work</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
          My Projects
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
          Browse through my portfolio of projects, showcasing my skills in web development, design, and problem-solving.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50 overflow-hidden"
          >
            <div className="relative w-full h-48 sm:h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
              {project.isFeatured && (
                <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-300">{project.description}</p>
              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {`+${project.technologies.length - 3} More`}
                    </span>
                  )}
                </div>
              )}
              <Link
                href="#"
                className="text-blue-500 font-medium hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
