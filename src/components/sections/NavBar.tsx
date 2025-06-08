'use client'

import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[var(--color-surface)]/80 backdrop-blur-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="text-xl font-bold text-[var(--color-accent)]">
                    <Link
                        href={"/"}
                        className="menu-links"
                    >
                        <span className="text-2xl">SB</span> Himalayan Healing Hands
                    </Link>       
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8 text-md font-medium">
                    <Link
                        href={"/"}
                        className="menu-links"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/about"}
                        className="menu-links"
                    >
                        About
                    </Link>
                    <Link
                        href={"/services"}
                        className="menu-links"
                    >
                        Services
                    </Link>
                    <Link
                        href={"/contact"}
                        className="menu-links"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}