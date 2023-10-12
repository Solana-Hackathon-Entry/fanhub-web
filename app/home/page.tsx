"use client";
import {
  Navbar,
  Hero,
  Engagement,
  Seize,
  DetailsSegment,
  Footer,
  FeaturedCommunities,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeaturedCommunities />

      <Footer />
    </main>
  );
}
