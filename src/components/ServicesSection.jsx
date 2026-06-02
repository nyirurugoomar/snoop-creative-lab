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
              <img src={service.icon} alt={service.title} width={20} height={20} />
  
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
