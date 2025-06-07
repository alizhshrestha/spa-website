'use client';

import { services } from "@/constants/service";
import ServiceCard from "../cards/ServiceCard";

export default function ServiceGrid() {
    return (
        <section id="services" className="py-16 bg-[var(--color-background)] mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
                <h2 className="text-3xl font-extrabold text-center text-[var(--color-foreground)] mb-12">
                    Our Services
                </h2>
                

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        services.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}