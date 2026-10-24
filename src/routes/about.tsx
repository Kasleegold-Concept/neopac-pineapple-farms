import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplets,
  HandHeart,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Target,
  Telescope,
} from "lucide-react";
import suckers from "@/assets/suckers.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Neopac Farms Limited" },
      {
        name: "description",
        content:
          "Our roots run deep in the fertile soil of sustainable agriculture. Learn about Neopac Farms Limited®'s story, mission, vision, and farming expertise.",
      },
      { property: "og:title", content: "About Neopac Farms Limited®" },
      {
        property: "og:description",
        content:
          "Founded with a vision to provide fresh, nutritious produce — a trusted name in sustainable pineapple farming.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const expertise = [
  {
    icon: Droplets,
    title: "Agronomy",
    text: "Our agronomists ensure that the soil is perfectly balanced for pineapple cultivation, resulting in healthy and flavorful fruits.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We employ eco-friendly farming practices to protect the environment and ensure a long-lasting impact on the land.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Our commitment to quality means that you can trust our produce to be fresh, safe, and delicious.",
  },
  {
    icon: HandHeart,
    title: "Community Engagement",
    text: "We actively engage with our local community, providing support, education, and opportunities to local farmers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Neopac Farms Limited® stays at the forefront of agricultural innovation, constantly seeking new ways to improve our processes and products.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Page header */}
      <section className="leaf-gradient py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun">About Us</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl">
            About Neopac Farms Limited ®
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Our roots run deep in the fertile soil of sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-band py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
              From a humble pineapple farm to a trusted name
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded with a vision to provide fresh, nutritious produce to our local
              community and beyond, we have grown into a trusted name in the farming
              business.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Our journey began with a humble pineapple farm, but our ambitions quickly
              expanded. Today, we not only cultivate high-quality pineapples but also offer a
              range of services to fellow farmers and consumers alike. We take pride in our
              hands-on approach, prioritizing organic and sustainable farming practices. Our
              mission is to make a positive impact on the agricultural industry and our
              environment.
            </p>
          </div>
          <img
            src={suckers}
            alt="Young pineapple suckers ready for planting"
            loading="lazy"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-4xl object-cover shadow-xl"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card-lift rounded-4xl border border-border bg-background p-8 shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our mission at Neopac Farms Limited® is to promote sustainable agriculture,
                create economic opportunities for farmers, and provide the highest quality
                farm produce to our customers. We are committed to environmental
                responsibility, community development, and the well-being of our employees.
              </p>
            </div>
            <div className="card-lift rounded-4xl border border-border bg-leaf p-8 text-primary-foreground shadow-sm sm:p-10">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <Telescope className="h-6 w-6" />
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                We envision a future where farming is not only a source of food but also a
                catalyst for positive change. We strive to be a leader in sustainable farming
                practices, setting an example for the industry while providing fresh,
                wholesome produce to nourish communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-band py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
              Our Farming Expertise
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground">
              What sets our farm apart
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our success is the result of years of experience, dedication, and a genuine
              love for the land.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e) => (
              <div
                key={e.title}
                className="card-lift rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <e.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing invite */}
      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Thank you for being part of our journey
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you are a farmer looking for quality pineapple suckers or a consumer
            seeking fresh, locally grown produce, we are here to serve you with integrity,
            expertise, and a passion for sustainable farming.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-pine-deep"
          >
            Discover our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
