
import React from 'react';

const Contact = () => {
  return (
    <main className="flex w-full min-h-screen items-center justify-center bg-gray-50">
      <section className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg flex flex-wrap lg:flex-nowrap">
        {/* Left Panel: Contact Info */}
        <div className="w-full lg:w-1/2 p-6 bg-red-500 text-white rounded-lg lg:rounded-r-none flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt fa-2x mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p>123 Wellness Way, Healthy City, 12345</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope fa-2x mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p>contact@dopameal.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fas fa-phone fa-2x mr-4"></i>
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p>+9170266531</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Contact Form */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Get in Touch</h2>
          <p className="mt-2 text-gray-600 mb-8 text-center">We'd love to hear from you!</p>
          <form action="#" method="POST" className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <i className="fas fa-user absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <i className="fas fa-envelope absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
            </div>
            <div className="relative">
              <label htmlFor="subject" className="sr-only">Subject</label>
              <i className="fas fa-tag absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input type="text" id="subject" name="subject" placeholder="Subject" required className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition" />
            </div>
            <div className="relative">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <i className="fas fa-comment-alt absolute top-4 left-4 transform text-gray-400"></i>
              <textarea id="message" name="message" placeholder="Your Message" required rows="5" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"></textarea>
            </div>
            <button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
              <i className="fas fa-paper-plane mr-2"></i> Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
