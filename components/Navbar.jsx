// components/Navbar.jsx
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ThemeButton";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const [progress,setProgress] = useState(0);
const pathame = usePathname()

  useEffect(()=>{

    setProgress(30);

    setTimeout(()=>{
      setProgress(70);
    },100);

    setTimeout(()=>{
      setProgress(100);
    },500)
    
  },[pathame])

  useEffect(()=>{
    setTimeout(()=>{
      setProgress(0)
    },700);
  },[])

  return (
    <nav className="p-4 border-b    bg-background/95 sticky top-0 backdrop:blur z-40">
      {/* backdrop to give glass effect */}
      <LoadingBar
        color='#933ce6'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className=" container max-w-7xl mx-auto px-2 sm:px-6  lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              BlogHub
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>

            <Button variant="outline">Login</Button>
            <Button variant="outline">SignUp</Button>

            <ModeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
          <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
            >
            
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <Button variant="outline">Login</Button>
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              <Button variant="outline">SignUp</Button>
            </Link>

            
          </div>
          
        </div>
        
      )}
     
    </nav>
  );
}
