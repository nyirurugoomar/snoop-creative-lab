import SectionTitle from './SectionTitle'
import { services } from '../data/siteData'

function ServicesSection() {
  return (
    <section id="services" className="services services-shell">
      <div className="services-head">
        <SectionTitle
          label="Our Services"
          title="Creative services tailored for business growth."
          text="Unlocking practical digital marketing services to elevate your online presence."
        />
        
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article key={service.title} className={`service-card ${index === 0 ? 'featured' : ''}`}>
            <span className="service-icon" aria-hidden="true">
              {service.title.charAt(0)}
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a href="#contact" className="service-link">
              Learn more
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
