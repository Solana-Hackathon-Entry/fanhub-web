"use client";
import { Navbar, HottestNfts, Footer, FeaturedCommunities } from "@/components";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeaturedCommunities />
      <HottestNfts />

      <Footer />
    </main>
  );
}
