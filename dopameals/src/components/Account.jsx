import React, { useState } from 'react';

const Account = () => {
    // State for user profile information (conceptual, would be fetched from backend)
    const [userName, setUserName] = useState('Bhoomika'); // Changed name to Bhoomika
    const [userId, setUserId] = useState('user-12345'); // Placeholder ID
    const [userPhoto, setUserPhoto] = useState('https://placehold.co/150x150/FF8C00/000000?text=BH'); // Placeholder photo, updated to orange/black theme

    // Function to handle "My Experience" button click
    const handleMyExperienceClick = () => {
        // In a real app, this would navigate to a dedicated experience page
        // For this demo, it opens a placeholder URL in a new tab.
        window.open('https://www.example.com/my-experience', '_blank');
        console.log("Navigating to My Experience section/page.");
    };

    // Function to handle "Share Review" button click
    const handleShareReviewClick = () => {
        // This would typically open a modal or navigate to a review submission form.
        // For this demo, it opens a placeholder URL in a new tab.
        window.open('https://www.example.com/share-review', '_blank');
        console.log("Navigating to Share Review form/page.");
    };

    // Function to handle "Add Recipe" button click
    const handleAddRecipeClick = () => {
        // This would typically open a modal or navigate to a recipe creation form.
        // For this demo, it opens a placeholder URL in a new tab.
        window.open('https://www.example.com/add-recipe', '_blank');
        console.log("Navigating to Add Recipe form/page.");
    };

    // Function to handle "Blog" button click
    const handleBlogClick = () => {
        // This would navigate to the application's blog section.
        // For this demo, it opens a placeholder URL in a new tab.
        window.open('https://www.example.com/blog', '_blank');
        console.log("Navigating to Blog page.");
    };

    return (
        <main className="py-8 font-sans antialiased text-gray-900">
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
                    --primary-accent-color: #FF8C00; /* Dark Orange */
                    --primary-accent-dark: #CC7000; /* Even darker orange */
                    --primary-accent-light: #FFA500; /* Bright Orange */
                    --primary-accent-very-light: #FFDAB9; /* Peach/Light Orange */
                    --text-color: #000000; /* Black text */
                    --secondary-text-color: #333333; /* Darker grey for some text */
                }
                .cta-btn {
                    background-image: linear-gradient(to right, var(--primary-accent-light), var(--primary-accent-color));
                    color: white; /* Ensure text is white for contrast */
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .cta-btn:hover {
                    background-image: linear-gradient(to right, var(--primary-accent-color), var(--primary-accent-dark));
                    transform: translateY(-2px);
                    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
                }
                .recipe-card {
                    transition: all 0.3s ease-in-out;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
                }
                .recipe-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                }
                /* General text color adjustments for the new theme */
                .text-gray-800 { color: var(--text-color); }
                .text-gray-600 { color: var(--secondary-text-color); }
                .text-gray-700 { color: var(--secondary-text-color); }
                .text-gray-50 { background-color: #F8F8F8; } /* Slightly off-white for cards */
                .border-gray-200 { border-color: #E0E0E0; } /* Lighter border */
                `}
            </style>

            <section className="account-page max-w-4xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg border border-[--primary-accent-light]">
                <div className="account-header text-center mb-10 pb-6 border-b border-gray-200">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-2">My Account</h2>
                    <p className="text-lg text-gray-600">Welcome back, <span className="font-semibold text-[--primary-accent-color]">{userName}!</span></p>
                </div>

                {/* Profile Information Section */}
                <div className="profile-info bg-[--primary-accent-very-light] p-8 rounded-2xl shadow-inner mb-10 text-center">
                    <img
                        src={userPhoto}
                        alt="User Profile"
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[--primary-accent-color] shadow-md"
                    />
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{userName}</h3>
                    <p className="text-gray-600 text-lg mb-4">User ID: <span className="font-mono text-gray-700">{userId}</span></p>
                    <p className="text-gray-700 text-base">
                        This section would display your profile information. In a real application,
                        this data (name, ID, photo) would be populated from a backend database
                        (e.g., Firestore) after a user signs up.
                    </p>
                    {/* Placeholder for photo upload/change functionality */}
                    <button className="mt-4 text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-semibold text-md">
                        <i className="fas fa-camera mr-2"></i> Change Photo
                    </button>
                </div>

                <div className="account-content">
                    <div className="account-actions flex flex-wrap justify-end gap-4 mb-8">
                        <button
                            onClick={handleMyExperienceClick}
                            className="cta-btn inline-block text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out"
                        >
                            <i className="fas fa-star mr-2"></i>My Experience
                        </button>
                        <button
                            onClick={handleAddRecipeClick}
                            className="cta-btn inline-block text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out"
                        >
                            <i className="fas fa-plus-circle mr-2"></i>Add a Recipe
                        </button>
                        <button
                            onClick={handleShareReviewClick}
                            className="cta-btn inline-block text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out"
                        >
                            <i className="fas fa-comment-dots mr-2"></i>Share Review
                        </button>
                        <button
                            onClick={handleBlogClick}
                            className="cta-btn inline-block text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out"
                        >
                            <i className="fas fa-blog mr-2"></i>Blog
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">My Recipes</h3>
                    <div className="recipe-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sample Recipe Card 1 */}
                        <div className="recipe-card bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <img src="https://imgs.search.brave.com/aAGdtBQrNg3qNbotIHpHTpFmCekKdWUpHam5j1VNaPc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA0/Nzk2MjIzL3Bob3Rv/L3NhbGFkLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1zTk5t/U0p1Z2Rya2FOa0lu/NVM2M2dYbFVmUjYz/LXlWTmZWb2ZpcTRv/SEdBPQ" alt="Delicious Salad" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Fresh Garden Salad</h4>
                                <p className="text-gray-600 text-sm mb-4">A vibrant and healthy salad with seasonal greens and a light vinaigrette.</p>
                                <div className="flex justify-around items-center">
                                    <a href="#" className="text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-medium text-sm"><i className="fas fa-eye mr-1"></i> View</a>
                                    <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-200 font-medium text-sm"><i className="fas fa-edit mr-1"></i> Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 transition duration-200 font-medium text-sm"><i className="fas fa-trash-alt mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </div>

                        {/* Sample Recipe Card 2 */}
                        <div className="recipe-card bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <img src="https://imgs.search.brave.com/ku0wGRCWCUc7zHqyQEn9lRsICORMgoHaWdWnPptoEjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/c3dlbGx3aXRoYnV0/dGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8xMS9D/cmVhbXktVG9tYXRv/LVNvdXAtMTAuanBn" alt="Hearty Soup" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Creamy Tomato Soup</h4>
                                <p className="text-gray-600 text-sm mb-4">Comforting and rich tomato soup, perfect for a chilly evening.</p>
                                <div className="flex justify-around items-center">
                                    <a href="#" className="text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-medium text-sm"><i className="fas fa-eye mr-1"></i> View</a>
                                    <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-200 font-medium text-sm"><i className="fas fa-edit mr-1"></i> Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 transition duration-200 font-medium text-sm"><i className="fas fa-trash-alt mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </div>

                        {/* Sample Recipe Card 3 */}
                        <div className="recipe-card bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <img src="https://imgs.search.brave.com/21nVUy6kVwtIdvb2799h-bdjKJHo4p7onQ6amgWWFbA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGhu/bWJuYWlscy8wMzIv/MjQ1LzMwNC9zbWFs/bC9jaGlja2VuLWN1/cnJ5LWluLWEtYm93/bC13aXRoLXNwaWNl/cy1hbmQtaGVyYnMt/YWktZ2VuZXJhdGVk/LWZyZWUtcGhvdG8u/anBn" alt="Spicy Curry" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Spicy Chicken Curry</h4>
                                <p className="text-gray-600 text-sm mb-4">A flavorful and aromatic chicken curry with a kick.</p>
                                <div className="flex justify-around items-center">
                                    <a href="#" className="text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-medium text-sm"><i className="fas fa-eye mr-1"></i> View</a>
                                    <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-200 font-medium text-sm"><i className="fas fa-edit mr-1"></i> Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 transition duration-200 font-medium text-sm"><i className="fas fa-trash-alt mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </div>

                        {/* Add more recipe cards as needed */}
                        <div className="recipe-card bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <img src="https://imgs.search.brave.com/nWqOHgXdJgE_OXPE3EihIbtOFhRs8m9oMVeCqX65j38/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcy5saWdo/dG9yYW5nZWJlYW4u/Y29tL21lZGlhLzIw/MjQwOTE0MTUyNDI3/L1ZlZ2FuLUNhcHJl/c2UtRGVsaWdodF8t/cG9zdC0zLTc2OHg0/MjIucG5nP3Jlc2l6/ZT03NjgsNDgyJnF1/YWxpdHk9ODAmc3Ns/PTE" alt="Vegan Delight" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Roasted Vegetable Medley</h4>
                                <p className="text-gray-600 text-sm mb-4">A simple yet delicious mix of roasted seasonal vegetables.</p>
                                <div className="flex justify-around items-center">
                                    <a href="#" className="text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-medium text-sm"><i className="fas fa-eye mr-1"></i> View</a>
                                    <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-200 font-medium text-sm"><i className="fas fa-edit mr-1"></i> Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 transition duration-200 font-medium text-sm"><i className="fas fa-trash-alt mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="recipe-card bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <img src="https://imgs.search.brave.com/Sebz8xlcNwvjfrkncZNWIyYU6piPBiVNld93ISl2rF4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWF0aW5nd2VsbC5j/b20vdGhtYi9HTFN4/c2ZfSFhZYjlrSDNG/UGphdlN5LVRQUzQ9/LzE1MDB4MC9maWx0/ZXJzOm5vX3Vwc2Nh/bGUoKTptYXhfYnl0/ZXMoMTUwMDAwKTpz/dHJpcF9pY2MoKS8x/MTA1MjQtRWF0aW5n/V2VsbF9hbnRpLWlu/ZmFtLUJmYXN0Qm93/bC00MzgyLTVlYmIw/NTZhMDJkNDQxYTc4/YjQ3MWU4ZjIwYjRj/YjZkLmpwZw" alt="Breakfast Bowl" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Berry Smoothie Bowl</h4>
                                <p className="text-gray-600 text-sm mb-4">A refreshing and nutritious breakfast bowl packed with berries.</p>
                                <div className="flex justify-around items-center">
                                    <a href="#" className="text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-medium text-sm"><i className="fas fa-eye mr-1"></i> View</a>
                                    <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-200 font-medium text-sm"><i className="fas fa-edit mr-1"></i> Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 transition duration-200 font-medium text-sm"><i className="fas fa-trash-alt mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </div>

                        <div className="recipe-card bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <img src="https://imgs.search.brave.com/E1BmuZHCUkJmxh99CmSHYx58dz4q70KShG3IXW0LfIE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGli/bGVibG9nbGl2ZS53/cGVuZ2luZS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MDQvdHlwZXMtZGVz/c2VydHMtNjk2eDM2/NC5qcGVn" alt="Decadent Dessert" className="w-full h-40 object-cover" />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Chocolate Lava Cake</h4>
                                <p className="text-gray-600 text-sm mb-4">Indulgent chocolate lava cake with a gooey center.</p>
                                <div className="flex justify-around items-center">
                                    <a href="#" className="text-[--primary-accent-color] hover:text-[--primary-accent-dark] transition duration-200 font-medium text-sm"><i className="fas fa-eye mr-1"></i> View</a>
                                    <a href="#" className="text-purple-600 hover:text-purple-800 transition duration-200 font-medium text-sm"><i className="fas fa-edit mr-1"></i> Edit</a>
                                    <a href="#" className="text-red-600 hover:text-red-800 transition duration-200 font-medium text-sm"><i className="fas fa-trash-alt mr-1"></i> Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Account;
