export const Section = ({ title, children, className = '' }) => (
  <section className={`h-screen ${className}`}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);
