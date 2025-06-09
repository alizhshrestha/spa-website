'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[var(--color-surface)]/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="text-xl font-bold text-[var(--color-accent)]">
                    <Link href="/" className="menu-links">
                        <span className="text-2xl">SB</span> Himalayan Healing Hands
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-md font-medium">
                    <Link href="/" className="menu-links">Home</Link>
                    <Link href="/about" className="menu-links">About</Link>
                    <Link href="/services" className="menu-links">Services</Link>
                    <Link href="/contact" className="menu-links">Contact</Link>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-[var(--color-foreground)] focus:outline-none">
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[var(--color-surface)]/95 backdrop-blur-md absolute top-16 left-0 w-full shadow-md py-6 px-4 space-y-4 text-center"
                    >
                        <Link href="/" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-[var(--color-foreground)]">Home</Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-[var(--color-foreground)]">About</Link>
                        <Link href="/services" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-[var(--color-foreground)]">Services</Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-lg font-medium text-[var(--color-foreground)]">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
