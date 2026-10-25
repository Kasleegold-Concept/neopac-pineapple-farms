import { createFileRoute } from "@tanstack/react-router";
import {
  Globe,
  Mail,
  MapPin,
  Phone,
  Sprout,
  Tractor,
  Warehouse,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Neopac Farms Limited" },
      {
        name: "description",
        content:
          "Get in touch with Neopac Farms Limited®. Call us, email contact@neopacfarms.com, or visit our admin office in Palmgrove, Lagos or our farm in Ogun State, Nigeria.",
      },
      { property: "og:title", content: "Contact Neopac Farms Limited®" },
      {
        property: "og:description",
        content:
          "Phone, email, and locations for Neopac Farms Limited® — sustainable pineapple farming in Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const phones = ["0802 087 8433", "0705 384 6084", "0802 381 5584"];

const locations = [
  {
    icon: Warehouse,
    title: "Admin Office",
    lines: [
      "3 Ibiwoye Oba Street,",
      "off Shyllon Street,",
      "Palmgrove, Lagos.",
    ],
  },
  {
    icon: Tractor,
    title: "Farm Location",
    lines: [
      "Oba, opp Akinbo bus stop,",
      "Abeokuta expressway via",
      "Shagamu — Lagos interchange,",
      "Ogun State, Nigeria.",
    ],
  },
];

function ContactPage() {
  return (
    <div>
      {/* Page header */}
      <section className="leaf-gradient py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun">
            Contact Us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl">
            Let's talk farm fresh
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Questions about our pineapples, suckers, or services? Reach out —
            we would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact channels */}
      <section className="section-band py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Phone */}
            <div className="card-lift rounded-4xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Phone className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                Call us
              </h2>
              <ul className="mt-4 space-y-2.5">
                {phones.map((p) => (
                  <li key={p}>
                    <a
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="text-base font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {p}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email & website */}
            <div className="card-lift rounded-4xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                <Mail className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                Email &amp; web
              </h2>
              <ul className="mt-4 space-y-2.5">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="mailto:contact@neopacfarms.com"
                    className="text-base font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    contact@neopacfarms.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-base font-semibold text-foreground">
                    www.neopacfarms.com
                  </span>
                </li>
              </ul>
            </div>

            {/* Shipping */}
            <div className="card-lift rounded-4xl border border-border bg-leaf p-8 text-primary-foreground shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Sprout className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-bold">
                Worldwide delivery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                Shipping &amp; delivery available worldwide. Whether you need a
                crate of farm-fresh pineapples or quality suckers for your own
                fields, we get it to you — fresh and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Find us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
              Where to reach the farm
            </h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.title}
                className="card-lift rounded-3xl border border-border bg-background p-8 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <loc.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                  {loc.title}
                </h3>
                <address className="mt-2 flex items-start gap-2 not-italic text-sm leading-relaxed text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>
                    {loc.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
