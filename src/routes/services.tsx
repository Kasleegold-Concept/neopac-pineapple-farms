import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplets,
  FlaskConical,
  Globe2,
  HandHeart,
  Leaf,
  PackageCheck,
  Tractor,
  Trophy,
} from "lucide-react";
import heroField from "@/assets/hero-field.jpg";
import harvest from "@/assets/harvest.jpg";
import suckers from "@/assets/suckers.jpg";
import distribution from "@/assets/distribution.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Our Services — Neopac Farms Limited" },
      {
        name: "description",
        content:
          "Pineapple farming, pineapple sucker sales, planting and harvesting services, and sales and distribution of farm produce — plus twenty pineapple specialties from Neopac Farms Limited®.",
      },
      { property: "og:title", content: "Our Services — Neopac Farms Limited®" },
      {
        property: "og:description",
        content:
          "From quality pineapple suckers to professional harvesting services and worldwide produce distribution.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    icon: Tractor,
    title: "Pineapple Farming",
    text: "We specialize in pineapple cultivation, maintaining high standards of quality and sustainability in our processes. Our pineapples are known for their sweet, juicy flavor and freshness — grown with care from sucker to harvest.",
    image: heroField,
    alt: "Neopac pineapple fields",
  },
  {
    icon: Leaf,
    title: "Pineapple Sucker Sales",
    text: "Looking to start your pineapple farm? We provide top-quality pineapple suckers for sale, giving you a head start in pineapple farming with healthy, vigorous planting material.",
    image: suckers,
    alt: "Pineapple suckers in the nursery",
  },
  {
    icon: HandHeart,
    title: "Planting & Harvesting Services",
    text: "We offer professional planting and harvesting services to fellow farmers, ensuring optimal yields and quality. Our experienced team handles every stage with precision and care.",
    image: harvest,
    alt: "Harvesting a ripe pineapple",
  },
  {
    icon: Globe2,
    title: "Sales & Distribution",
    text: "Neopac Farms Limited® is your source for a variety of farm produce, including fruits, vegetables, and more. We ensure that our products reach you fresh and directly from the source — wherever you are in the world.",
    image: distribution,
    alt: "Produce packed for distribution",
  },
];

const specialties = [
  { icon: Leaf, title: "Organic Pineapples", text: "Grown without synthetic pesticides, herbicides, or chemical fertilizers." },
  { icon: Trophy, title: "Golden Pineapples", text: "Specialty varieties like Queen Victoria and Honey Gold with unique flavors." },
  { icon: PackageCheck, title: "Pineapple Juice Production", text: "Fresh juices, canned juices, and concentrates." },
  { icon: PackageCheck, title: "Pineapple Canning", text: "Slices, chunks, and tidbits for long shelf life." },
  { icon: PackageCheck, title: "Dried Pineapples", text: "Dehydrated slices and rings — a tasty, healthy snack." },
  { icon: PackageCheck, title: "Jam & Preserves", text: "Delicious pineapple spreads, jams, and preserves." },
  { icon: FlaskConical, title: "Pineapple Vinegar", text: "Crafted for culinary and health purposes." },
  { icon: FlaskConical, title: "Pineapple Wine", text: "Tropical wines with distinct, memorable flavors." },
  { icon: Leaf, title: "Pineapple By-products", text: "Peels for livestock feed and natural fibers for textiles." },
  { icon: Leaf, title: "Fertilizer Production", text: "Recycling pineapple waste into organic fertilizer." },
  { icon: Leaf, title: "Sucker Sales", text: "High-quality suckers for farmers ready to plant." },
  { icon: Leaf, title: "Pineapple Landscaping", text: "Ornamental landscaping and erosion control." },
  { icon: FlaskConical, title: "Research & Development", text: "Improving yield, disease resistance, and quality." },
  { icon: Globe2, title: "Exportation", text: "Fresh and processed pineapple products for international markets." },
  { icon: Trophy, title: "Organic Certification", text: "Production and certification of organic pineapples." },
  { icon: ShieldIcon, title: "Pest Control Services", text: "Solutions that keep pineapple farms healthy." },
  { icon: ShieldIcon, title: "Disease Management", text: "Identifying and managing pineapple diseases for healthy crops." },
  { icon: Trophy, title: "Marketing & Branding", text: "Strong brands and strategies for pineapple products." },
  { icon: HandHeart, title: "Farm Tours", text: "Tourism and educational programs on the farm." },
  { icon: HandHeart, title: "Contract Farming", text: "A consistent, high-quality supply partner for food companies." },
];

function ShieldIcon({ className }: { className?: string }) {
  return <Droplets className={className} />;
}

function ServicesPage() {
  return (
    <div>
      <section className="leaf-gradient py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun">Services</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl">
            Our comprehensive services
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            From the first sucker in the soil to produce on your doorstep — we grow, harvest,
            and deliver with integrity.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      <section className="section-band py-20 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={
                "grid items-center gap-10 lg:grid-cols-2 " +
                (i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : "")
              }
            >
              <img
                src={s.image}
                alt={s.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/3] w-full rounded-4xl object-cover shadow-xl"
              />
              <div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.text}</p>
                <Link
                  to="/products"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-pine-deep"
                >
                  Explore offerings <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Beyond the Field
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
              Twenty high-demand pineapple specialties
            </h2>
            <p className="mt-4 text-muted-foreground">
              The pineapple industry offers rich opportunities at every stage — here is where
              our expertise can take you.
            </p>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((sp) => (
              <div
                key={sp.title}
                className="card-lift rounded-2xl border border-border bg-background p-5"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-primary">
                  <sp.icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-foreground">{sp.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{sp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="leaf-gradient py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to grow with us?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/90">
            Whether you need quality suckers, harvesting support, or a reliable supply of
            farm-fresh produce, our team is ready to serve you.
          </p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pine-deep transition-colors hover:bg-sun hover:text-accent-foreground"
          >
            See what we offer
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
