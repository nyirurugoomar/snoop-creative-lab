import { navLinks } from '../data/siteData'
import logoLight from '../assets/logo_real.png'

function HeroSection() {
  return (
    <main id="home" className="hero-panel">
      <header className="topbar">
        <img className="brand-logo" src={logoLight} alt="Snoop Creative Lab" />
        <nav className="nav-pills" aria-label="Main">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="chip">
          Contact Us <span>↗</span>
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow">Digital Marketing + Branding Agency</p>
        <h1>
          BUILD BOLD
          <br />
          BRAND STORIES
        </h1>
        <p className="hero-subtext">
        We help brands, schools, and businesses grow through creative design, social media management, content creation, and modern websites.
        </p>
        <a href="#contact" className="btn btn-primary">
        Book Consultation<span>↗</span>
        </a>
        <a href="#work" className="btn btn-primary">
        View Our Work<span>💼</span>
        </a>
        <div className="hero-swatches" aria-hidden="true">
          <span className="sw sw1"></span>
          <span className="sw sw2"></span>
          <span className="sw sw3"></span>
          <span className="sw sw4"></span>
        </div>
        <p className="hero-year">SNOOP CREATIVE LAB</p>
        <div className="hero-note">
          <strong>2,200+</strong>
          <p>design projects delivered with measurable impact.</p>
        </div>
      </section>
    </main>
  )
}

export default HeroSection
