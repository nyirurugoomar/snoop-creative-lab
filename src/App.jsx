import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import MarqueeStrip from './components/MarqueeStrip'
import PortfolioSection from './components/PortfolioSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseSection from './components/WhyChooseSection'

function App() {
  return (
    <div className="page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <MarqueeStrip />
      <ContactSection />
    </div>
  )
}

export default App
