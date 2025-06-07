'use client';

import { Service } from "@/constants/service";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
    service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
    return (
        <Link href={`/services/${service.id}`} className="block h-full">
            <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col h-full bg-[var(--color-surface)] shadow-lg rounded-lg overflow-hidden transition-transform cursor-pointer"
            >
                <Image
                    src={service.image}
                    alt={service.name}
                    width={200}
                    height={200}
                    className="h-48 w-full object-cover"
                />
                <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{service.name}</h3>
                    <p className="text-sm text-[var(--color-foreground)] mb-3">{service.description}</p>
                    <div className="text-sm text-[var(--color-muted)] mb-2">
                        Duration: {service.duration} min | ${service.price}
                    </div>
                    <ul className="text-sm text-[var(--color-foreground)] list-disc list-inside space-y-1 mb-4">
                        {service.benefits.slice(0, 3).map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                        ))}
                    </ul>
                    <div className="mt-auto">
                        <span className="inline-block w-full text-center px-4 py-2 bg-[var(--color-primary)] text-white rounded-full hover:bg-amber-600 transition-colors">
                            View Details
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
