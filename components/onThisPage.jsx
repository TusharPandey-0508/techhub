"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Create a temporary div to parse the HTML content
    const div = document.createElement('div');
    div.innerHTML = htmlContent;

    // Find all h2 elements
    const h2Elements = div.getElementsByTagName('h2');
    
    // Convert HTMLCollection to array and extract necessary info
    const headingsArray = Array.from(h2Elements).map((heading, index) => ({
      id: heading.id || `heading-${index}`,
      text: heading.textContent,
    }));

    setHeadings(headingsArray);
  }, [htmlContent]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="w-64 p-4 space-y-4 border-l absolute top-24 right-56 my-10">
      <h3 className="font-semibold text-xl">On this page</h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={cn(
              "block w-full text-left text-sm text-muted-foreground",
              "hover:text-foreground transition-colors",
              "py-1 px-2 rounded-md hover:bg-accent"
            )}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default OnThisPage;
