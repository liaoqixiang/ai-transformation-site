const roles = [
  {
    traditional: "Business Analyst",
    salary: "$80-110k",
    aiApproach:
      "Requirements gathering, user story writing, acceptance criteria, stakeholder communication — all accelerated with AI-assisted analysis and documentation.",
  },
  {
    traditional: "Software Developer",
    salary: "$90-140k",
    aiApproach:
      "Full-stack development using AI pair programming. Architecture, APIs, database design, frontend, deployment — shipped at 3-5x the speed of traditional development.",
  },
  {
    traditional: "QA / Tester",
    salary: "$70-100k",
    aiApproach:
      "AI-generated test cases, automated testing scripts, edge case identification, and regression testing — with human judgment for critical path validation.",
  },
  {
    traditional: "Technical Writer",
    salary: "$65-90k",
    aiApproach:
      "API documentation, user guides, runbooks, architecture decision records — generated from code and conversations, then refined for accuracy.",
  },
  {
    traditional: "Product Owner",
    salary: "$100-140k",
    aiApproach:
      "Prioritization, roadmap planning, stakeholder alignment, sprint planning — the strategic role that ties everything together and directs the AI.",
  },
];

export default function ForwardDeployment() {
  return (
    <section className="py-20 px-6 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            The Forward Deployment Engineer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Replace 3 hires with 1 person following the template.
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            A Forward Deployment Engineer uses AI to consolidate BA, Dev, QA, and
            Docs into one role. I&apos;ve built the playbook — your team follows it. The
            savings are immediate.
          </p>
        </div>

        <div className="grid gap-4">
          {/* Header */}
          <div className="hidden md:grid grid-cols-3 gap-4 px-6 text-sm font-semibold text-white/50 uppercase tracking-wider">
            <div>Traditional Role</div>
            <div>NZ Salary Range</div>
            <div>AI-Augmented Approach</div>
          </div>

          {roles.map((role) => (
            <div
              key={role.traditional}
              className="bg-white/5 border border-white/10 rounded-xl p-6 grid md:grid-cols-3 gap-4 items-start"
            >
              <div className="font-semibold text-white">{role.traditional}</div>
              <div className="text-white/60 font-mono text-sm">
                {role.salary}/year
              </div>
              <div className="text-white/80 text-sm leading-relaxed">
                {role.aiApproach}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-accent/20 border border-accent/30 rounded-xl px-8 py-6">
            <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
              Traditional team cost
            </div>
            <div className="text-2xl font-bold text-white line-through decoration-white/40">
              $405k - $580k/year
            </div>
            <div className="text-sm text-white/60 mt-4 uppercase tracking-wider mb-2">
              Forward Deployment Engineer
            </div>
            <div className="text-3xl font-bold text-accent">
              One person + AI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
