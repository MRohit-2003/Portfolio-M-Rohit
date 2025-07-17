import Header from "@/components/header"
import Footer from "@/components/footer"
import ProjectsSection from "@/components/projects"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}
