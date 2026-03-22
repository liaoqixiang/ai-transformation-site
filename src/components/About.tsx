export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Not a typical AI consultant.
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              Most AI consultants make slide decks. I build production software.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              I&apos;m a Software Product Owner with hands-on business experience and
              full-stack engineering skills. I don&apos;t just talk about what AI can
              do — I use it every day to perform the work of an entire product team:
              business analysis, development, testing, and documentation.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              I call this the{" "}
              <span className="font-semibold text-primary">
                Forward Deployment Engineer
              </span>{" "}
              model — one person, augmented by AI, replacing the traditional cost
              of hiring a BA, developer, QA engineer, and technical writer
              separately.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Based in New Zealand, I work with businesses across NZ and Australia
              who want to adopt AI practically — not theoretically.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-primary">What I bring</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Product Ownership",
                  desc: "Roadmaps, prioritization, stakeholder management, sprint planning. I know how to ship.",
                },
                {
                  title: "Business Analysis",
                  desc: "Requirements gathering, process mapping, user stories, acceptance criteria — AI-assisted for speed.",
                },
                {
                  title: "Full-Stack Development",
                  desc: ".NET, Next.js, PostgreSQL, SQL Server, Azure, Stripe, SignalR — I build production-grade systems.",
                },
                {
                  title: "Quality Assurance",
                  desc: "Test strategy, automated testing, edge case identification — AI-generated test suites verified by human judgment.",
                },
                {
                  title: "Technical Documentation",
                  desc: "API docs, architecture records, user guides, runbooks — generated from code and refined for accuracy.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-border rounded-lg p-4"
                >
                  <div className="font-semibold text-primary text-sm">
                    {item.title}
                  </div>
                  <div className="text-muted text-sm mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
