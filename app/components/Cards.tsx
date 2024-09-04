"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import  cardImg  from "@/public/card.jpg";
import  {LayoutTemplate} from "lucide-react";
<LayoutTemplate />
import Image from "next/image";
import courseData from '../data/crash_courses.json'
import Link from "next/link";
interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  }
export function FeatureCourse() {
    console.log(courseData.courses.filter((course:Course)=>course.isFeatured))
    const courseFeature = courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className="py-12 bg-gray-900 flex items-center justify-center flex-col">
        <div>
            <div className="text-center">
                <h2 className="text-3xl uppercase text-green-600 font-bold">Featured Course</h2>
                <p className="text-6xl py-8 uppercase text-white font-bold">Learn With the best</p>
            </div>
        </div>
        <div className="mt-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
            {
                courseFeature.map((ele)=>(
                    <div className="flex justify-center h-full max-w-sm overflow-hidden " key={ele.id}> 
                     <BackgroundGradient className="rounded-[22px] h-full max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
         <Image
          src={cardImg}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {ele.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {ele.description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {ele.price}
          </span>
        </button>
      </BackgroundGradient>
                    </div>
                ))
            }
            </div>

        </div>
        <div className="mt-20  shadow-lg py-4 text-neutral-700 bg-white transition duration-200 px-4  border-neutral-100 text-center">
            <Link href={'/courses'}>
            View All Courses
            </Link>
        </div>
    </div>
  );
}
    //   <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
    //     <Image
    //       src={cardImg}
    //       alt="jordans"
    //       height="400"
    //       width="400"
    //       className="object-contain"
    //     />
    //     <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
    //       Air Jordan 4 Retro Reimagined
    //     </p>

    //     <p className="text-sm text-neutral-600 dark:text-neutral-400">
    //       The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
    //       February 17, 2024. Your best opportunity to get these right now is by
    //       entering raffles and waiting for the official releases.
    //     </p>
    //     <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
    //       <span>Buy now </span>
    //       <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
    //         $100
    //       </span>
    //     </button>
    //   </BackgroundGradient>
