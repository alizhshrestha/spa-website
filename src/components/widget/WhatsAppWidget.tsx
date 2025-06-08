'use client';

import { whatsappNumber } from "@/constants/contact";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaTimes, FaWhatsapp } from "react-icons/fa";

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim()) {
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            setMessage('');
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-72 mb-3"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-semibold text-[var(--color-primary)]">Chat with us</h4>
                                <button onClick={() => setIsOpen(false)}>
                                    <FaTimes className="text-gray-600 cursor-pointer"/>
                                </button>
                            </div>
                            <textarea
                                className="w-full border border-gray-200 rounded px-3 py-2 text-sm mb-2"
                                rows={3}
                                placeholder="Type your message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-amber-600 transition-colors"
                            >
                                Send via WhatsApp
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={()=> setIsOpen(!isOpen)}
                    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
                >
                    <FaWhatsapp size={24} />
                </button>
            </div>
        </>
    );
}