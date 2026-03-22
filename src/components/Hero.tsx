export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            AI Transformation Specialist &middot; Forward Deployment Engineer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight tracking-tight">
            One person. Five roles.
            <br />
            <span className="text-accent">Powered by AI.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
            I work as a Product Owner, Business Analyst, Developer, Tester, and
            Documentation Writer — all at once — using Claude AI. I&apos;ve shipped 5
            production SaaS apps solo. Now I help businesses eliminate the cost of
            hiring five separate roles.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-accent text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-accent-dark transition-colors text-center"
            >
              Book a Free Consultation
            </a>
            <a
              href="#portfolio"
              className="border border-border text-primary px-8 py-3.5 rounded-lg text-base font-medium hover:bg-surface transition-colors text-center"
            >
              See My Work
            </a>
          </div>
        </div>

        {/* Role badges */}
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            "Product Owner",
            "Business Analyst",
            "Full-Stack Developer",
            "QA & Testing",
            "Technical Documentation",
          ].map((role) => (
            <span
              key={role}
              className="bg-white border border-border text-sm font-medium text-primary px-4 py-2 rounded-full"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {[
            { value: "5", label: "Production Apps Shipped" },
            { value: "5-in-1", label: "Roles Consolidated" },
            { value: "Solo", label: "Built Without a Team" },
            { value: "NZ/AU", label: "Based & Operating" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
