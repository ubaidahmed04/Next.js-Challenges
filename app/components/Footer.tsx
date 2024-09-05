import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Programming Academy</h3>
          <p className="text-sm mb-4">
            Learn the latest in programming with our experienced instructors and modern curriculum.
          </p>
          <p className="text-sm">© 2024 Programming Academy. All rights reserved.</p>
        </div>
  
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="#about" className="hover:underline">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#courses" className="hover:underline">Courses</a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="hover:underline">Contact Us</a>
            </li>
          </ul>
        </div>
  
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook icon */}
                <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.408.593 24 1.326 24H12.81v-9.309H9.692v-3.632h3.119V8.413c0-3.1 1.894-4.785 4.662-4.785 1.325 0 2.464.098 2.797.142v3.24h-1.918c-1.504 0-1.796.714-1.796 1.763v2.311h3.59l-.468 3.632h-3.122V24h6.116c.733 0 1.326-.593 1.326-1.326V1.326C24 .593 23.408 0 22.675 0z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter icon */}
                <path d="M24 4.557a9.829 9.829 0 01-2.828.775A4.92 4.92 0 0023.338 3.1a9.837 9.837 0 01-3.127 1.195A4.916 4.916 0 0016.616 2c-2.713 0-4.916 2.202-4.916 4.917 0 .385.044.76.127 1.118C7.728 7.903 4.1 5.925 1.671 2.903a4.917 4.917 0 00-.665 2.474c0 1.708.869 3.215 2.188 4.099A4.904 4.904 0 01.964 8.87v.062a4.915 4.915 0 003.94 4.818 4.904 4.904 0 01-2.212.084 4.918 4.918 0 004.594 3.417A9.865 9.865 0 010 20.813a13.94 13.94 0 007.548 2.212c9.05 0 14.003-7.504 14.003-14.003 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn icon */}
                <path d="M22.23 0H1.77C.792 0 0 .772 0 1.726v20.547C0 23.229.792 24 1.77 24h20.46c.978 0 1.77-.772 1.77-1.727V1.726C24 .772 23.208 0 22.23 0zM7.078 20.451H3.573V9.031h3.505v11.42zm-1.752-13.04a2.032 2.032 0 110-4.063 2.032 2.032 0 010 4.063zm16.082 13.04h-3.505v-5.682c0-1.354-.026-3.095-1.887-3.095-1.887 0-2.176 1.475-2.176 2.995v5.782h-3.505V9.031h3.366v1.561h.047c.47-.889 1.618-1.826 3.332-1.826 3.562 0 4.219 2.344 4.219 5.39v6.294z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer