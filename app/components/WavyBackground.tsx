"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import {AnimatedTooltipPreview} from "../components/AnimatedTooltip";

export function WavyBackgroundDemo() {
  return (
      <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="max-w-7xl mx-auto flex items-center justify-center overflow-hidden flex-col">

      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mb-8">
        Meet our Instructor
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center mb-4">
        Discover the talented professional who will guide your musical journey
      </p>
      <AnimatedTooltipPreview/>
    </WavyBackground>
    </div>
  );
}
