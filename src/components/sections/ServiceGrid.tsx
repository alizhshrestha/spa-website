'use client';

import React, { useState } from 'react';
import { services } from '@/constants/service';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../cards/ServiceCard';

export default function ServiceGrid({ isServicePage }: { isServicePage: boolean }) {
    const [showMore, setShowMore] = useState(false);

    const visibleServices = isServicePage ? services : services.slice(0, 6);
    const remainingServices = services.slice(6, services.length);

    const topRef = React.useRef<HTMLDivElement>(null);
    const bottomRef = React.useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        const value = !showMore;
        setShowMore(value);
        setTimeout(() => {
            if (value) {
                bottomRef.current?.scrollIntoView({ behavior: "smooth" });
            } else if (!value) {
                topRef.current?.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    }

    return (
        <section id="services" className="py-16 bg-[var(--color-background)] mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-[var(--color-foreground)] mb-12">
                    Our Services
                </h2>
                <motion.div
                    layout
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {visibleServices.map((service) => (
                        <motion.div
                            ref={topRef}
                            key={service.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}

                    {showMore &&
                        remainingServices.map((service) => (
                            <motion.div
                                ref={bottomRef}
                                key={service.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ServiceCard service={service} />
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
            {!isServicePage && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleToggle}
                        className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded-full shadow-lg hover:bg-amber-600 transition-all text-lg"
                    >
                        {showMore ? 'See Less' : 'See More'}
                        <ChevronDown
                            className={`transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>
            )}
        </section>
    )
}
