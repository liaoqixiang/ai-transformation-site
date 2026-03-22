const projects = [
  {
    name: "JobFluent",
    description:
      "Job management & invoicing platform for NZ tradies. Quotes, scheduling, Kanban boards, drag-and-drop, Stripe payments, enterprise RBAC with 196 controller actions.",
    stack: ".NET 9 + Next.js 15 + SQL Server + SignalR + Stripe",
    highlights: ["Enterprise multi-tenant RBAC", "Real-time updates", "AI-powered quoting"],
    color: "bg-blue-500",
  },
  {
    name: "Cafe POS",
    description:
      "Complete point-of-sale system with kitchen display, floor plans, reservations, real-time order tracking, supplier management, and customer self-ordering via QR.",
    stack: ".NET 10 + Next.js 16 + PostgreSQL + SignalR + Azure Service Bus",
    highlights: ["Real-time KDS", "QR self-ordering", "Demand forecasting"],
    color: "bg-amber-500",
  },
  {
    name: "JobReady NZ",
    description:
      "AI-powered job application platform with resume analysis, cover letter generation, interview prep, and Stripe subscription billing.",
    stack: "Next.js 15 + .NET 10 + PostgreSQL + Claude API + Stripe",
    highlights: ["AI resume analysis", "Subscription tiers", "Full CI/CD on Azure"],
    color: "bg-emerald-500",
  },
  {
    name: "FitForge",
    description:
      "Fitness platform with workout video streaming, training programs, progress tracking, and trainer content monetization.",
    stack: ".NET 10 + Next.js 15 + PostgreSQL + Azure Blob Storage + Stripe",
    highlights: ["Video streaming", "Trainer monetization", "Progress analytics"],
    color: "bg-purple-500",
  },
  {
    name: "Kiwi Payroll",
    description:
      "NZ payroll management with PAYE tax calculations, KiwiSaver, student loans, and automated IRD payday filing with browser automation.",
    stack: ".NET 8 + Next.js 15 + PostgreSQL + Playwright",
    highlights: ["IRD compliance automation", "PAYE calculations", "PDF payslip generation"],
    color: "bg-rose-500",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            5 Production Apps. Built Solo. With AI.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Each application is fully deployed with authentication, payments,
            real-time features, and cloud infrastructure. This is my proof of work.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div
                  className={`${project.color} w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0`}
                >
                  {project.name[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((h) => (
                      <span
                        key={h}
                        className="bg-surface text-muted text-xs font-medium px-3 py-1 rounded-full border border-border"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 text-xs text-muted font-mono">
                    {project.stack}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
