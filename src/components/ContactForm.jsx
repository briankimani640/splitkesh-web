import { useState } from 'react';

const ContactForm = () => {
  // State to hold the form input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to handle button text after clicking
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle typing in the inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setIsSubmitting(true);

    // TODO: Replace this timeout with your actual API call (like Formspree or your backend)
    setTimeout(() => {
      console.log("Form Data to send:", formData);
      alert(`Thanks, ${formData.name}! Your message was captured in the console.`);
      
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" id="contact">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to learn more or collaborate?
        </h3>
        <p className="text-gray-400">
          Send the team a note — we'd love to hear from you.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-darkcard border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-400 mb-2 ml-1">Your name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-darkbg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" 
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-400 mb-2 ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-darkbg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200" 
                placeholder="you@example.com"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-gray-400 mb-2 ml-1">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-darkbg border border-gray-700 text-white rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-purple-500 disabled:bg-gray-600 disabled:text-gray-400 text-white font-bold text-lg py-4 rounded-xl transition-colors duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 flex justify-center items-center"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          
        </form>
      </div>

    </section>
  );
};

export default ContactForm;