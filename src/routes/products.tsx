import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  ShoppingBasket as Basket,
  BookOpen,
  CalendarHeart,
  Citrus,
  CupSoda,
  Flower2,
  Gift,
  GraduationCap,
  HardHat,
  Milk,
  Recycle,
  Sprout as Seedling,
  ShoppingBag,
  Sparkles,
  Sprout,
  Ticket,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Farm Products — Neopac Farms Limited" },
      {
        name: "description",
        content:
          "Explore Neopac Farms Limited®'s farm-fresh offerings: fresh produce, pineapple products, suckers, organic goods, gift baskets, subscription boxes and more — shipped worldwide.",
      },
      { property: "og:title", content: "Farm Products — Neopac Farms Limited®" },
      {
        property: "og:description",
        content:
          "Fresh produce, pineapple specialties, suckers, and artisanal farm goods — delivered fresh from the source, anywhere in the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const categories = [
  { icon: Apple, title: "Fresh Produce", text: "A wide variety of fresh fruits and vegetables, including our signature pineapples and other locally grown produce." },
  { icon: Citrus, title: "Pineapple Products", text: "Fresh pineapples, pineapple juice, pineapple jams, and dried pineapple — the fruit in all its forms." },
  { icon: Seedling, title: "Pineapple Suckers", text: "Top-quality suckers for farmers and gardening enthusiasts looking to grow their own pineapples." },
  { icon: Leaf2Icon, title: "Organic Products", text: "Organic fruits and vegetables for health-conscious consumers." },
  { icon: Basket, title: "Farm-to-Table Products", text: "Farm-fresh items, including honey, eggs, and other produce straight from our fields." },
  { icon: Sparkles, title: "Exotic Fruits", text: "Unique and exotic fruits to cater to adventurous taste buds." },
  { icon: PackageIcon, title: "Canned & Preserved Goods", text: "Canned pineapple slices, preserves, jams, and other long-lasting pineapple products." },
  { icon: Flower2, title: "Artisanal Products", text: "Handmade pineapple-themed goods from local artisans — soaps, candles, and artwork." },
  { icon: CupSoda, title: "Pineapple Beverages", text: "Pineapple-infused and flavored beverages — cocktails, teas, and sodas." },
  { icon: Milk, title: "Health & Wellness", text: "Pineapple supplements, pineapple vinegar, and other natural health products." },
  { icon: Wrench, title: "Gardening Supplies", text: "Tools, fertilizers, and supplies for enthusiasts growing their own produce." },
  { icon: Recycle, title: "Eco-Friendly Products", text: "Reusable bags, composting solutions, and eco-friendly packaging." },
  { icon: Gift, title: "Gift Baskets", text: "Curated gift baskets for special occasions and corporate gifts." },
  { icon: ShoppingBag, title: "Subscription Boxes", text: "A curated selection of our best products, delivered regularly to your door." },
  { icon: Ticket, title: "Farm Tours & Experiences", text: "Tickets for farm tours, workshops, and educational experiences." },
  { icon: BookOpen, title: "Educational Materials", text: "Books, guides, and materials about farming, agriculture, and sustainability." },
  { icon: HardHat, title: "Farm Equipment & Tools", text: "Agricultural tools, machinery, and equipment for farmers and gardeners." },
  { icon: CalendarHeart, title: "Seasonal Specials", text: "Seasonal products and promotions to keep the offerings fresh and exciting." },
];

function Leaf2Icon({ className }: { className?: string }) {
  return <Sprout className={className} />;
}

function PackageIcon({ className }: { className?: string }) {
  return <GraduationCap className={className} />;
}

function ProductsPage() {
  return (
    <div>
      <section className="leaf-gradient py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sun">
            Farm Products
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-bold leading-tight sm:text-6xl">
            Fresh from our fields to the world
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Explore the wide range of offerings from Neopac Farms Limited® — every category
            rooted in quality, sustainability, and the joy of good food.
          </p>
        </div>
      </section>

      <section className="section-band py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div
                key={c.title}
                className="card-lift flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">{c.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Order Today
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground">
            Farm-fresh produce, delivered anywhere on the globe
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our farm-fresh produce, including pineapples and more, is just a click away from
            your doorstep. Enjoy the finest in sustainable agriculture — no matter where you
            are.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-pine-deep"
          >
            Learn about our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
