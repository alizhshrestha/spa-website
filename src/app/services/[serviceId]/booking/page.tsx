'use client';

import { use, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/constants/service';

export default function BookingPage({
    params,
}: {
    params: Promise<{ serviceId: string }>;
}) {
    // const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { serviceId } = use(params);
    const service = services.find((s) => s.id === serviceId);

    useEffect(()=>{
        setIsClient(true)
    }, []);

    if (!service) {
        notFound();
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/book-service', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    serviceId: service.id,
                    serviceName: service.name,
                    ...formData,
                }),
            });

            if (res.ok) {
                setSuccess(true);

                // Construct WhatsApp link
                const whatsappNumber = 'YOUR_CLIENT_WHATSAPP_NUMBER_WITH_COUNTRY_CODE'; // Example: '9779812345678'
                const message = encodeURIComponent(
                    `Hello, I would like to book *${service.name}*.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
                );

                window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
            } else {
                alert('Failed to send booking. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return <div>
        {isClient && (<section className="max-w-3xl mx-auto px-4 py-16 mt-16">
            <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
                Book {service.name}
            </h1>
            <p className="text-[var(--color-foreground)] mb-8">{service.description}</p>

            {success ? (
                <p className="text-green-600 font-semibold text-xl">Thank you! We will contact you shortly.</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block mb-1 font-medium">Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 text-[var(--color-foreground)] bg-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Phone *</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2 text-[var(--color-foreground)] bg-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 text-[var(--color-foreground)] bg-white"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded px-4 py-2 text-[var(--color-foreground)] bg-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[var(--color-primary)] text-white font-bold py-3 px-8 rounded hover:bg-amber-600 transition-colors w-full"
                    >
                        {loading ? 'Sending...' : 'Submit & Contact via WhatsApp'}
                    </button>
                </form>
            )}
        </section>)}
    </div> 
}
