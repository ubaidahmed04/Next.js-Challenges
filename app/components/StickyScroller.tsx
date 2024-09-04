"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import  python  from "@/public/python.jpg";
import  fullstack  from "@/public/full stack.jpg";
import  javascript  from "@/public/javascript.png";
import  react  from "@/public/react.png";

const content = [
    {
      title: "Introduction to Python",
      description:
        "Start your programming journey with Python. Learn the basics of syntax, variables, and functions. This course is perfect for beginners who want to get a strong foundation in one of the most popular programming languages.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={python}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="JavaScript Essentials"
        />
      </div>
      ),
    },
    {
      title: "JavaScript Essentials",
      description:
        "Master the fundamentals of JavaScript, the language of the web. This course covers everything from variables and functions to asynchronous programming and DOM manipulation. Perfect for aspiring web developers.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={javascript}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="JavaScript Essentials"
          />
        </div>
      ),
    },
    {
      title: "Advanced React.js",
      description:
        "Dive deeper into React.js with this advanced course. Learn about hooks, context API, state management with Redux, and how to build scalable applications. Ideal for developers looking to enhance their React skills.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={react}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="JavaScript Essentials"
          />
        </div>
      ),
    },
    {
      title: "Full Stack Web Development",
      description:
        "Become a full stack web developer with our comprehensive course. Learn both front-end and back-end technologies including HTML, CSS, JavaScript, Node.js, Express, and MongoDB. Build complete web applications from scratch.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src={fullstack}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="JavaScript Essentials"
          />
        </div>
      ),
    },
  ];
  
export function StickyScroller() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
