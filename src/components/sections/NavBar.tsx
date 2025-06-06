'use client'

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[var(--color-surface)]/80 backdrop-blur-sm border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="text-xl font-bold text-[var(--color-accent)]">Siam Spa</div>

                {/* Menu */}
                <div className="hidden md:flex space-x-8 text-md font-medium">
                    <a href="#home" className="menu-links">Home</a>
                    <a href="#about" className="menu-links">About</a>
                    <a href="#services" className="menu-links">Services</a>
                    <a href="#booking" className="menu-links">Booking</a>
                    <a href="#contact" className="menu-links">Contact</a>
                </div>
            </div>
        </nav>
    )
}