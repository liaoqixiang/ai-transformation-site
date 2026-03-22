const services = [
  {
    title: "AI Readiness Audit",
    description:
      "I assess your workflows, identify where AI saves real hours and money, and deliver a prioritized roadmap your team can act on immediately.",
    price: "From $2,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Team Training & Workshops",
    description:
      "Role-specific AI training for your team — not generic prompt tips, but real workflows tailored to POs, developers, ops, and business staff.",
    price: "From $5,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Product Build",
    description:
      "I build your internal tools, automations, or customer-facing products using AI-augmented development — fast, production-grade, fully deployed.",
    price: "From $10,000",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Fractional AI Advisor",
    description:
      "Ongoing strategic guidance on AI adoption — monthly retainer, embedded in your team, helping you integrate AI across every department.",
    price: "From $3,000/mo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How I Help Businesses
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From audit to implementation — I don&apos;t just advise, I build. That&apos;s what
            makes this different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-accent mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary">{service.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 text-sm font-semibold text-accent">
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
