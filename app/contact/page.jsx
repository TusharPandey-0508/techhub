"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a question about our blog? Want to contribute? Or just want to say hello? 
          We'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">contact@bloghub.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">123 Blog Street, Content City</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-card rounded-lg p-8 shadow-lg"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input bg-background px-4 py-2"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-4 py-2"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full rounded-md border border-input bg-background px-4 py-2 min-h-[150px]"
                placeholder="Your message"
              />
            </div>

            <Button className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16"
      >
        
      </motion.div>
    </div>
  );
}
