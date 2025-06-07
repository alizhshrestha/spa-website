'use client'

export default function CallToActionSection() {
    return (
        <section className="relative py-16 bg-[var(--color-primary)] text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Treat Yourself</h2>
            <p className="mb-6 text-lg">Experience relaxation and rejuvenation with our expert treatments.</p>
            <button className="px-6 py-3 bg-white text-[var(--color-primary)] font-bold rounded-full hover:bg-amber-200 transition-colors">
                Book Now
            </button>
        </section>
    )
}