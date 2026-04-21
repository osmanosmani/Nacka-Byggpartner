import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="page-shell text-[#181311]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Team />
      <Testimonials />
      <Gallery />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
