import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/constants/service';

// Server component for service detail page
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const { serviceId } = await params;
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    notFound();
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-6">{service.name}</h1>
      <Image
        src={service.image}
        alt={service.name}
        width={800}
        height={500}
        className="w-full h-96 object-cover rounded mb-6"
      />
      <p className="text-lg text-[var(--color-foreground)] mb-6">{service.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <ul className="list-disc list-inside mb-6 text-[var(--color-foreground)]">
        {service.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>

      <div className="text-lg mb-6">
        <p>
          <strong>Duration:</strong> {service.duration} min
        </p>
        <p>
          <strong>Price:</strong> ${service.price}
        </p>
      </div>

      <Link
        href={`/services/${service.id}/booking`}
        className="inline-block bg-[var(--color-primary)] text-white font-bold py-3 px-8 rounded hover:bg-amber-600 transition-colors text-lg"
      >
        Book Now
      </Link>
    </section>
  );
}
