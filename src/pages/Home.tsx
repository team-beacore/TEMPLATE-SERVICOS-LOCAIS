import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { Hero } from '../sections/Hero'
import { Services } from '../sections/Services'
import { Features } from '../sections/Features'
import { About } from '../sections/About'
import { Gallery } from '../sections/Gallery'
import { Testimonials } from '../sections/Testimonials'
import { FAQ } from '../sections/FAQ'
import { Location } from '../sections/Location'
import { FinalCTA } from '../sections/FinalCTA'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Services />
        <Features />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}