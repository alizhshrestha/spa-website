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
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex flex-col bg-[var(--color-surface)] shadow-lg rounded-lg overflow-hidden transition-transform"
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
        
        <ul className="text-sm text-[var(--color-foreground)] list-disc list-inside space-y-1 mb-4">
          {service.benefits.slice(0, 3).map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <div className="text-sm text-[var(--color-muted)] mb-4">
          <div className="font-semibold mb-1">Options:</div>
          {service.options.map((option, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{option.duration} min</span>
              <span>AED {option.price}</span>
            </div>
          ))}
        </div>

        <div className="flex space-x-2 mt-auto">
          <Link
            href={`/service-detail/${service.id}`}
            className="flex-1 px-4 py-2 text-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors text-sm"
          >
            Show Details
          </Link>
          <Link
            href={`/services/${service.id}/booking`}
            className="flex-1 px-4 py-2 text-center bg-[var(--color-primary)] text-white rounded-full hover:bg-amber-600 transition-colors text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
