"use client";
import { Navbar } from "@/components";
import { get } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const mock = new Array(10).fill("Black Purple");
  const [communities, setcommunities] = useState([]);

  useEffect(() => {
    const getCommunities = async () => {
      const { data } = await get("communities");
      setcommunities(data.data);
    };

    getCommunities();
  }, []);

  return (
    <main>
      <Navbar />
      {/* <Navbar />
      <Carousel />
      <MyHub />
      <SideCarousel title="Meet your community!">
        {communities.map((e: any) => (
          <CommunityCard title={e.name} image={e.image} />
        ))}
      </SideCarousel>
      <SideCarousel title="Choose your Favorite Collections!">
        {mock.map((e: string) => (
          <CollectionCard />
        ))}
      </SideCarousel>
      <SideCarousel title="Buy Event Tickets!  ">
        {mock.map((e: string) => (
          <CollectionCard />
        ))}
      </SideCarousel>
      <SideCarousel title="Get a Shoutout! ">
        {mock.map((e: string) => (
          <CollectionCard />
        ))}
      </SideCarousel> */}
    </main>
  );
}
