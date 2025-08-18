"use client";

import { motion } from "framer-motion";
import { Calendar, Search, Ticket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8"
        >
          Learn More About <span className="text-emerald-400">Event Scrapper</span>
        </motion.h1>

        <p className="text-center text-lg text-gray-300 mb-12">
          Discover upcoming events, book tickets, and get personalized recommendations —
          all powered by real-time event scraping technology.
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <Calendar className="w-10 h-10 text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Real-Time Events</h2>
            <p className="text-gray-400">
              Get the latest events scraped from reliable sources in real-time.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <Search className="w-10 h-10 text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Smart Search</h2>
            <p className="text-gray-400">
              Easily search events by category, date, or location with a smooth UI.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <Ticket className="w-10 h-10 text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Seamless Booking</h2>
            <p className="text-gray-400">
              Book tickets directly from the app with a user-friendly booking flow.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <Sparkles className="w-10 h-10 text-emerald-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Personalized Recommendations</h2>
            <p className="text-gray-400">
              AI-powered recommendations to suggest events based on your interests.
            </p>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Built With Modern Tech</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Event Scrapper is built using <span className="text-emerald-400">Next.js</span>, 
            <span className="text-emerald-400"> TailwindCSS</span>, and 
            <span className="text-emerald-400"> Local Storage</span> for data storage, 
            ensuring speed, scalability, and smooth user experience.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/signup" prefetch={false}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg transition"
            >
              Start Exploring Events
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
