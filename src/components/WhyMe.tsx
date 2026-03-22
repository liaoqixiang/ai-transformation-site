export default function WhyMe() {
  return (
    <section className="py-20 px-6 bg-primary text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why work with me — not another AI consultant
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: what makes me different */}
          <div className="space-y-8">
            {[
              {
                title: "I've done it — 5 times",
                desc: "Most AI consultants talk theory. I've shipped 5 production applications with auth, payments, real-time features, and compliance. Open any of them — they're live.",
              },
              {
                title: "I speak both languages",
                desc: "I work with SaaS startups building complex platforms AND with local business owners who've never seen a line of code. I translate between business thinking and technical execution.",
              },
              {
                title: "I build, not just advise",
                desc: "Other consultants hand you a PDF and leave. I build the pilot, train your team, and stay as your advisor. You get outcomes, not recommendations.",
              },
              {
                title: "I created the playbook",
                desc: "The Forward Deployment Engineer model isn't a buzzword — it's a repeatable process I've proven across job platforms, POS systems, payroll, fitness, and invoicing. Your team follows the same template.",
              },
              {
                title: "NZ/AU business context",
                desc: "I understand NZ tax (PAYE, KiwiSaver, student loans), IRD compliance, NZ employment law, and AU/NZ business culture. I've built software for all of it.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-white/70 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: the two audiences */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">
              I work with two types of clients
            </h3>

            <div className="bg-white/10 border border-white/10 rounded-xl p-6">
              <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                For Companies & Startups
              </div>
              <h4 className="text-lg font-bold text-white">
                &ldquo;We need to ship faster with fewer people&rdquo;
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Replace 3-5 hires with 1 AI-augmented role
                </li>
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Train existing team to use AI in their daily work
                </li>
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Build internal tools and automations fast
                </li>
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Enterprise-grade: RBAC, compliance, CI/CD, cloud
                </li>
              </ul>
            </div>

            <div className="bg-white/10 border border-white/10 rounded-xl p-6">
              <div className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                For Business Owners
              </div>
              <h4 className="text-lg font-bold text-white">
                &ldquo;I want to build my own app without hiring a developer&rdquo;
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Build a custom tool for your exact business workflow
                </li>
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Learn to iterate and maintain it yourself with AI
                </li>
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Stop paying SaaS subscriptions for generic software
                </li>
                <li className="flex gap-2">
                  <span className="text-accent shrink-0">&#10003;</span>
                  Own your tools and your data — no vendor lock-in
                </li>
              </ul>
            </div>

            <div className="bg-accent/20 border border-accent/30 rounded-xl p-6 text-center">
              <div className="text-white/60 text-sm">
                Both paths use the same proven method
              </div>
              <div className="text-xl font-bold text-white mt-2">
                AI + Domain Knowledge = Custom Solutions
              </div>
              <div className="text-white/60 text-sm mt-2">
                The only difference is scale. The process is the same.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
