"use client"


import Navbar from "@/components/Navbar";
import Typed from 'typed.js';
import Image from "next/image";
import React,{useRef,useEffect} from 'react' ; 
import { Check } from "lucide-react"; // You'll need to install lucide
export default function Home() {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding','Web Development','Software Engineering','Data Science','Machine Learning'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  

  return (
    <main>
      <div>
        <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
          <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
            <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
              A <span className="font-semibold">free Blogging</span> website
              that provides you different<br className="hidden lg:block" />
              blogs about{" "}
              <span className="font-semibold underline decoration-primary">
              <span ref={el} />
              </span>
            </h1>

            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              A Blogging website that provides you different types of blogs{" "}
              <br className="hidden lg:block" />
              to help you learn and grow new things
            </p>

            <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
              <form
                action="https://www.creative-tim.com/twcomponents/search"
                className="flex flex-wrap justify-between md:flex-row"
              ></form>
            </div>
          </div>

          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              width={500}
              height={500}
              className="w-full h-full max-w-md mx-auto"
            />
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                Choose Your Perfect Plan
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Select the perfect pricing plan that suits your needs
              </p>
            </div>

            <div className="flex flex-wrap items-stretch -mx-4">
              {/* Basic Plan */}
              <div className="w-full px-4 mb-8 md:w-1/3">
                <div className="flex flex-col h-full p-6 transition-transform duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 text-center border-2 hover:border-purple-500">
                  <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                      Basic
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Perfect for starters
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-800 dark:text-white">
                        $9
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="mb-8 space-y-4">
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>Up to 5 projects</span>
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>Basic analytics</span>
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>24/7 support</span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 font-bold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="w-full px-4 mb-8 md:w-1/3">
                <div className="flex flex-col h-full p-6 transition-transform duration-300 transform bg-blue-600 rounded-lg shadow-lg dark:bg-blue-700 hover:scale-105">
                  <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      Pro
                      <span className="ml-2 text-sm font-normal text-blue-200">
                        Popular
                      </span>
                    </h3>
                    <p className="mb-6 text-blue-100">
                      Perfect for professionals
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">$29</span>
                      <span className="text-blue-100">/month</span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="mb-8 space-y-4">
                      <li className="flex items-center text-blue-100">
                        <Check className="w-5 h-5 mr-2 text-white" />
                        <span>Unlimited projects</span>
                      </li>
                      <li className="flex items-center text-blue-100">
                        <Check className="w-5 h-5 mr-2 text-white" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center text-blue-100">
                        <Check className="w-5 h-5 mr-2 text-white" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center text-blue-100">
                        <Check className="w-5 h-5 mr-2 text-white" />
                        <span>Custom integrations</span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 font-bold text-blue-600 transition-colors bg-white rounded hover:bg-gray-100 ">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="w-full px-4 mb-8 md:w-1/3">
                <div className="flex flex-col h-full p-6 transition-transform duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 text-center border-2 hover:border-purple-500">
                  <div className="mb-8">
                    <h3 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">
                      Enterprise
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Perfect for large teams
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-800 dark:text-white">
                        $99
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <ul className="mb-8 space-y-4">
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>Everything in Pro</span>
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>Dedicated support</span>
                      </li>
                      <li className="600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>Custom development</span>
                      </li>
                      <li className="flex items-center text-gray-600 dark:text-gray-300">
                        <Check className="w-5 h-5 mr-2 text-green-500" />
                        <span>SLA agreement</span>
                      </li>
                    </ul>
                  </div>

                  <button className="w-full px-4 py-2 font-bold text-white transition-colors bg-blue-600 rounded hover:bg-blue-700">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white opacity-0 animate-fade-in-up">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Everything you need to build amazing projects
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature Card 1 */}
              <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized for speed and performance, ensuring your projects
                  load instantly
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-purple-600 bg-purple-100 rounded-full dark:bg-purple-900/30">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Modular Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Build with reusable components that you can mix and match
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="p-6 transition-all duration-300 transform bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-green-600 bg-green-100 rounded-full dark:bg-green-900/30">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                  Secure by Default
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with security best practices and regular updates
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white animate-fade-in">
                Featured Blog Posts
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Discover our most popular articles and insights
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Blog Card 1 */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Blog post"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative bg-white p-6 dark:bg-gray-800">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                    Tutorial
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Getting Started with Next.js and Tailwind
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    Learn how to build modern web applications using Next.js and
                    Tailwind CSS
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>5 min read</span>
                    <span className="mx-2">•</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>

              {/* Blog Card 2 */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Blog post"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative bg-white p-6 dark:bg-gray-800">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-600 dark:bg-green-900/30 dark:text-green-300">
                    Guide
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    Advanced Tailwind CSS Techniques
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    Master the art of building beautiful UIs with advanced
                    Tailwind features
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>8 min read</span>
                    <span className="mx-2">•</span>
                    <span>1 week ago</span>
                  </div>
                </div>
              </div>

              {/* Blog Card 3 */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src="https://images.pexels.com/photos/27861771/pexels-photo-27861771/free-photo-of-home-office-table-equipment.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Blog post"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="relative bg-white p-6 dark:bg-gray-800">
                  <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                    Tips & Tricks
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    10 Must-Know React Patterns
                  </h3>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    Level up your React skills with these essential patterns and
                    best practices
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>10 min read</span>
                    <span className="mx-2">•</span>
                    <span>2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
