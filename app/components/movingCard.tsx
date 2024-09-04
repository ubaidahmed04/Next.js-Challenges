"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCard() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex-col flex items-center justify-center">
        <div>
            <h1 className="text-3xl text-white font-bold py-9 text-center">What Our Students Say About Our Programming Courses</h1>
        </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
    {
      quote:
        "This React course was a game-changer for me. I went from struggling with basic concepts to building complex applications with ease. The hands-on projects were particularly helpful.",
      name: "John Doe",
      title: "React Developer",
    },
    {
      quote:
        "The Advanced JavaScript course taught me how to write cleaner, more efficient code. The deep dive into closures and async programming was especially eye-opening.",
      name: "Jane Smith",
      title: "Senior JavaScript Engineer",
    },
    {
      quote:
        "As someone transitioning into full-stack development, this course provided the perfect mix of theory and practice. The instructors explained complex topics in a way that was easy to understand.",
      name: "Emily Johnson",
      title: "Full Stack Developer",
    },
    {
      quote:
        "Python for Data Science opened up a whole new world for me. The course covered everything from basic Python syntax to advanced data analysis techniques with pandas and Matplotlib.",
      name: "Michael Brown",
      title: "Data Scientist",
    },
    {
      quote:
        "This Full Stack Development course gave me the skills I needed to build robust, scalable web applications from scratch. The projects were challenging but incredibly rewarding.",
      name: "Sarah Lee",
      title: "Web Developer",
    },
  ];
  