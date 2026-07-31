import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is SplitKesh free to use?",
      answer: "Yes! The core app is completely free to download and use for managing groups, Chamas, and tracking bills."
    },
    {
      question: "What currency does it use?",
      answer: "SplitKesh is optimized for Kenyan Shillings (KSh) and integrates directly with Safaricom's M-Pesa for instant settlements."
    },
    {
      question: "How do I add someone to a group?",
      answer: "You can create a Chama or split group and add members by their username, or share a direct invite link with them."
    },
    {
      question: "Can splits be uneven?",
      answer: "Absolutely. You can split bills equally, by exact specific amounts, or by custom percentages depending on who owes what."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto" id="faq">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-sm text-warning font-bold tracking-widest uppercase mb-3">
          Questions
        </h2>
        <h3 className="text-3xl font-bold text-white">
          Good to know
        </h3>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-800 pb-4"
          >
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full text-left py-4 flex items-center justify-between focus:outline-none group"
            >
              <span className="text-lg font-medium text-white group-hover:text-primary transition-colors">
                {faq.question}
              </span>
              <span className="text-primary text-2xl font-light ml-4">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            {/* Conditional Answer Dropdown */}
            {activeIndex === index && (
              <div className="text-gray-400 text-sm leading-relaxed pb-4 pr-8 animate-fade-in-down">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default FaqSection;