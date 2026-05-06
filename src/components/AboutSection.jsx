import SectionTitle from './SectionTitle'
import { stats } from '../data/siteData'

function AboutSection() {
  return (
    <section id="about" className="about section-shell">
      <SectionTitle
        label="About Us"
        title="We create clear, memorable brands that move people to act."
        text="Snoop Creative Lab combines strategy, design, and marketing to turn business goals into visible growth."
      />
      <div className="stats">
        {stats.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
