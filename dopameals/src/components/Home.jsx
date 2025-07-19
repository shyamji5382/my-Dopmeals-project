import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Header'; // Import the new Navbar component

const allRecipes = [
    {
        id: "berry-parfait",
        name: "Light & Fit Berry Parfait",
        description: "A delicious and healthy layered treat, perfect for breakfast or a snack.",
        image: "https://images.unsplash.com/photo-1550989392-f04505f03d55?q=80&w=1887&auto=format&fit=crop",
        link: "/recipe/berry-parfait",
        type: "all",
        mood: "happy",
        calories: "low",
        dopamines: "High",
        nutrients: "Vitamins A, C, Fiber"
    },
    {
        id: "chicken-stirfry",
        name: "Spicy Chicken Stir-fry",
        description: "A quick, flavorful, and healthy weeknight meal with a kick!",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop",
        link: "/recipe/chicken-stirfry",
        type: "all",
        mood: "energetic",
        calories: "medium",
        dopamines: "Medium",
        nutrients: "Protein, Iron, B Vitamins"
    },
    {
        id: "green-salad",
        name: "Lean Green Salad",
        description: "A light, refreshing, and healthy salad perfect for any meal.",
        image: "https://images.unsplash.com/photo-1512621776951-a573fd56307d?q=80&w=2070&auto=format&fit=crop",
        link: "/recipe/green-salad",
        type: "all",
        mood: "calm",
        calories: "low",
        dopamines: "Low",
        nutrients: "Vitamins K, Folate, Fiber"
    },
    {
        id: "quinoa-bowl",
        name: "Rainbow Quinoa Bowl",
        description: "A vibrant and nutrient-packed bowl with fresh veggies and a zesty dressing.",
        image: "https://images.unsplash.com/photo-1563604130009-4e3112a9e3f6?q=80&w=2070&auto=format&fit=crop",
        link: "/recipe/quinoa-bowl",
        type: "all",
        mood: "happy",
        calories: "medium",
        dopamines: "Medium",
        nutrients: "Protein, Fiber, Antioxidants"
    },
    {
        id: "lentil-soup",
        name: "Hearty Lentil Soup",
        description: "A warm and comforting soup, perfect for a cozy evening.",
        image: "https://images.unsplash.com/photo-1547592180-85f17399052d?q=80&w=2070&auto=format&fit=crop",
        link: "/recipe/lentil-soup",
        type: "all",
        mood: "comfort",
        calories: "medium",
        dopamines: "Medium",
        nutrients: "Protein, Iron, Fiber"
    },
    {
        id: "avocado-toast",
        name: "Avocado Toast with Egg",
        description: "A quick and healthy breakfast or snack, rich in good fats.",
        image: "https://images.unsplash.com/photo-1596767568165-38507c5885e3?q=80&w=1887&auto=format&fit=crop",
        link: "/recipe/avocado-toast",
        type: "all",
        mood: "focused",
        calories: "medium",
        dopamines: "Medium",
        nutrients: "Healthy Fats, Protein, Fiber"
    },
];

const moodRecipes = {
    happy: {
        name: "Sunshine Citrus Salad",
        description: "A bright and zesty salad with oranges, grapefruit, and a light vinaigrette to uplift your spirits.",
        image: "https://images.unsplash.com/photo-1512621776951-a573fd56307d?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        background: "linear-gradient(to right, #20B2AA, #00CED1)", // Teal to Dark Turquoise gradient
        icon: "fas fa-smile-beam"
    },
    calm: {
        name: "Soothing Chamomile Tea with Honey & Lemon",
        description: "A warm, comforting beverage perfect for unwinding after a long day.",
        image: "https://images.unsplash.com/photo-1576092762744-f16ce6162391?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        background: "linear-gradient(to right, #87CEEB, #6495ED)", // Sky Blue to Cornflower Blue gradient
        icon: "fas fa-leaf"
    },
    comfort: {
        name: "Creamy Tomato Basil Pasta",
        description: "A rich and satisfying pasta dish that feels like a warm hug.",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4fd83b?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        background: "linear-gradient(to right, #FFB08C, #FF8C66)", // Light Salmon to Coral gradient (kept for warmth)
        icon: "fas fa-couch"
    },
    focused: {
        name: "Brain-Boosting Salmon & Avocado Bowl",
        description: "Packed with omega-3s and healthy fats to enhance mental clarity.",
        image: "https://images.unsplash.com/photo-1521305916504-4a1121179c71?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        background: "linear-gradient(to right, #2E8B57, #3CB371)", // Sea Green to Medium Sea Green gradient
        icon: "fas fa-brain"
    },
    adventurous: {
        name: "Spicy Thai Green Curry",
        description: "An exotic and aromatic curry with a fiery kick for the adventurous palate.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac87b781fe6?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        background: "linear-gradient(to right, #FF6347, #FF4500)", // Tomato to Orange Red gradient (kept for vibrancy)
        icon: "fas fa-fire-alt"
    },
    angry: {
        name: "Calming Herbal Tea & Whole Grain Toast",
        description: "A simple, grounding meal to help soothe and stabilize your mood.",
        image: "https://images.unsplash.com/photo-1587082987820-f5a04e908f5d?q=80&w=1935&auto=format&fit=crop",
        link: "#",
        background: "linear-gradient(to right, #778899, #5F9EA0)", // Light Slate Gray to Cadet Blue gradient
        icon: "fas fa-grumpy"
    },
    default: {
        name: "Choose Your Mood!",
        description: "Select a mood from the dropdown above to get a personalized recipe suggestion.",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop", /* Default general food image */
        link: "#",
        background: "linear-gradient(to right, #E0FFFF, #AFEEEE)", // Light Cyan to Pale Turquoise gradient
        icon: "fas fa-lightbulb"
    }
};

const Home = () => {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [scannerResult, setScannerResult] = useState('Your scan results will appear here.');
    const [selectedMood, setSelectedMood] = useState('default');
    const [moodSuggestion, setMoodSuggestion] = useState(moodRecipes.default);

    const [weight, setWeight] = useState(''); // in lbs
    const [height, setHeight] = useState(''); // in inches
    const [bmi, setBmi] = useState(0);
    const [bmiCategory, setBmiCategory] = useState('');
    const [bmiSuggestion, setBmiSuggestion] = useState('');
    const [dailyCalories, setDailyCalories] = useState(0);
    const [dailyProtein, setDailyProtein] = useState(0);
    const [dailyCarbs, setDailyCarbs] = useState(0);
    const [dailyFats, setDailyFats] = useState(0);

    // New state for filtering and sorting
    const [currentFilterType, setCurrentFilterType] = useState('all');
    const [calorieFilter, setCalorieFilter] = useState('all'); // 'low', 'medium', 'high', 'all'
    const [dopamineFilter, setDopamineFilter] = useState('all'); // 'Low', 'Medium', 'High', 'all'
    const [sortBy, setSortBy] = useState('name-asc'); // 'name-asc', 'name-desc', 'calories-asc', 'calories-desc', 'dopamine-asc', 'dopamine-desc'

    // New state for favorites
    const [favoriteRecipeIds, setFavoriteRecipeIds] = useState(() => {
        // Load favorites from local storage on initial render
        try {
            const storedFavorites = localStorage.getItem('dopamealFavorites');
            return storedFavorites ? JSON.parse(storedFavorites) : [];
        } catch (error) {
            console.error("Error parsing favorites from localStorage", error);
            return [];
        }
    });

    // State for hero section slider
    const [currentSlide, setCurrentSlide] = useState(0);
    const heroImages = [
        {
            url: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
            title: 'Unlock a Healthier You, One Meal at a Time',
            subtitle: 'Discover personalized nutrition, mood-based recipes, and a supportive community to help you achieve your wellness goals.'
        },
        {
            url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop',
            title: 'Nutrition Tailored to Your Needs',
            subtitle: 'Find the perfect recipes based on your mood, dietary preferences, and health goals'
        },
        {
            url: 'https://images.unsplash.com/photo-1512621776951-a573fd56307d?q=80&w=2070&auto=format&fit=crop',
            title: 'Eat Well, Feel Great',
            subtitle: 'Delicious recipes designed to boost your mood and energy levels'
        }
    ];

    // Auto-rotate hero images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [heroImages.length]); // Added heroImages.length to dependencies

    // Save favorites to local storage whenever favoriteRecipeIds changes
    useEffect(() => {
        try {
            localStorage.setItem('dopamealFavorites', JSON.stringify(favoriteRecipeIds));
        } catch (error) {
            console.error("Error saving favorites to localStorage", error);
        }
    }, [favoriteRecipeIds]);

    // Effect for filtering and sorting recipes
    useEffect(() => {
        applyFiltersAndSort();
    }, [currentFilterType, calorieFilter, dopamineFilter, sortBy, favoriteRecipeIds]);

    // Effect for mood suggestion, dependent only on selectedMood
    useEffect(() => {
        suggestRecipeByMood(selectedMood);
    }, [selectedMood]);


    // Main function to apply all filters and sorting
    const applyFiltersAndSort = () => {
        let recipes = [...allRecipes]; // Start with a copy of all recipes

        // Apply global filter type first
        if (currentFilterType === 'mood') {
            const availableMoods = Object.keys(moodRecipes).filter(mood => mood !== 'default');
            recipes = recipes.filter(recipe => recipe.mood && availableMoods.includes(recipe.mood));
        } else if (currentFilterType === 'favorites') {
            recipes = recipes.filter(recipe => favoriteRecipeIds.includes(recipe.id));
        }

        // Apply detailed filters
        if (currentFilterType !== 'favorites') {
            if (calorieFilter !== 'all') {
                recipes = recipes.filter(recipe => recipe.calories === calorieFilter);
            }
            if (dopamineFilter !== 'all') {
                recipes = recipes.filter(recipe => recipe.dopamines === dopamineFilter);
            }
        }

        // Apply sorting
        recipes.sort((a, b) => {
            if (sortBy === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else if (sortBy === 'name-desc') {
                return b.name.localeCompare(a.name);
            } else if (sortBy === 'calories-asc') {
                const calorieMap = { 'low': 1, 'medium': 2, 'high': 3 };
                return (calorieMap[a.calories] || 0) - (calorieMap[b.calories] || 0);
            } else if (sortBy === 'calories-desc') {
                const calorieMap = { 'low': 1, 'medium': 2, 'high': 3 };
                return (calorieMap[b.calories] || 0) - (calorieMap[a.calories] || 0);
            } else if (sortBy === 'dopamine-asc') {
                const dopamineMap = { 'Low': 1, 'Medium': 2, 'High': 3 };
                return (dopamineMap[a.dopamines] || 0) - (dopamineMap[b.dopamines] || 0);
            } else if (sortBy === 'dopamine-desc') {
                const dopamineMap = { 'Low': 1, 'Medium': 2, 'High': 3 };
                return (dopamineMap[b.dopamines] || 0) - (dopamineMap[a.dopamines] || 0);
            }
            return 0; // No sort
        });

        setFilteredRecipes(recipes);
    };

    const suggestRecipeByMood = (mood) => {
        const recipe = moodRecipes[mood] || moodRecipes.default;
        setMoodSuggestion(recipe);
    };

    const handleFilterClick = (filterType) => {
        setCurrentFilterType(filterType);
        if (filterType !== 'favorites') {
            setCalorieFilter('all');
            setDopamineFilter('all');
        }
    };

    const handleCameraClick = () => {
        setScannerResult('Camera functionality not implemented in this demo.');
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setScannerResult(`Image "${file.name}" uploaded. Analyzing... (No actual analysis in demo)`);
        } else {
            setScannerResult('No image selected.');
        }
    };

    const handleMoodChange = (event) => {
        const mood = event.target.value;
        setSelectedMood(mood);
        // suggestRecipeByMood(mood); // Now handled by its own useEffect
    };

    const getFoodSuggestionForBmi = (category) => {
        switch (category) {
            case 'Underweight':
                return 'Consider incorporating more calorie-dense, nutrient-rich foods such as nuts, seeds, avocados, whole grains, and lean proteins. Consult a professional for a healthy weight gain plan.';
            case 'Normal Weight':
                return 'Maintain a balanced diet rich in a variety of fruits, vegetables, lean proteins, and whole grains. Focus on mindful eating and consistent physical activity.';
            case 'Overweight':
                return 'Focus on portion control, increasing fiber intake from fruits, vegetables, and whole grains. Prioritize lean proteins and reduce processed foods and sugary drinks.';
            case 'Obese':
                return 'It is highly recommended to consult a healthcare professional or registered dietitian for a personalized weight management plan. Focus on whole, unprocessed foods, smaller portions, and gradually increasing physical activity.';
            default:
                return '';
        }
    };

    const calculateMacrosAndBmi = () => {
        const weightLbs = parseFloat(weight);
        const heightInches = parseFloat(height);

        if (isNaN(weightLbs) || weightLbs <= 0 || isNaN(heightInches) || heightInches <= 0) {
            setDailyCalories(0);
            setDailyProtein(0);
            setDailyCarbs(0);
            setDailyFats(0);
            setBmi(0);
            setBmiCategory('');
            setBmiSuggestion('');
            return;
        }

        const calculatedBmi = (weightLbs / (heightInches * heightInches)) * 703;
        setBmi(calculatedBmi.toFixed(1));

        let category = '';
        if (calculatedBmi < 18.5) {
            category = 'Underweight';
        } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
            category = 'Normal Weight';
        } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }
        setBmiCategory(category);
        setBmiSuggestion(getFoodSuggestionForBmi(category));

        const estimatedCalories = weightLbs * 14;
        const proteinGrams = weightLbs * 0.8;
        const carbCalories = estimatedCalories * 0.55;
        const fatCalories = estimatedCalories * 0.25;

        setDailyCalories(Math.round(estimatedCalories));
        setDailyProtein(Math.round(proteinGrams));
        setDailyCarbs(Math.round(carbCalories / 4));
        setDailyFats(Math.round(fatCalories / 9));
    };

    // Toggle Favorite Function
    const toggleFavorite = (recipeId) => {
        setFavoriteRecipeIds(prevFavorites => {
            if (prevFavorites.includes(recipeId)) {
                return prevFavorites.filter(id => id !== recipeId);
            } else {
                return [...prevFavorites, recipeId];
            }
        });
    };

    // Filter to show only favorite recipes
    const showFavorites = () => {
        setCurrentFilterType('favorites');
        setCalorieFilter('all');
        setDopamineFilter('all');
    };

    return (
        <main className="font-sans antialiased text-gray-900">
           

            {/* Hero Section with Sliding Background */}
            <section className="relative overflow-hidden text-white h-[60vh] min-h-[500px] flex items-center justify-center w-full">
                {/* Background Images */}
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image.url})`,
                            zIndex: 1
                        }}
                    />
                ))}

                {/* Content */}
              <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg animate-fade-in-down">
        {heroImages[currentSlide].title}
      </h1>
      <p className="text-lg md:text-xl mb-10 opacity-90 drop-shadow-md animate-fade-in-up">
        {heroImages[currentSlide].subtitle}
      </p>

      {/* Updated button to navigate to DietPlan */}
      <button
        onClick={() => window.location.href = '/diet-plan'}
        className="cta-btn bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 transform hover:scale-105 active:scale-95 animate-bounce-in"
      >
        lets start diet plan
      </button>
    </div>
                

                {/* Navigation Dots */}
                <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section
                className="py-24 text-center bg-cover bg-center relative w-full"
                style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('https://images.unsplash.com/photo-1518609462217-1f912e753444?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed' }}
            >
                <div className="container mx-auto px-6"> {/* Added container for content centering */}
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-20 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-32 after:h-2 after:bg-teal-500 after:rounded-full after:opacity-75">How Dopameal Works</h2>
                    <div className="flex flex-wrap justify-center gap-12">
                        <div className="step max-w-sm bg-white p-10 rounded-3xl shadow-xl transition duration-500 hover:translate-y-[-20px] hover:shadow-3xl border border-teal-100 flex flex-col items-center transform hover:rotate-1-sm">
                            <i className="fas fa-camera text-6xl text-teal-600 mb-8 bg-teal-50 p-6 rounded-full transition duration-300 hover:text-white hover:bg-teal-600 shadow-md"></i>
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Scan Your Food</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">Get instant nutritional info by simply scanning your meal with your device's camera or uploading an image.</p>
                        </div>
                        <div className="step max-w-sm bg-white p-10 rounded-3xl shadow-xl transition duration-500 hover:translate-y-[-20px] hover:shadow-3xl border border-teal-100 flex flex-col items-center transform hover:rotate-1-sm">
                            <i className="fas fa-utensils text-6xl text-teal-600 mb-8 bg-teal-50 p-6 rounded-full transition duration-300 hover:text-white hover:bg-teal-600 shadow-md"></i>
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get Personalized Recipes</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">Explore a curated selection of delicious and healthy recipes tailored to your nutritional needs and current mood.</p>
                        </div>
                        <div className="step max-w-sm bg-white p-10 rounded-3xl shadow-xl transition duration-500 hover:translate-y-[-20px] hover:shadow-3xl border border-teal-100 flex flex-col items-center transform hover:rotate-1-sm">
                            <i className="fas fa-heart-pulse text-6xl text-teal-600 mb-8 bg-teal-50 p-6 rounded-full transition duration-300 hover:text-white hover:bg-teal-600 shadow-md"></i>
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Feel Great & Thrive</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">Achieve your health and wellness goals with ease, feeling more energized, balanced, and in control of your diet.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Food Scanner Section */}
            <section
                id="scanner"
                className="py-20 text-center bg-cover bg-center relative w-full"
                style={{ backgroundImage: `linear-gradient(rgba(240, 255, 255, 0.9), rgba(224, 247, 247, 0.9)), url('https://images.unsplash.com/photo-1542831371-d227b689a746?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed' }}
            >
                <div className="scanner-content p-14 rounded-2xl bg-white shadow-3xl max-w-4xl mx-auto border border-teal-200 transform -skew-y-1 rotate-1-md hover:skew-y-0 hover:rotate-0 transition-all duration-500">
                    <h2 className="text-5xl font-bold text-teal-700 mb-8 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-24 after:h-1.5 after:bg-teal-600 after:rounded-full after:opacity-75">Food Scanner</h2>
                    <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">Get instant nutritional insights by uploading a photo of your meal. Our intelligent scanner helps you understand what you're eating at a glance.</p>
                    <div className="flex justify-center flex-wrap gap-8">
                        <button onClick={handleCameraClick} className="bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center min-w-[200px]">
                            <i className="fas fa-camera mr-3 text-xl"></i> Use Camera
                        </button>
                        <input type="file" id="scan-upload-btn" accept="image/*" className="hidden" onChange={handleFileUpload} />
                        <label htmlFor="scan-upload-btn" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-10 py-4 rounded-full cursor-pointer text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center min-w-[200px]">
                            <i className="fas fa-upload mr-3 text-xl"></i> Upload Image
                        </label>
                    </div>
                    <div className="mt-12 p-8 bg-teal-50 rounded-xl shadow-inner text-left min-h-[140px] flex items-center justify-center font-light italic text-gray-700 border border-dashed border-teal-300 animate-fade-in">
                        {scannerResult}
                    </div>
                </div>
            </section>

            {/* Daily Calories & Macros Plan Section */}
            <section
                className="py-20 text-center bg-cover bg-center relative w-full"
                style={{ backgroundImage: `linear-gradient(rgba(240, 255, 255, 0.9), rgba(224, 247, 247, 0.9)), url('https://images.unsplash.com/photo-1498837140813-f938f2b7f756?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed' }}
            >
                <div className="max-w-2xl mx-auto px-6"> {/* Added px-6 for mobile padding */}
                    <h2 className="text-5xl font-bold text-teal-800 mb-10 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-32 after:h-1.5 after:bg-teal-600 after:rounded-full after:opacity-75">Your Personalized Daily Plan 🌱</h2>
                    <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto px-4">
                        Estimate your daily calorie, protein, and carb needs based on your weight and height. This helps you set realistic dietary goals.
                        <br />
                        <span className="text-sm italic text-gray-600"> (These are general estimates for guidance only. Consult a professional for personalized advice.)</span>
                    </p>
                    <div className="bg-white p-12 rounded-3xl shadow-2xl border border-teal-300 animate-scale-in">
                        <div className="mb-8 space-y-6">
                            <div>
                                <label htmlFor="weight-input" className="block text-xl font-semibold text-gray-800 mb-3 text-left">
                                    Enter Your Weight (in lbs):
                                </label>
                                <input
                                    type="number"
                                    id="weight-input"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="e.g., 150"
                                    className="w-full p-4 border border-gray-300 rounded-lg text-lg text-center focus:ring-4 focus:ring-teal-300 focus:border-transparent transition-all duration-200 ease-in-out"
                                />
                            </div>
                            <div>
                                <label htmlFor="height-input" className="block text-xl font-semibold text-gray-800 mb-3 text-left">
                                    Enter Your Height (in inches):
                                </label>
                                <input
                                    type="number"
                                    id="height-input"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="e.g., 68"
                                    className="w-full p-4 border border-gray-300 rounded-lg text-lg text-center focus:ring-4 focus:ring-teal-300 focus:border-transparent transition-all duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <button
                            onClick={calculateMacrosAndBmi}
                            className="bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg transition duration-300 transform hover:scale-105 active:scale-95"
                        >
                            Calculate My Plan
                        </button>

                        {dailyCalories > 0 && (
                            <div className="mt-10 p-8 bg-teal-50 rounded-xl shadow-inner text-left border border-dashed border-teal-300 animate-fade-in">
                                <h3 className="text-2xl font-bold text-teal-700 mb-5 border-b pb-3 border-teal-200">Your Estimated Daily Goals:</h3>
                                <ul className="list-disc list-inside text-gray-800 text-lg space-y-3">
                                    <li><strong>Calories:</strong> <span className="text-teal-600 font-semibold">{dailyCalories} kcal</span></li>
                                    <li><strong>Protein:</strong> <span className="text-teal-600 font-semibold">{dailyProtein} g</span></li>
                                    <li><strong>Carbohydrates:</strong> <span className="text-teal-600 font-semibold">{dailyCarbs} g</span></li>
                                    <li><strong>Fats:</strong> <span className="text-teal-600 font-semibold">{dailyFats} g</span></li>
                                </ul>
                                <h3 className="text-2xl font-bold text-teal-700 mt-8 mb-4 border-b pb-3 border-teal-200">Your BMI: <span className="text-teal-600">{bmi}</span> (<span className="text-teal-600">{bmiCategory}</span>)</h3>
                                <p className="text-gray-700 text-lg italic leading-relaxed">{bmiSuggestion}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Recipes Section */}
            <section
                className="py-20 text-center bg-cover bg-center relative w-full"
                style={{ backgroundImage: `linear-gradient(rgba(240, 255, 255, 0.9), rgba(224, 247, 247, 0.9)), url('https://images.unsplash.com/photo-1547496502-cef873a23fde?q=80&w=2070&auto=format&fit=crop')`, backgroundAttachment: 'fixed' }}
            >
                <div className="container mx-auto px-6"> {/* Added container for content centering */}
                    <h2 className="text-5xl font-bold text-teal-700 mb-14 relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-32 after:h-2 after:bg-teal-500 after:rounded-full after:opacity-75">Featured Recipes</h2>

                    {/* Filter and Sort Controls */}
                    <div className="flex flex-wrap justify-center gap-5 mb-12">
                        {/* Main Filter Buttons */}
                        <button onClick={() => handleFilterClick('all')} className={`filter-btn ${currentFilterType === 'all' ? 'bg-teal-600 text-white' : 'bg-white border-teal-300 text-gray-700'} border-2 px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-md`}>All Recipes</button>
                        <button onClick={() => handleFilterClick('mood')} className={`filter-btn ${currentFilterType === 'mood' ? 'bg-teal-600 text-white' : 'bg-white border-teal-300 text-gray-700'} border-2 px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-md`}>Mood Dependent</button>
                        <button onClick={showFavorites} className={`filter-btn ${currentFilterType === 'favorites' ? 'bg-teal-600 text-white' : 'bg-white border-teal-300 text-gray-700'} border-2 px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-md flex items-center`}>
                            <i className="fas fa-heart mr-2"></i> My Favorites
                        </button>

                        {/* Calorie Filter Dropdown */}
                        <select
                            value={calorieFilter}
                            onChange={(e) => { setCalorieFilter(e.target.value); setCurrentFilterType('detailed'); }}
                            className="filter-select bg-white border-2 border-teal-300 text-gray-700 px-6 py-2 rounded-full font-medium transition duration-300 hover:border-teal-500 hover:shadow-md appearance-none pr-8 cursor-pointer"
                        >
                            <option value="all">All Calories</option>
                            <option value="low">Low Calorie</option>
                            <option value="medium">Medium Calorie</option>
                            <option value="high">High Calorie</option>
                        </select>

                        {/* Dopamine Filter Dropdown */}
                        <select
                            value={dopamineFilter}
                            onChange={(e) => { setDopamineFilter(e.target.value); setCurrentFilterType('detailed'); }}
                            className="filter-select bg-white border-2 border-teal-300 text-gray-700 px-6 py-2 rounded-full font-medium transition duration-300 hover:border-teal-500 hover:shadow-md appearance-none pr-8 cursor-pointer"
                        >
                            <option value="all">All Dopamine</option>
                            <option value="Low">Low Dopamine</option>
                            <option value="Medium">Medium Dopamine</option>
                            <option value="High">High Dopamine</option>
                        </select>

                        {/* Sort By Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="filter-select bg-white border-2 border-teal-300 text-gray-700 px-6 py-2 rounded-full font-medium transition duration-300 hover:border-teal-500 hover:shadow-md appearance-none pr-8 cursor-pointer"
                        >
                            <option value="name-asc">Sort by Name (A-Z)</option>
                            <option value="name-desc">Sort by Name (Z-A)</option>
                            <option value="calories-asc">Sort by Calories (Low to High)</option>
                            <option value="calories-desc">Sort by Calories (High to Low)</option>
                            <option value="dopamine-asc">Sort by Dopamine (Low to High)</option>
                            <option value="dopamine-desc">Sort by Dopamine (High to Low)</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredRecipes.length > 0 ? (
                            filteredRecipes.map(recipe => (
                                <div key={recipe.id} className="recipe-card bg-white rounded-2xl shadow-xl overflow-hidden text-left transition duration-300 transform hover:translate-y-[-12px] hover:shadow-2xl border-b-4 border-teal-300 hover:border-teal-500 relative">
                                    {/* Favorite button/icon */}
                                    <button
                                        onClick={(e) => { e.preventDefault(); toggleFavorite(recipe.id); }}
                                        className="absolute top-4 right-4 text-3xl z-10 p-2 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-colors duration-200"
                                    >
                                        <i className={`fas fa-heart ${favoriteRecipeIds.includes(recipe.id) ? 'text-red-500' : 'text-gray-300 hover:text-red-400'}`}></i>
                                    </button>
                                    <Link to={recipe.link}>
                                        <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover border-b border-gray-200 transform scale-100 hover:scale-105 transition-transform duration-300" onError={(e) => e.target.src = 'https://via.placeholder.com/400x250/F0F0F0/666666?text=Food+Image+Not+Found'} />
                                        <div className="p-7">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{recipe.name}</h3>
                                            <p className="text-gray-600 text-md mb-5 leading-relaxed">{recipe.description}</p>
                                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                                {recipe.dopamines && <span className="bg-teal-100 px-4 py-1.5 rounded-full font-medium text-teal-700">Dopamine: {recipe.dopamines}</span>}
                                                {recipe.nutrients && <span className="bg-teal-100 px-4 py-1.5 rounded-full font-medium text-teal-700">Nutrients: {recipe.nutrients}</span>}
                                                {recipe.calories && <span className="bg-teal-100 px-4 py-1.5 rounded-full font-medium text-teal-700">Calories: {recipe.calories}</span>}
                                                {recipe.mood && <span className="bg-teal-100 px-4 py-1.5 rounded-full font-medium text-teal-700">Mood: {recipe.mood}</span>}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 text-lg col-span-full py-10">No recipes found for this filter. Try a different selection!</p>
                        )}
                    </div>
                </div>
            </section>

            {/* Mood-Based Recipes Section */}
            <section className="py-20 text-center relative overflow-hidden w-full" style={{ background: moodSuggestion.background }}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-textile.png')` }}></div>
                <div className="container mx-auto px-6"> {/* Added container for content centering */}
                    <h2 className="text-5xl font-bold text-white mb-10 drop-shadow-md relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:-translate-x-1/2 after:w-36 after:h-2 after:bg-white after:rounded-full after:opacity-50">Recipes for Every Mood</h2>
                    <p className="text-lg text-white mb-12 max-w-3xl mx-auto drop-shadow-sm">Select your current mood and discover delicious recipes tailored just for you to enhance your well-being!</p>
                    <div className="max-w-md mx-auto mb-12 relative z-10">
                        <div className="relative">
                            <select onChange={handleMoodChange} value={selectedMood} className="w-full p-4 pl-12 border border-gray-300 rounded-lg text-lg appearance-none bg-white focus:ring-4 focus:ring-teal-300 focus:border-transparent transition cursor-pointer shadow-lg">
                                <option value="default">How are you feeling?</option>
                                <option value="happy">😊 Happy & Energetic</option>
                                <option value="calm">😌 Calm & Relaxed</option>
                                <option value="comfort">🤗 Needing Comfort</option>
                                <option value="focused">🧠 Needing Focus</option>
                                <option value="adventurous">🌶️ Adventurous</option>
                                <option value="angry">😠 Angry</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-4 text-gray-700">
                                <i className={`${moodRecipes[selectedMood]?.icon || moodRecipes.default.icon} text-xl`}></i>
                            </div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="mood-suggestion-card bg-white p-10 rounded-2xl shadow-3xl max-w-3xl mx-auto text-left border-l-8 border-teal-500 transition duration-700 transform hover:scale-105 hover:rotate-1-sm relative z-10">
                        <img src={moodSuggestion.image} alt={moodSuggestion.name} className="w-full h-72 object-cover rounded-lg mb-7 shadow-md transform rotate-1-sm" onError={(e) => e.target.src = 'https://via.placeholder.com/700x250/F0F0F0/666666?text=Recipe+Suggestion+Not+Found'} />
                        <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                            <i className={`${moodSuggestion.icon} text-teal-600 mr-4 text-3xl`}></i> {moodSuggestion.name}
                        </h3>
                        <p className="text-gray-700 text-lg mb-7 leading-relaxed">{moodSuggestion.description}</p>
                        {moodSuggestion.link !== "#" && (
                            <Link to={moodSuggestion.link} className="cta-btn bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 inline-block text-lg">View Recipe</Link>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
