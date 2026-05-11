import SectionTitle from './SectionTitle'
import { whyChoosePoints } from '../data/siteData'

function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="why-choose section-shell">
      <SectionTitle
        label="Why Choose Us"
        title="Why Choose Snoop Creative Lab"
      />
      <div className="why-grid">
        {whyChoosePoints.map((point) => (
          <article key={point} className="why-card">
            <span className="why-icon" aria-hidden="true">
              ✓
            </span>
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseSection
