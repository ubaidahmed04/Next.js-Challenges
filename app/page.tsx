import Image from "next/image";
import CountDown from "./counter/page";
import Weather from "./weather/page";
import HeroSection from "./components/heroSection";
export default function Home() {
  return (
    <main className=" min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection/>
          </main>
  );
}
