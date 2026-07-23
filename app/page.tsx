import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WhyMe from "@/components/sections/WhyMe";
import Audiences from "@/components/sections/Audiences";
import Plan from "@/components/sections/Plan";
import Benchmarks from "@/components/sections/Benchmarks";
import Measurement from "@/components/sections/Measurement";
import Campaigns from "@/components/sections/Campaigns";
import ChannelMix from "@/components/sections/ChannelMix";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyMe />
        <Audiences />
        <Plan />
        <Benchmarks />
        <Measurement />
        <Campaigns />
        <ChannelMix />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
