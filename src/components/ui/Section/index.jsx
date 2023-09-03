export const Section = ({ title, children, className = '' }) => (
  <section className={`h-screen snap-center ${className}`}>
    {title && <h2>{title}</h2>}
    {children}
  </section>
);
