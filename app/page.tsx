"use client";
import {
  Navbar,
  Hero,
  Engagement,
  Seize,
  DetailsSegment,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Engagement />
      <Seize />
      <DetailsSegment />
      <Footer />
    </main>
  );
}
