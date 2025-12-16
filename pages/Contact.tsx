import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center">
      <div className="text-center mb-12">
        <span className="text-slate-400 mb-2 block font-light">04. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h2>
        <p className="text-slate-600 text-lg max-w-xl mx-auto">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Mail className="text-slate-900" /> Contact Info
            </h3>
            <div className="space-y-4 text-slate-600">
              <p className="flex items-center gap-3 hover:text-slate-900 transition-colors cursor-pointer">
                <span>hello@alexdeveloper.com</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} />
                <span>San Francisco, CA</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200">
             <h3 className="text-xl font-bold text-slate-900 mb-4">Availability</h3>
             <p className="text-slate-600">
               Open to Full-time roles and Freelance projects starting Q4 2024.
             </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {submitted ? (
            <div className="bg-green-50 text-green-700 p-6 rounded-xl text-center border border-green-200">
              <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm underline hover:text-green-900"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;