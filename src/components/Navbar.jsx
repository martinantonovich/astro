// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav class="bg-surface-dark fixed w-full z-20 top-0 left-0 border-b border-surface-light">
      <div class="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" class="heading-projects neon-title">ALTOMAR</a>

        {/* Desktop menu */}
        <ul class="hidden md:flex space-x-8">
          {['about','services','projects','testimonials','contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} class="text-gray-300 hover:text-primary transition">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          class="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={open
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        <motion.ul
          class={`absolute top-full left-0 w-full bg-surface-dark md:hidden flex flex-col items-center space-y-4 py-6`}
          initial={{ opacity: 0, height: 0 }}
          animate={open ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['about','services','projects','testimonials','contact'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                class="text-gray-300 hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
}
