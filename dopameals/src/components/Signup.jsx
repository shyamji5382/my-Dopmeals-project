import React, { useState } from 'react'; // Import useState for password visibility toggle
// Removed Link import as react-router-dom is not used in this standalone component
// import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex w-full min-h-screen items-center justify-center bg-gray-100 font-sans antialiased">
      {/* Tailwind CSS and Font Awesome for standalone preview */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" xintegrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0V4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');
        body {
            font-family: 'Poppins', sans-serif;
        }
        :root {
            --primary-accent-color: #15b5b0; /* Blue Green */
            --primary-accent-dark: color-mix(in srgb, #15b5b0 80%, black);
            --primary-accent-light: color-mix(in srgb, #15b5b0 20%, white);
            --primary-accent-very-light: color-mix(in srgb, #15b5b0 10%, white);
            --rosewater-color: #f9bdc0; /* Rosewater */
            --champagne-color: #fbe698; /* Champagne */
            --cyan-color: #6dece0; /* Cyan */
        }
        .signup-btn-style { /* Renamed from login-btn to avoid conflict and be specific */
            background-image: linear-gradient(to right, var(--primary-accent-light), var(--primary-accent-color));
            color: white;
            transition: all 0.3s ease;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        .signup-btn-style:hover {
            background-image: linear-gradient(to right, var(--primary-accent-color), var(--primary-accent-dark));
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        .signup-btn-style:active {
            transform: translateY(0) scale(0.98);
        }
        /* Adjusted border color for inputs */
        input.border-gray-300 {
            border-color: #A0A0A0; /* Darker gray for default border */
        }
        .input-focus-style:focus {
            border-color: var(--primary-accent-color);
            box-shadow: 0 0 0 3px var(--primary-accent-light);
            outline: none;
        }
        .text-accent {
            color: var(--primary-accent-color);
        }
        .hover\\:text-accent:hover {
            color: var(--primary-accent-color);
        }
        .form-panel-bg {
            background-color: var(--primary-accent-very-light); /* Use a very light accent for the right panel */
        }

        /* Custom Animations */
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .animate-fade-in-down {
            animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-gradient-bg {
            background-size: 200% 200%; /* Make gradient larger than container */
            animation: gradient-move 15s ease infinite alternate; /* Slow, smooth movement */
        }
        `}
      </style>

      {/* Left Panel: Background Image */}
      <div
        className="hidden lg:flex lg:w-1/2 h-full bg-cover bg-center items-center justify-center p-12 relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop')" }}
      >
        <div className="text-center text-white p-8 bg-black bg-opacity-40 rounded-xl shadow-lg z-10 animate-fade-in-down">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Join the Dopameal Family</h1>
          <p className="text-xl drop-shadow-md">Start your journey to a healthier, happier you.</p>
        </div>
        {/* Subtle overlay for visual interest with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(21,181,176,0.2)] z-0 animate-gradient-bg"></div>
      </div>

      {/* Right Panel: Signup Form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8 form-panel-bg">
        <section className="w-full max-w-md p-10 space-y-8 bg-white rounded-3xl shadow-2xl border border-[--primary-accent-light] transform transition-all duration-500 hover:scale-[1.01] animate-fade-in-up">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-accent mb-2">Create Your Account</h2> {/* Applied accent color */}
            <p className="mt-2 text-gray-600">Let's get you started!</p>
          </div>
          <form className="space-y-6">
            <div className="relative">
              <label htmlFor="name" className="sr-only">Full Name</label>
              <i className="fas fa-user absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                id="name"
                required
                placeholder="Full Name"
                className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 input-focus-style transition hover:scale-[1.01]" // Increased padding, added hover
              />
            </div>
            <div className="relative">
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <i className="fas fa-phone absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="tel"
                id="phone"
                required
                placeholder="Phone Number"
                className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 input-focus-style transition hover:scale-[1.01]" // Increased padding, added hover
              />
            </div>
            <div className="relative">
              <label htmlFor="email" className="sr-only">Email</label>
              <i className="fas fa-envelope absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="email"
                id="email"
                required
                placeholder="Email Address"
                className="w-full pl-14 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 input-focus-style transition hover:scale-[1.01]" // Increased padding, added hover
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <i className="fas fa-lock absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type={showPassword ? "text" : "password"} // Toggle type based on state
                id="password"
                required
                placeholder="Password"
                className="w-full pl-14 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 input-focus-style transition hover:scale-[1.01]" // Increased padding, added space for eye icon, added hover
              />
              <button
                type="button" // Important: type="button" to prevent form submission
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition duration-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
              </button>
            </div>
            <button type="submit" className="w-full signup-btn-style font-bold py-3 px-6 rounded-lg"> {/* Applied new button style */}
              <i className="fas fa-user-plus mr-2"></i>Create Account
            </button>
          </form>
          <p className="text-center text-gray-600">Already have an account? <a href="/login" className="font-semibold text-accent hover:underline transform hover:scale-105 transition duration-300 inline-block">Login here</a>.</p> {/* Applied accent color and hover */}
        </section>
      </div>
    </main>
  );
};

export default Signup;