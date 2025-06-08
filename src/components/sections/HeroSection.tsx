'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <main>
            {/* Hero section */}
            <section className="relative h-[90vh] bg-[url('/images/spa-hero.jpg')] bg-cover bg-center bg-fixed">
                {/* Dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 dark:from-black/20 dark:to-black/50 flex items-center justify-center">
                    <div className="max-w-4xl text-center px-4 sm:px-6 lg:px-8">
                        {/* Animated title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-5xl md:text-7xl font-serif mb-6 text-white leading-tight"
                        >
                            Experience True <span className="text-amber-300">Serenity</span>
                        </motion.h1>

                        {/* Animated subtitle with delayed animation */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl mb-10 text-amber-50 max-w-2xl mx-auto"
                        >
                            Rejuvenate your mind, body & soul with our premium spa treatments and expert therapists
                        </motion.p>

                        {/* Animated CTA button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href='/services'
                                className="inline bg-amber-500 hover:bg-amber-600 text-amber-900 font-medium px-8 py-4 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-amber-400 dark:hover:bg-amber-300"
                            >
                                Book Your Experience
                            </Link>
                        </motion.button>

                        {/* Secondary CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-6"
                        >
                            <Link
                                href='/services'
                                className="text-amber-200 hover:text-amber-100 underline underline-offset-4 font-medium dark:text-amber-300 dark:hover:text-amber-200"
                            >
                                Explore Our Services
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    className="absolute bottom-10 left-0 right-0 flex justify-center"
                >
                    <div className="w-16 h-1 bg-amber-400 rounded-full dark:bg-amber-300"></div>
                </motion.div>
            </section>
        </main>
    );
}
