function SectionTitle({ label, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {text ? <p className="section-text">{text}</p> : null}
    </div>
  )
}

export default SectionTitle
