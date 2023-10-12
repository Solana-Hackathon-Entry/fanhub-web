"use client";
import {
  Navbar,
  HottestNfts,
  Footer,
  OdysseySegment,
  FeaturedCommunities,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeaturedCommunities />
      <HottestNfts />
      <OdysseySegment />
      <Footer />
    </main>
  );
}
