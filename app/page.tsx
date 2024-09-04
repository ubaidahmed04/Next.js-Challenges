import Image from "next/image";
import CountDown from "./counter/page";
import Weather from "./weather/page";
import HeroSection from "./components/heroSection";
import {FeatureCourse} from "./components/Cards";
import {StickyScroller} from "./components/StickyScroller";
import {MovingCard} from "./components/movingCard";
import {CardHover} from "./components/CardHover";
export default function Home() {
  return (
    <main className=" min-h-screen  bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection/>
       <FeatureCourse/>
       <StickyScroller/>
       <MovingCard/>
       <CardHover/>
          </main>
  );
}
