import { Link } from "@tanstack/react-router";
import { Globe, Leaf } from "lucide-react";
import logoAsset from "@/assets/neopac-logo.png.asset.json";

const explore = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/products", label: "Farm Products" },
];

const services = [
  "Pineapple Farming",
  "Pineapple Sucker Sales",
  "Planting & Harvesting Services",
  "Sales & Distribution",
];

const hashtags = [
  "#SustainableAgriculture",
  "#FarmToTable",
  "#FarmFresh",
  "#OrganicHarvest",
  "#SustainableFarming",
  "#LocallyGrown",
  "#FreshProduce",
  "#BountifulHarvest",
  "#NeopacFarms",
  "#NatureNurtured",
];

export function SiteFooter() {
  return (
    <footer className="leaf-gradient text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoAsset.url}
                alt="Neopac Farms Limited logo"
                width={52}
                height={52}
                className="h-13 w-13 rounded-full bg-card/95 object-contain p-1"
              />
              <div className="leading-tight">
                <p className="font-display text-xl font-bold">Neopac Farms Limited ®</p>
                <p className="text-sm text-primary-foreground/80">
                  Where sustainable agriculture meets nature's abundance
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/85">
              We specialize in pineapple farming, pineapple sucker sales, planting and
              harvesting, and the sales and distribution of a wide range of farm produce —
              with quality, environmental stewardship, and community at the heart of
              everything we grow.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold">
              <Globe className="h-4 w-4" />
              Shipping &amp; delivery available worldwide
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-primary-foreground/85 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
              Our Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-primary-foreground/85">
                  <Leaf className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 overflow-hidden border-t border-primary-foreground/20 pt-6">
          <div className="flex w-max animate-marquee gap-3 whitespace-nowrap">
            {[...hashtags, ...hashtags].map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold text-primary-foreground/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Neopac Farms Limited ® · Sustainable agriculture,
          community, and fresh wholesome produce.
        </p>
      </div>
    </footer>
  );
}
