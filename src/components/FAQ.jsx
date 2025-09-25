// src/components/FAQ.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer in Udaipur?",
    answer:
      "We provide premium companionship, outcall & incall services, VIP experiences, overnight bookings and customized experiences tailored to your desires.",
  },
  {
    question: "Are your escorts independent and discreet?",
    answer:
      "Yes, all our escorts operate independently, professionally, and with strict confidentiality. We prioritize your privacy in every interaction.",
  },
  {
    question: "How can I book an escort?",
    answer:
      "You can book by contacting our number directly or via our website chat. Once details are confirmed, we'll arrange everything discreetly and professionally.",
  },
  {
    question: "Do you offer overnight or full-night services?",
    answer:
      "Absolutely. We have exclusive full-night offers and packages to ensure uninterrupted, premium experiences.",
  },
  {
    question: "Is payment safe and secure?",
    answer:
      "Yes, we use secure channels and discretion is our top priority. Payment methods include digital wallets, bank transfers, or discreet in-person payments.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide services across major localities in Udaipur and surrounding cities. Please inquire for availability in your specific area.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-purple-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-purple-700">Frequently Asked Questions</h2>
        <p className="text-gray-600 mt-4">
          Everything you need to know before booking with us.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-purple-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp size={24} className="text-purple-600" />
                ) : (
                  <ChevronDown size={24} className="text-purple-600" />
                )}
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-purple-200">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
