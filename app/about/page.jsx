// import React from 'react'


// // pages/about.js or app/about/page.js
// import Image from 'next/image'

// export default function About() {
//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Hero Section */}
//       <section className="text-center py-16 rounded-xl mb-12">
//         <h1 className="text-5xl font-bold mb-4">About Us</h1>
//         <p className="text-xl text-gray-600">We're passionate about creating amazing experiences</p>
//       </section>

//       {/* Company Info Section */}
//       <section className="grid md:grid-cols-2 gap-8 mb-12">
//         <div className="space-y-4">
//           <h2 className="text-3xl font-semibold">Our Story</h2>
//           <p className="text-gray-600 leading-relaxed">
//             Founded in [year], we've been dedicated to [your company's mission].
//             Our journey began with a simple idea: [your company's origin story].
//           </p>
//         </div>
//         <div className="rounded-xl overflow-hidden shadow-lg">
//           <Image
//             src="/pexels-photo-574071.webp"
//             alt="Company Image"
//             width={500}
//             height={300}
//             className="object-cover"
//           />
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {teamMembers.map((member) => (
//             <div key={member.id} className="text-center">
//               <div className="mb-4">
//                 <Image
//                   src="/pexels-photo-574071.webp"
//                   alt={member.name}
//                   width={200}
//                   height={200}
//                   className="rounded-full mx-auto shadow-lg"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold">{member.name}</h3>
//               <p className="text-gray-600">{member.role}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="mb-12">
//         <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {values.map((value) => (
//             <div key={value.id} className=" p-8 rounded-xl shadow-md dark:bg-gray-900 hover:shadow-xl transition-shadow">
//               <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
//               <p className="text-gray-600">{value.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="text-center rounded-xl py-16">
//         <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
//         <p className="text-gray-600 mb-6">We'd love to hear from you!</p>
//         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200">
//           Contact Us
//         </button>
//       </section>
//     </main>
//   )
// }

// // Keep the same sample data
// const teamMembers = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "CEO",
//     image: "/team/john-doe.jpg"
//   },
//   // Add more team members...
// ]

// const values = [
//   {
//     id: 1,
//     title: "Innovation",
//     description: "We constantly push boundaries and embrace new technologies."
//   },
//   // Add more values...
// ]

import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 rounded-xl mb-12">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          We&apos;re passionate about creating amazing experiences
        </p>
      </section>

      {/* Company Info Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in [year], we&apos;ve been dedicated to [your company&apos;s mission].
            Our journey began with a simple idea: [your company&apos;s origin story].
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/pexels-photo-574071.webp"
            alt="Company Image"
            width={500}
            height={300}
            className="object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <div className="mb-4">
                <Image
                  src="/pexels-photo-574071.webp"
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto shadow-lg"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="p-8 rounded-xl shadow-md dark:bg-gray-900 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center rounded-xl py-16">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">We&apos;d love to hear from you!</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:ring-4 focus:ring-blue-200">
          Contact Us
        </button>
      </section>
    </main>
  )
}

// Keep the same sample data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    image: "/team/john-doe.jpg",
  },
  // Add more team members...
]

const values = [
  {
    id: 1,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
  },
  // Add more values...
]
