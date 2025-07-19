
import React from 'react';

const About = () => {
  return (
    <main className="flex-grow">
      {/* About Us Hero/Intro Section */}
      <section className="py-16 text-center bg-gray-50">
        <h1 className="text-5xl font-extrabold text-red-500 mb-6 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-500 after:rounded-full">About Dopameal</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">At Dopameal, we believe that healthy eating should be simple, enjoyable, and tailored to your unique needs. Our mission is to empower you to make informed food choices that nourish your body and mind, leading to a happier, healthier lifestyle.</p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">We combine cutting-edge technology with expert nutritional guidance to bring you a personalized experience. From instant food scanning to mood-based recipe suggestions, Dopameal is your trusted partner on your wellness journey.</p>
      </section>

      {/* Our Team Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-gray-800 after:rounded-full">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Team Member 1: Shyamji Patel */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transition duration-300 hover:translate-y-[-10px] hover:shadow-xl flex flex-col items-center">
            <img src="https://placehold.co/150x150/ff6347/FFFFFF?text=SP" alt="Shyamji Patel" className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-red-500 shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-800">Shyamji Patel</h3>
            <p className="text-red-500 font-medium mb-2">Founder & CEO</p>
            <p className="text-gray-600 text-sm mb-6">Shyamji is a visionary leader passionate about health tech. He founded Dopameal to make personalized nutrition accessible to everyone.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-500 hover:text-red-500 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            </div>
          </div>

          {/* Team Member 2: Tushar Joshi */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transition duration-300 hover:translate-y-[-10px] hover:shadow-xl flex flex-col items-center">
            <img src="https://placehold.co/150x150/4CAF50/FFFFFF?text=TJ" alt="Tushar Joshi" className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-green-500 shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-800">Tushar Joshi</h3>
            <p className="text-green-500 font-medium mb-2">Head of Product</p>
            <p className="text-gray-600 text-sm mb-6">Tushar ensures Dopameal's features are intuitive and impactful, always focusing on user experience and innovation.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            </div>
          </div>

          {/* Team Member 3: Anamika Pandey */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transition duration-300 hover:translate-y-[-10px] hover:shadow-xl flex flex-col items-center">
            <img src="https://placehold.co/150x150/36a2eb/FFFFFF?text=AP" alt="Anamika Pandey" className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-blue-500 shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-800">Anamika Pandey</h3>
            <p className="text-blue-500 font-medium mb-2">Lead Nutritionist</p>
            <p className="text-gray-600 text-sm mb-6">Anamika brings extensive knowledge in dietetics, crafting evidence-based nutritional advice and delicious recipes for our users.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            </div>
          </div>

          {/* Team Member 4: Bhoomika Chaudhary */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transition duration-300 hover:translate-y-[-10px] hover:shadow-xl flex flex-col items-center">
            <img src="https://placehold.co/150x150/FFD700/FFFFFF?text=BC" alt="Bhoomika Chaudhary" className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-yellow-500 shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-800">Bhoomika Chaudhary</h3>
            <p className="text-yellow-500 font-medium mb-2">Software Engineer</p>
            <p className="text-gray-600 text-sm mb-6">Bhoomika is the tech wizard behind our seamless food scanning and personalized recommendations engine.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            </div>
          </div>

          {/* Team Member 5: Kunal */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transition duration-300 hover:translate-y-[-10px] hover:shadow-xl flex flex-col items-center">
            <img src="https://placehold.co/150x150/8A2BE2/FFFFFF?text=KU" alt="Kunal" className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-purple-500 shadow-md" />
            <h3 className="text-2xl font-semibold text-gray-800">Kunal</h3>
            <p className="text-purple-500 font-medium mb-2">Community Manager</p>
            <p className="text-gray-600 text-sm mb-6">Kunal fosters our vibrant community, ensuring everyone feels supported and connected on their health journey.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-500 hover:text-purple-500 transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
              <a href="#" className="text-gray-500 hover:text-purple-500 transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            </div>
          </div>
        </div>
      </section>
export default Home;
      {/* Call to Action Section */}
      <section className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us on This Journey</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Whether you're looking to improve your diet, discover new recipes, or simply feel better, Dopameal is here to help. Let's create a healthier future together!</p>
        <a href="/signup" className="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition duration-300">Get Started</a>
      </section>
      
      <section className="py-16 text-center bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner-xl">
    <h2 className="text-5xl font-bold text-gray-800 mb-14 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-36 after:h-2 after:bg-gray-600 after:rounded-full after:opacity-75">Hear From Our Community</h2>
    <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto px-6">
        <div className="story-card max-w-xl bg-white p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6 text-left border-l-8 border-red-500 transition duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:border-red-600">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1776&auto=format&fit=crop" alt="User Sarah K." className="w-32 h-32 rounded-full object-cover border-4 border-red-500 flex-shrink-0 shadow-md" />
            <div>
                <p className="text-gray-700 text-lg mb-4 italic leading-relaxed">"Dopameal has been a lifesaver! I finally understand my eating habits and feel more in control of my health. The mood-based suggestions are spot on!"</p>
                <span className="font-bold text-red-600 text-md block">- Sarah K., Wellness Enthusiast</span>
            </div>
        </div>
        <div className="story-card max-w-xl bg-white p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-6 text-left border-l-8 border-red-500 transition duration-300 hover:translate-y-[-10px] hover:shadow-2xl hover:border-red-600">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1770&auto=format&fit=fit=crop" alt="User Michael R." className="w-32 h-32 rounded-full object-cover border-4 border-red-500 flex-shrink-0 shadow-md" />
            <div>
                <p className="text-gray-700 text-lg mb-4 italic leading-relaxed">"The recipes are amazing, and the community is so supportive. I've never felt better and cooking has become an enjoyable part of my routine. Highly recommend!"</p>
                <span className="font-bold text-red-600 text-md block">- Michael R., Fitness Advocate</span>
            </div>
        </div>
    </div>
</section>
    </main>
  );
};

export default About;
