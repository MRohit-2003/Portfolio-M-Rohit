import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
