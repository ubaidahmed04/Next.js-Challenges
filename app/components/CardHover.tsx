"use client"
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div className="max-w-5xl mx-auto px-8">
         <div className="text-center py-9">
                <h2 className="text-3xl uppercase text-green-600 font-bold">Featured Course</h2>
                <p className="text-6xl py-8 uppercase text-white font-bold">Learn With the best</p>
            </div>
      <HoverEffect items={courses} />
    </div>
  );
}
export const courses = [
    {
      title: "Mastering React",
      description:
        "An advanced course that covers everything you need to know about building modern web applications with React.js, including hooks, state management, and component architecture.",
      link: "https://example.com/mastering-react",
    },
    {
      title: "Advanced JavaScript",
      description:
        "This course dives deep into JavaScript, covering advanced topics like closures, prototypes, async programming, and ES6+ features to help you write cleaner, more efficient code.",
      link: "https://example.com/advanced-javascript",
    },
    {
      title: "Full Stack Development",
      description:
        "Learn to build scalable web applications from scratch, covering both front-end and back-end technologies like HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
      link: "https://example.com/full-stack-development",
    },
    {
      title: "Python for Data Science",
      description:
        "This course teaches you Python from the ground up and covers essential libraries like NumPy, pandas, and Matplotlib to analyze data and create insightful visualizations.",
      link: "https://example.com/python-for-data-science",
    },
    {
      title: "Web Development Bootcamp",
      description:
        "A comprehensive course that covers everything from HTML and CSS to JavaScript, databases, and server-side programming, preparing you for a career in web development.",
      link: "https://example.com/web-development-bootcamp",
    },
    {
      title: "Introduction to Machine Learning",
      description:
        "Get started with machine learning by understanding the core concepts and algorithms, and learn to build models using Python's Scikit-Learn library.",
      link: "https://example.com/introduction-to-machine-learning",
    },
  ];
  
