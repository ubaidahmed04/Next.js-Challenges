import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
        <div className='p-4 relative z-10 w-full text-center'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
           <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the Art of Programming</h1>
           <p className='mt-4 font-normal text-base max-w-lg mx-auto'>Unlock the full potential of your coding skills with our comprehensive course designed to teach you the intricacies of programming. Whether you're a beginner or an experienced developer, this course will guide you through best practices, advanced techniques, and the latest tools used by industry professionals. You'll gain a deep understanding of different programming paradigms, solve complex problems, and build robust, efficient software. By the end of this course, you'll have the confidence and expertise to tackle any programming challenge</p>
           <div className='mt-4'>
            <Link href={'/explorecourses'}>
            <Button borderRadius='1.75rem'>
            Explore Courses

            </Button>
            </Link>

           </div>
        </div>
    </div>
  )
}

export default HeroSection