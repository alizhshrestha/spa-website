'use client';

import { services } from "@/constants/service";
import ServiceCard from "../cards/ServiceCard";
import { useState } from "react";

export default function ServiceGrid({isServicePage}:{isServicePage: boolean}) {
    const [showAll, setShowAll] = useState(false);

    const visibleServices = showAll || isServicePage ? services : services.slice(0, 6);

    return (
        <section id="services" className="py-16 bg-[var(--color-background)] mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center text-[var(--color-foreground)] mb-12">
                    Our Services
                </h2>
                

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        visibleServices.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    }
                </div>

                {!isServicePage && services.length > 6 && (
                    <div className="flex justify-center mt-8">
                        <button
                            onClick={()=> setShowAll(!showAll)}
                            className="px-6 py-3 bg-[var(--color-primary)] text-white font-bold rounded hover:bg-amber-600 transition-colors"
                        >
                            {showAll ? 'See Less' : 'See More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}