const useCases = [
  {
    business: "Tradie / Contractor",
    problem: "Tracking quotes, jobs, and invoices across spreadsheets and texts",
    solution:
      "Build your own job management app — quotes, scheduling, invoicing — tailored to exactly how your business works. No monthly SaaS fees forever.",
    saved: "Stop paying $50-200/mo for generic software that doesn't fit",
  },
  {
    business: "Cafe / Restaurant Owner",
    problem: "Juggling POS systems, rosters, supplier orders, and stock tracking",
    solution:
      "Build a custom POS, kitchen display, roster planner, and supplier tracker — all connected. I built one myself (Cafe POS) and can teach you the process.",
    saved: "Replace 3-4 separate subscriptions with one tool you own",
  },
  {
    business: "Accountant / Bookkeeper",
    problem: "Repetitive data entry, client onboarding forms, compliance checklists",
    solution:
      "Automate client intake, generate compliance documents, build a client portal — all with AI assistance. No developer needed.",
    saved: "Save 10-15 hours/week on manual processes",
  },
  {
    business: "Property Manager",
    problem: "Tenant communication, maintenance requests, rent tracking across properties",
    solution:
      "Build a tenant portal with maintenance ticketing, automated rent reminders, and inspection scheduling — exactly how you want it.",
    saved: "Replace expensive property management software",
  },
  {
    business: "Retailer / E-commerce",
    problem: "Inventory across multiple channels, supplier reordering, customer loyalty",
    solution:
      "Build an inventory system that tracks stock across all channels, auto-generates purchase orders, and manages customer rewards.",
    saved: "Own your data instead of locking it in Shopify apps",
  },
  {
    business: "Consultant / Coach",
    problem: "Client scheduling, session notes, invoicing, proposal generation",
    solution:
      "Build a client management system with booking, notes, AI-assisted proposal writing, and integrated invoicing.",
    saved: "Stop stitching together Calendly + Notion + Stripe + Google Docs",
  },
];

export default function BusinessOwners() {
  return (
    <section id="business-owners" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            For Business Owners
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Build your own business app. No dev team needed.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            You know your business better than any software vendor. I teach you how
            to use AI to build the exact tools you need — owned by you, tailored to
            you, no ongoing subscription fees.
          </p>
        </div>

        {/* The pitch */}
        <div className="bg-white border border-border rounded-xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$50-300</div>
              <div className="text-sm text-muted mt-1">/month in SaaS subscriptions</div>
              <div className="text-xs text-muted mt-1">
                for generic tools that don&apos;t quite fit
              </div>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <div className="text-sm font-semibold text-accent mt-1">becomes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">$20/mo</div>
              <div className="text-sm text-muted mt-1">Claude Pro subscription</div>
              <div className="text-xs text-muted mt-1">
                + your knowledge of your own business
              </div>
            </div>
          </div>
        </div>

        {/* Use cases */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc) => (
            <div
              key={uc.business}
              className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-primary">{uc.business}</h3>
              <div className="mt-3 space-y-3">
                <div>
                  <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                    The Problem
                  </div>
                  <p className="text-sm text-muted mt-1">{uc.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-semibold text-accent uppercase tracking-wider">
                    What You&apos;ll Build
                  </div>
                  <p className="text-sm text-muted mt-1">{uc.solution}</p>
                </div>
                <div className="bg-accent/5 border border-accent/10 rounded-lg px-4 py-2">
                  <p className="text-sm font-medium text-accent">{uc.saved}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How it works for business owners */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-10">
            How it works — even if you&apos;ve never written code
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "You describe your business",
                desc: "Tell me (or Claude) exactly how your business works — your workflows, pain points, what you wish existed.",
              },
              {
                step: "2",
                title: "AI builds the first version",
                desc: "Using Claude, we generate a working app in hours, not months. You review it and say what to change.",
              },
              {
                step: "3",
                title: "You learn to iterate",
                desc: "I teach you how to talk to Claude to make changes yourself. Add features, fix things, evolve it — on your own timeline.",
              },
              {
                step: "4",
                title: "You own it forever",
                desc: "No vendor lock-in. No monthly fees to a SaaS company. The app is yours. The skill is yours.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mx-auto">
                  {s.step}
                </div>
                <h4 className="mt-4 font-bold text-primary text-sm">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-accent text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-accent-dark transition-colors"
          >
            Tell Me About Your Business
          </a>
        </div>
      </div>
    </section>
  );
}
