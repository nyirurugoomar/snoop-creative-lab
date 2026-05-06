import SectionTitle from './SectionTitle'

function ContactSection() {
  return (
    <section id="contact" className="contact section-shell">
      <SectionTitle label="Contact" title="Let&apos;s launch your next campaign together." />
      <div className="contact-grid">
        <p>Kigali, Rwanda</p>
        <a href="mailto:snoopcreativelab@gmail.com">snoopcreativelab@gmail.com</a>
        <a href="tel:+2507855977841">+250 785 597 7841</a>
        <p>@snoop_graphiics</p>
      </div>
    </section>
  )
}

export default ContactSection
