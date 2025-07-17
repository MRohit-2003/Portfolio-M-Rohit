import Header from "@/components/header"
import Footer from "@/components/footer"
import GallerySection from "@/components/gallery"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main>
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
