import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplets,
  Globe2,
  HandHeart,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Tractor,
} from "lucide-react";
import heroField from "@/assets/hero-field.jpg";
import harvest from "@/assets/harvest.jpg";
import suckers from "@/assets/suckers.jpg";
import distribution from "@/assets/distribution.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Neopac Farms Limited — Sustainable Pineapple Farming" },
      {
        name: "description",
        content:
          "Welcome to Neopac Farms Limited® — where sustainable agriculture meets nature's abundance. Pineapple farming, sucker sales, planting and harvesting services, and farm-fresh produce shipped worldwide.",
      },
      { property: "og:title", content: "Neopac Farms Limited — Sustainable Pineapple Farming" },
      {
        property: "og:description",
        content:
          "Join us on a journey of growth, community, and fresh, wholesome produce. #SustainableAgriculture #FarmToTable",
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
    text: "We specialize in pineapple cultivation, maintaining high standards of quality and sustainability. Our pineapples are known for their sweet, juicy flavor and freshness.",
    image: heroField,
    alt: "Rows of pineapple plants in a sunlit field",
  },
  {
    icon: SproutIcon,
    title: "Pineapple Sucker Sales",
    text: "Looking to start your pineapple farm? We provide top-quality pineapple suckers for sale, giving you a head start in pineapple farming.",
    image: suckers,
    alt: "Young pineapple suckers being planted",
  },
  {
    icon: HandHeart,
    title: "Planting & Harvesting",
    text: "We offer professional planting and harvesting services to fellow farmers, ensuring optimal yields and quality at every step of the season.",
    image: harvest,
    alt: "A farmer holding a freshly harvested pineapple",
  },
  {
    icon: Globe2,
    title: "Sales & Distribution",
    text: "Neopac Farms Limited® is your source for a variety of farm produce, including fruits, vegetables, and more — delivered fresh and directly from the source.",
    image: distribution,
    alt: "Crates of fresh pineapples loaded for delivery",
  },
];

function SproutIcon({ className }: { className?: string }) {
  return <Leaf className={className} />;
}

const expertise = [
  {
    icon: Droplets,
    title: "Agronomy",
    text: "Our agronomists ensure the soil is perfectly balanced for pineapple cultivation, resulting in healthy and flavorful fruits.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We employ eco-friendly farming practices to protect the environment and ensure a long-lasting impact on the land.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Our commitment to quality means you can trust our produce to be fresh, safe, and delicious.",
  },
  {
    icon: HandHeart,
    title: "Community Engagement",
    text: "We actively engage with our local community, providing support, education, and opportunities to local farmers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We stay at the forefront of agricultural innovation, constantly seeking new ways to improve our processes and products.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={heroField}
          alt="Pineapple fields at sunrise"
          width={1920}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/95 via-pine-deep/80 to-pine-deep/30" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <div className="max-w-2xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-sun" />
              Sustainable Agriculture · Farm to Table
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Welcome to Neopac Farms{" "}
              <span className="text-sun">Limited ®</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
              Where sustainable agriculture meets nature's abundance. Join us on a journey of
              growth, community, and fresh, wholesome produce — straight from our pineapple
              fields to your table.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/40 transition-all hover:bg-white hover:text-pine-deep"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Shop Farm Fresh
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story teaser */}
      <section className="section-band py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <img
              src={harvest}
              alt="Freshly harvested pineapple"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-4xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-5 -right-5 hidden rounded-3xl bg-leaf px-6 py-4 text-white shadow-lg sm:block">
              <p className="font-display text-2xl font-bold">#FarmToTable</p>
              <p className="text-xs text-white/80">Fresh from the field, every time</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Roots
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Passionate about the land, <span className="text-leaf-gradient">rooted in community</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              At Neopac Farms Limited®, we are passionate about agriculture, sustainability,
              and community. We specialize in pineapple farming, pineapple sucker sales,
              planting and harvesting, and the sales and distribution of a wide range of farm
              produce.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our journey began with a humble pineapple farm, but our ambitions quickly
              expanded. Today, we cultivate high-quality pineapples and offer a range of
              services to fellow farmers and consumers alike — with organic and sustainable
              practices at the heart of our work.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-pine-deep"
            >
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our comprehensive services
            </h2>
            <p className="mt-4 text-muted-foreground">
              From the first sucker in the soil to produce on your doorstep — we grow,
              harvest, and deliver with integrity.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="card-lift group overflow-hidden rounded-3xl border border-border bg-background shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="leaf-gradient py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun">
              Our Farming Expertise
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Years of experience, a genuine love for the land
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <e.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{e.text}</p>
              </div>
            ))}
            <div className="flex flex-col items-start justify-center rounded-3xl border border-dashed border-white/30 bg-transparent p-6">
              <h3 className="font-display text-lg font-bold text-sun">And much more</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                Discover how our expertise serves farmers, consumers, and communities alike.
              </p>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white hover:text-sun"
              >
                About us <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Worldwide shipping banner */}
      <section className="relative overflow-hidden py-24">
        <img
          src={distribution}
          alt="Farm produce packed for delivery"
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-deep/95 via-pine-deep/85 to-pine-deep/40" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">
              <Globe2 className="h-3.5 w-3.5" />
              Worldwide Delivery
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Experience the taste of Neopac Farms, anywhere on the globe
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/90">
              With shipping and delivery available to every corner of the world, our
              farm-fresh produce — including pineapples and more — is just a click away from
              your doorstep. Enjoy the finest in sustainable agriculture, no matter where you
              are.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/40 transition-colors hover:bg-white hover:text-pine-deep"
            >
              Browse our products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
