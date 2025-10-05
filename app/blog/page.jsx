// pages/blog.tsx or pages/blog.js
import Link from 'next/link'
import Image from 'next/image'
import fs from "fs";
import matter from 'gray-matter';
import React from 'react';


const dirContent = fs.readdirSync("content","utf-8");


const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`,"utf-8")
  const {data} = matter(fileContent)
  return data
})


// const blogs = [
//   {
//     title: "Getting Started with Next.js",
//     description: "Learn how to build modern web applications with Next.js, the React framework for production.",
//     slug: "first-blog",
//     date: "2024-01-15",
//     author: {
//       name: "John Doe",
//       avatar: "/pexels-photo-574071.webp"
//     },
//     image: "/pexels-photo-574071.webp",
//     readTime: "5 min read"
//   },
//   {
//     title: "Getting Started with Next.js",
//     description: "Learn how to build modern web applications with Next.js, the React framework for production.",
//     slug: "second-blog",
//     date: "2024-01-15",
//     author: {
//       name: "John Doe",
//       avatar: "/pexels-photo-574071.webp"
//     },
//     image: "/pexels-photo-574071.webp",
//     readTime: "5 min read"
//   },
//   {
//     title: "Getting Started with Next.js",
//     description: "Learn how to build modern web applications with Next.js, the React framework for production.",
//     slug: "third-blog",
//     date: "2024-01-15",
//     author: {
//       name: "John Doe",
//       avatar: "/pexels-photo-574071.webp"
//     },
//     image: "/pexels-photo-574071.webp",
//     readTime: "5 min read"
//   },
  
//   // Add more blog entries...
// ]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link 
              href={`/blogpost/${blog.slug}`} 
              key={index}
              className="group"
            >
              <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-4px]">
                {/* Image Container */}
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt="my high blog"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Image
                        src={blog.image}
                        alt="images"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="ml-2">{blog.author}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <time dateTime={blog.date}>
              {new Date(blog.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
                   
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {blog.description}
                  </p>

                  {/* Read More Link */}
                  <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                    Read More
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
{/* <div className="max-w-5xl mx-auto p-4 dark:text-gray-200">
<h1 className="text-3xl font-bold mb-4">{data.title}</h1>
<p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
  &quot;{data.description}&quot;
</p>
<div className="flex-gap-2">
  <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
  <p className="text-sm text-gray-500 mb-4">{data.date}</p>
</div>

<div
  dangerouslySetInnerHTML={{ __html: htmlContent }}
  className="prose"
></div>
</div> */}