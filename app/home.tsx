"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  ArrowRight,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  Coffee,
  Monitor,
  Users,
  Award,
  Trophy,
  GraduationCap,
  BarChart3,
  Briefcase,
  Sun,
  Moon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import Header from "@/components/header"
import Footer from "@/components/footer"

function useTypewriter(text: string, speed = 50) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return displayText
}

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

export default function Portfolio() {
  const typedText = useTypewriter("Welcome to M Rohit's Portfolio", 50)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      {/* Added dark mode background and text color */}
      {/* Header */}
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <span className="text-blue-500 text-xs sm:text-sm font-medium">
              Software Developer | Full Stack | Java 
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px] dark:text-gray-100">
            <span className="inline-block">
              {typedText.split("M Rohit's").map((part, index) => (
                <span key={index}>
                  {index === 0 ? (
                    part
                  ) : (
                    <>
                      <span className="text-blue-500">M Rohit's</span>
                      {part}
                    </>
                  )}
                </span>
              ))}
              <span className="animate-pulse text-blue-500">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl dark:text-gray-300">
            Hi there! I create elegant, high-performance software web applications that solve real-world problems. Specializing
            in modern JavaScript frameworks and scalable architecture with AI integration.
          </p>

          {/* CTA and Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* === Primary CTA =================================================== */}
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center space-x-2"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <div className="flex space-x-3">
              <Link
                href="https://www.linkedin.com/in/m-rohit-138a76246"
                className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link
                href="mailto:mrohit582003@gmail.com"
                className="w-10 h-10 bg-red-200 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors group dark:bg-gray-700 dark:hover:bg-red-500"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-white dark:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 sm:mb-4">
            <span className="text-blue-500 text-xs sm:text-sm font-medium uppercase tracking-wide">Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
            A diverse set of skills and technologies I've mastered to deliver exceptional results
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* Update each skill card with better mobile padding */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/20">
              <Code className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                HTML5, CSS3, JavaScript
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Bootstrap, Tailwind CSS
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                React
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/20">
              <Server className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">Backend</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Node.js, Next.js
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Express.js, Vite, Flask
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Fast APIs
              </li>
            </ul>
          </div>

          {/* Database */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/20">
              <Database className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">Database</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                MongoDB
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                SQL Databases
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming & DSA */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/20">
              <Coffee className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">Programming & DSA</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Java Development
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Data Structures & Algorithms
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Problem Solving
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/20">
              <Monitor className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">Tools</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Git & GitHub
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                VS Code
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Few AI Tools
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 dark:bg-blue-900/20">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 dark:text-gray-100">Soft Skills</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Team Leadership
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Management
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Mentoring
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Communication
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Achievements & Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 sm:mb-4">
            <span className="text-blue-500 text-xs sm:text-sm font-medium uppercase tracking-wide">Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
            Achievements & Experience
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
            Recognitions, certifications, and professional journey that have shaped my career
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Update both achievement cards with better mobile padding */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-yellow-900/50">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4 dark:bg-yellow-900/20">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                Certifications & Achievements
              </h3>
            </div>

            <div className="space-y-8">
              {/* Achievement 1 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                    3rd Prize- AI Autonomous Hackathon 2025
                  </h4>
                  <p className="text-blue-500 font-medium">V R Siddartha College</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">2025</p>
                </div>
              </div>

              {/* Achievement 2 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                    Finalist- SASTRA Daksh 2025
                  </h4>
                  <p className="text-gray-500 text-sm dark:text-gray-400">2025</p>
                </div>
              </div>

              {/* Certification 1 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <GraduationCap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                    Programming in Java by NPTEL
                  </h4>
                  <p className="text-blue-500 font-medium">Top 5% & Silver Elite</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">2024</p>
                </div>
              </div>

              {/* Certification 2 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <GraduationCap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                    Data Structures & Algorithms in Java
                  </h4>
                  <p className="text-blue-500 font-medium">NPTEL</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">2024</p>
                </div>
              </div>

              {/* Certification 3 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <GraduationCap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                    MERN Stack Web Development
                  </h4>
                  <p className="text-blue-500 font-medium">Apna College</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">2023</p>
                </div>
              </div>

              {/* Certification 4 */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <GraduationCap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                    Pearson Mepro English, Hindi Vidwan
                  </h4>
                  <p className="text-blue-500 font-medium">Pearson, Hindi Prachar Sabha</p>
                  <p className="text-gray-500 text-sm dark:text-gray-400">2023, 2020</p>
                </div>
              </div>

              {/* CET Ranks */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 mt-1 dark:bg-yellow-900/20">
                  <BarChart3 className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">CET Ranks</h4>
                  <p className="text-blue-500 font-medium">Andhra Pradesh- 5270, Telangana- 3359</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 dark:bg-blue-900/20">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8">
              {/* Experience 1 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                      Contributor
                    </h4>
                    <p className="text-blue-500 font-medium">Social(Formerly Script Foundation)</p>
                    <p className="text-gray-500 text-sm mb-3 dark:text-gray-400">Jun 2024 - July 2024</p>
                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      Featured an Adavnced Algorithm Analysis Dashboard with ML Insights using React, Node, Express and MongoDB database in a project named SortVision. 
                    </p>
                  </div>
                </div>
                <div className="absolute left-2 top-8 w-0.5 h-24 bg-blue-200 dark:bg-blue-700"></div>
              </div>

              {/* Experience 2 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                      Software and Business Developer
                    </h4>
                    <p className="text-blue-500 font-medium">CODEPLAYERS Business System Private Limited</p>
                    <p className="text-gray-500 text-sm mb-3 dark:text-gray-400">Jun 2024 - July 2024</p>
                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      Designed the UI for InfinityX - Progressive Web Application(PWA)
                      Developed a Grievance Redressal Application Prototype-  Progressive Web Application(PWA)
                      Designed pitching aids for client interaction using Canva.
                    </p>
                  </div>
                </div>
                <div className="absolute left-2 top-8 w-0.5 h-24 bg-blue-200 dark:bg-blue-700"></div>
              </div>

              {/* Experience 3 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4 mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg dark:text-gray-100">
                      GDSC Coordinator
                    </h4>
                    <p className="text-blue-500 font-medium">Internshala Student Ambassador</p>
                    <p className="text-gray-500 text-sm mb-3 dark:text-gray-400">Jan 2024 - Mar 2024</p>
                    <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                      Promoted Intershala courses and programs like Excel for Beginners.
                      Encouraged students to complete Internshala certifications.
                    </p>
                  </div>
                </div>
                <div className="absolute left-2 top-8 w-0.5 h-20 bg-blue-200 dark:bg-blue-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-blue-900/20">
            <GraduationCap className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
            Education
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
            My academic journey that built the foundation for my technical expertise
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* B-Tech */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-start mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1 dark:bg-blue-900/20">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
                    B-Tech in Artificial Intelligence and Data Science
                  </h3>
                  <p className="text-blue-500 font-medium">ICFAI Foundation of Higher Education(IFHE), Hyderabad</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm mb-1 dark:text-gray-400">📅 2022 - 2026</p>
                <p className="text-blue-500 font-medium">GPA: 8.86/10</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              Specialized in Software Engineering with a strong focus on full-stack web development using AI, complex ML algorithms, and
              emerging technologies.
            </p>
          </div>

          {/* Intermediate */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-start mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1 dark:bg-blue-900/20">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">Intermediate</h3>
                  <p className="text-blue-500 font-medium">DAV Public School, Berhampur, Odisha</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm mb-1 dark:text-gray-400">📅 2019 - 2021</p>
                <p className="text-blue-500 font-medium">GPA: 9.36/10</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              Completed Intermediate (PCMB) at DAV Public School, Berhampur, Odisha with 93.6%, securing a spot among the Top 10 rankers in the entire school and demonstrating consistent academic excellence.
            </p>
          </div>

          {/* SSC */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-blue-900/50">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-start mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 mt-1 dark:bg-blue-900/20">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">SSC</h3>
                  <p className="text-blue-500 font-medium">DAV Public School, Berhampur, Odisha</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm mb-1 dark:text-gray-400">📅 2019</p>
                <p className="text-blue-500 font-medium">GPA: 9.6/10</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed dark:text-gray-300">
              Completed 10th class at DAV Public School, Berhampur, Odisha with 96%, securing a spot among the Top 10 rankers in the entire school.
            </p>
          </div>
        </div>
      </section>
      {/* Coding Profiles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-blue-900/20">
            <Monitor className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 dark:text-gray-100">
            Coding Profiles
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 dark:text-gray-300">
            Check out my coding journey and problem-solving skills across various platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* LeetCode */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-orange-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-orange-900/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 dark:bg-orange-900/20">
                <Code className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">LeetCode</h3>
                <p className="text-gray-500 dark:text-gray-400">@nithyanandvk2005</p>
              </div>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-3 dark:text-gray-100">Solved 150+ DSA problems</h4>
            <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
              Regularly practice algorithms and data structures, focusing on medium and hard problems.
            </p>
            <Link href="#" className="text-blue-500 font-medium hover:text-blue-600 transition-colors">
              View Profile →
            </Link>
          </div>

          {/* GitHub */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-gray-900/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4 dark:bg-gray-900/20">
                <Code className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">GitHub</h3>
                <p className="text-gray-500 dark:text-gray-400">@nithyanandvk</p>
              </div>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-3 dark:text-gray-100">20+ repositories</h4>
            <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
              Active contributor with various personal and collaborative projects, focusing on web applications.
            </p>
            <Link href="#" className="text-blue-500 font-medium hover:text-blue-600 transition-colors">
              View Profile →
            </Link>
          </div>

          {/* HackerRank */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-green-100 transition-all duration-300 cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-green-900/50">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 dark:bg-green-900/20">
                <Trophy className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">HackerRank</h3>
                <p className="text-gray-500 dark:text-gray-400">@nithyanandvk2005</p>
              </div>
            </div>
            <h4 className="font-bold text-gray-800 text-lg mb-3 dark:text-gray-100">5-Star Java Badge</h4>
            <p className="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
              Achieved 5-star rating in Java, with expertise in problem-solving and algorithms challenges.
            </p>
            <Link href="#" className="text-blue-500 font-medium hover:text-blue-600 transition-colors">
              View Profile →
            </Link>
          </div>
        </div>
      </section>
      {/* Hire Me Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 dark:bg-blue-900/20">
            <Briefcase className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-gray-100">Hire Me</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 px-4 dark:text-gray-300">
            I'm available for full-time positions, internships, and freelance projects. Let's create something amazing
            together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 w-full sm:w-auto">
              <GraduationCap className="w-4 h-4" />
              <span>View Resume</span>
            </Button>
            <Button
              asChild
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16 sm:py-20 dark:bg-gray-800">
        {/* Updated CTA background for dark mode */}
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 dark:text-gray-100">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto dark:text-gray-300">
            I'm always looking for exciting opportunities to create exceptional digital experiences. Let's discuss how
            we can work together.
          </p>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium">
            <Link href="/contact" className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
          </Button>
        </div>
      </section>
      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
      </button>
      <Footer />
    </div>
  )
}
