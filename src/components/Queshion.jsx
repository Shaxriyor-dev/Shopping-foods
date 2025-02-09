import { useState } from "react";

const faqs = [
  { question: "How long does delivery take?", answer: "You Can Get Information By Contacting Our Support Team Have 24/7 Service. What’s The Difference Between Free And Paid Plan ?" },
  { question: "How Does It Work?", answer: "You place an order, and we deliver it to your address." },
  { question: "How does your food delivery service work?", answer: "We partner with restaurants to bring you fresh meals." },
  { question: "What payment options do you accept?", answer: "We accept credit cards, PayPal, and cash on delivery." },
  { question: "Do you offer discounts or promotions?", answer: "Yes! Check our website for ongoing deals and offers." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[150vh] mx-auto p-4">
      <div className="flex justify-center p-2">
          <p className="text-[45px] font-bold text-[#323142] w-[400px] text-center">Frequently Asked  <span className="text-[#6C5FBC]">Questions</span></p>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between w-full text-left p-6 text-[#323142] text-[24px] font-semibold "
          >
            {faq.question}
            <span className="text-[#fff] h-[30px] w-[30px] bg-[#6C5FBC] flex justify-center items-center rounded-[50%] ">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="p-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
