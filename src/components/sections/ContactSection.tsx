'use client'

import { facebookLink, instagramLink, whatsappLink } from "@/constants/contact"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function ContactSection() {
    return (
        <section className="py-16 bg-[var(--color-surface)] text-center">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">Get in Touch</h2>
            <p className="text-lg text-[var(--color-foreground)] mb-8">
                We&apos;re available daily from 10am to 10pm. Contact us for appointments or inquiries.
            </p>

            {/* WhatsApp Button */}
            <div className="mb-8">
                <Link
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500 text-white font-bold rounded-full hover:bg-amber-600 transition-colors"
                >
                    <FaWhatsapp size={24} />
                    Chat on WhatsApp
                </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 text-2xl text-[var(--color-primary)]">
                <Link
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-[var(--color-accent)] transition-colors"
                >
                    <FaInstagram />
                </Link>
                <Link
                    href={facebookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-[var(--color-accent)] transition-colors"
                >
                    <FaFacebook />
                </Link>
            </div>

            {/* Email */}
            <p className="mt-8 text-[var(--color-foreground)]">
                Or email us at:{' '}
                <Link
                    href="mailto:hello@example.com"
                    className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent)] hover:underline "
                >
                    hello@example.com
                </Link>
            </p>
        </section>
    )
}