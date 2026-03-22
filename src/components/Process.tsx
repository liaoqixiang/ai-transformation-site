const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Free 30-minute call. I learn about your business, current workflows, and where you're losing time or money. No sales pitch.",
    duration: "30 min",
  },
  {
    step: "02",
    title: "AI Readiness Audit",
    description:
      "I map your processes, identify high-impact AI opportunities, and deliver a prioritized roadmap with ROI estimates your leadership can act on.",
    duration: "1-2 weeks",
  },
  {
    step: "03",
    title: "Pilot Implementation",
    description:
      "We pick the highest-impact, lowest-risk opportunity and I implement it. Your team sees real results before committing to a larger engagement.",
    duration: "2-4 weeks",
  },
  {
    step: "04",
    title: "Team Enablement",
    description:
      "Role-specific training workshops. Your people learn to use AI for their actual daily work — not generic demos, but their real tasks with their real data.",
    duration: "1-2 days",
  },
  {
    step: "05",
    title: "Scale & Advise",
    description:
      "Ongoing advisory support as you expand AI across departments. I stay embedded as your fractional AI advisor, ensuring adoption sticks.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            How We Work Together
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            A clear, low-risk process. Start with a free call, see results before
            you commit.
          </p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className="flex gap-6 items-start"
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <div className="flex-1 bg-white border border-border rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-2 text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
