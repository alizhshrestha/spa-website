'use client';

import Image from "next/image";

export default function OurStorySection() {
    return (
        <section className="py-16 bg-[var(--color-background)]">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                <Image
                    src="/images/therapists/ava.jpg"
                    alt="Therapist image"
                    width={400}
                    height={200}
                />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-[var(--color-primary)]">Our Story</h2>
                    <p className="text-[var(--color-foreground)] text-lg">
                        We are passionate about providing personalized wellness experiences that promote relaxation and rejuvenation.
                        With years of expertise, our team ensures each client receives world-class treatments and care.
                    </p>
                    <p className="text-[var(--color-foreground)]">
                        Our journey began with a mission to create a sanctuary where clients can escape daily stress and focus on their well-being.
                        Today, we continue to uphold that vision through exceptional service and attention to detail.
                    </p>
                </div>
            </div>
        </section>
    )
}