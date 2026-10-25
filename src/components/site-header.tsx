import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Sprout } from "lucide-react";
import logoAsset from "@/assets/neopac-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="Neopac Farms Limited logo"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full bg-card object-contain p-0.5 shadow-sm"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-tight text-foreground">
              Neopac Farms
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Limited ®
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                  (active
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:bg-pine-deep"
          >
            <Sprout className="h-4 w-4" />
            Order Farm Fresh
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/products"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            <Sprout className="h-4 w-4" />
            Order Farm Fresh
          </Link>
        </nav>
      )}
    </header>
  );
}
