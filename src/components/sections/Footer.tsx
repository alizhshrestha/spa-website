'use client';

import { facebookLink, instagramLink, whatsappLink } from "@/constants/contact";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[var(--color-surface)] border-t border-gray-200 text-[var(--color-foreground)] py-10 mt-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-[var(--color-primary)] mb-2">SB Himalayan Healing Hands</h2>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                        Experience ultimate relaxation with our premium spa treatments designed to rejuvenate your body and mind.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-[var(--color-primary)]">Home</Link></li>
                        <li><Link href="/services" className="hover:text-[var(--color-primary)]">Services</Link></li>
                        <li><Link href="/about" className="hover:text-[var(--color-primary)]">About</Link></li>
                        <li><Link href="/contact" className="hover:text-[var(--color-primary)]">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact</h3>
                    <p className="text-sm mb-2">📍 Thamel, Kathmandu, Nepal</p>
                    <p className="text-sm mb-2">📞 +977-9812345678</p>
                    <p className="text-sm">✉️ info@spablissretreat.com</p>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] text-xl">
                            <FaFacebookF />
                        </Link>
                        <Link href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] text-xl">
                            <FaInstagram />
                        </Link>
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] text-xl">
                            <FaWhatsapp />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center text-xs text-[var(--color-muted)] mt-10">
                &copy; {new Date().getFullYear()} SB Himalayan Healing Hands. All rights reserved.
            </div>
        </footer>
    )
}