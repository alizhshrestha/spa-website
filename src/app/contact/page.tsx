'use client'

import { facebookLink, instagramLink, whatsappLink } from "@/constants/contact";
import Link from "next/link";
import { useState } from "react"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' && 'checked' in e.target ? (e.target as HTMLInputElement).checked : undefined;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send data to backend / email API
        // For now we just log it
        console.log('Sending contact form:', formData);
        alert('Thank you! Your message has been sent.');
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-16 mt-16">
            <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-6">Contact Us</h1>
            <p className="mb-8 text-lg text-[var(--color-foreground)]">
                Fill out the form below or message us directly on WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2"
                />
                <textarea
                    name="message"
                    placeholder="Your Message *"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded px-4 py-2 h-32"
                ></textarea>
                <label className="flex items-center text-sm">
                    <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    I agree to be contacted via email/WhatsApp.
                </label>
                <button
                    type="submit"
                    className="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded hover:bg-amber-600 transition-colors"
                >
                    Send Message
                </button>
            </form>

            {/* Social & WhatsApp */}
            <div className="mt-12 text-center space-y-4">
                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors"
                >
                    <FaWhatsapp size={24} />
                    Chat on WhatsApp
                </Link>
                <div className="flex justify-center gap-6 text-2xl mt-6 text-[var(--color-primary)]">
                    <Link
                        href={instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="hover:text-amber-500 transition-colors"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href={facebookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="hover:text-amber-500 transition-colors"
                    >
                        <FaFacebook />
                    </Link>
                </div>
            </div>
        </section>
    )
}