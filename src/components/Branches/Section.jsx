export default function Section({children, className, style}) {
  return (
    <section className={`p-6 md:p-12 min-h-[50svh] ${className}`} style={style}>
      {children}
    </section>
  );
}
