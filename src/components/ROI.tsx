export default function ROI() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            The Real Cost of AI vs. Traditional Teams
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Claude Pro costs ~$20/month. Even heavy API usage is a fraction of one
            salary. The ROI isn&apos;t marginal — it&apos;s transformational.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="border border-border rounded-xl p-8 bg-surface">
            <h3 className="text-lg font-bold text-primary mb-6">
              Traditional Approach
            </h3>
            <div className="space-y-4">
              {[
                { role: "Business Analyst", cost: "$90k" },
                { role: "Full-Stack Developer", cost: "$120k" },
                { role: "QA Engineer", cost: "$85k" },
                { role: "Technical Writer", cost: "$75k" },
                { role: "Product Owner", cost: "$130k" },
              ].map((item) => (
                <div
                  key={item.role}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-muted">{item.role}</span>
                  <span className="font-mono text-primary font-medium">
                    {item.cost}/yr
                  </span>
                </div>
              ))}
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="font-semibold text-primary">Total</span>
                <span className="font-mono text-xl font-bold text-primary">
                  ~$500k/yr
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              Plus recruitment costs, onboarding, benefits, office space, and
              management overhead.
            </p>
          </div>

          {/* AI-augmented */}
          <div className="border-2 border-accent rounded-xl p-8 bg-white relative">
            <div className="absolute -top-3 left-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
              AI-AUGMENTED
            </div>
            <h3 className="text-lg font-bold text-primary mb-6">
              Forward Deployment Engineer
            </h3>
            <div className="space-y-4">
              {[
                {
                  item: "Claude Pro subscription",
                  cost: "$20/mo",
                  note: "Unlimited conversations",
                },
                {
                  item: "Claude API (heavy usage)",
                  cost: "$100-500/mo",
                  note: "Token-based, pay-as-you-go",
                },
                {
                  item: "Claude Code (development)",
                  cost: "$200/mo",
                  note: "AI pair programming",
                },
                {
                  item: "Infrastructure (Azure/Vercel)",
                  cost: "$50-200/mo",
                  note: "Cloud hosting & services",
                },
                {
                  item: "Forward Deployment Engineer",
                  cost: "1 salary",
                  note: "Does the work of 5 roles",
                },
              ].map((item) => (
                <div key={item.item} className="flex justify-between items-start text-sm">
                  <div>
                    <span className="text-muted">{item.item}</span>
                    <div className="text-xs text-muted/60">{item.note}</div>
                  </div>
                  <span className="font-mono text-accent font-medium shrink-0 ml-4">
                    {item.cost}
                  </span>
                </div>
              ))}
              <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="font-semibold text-primary">Total AI tooling</span>
                <span className="font-mono text-xl font-bold text-accent">
                  ~$5-10k/yr
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted">
              AI tool costs are under $1,000/month. Even adding a competitive
              salary, you&apos;re saving $300-400k+ annually compared to a full team.
            </p>
          </div>
        </div>

        {/* ROI callout */}
        <div className="mt-12 bg-accent/5 border border-accent/20 rounded-xl p-8 text-center">
          <div className="text-sm text-accent font-semibold uppercase tracking-wider mb-2">
            Return on Investment
          </div>
          <div className="text-3xl md:text-4xl font-bold text-primary">
            Save $300-400k+/year
          </div>
          <p className="mt-3 text-muted max-w-lg mx-auto">
            The entire Claude ecosystem costs less per year than one week of a
            senior developer&apos;s salary. The ROI isn&apos;t marginal — it&apos;s a
            fundamental restructuring of how work gets done.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted">
            <div>
              <span className="font-mono font-bold text-primary text-lg">$0.003</span>
              <div>per 1K input tokens (Haiku)</div>
            </div>
            <div>
              <span className="font-mono font-bold text-primary text-lg">$0.015</span>
              <div>per 1K input tokens (Sonnet)</div>
            </div>
            <div>
              <span className="font-mono font-bold text-primary text-lg">$20</span>
              <div>per month (Claude Pro)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
