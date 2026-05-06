import SectionTitle from './SectionTitle'
import { works } from '../data/siteData'

function PortfolioSection() {
  return (
    <section id="work" className="portfolio section-shell">
      <SectionTitle
        label="Portfolio Highlights"
        title="Selected work by Snoop Creative Lab and Shaffy."
      />
      <div className="portfolio-grid">
        {works.map((work, index) => (
          <article key={work.title} className={`portfolio-card tone-${(index % 4) + 1}`}>
            <div className="portfolio-media">
              <img className="project-image" src={work.image} alt={work.title} loading="lazy" />
            </div>
            <div className="portfolio-content">
              <h3>{work.title}</h3>
              <p>{work.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
