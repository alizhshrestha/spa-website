'use client';

import React from 'react';
import { FaHandsHelping, FaSpa, FaSmile } from 'react-icons/fa';

export default function OurPromiseSection() {
    const promises = [
        {
            icon: <FaHandsHelping size={32} className="text-amber-500" />,
            title: 'Personalized Service',
            description: 'Tailored treatments to match your individual needs and preferences.'
        },
        {
            icon: <FaSpa size={32} className="text-amber-500" />,
            title: 'World-Class Treatments',
            description: 'Premium techniques and products for exceptional wellness experiences.'
        },
        {
            icon: <FaSmile size={32} className="text-amber-500" />,
            title: 'Satisfaction Guaranteed',
            description: 'We are committed to delivering results and ensuring your complete satisfaction.'
        }
    ];

    return (
        <section className="py-16 bg-[var(--color-surface)]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Our Promise</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {promises.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4">
                            {item.icon}
                            <h3 className="text-xl font-semibold text-[var(--color-foreground)]">{item.title}</h3>
                            <p className="text-[var(--color-muted)]">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
