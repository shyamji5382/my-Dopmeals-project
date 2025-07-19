
import React, { useState, useEffect, useRef } from 'react';
// Removed Firebase imports:
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
// import { getFirestore, doc, setDoc, onSnapshot, collection } from 'firebase/firestore';

// DietPlan Component
const DietPlan = () => {
    // State variables for Firebase and user authentication - REMOVED
    // const [db, setDb] = useState(null);
    const [userId, setUserId] = useState('local_user'); // Simplified for local use, no actual ID needed
    const [isAuthReady, setIsAuthReady] = useState(true); // Always ready for local version

    // State variables for goal planning
    const [activeTab, setActiveTab] = useState('daily'); // 'daily', 'weekly', 'monthly'
    const [exerciseGoal, setExerciseGoal] = useState('');
    const [waterGoal, setWaterGoal] = useState('');
    const [selectedDiet, setSelectedDiet] = useState('balanced');
    const [calorieTarget, setCalorieTarget] = useState('');
    const [breakfastPlan, setBreakfastPlan] = useState('');
    const [lunchPlan, setLunchPlan] = useState('');
    const [dinnerPlan, setDinnerPlan] = useState('');

    const [exerciseTime, setExerciseTime] = useState('');
    const [dietTime, setDietTime] = useState('');
    const [waterTime, setWaterTime] = useState('');

    // State for weekly goals (new)
    const [weeklyExerciseGoal, setWeeklyExerciseGoal] = useState('');
    const [weeklyWaterGoal, setWeeklyWaterGoal] = useState('');
    const [weeklyCalorieTarget, setWeeklyCalorieTarget] = useState('');
    const [weeklyMealPrepPlan, setWeeklyMealPrepPlan] = useState('');

    // State for alert message and dopamine boost message
    const [alertMessage, setAlertMessage] = useState('');
    const [dopamineMessage, setDopamineMessage] = useState(''); // New: Dopamine boost message
    const alertTimeoutRef = useRef(null);
    const dopamineTimeoutRef = useRef(null); // New: Timeout for dopamine message

    // New: State for daily streak
    const [dailyStreakCount, setDailyStreakCount] = useState(0);
    const [lastCompletionDate, setLastCompletionDate] = useState(null); // YYYY-MM-DD format

    // Diet options
    const dietOptions = [
        { value: 'balanced', label: 'Balanced Diet' },
        { value: 'vegetarian', label: 'Vegetarian' },
        { value: 'vegan', label: 'Vegan' },
        { value: 'keto', label: 'Keto' },
        { value: 'mediterranean', label: 'Mediterranean' },
        { value: 'paleo', label: 'Paleo' },
    ];

    // Removed Firebase initialization and authentication listener
    useEffect(() => {
        // No Firebase initialization needed
        // For local demo, we can set initial states here if desired,
        // but current default useState values are sufficient.
    }, []);

    // Removed Firestore data fetching (onSnapshot)
    useEffect(() => {
        // No data fetching from Firestore needed
    }, []);

    // Removed Firestore data saving (setDoc)
    useEffect(() => {
        // No data saving to Firestore needed
        // Data will not persist across page reloads in this version.
    }, [
        exerciseGoal, waterGoal, selectedDiet, calorieTarget,
        breakfastPlan, lunchPlan, dinnerPlan,
        exerciseTime, dietTime, waterTime,
        dailyStreakCount, lastCompletionDate,
        weeklyExerciseGoal, weeklyWaterGoal, weeklyCalorieTarget, weeklyMealPrepPlan
    ]);

    // Function to show a simulated alert message
    const showAlert = (message) => {
        setAlertMessage(message);
        if (alertTimeoutRef.current) {
            clearTimeout(alertTimeoutRef.current);
        }
        alertTimeoutRef.current = setTimeout(() => {
            setAlertMessage('');
            alertTimeoutRef.current = null;
        }, 5000);
    };

    // Function to show a dopamine boost message
    const showDopamineBoost = (message) => {
        setDopamineMessage(message);
        if (dopamineTimeoutRef.current) {
            clearTimeout(dopamineTimeoutRef.current);
        }
        dopamineTimeoutRef.current = setTimeout(() => {
            setDopamineMessage('');
            dopamineTimeoutRef.current = null;
        }, 4000); // Dopamine message disappears after 4 seconds
    };

    // Handler to set alerts (simulated by button click for demo)
    const handleSetAlert = (type) => {
        let message = '';
        let time = '';
        if (type === 'exercise') {
            message = `Time for your exercise! Goal: ${exerciseGoal}`;
            time = exerciseTime;
        } else if (type === 'diet') {
            message = `Time for your meal! Diet: ${selectedDiet}`;
            time = dietTime;
        } else if (type === 'water') {
            message = `Time to drink water! Goal: ${waterGoal}`;
            time = waterTime;
        }

        if (time) {
            showAlert(`Alert set for ${type} at ${time}. ${message}`);
        } else {
            showAlert(`Please set a time for ${type} alert.`);
        }
    };

    // Handler to log daily progress and update streak
    const handleLogDailyProgress = () => {
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        // Check if all required fields are filled to count as "progress"
        const isProgressComplete = exerciseGoal && waterGoal && selectedDiet &&
                                   (breakfastPlan || lunchPlan || dinnerPlan);

        if (!isProgressComplete) {
            showAlert("Please fill in Exercise, Water, Diet, and at least one Meal Plan to log daily progress!");
            return;
        }

        if (lastCompletionDate === today) {
            showAlert("You've already logged your progress for today!");
            return;
        }

        let newStreak = dailyStreakCount;
        if (lastCompletionDate) {
            const lastDate = new Date(lastCompletionDate);
            const todayDate = new Date(today);
            const diffTime = Math.abs(todayDate.getTime() - lastDate.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) { // If yesterday was the last completion
                newStreak += 1;
                showDopamineBoost(`🎉 Awesome! You've maintained your streak for ${newStreak} days!`);
            } else { // Streak broken
                newStreak = 1;
                showDopamineBoost(`💪 New streak started! Keep it up!`);
            }
        } else { // First time logging progress
            newStreak = 1;
            showDopamineBoost(`🌟 Welcome! Your first daily progress logged!`);
        }

        setDailyStreakCount(newStreak);
        setLastCompletionDate(today);
        showAlert("Daily progress logged successfully!");
    };

    // Main render function for the component
    // Simplified loading/auth checks
    if (!isAuthReady) {
        return <div className="p-4 text-center">Loading application...</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex items-center justify-center font-inter">
            {/* Tailwind CSS Script */}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                }
                .animate-fade-in-down {
                    animation: fadeInDown 0.5s ease-out forwards;
                }
                .animate-bounce-in {
                    animation: bounceIn 0.6s ease-out forwards;
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceIn {
                    from, 20%, 40%, 60%, 80%, to {
                        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
                    }
                    0% {
                        opacity: 0;
                        transform: scale3d(0.3, 0.3, 0.3);
                    }
                    20% {
                        transform: scale3d(1.1, 1.1, 1.1);
                    }
                    40% {
                        transform: scale3d(0.9, 0.9, 0.9);
                    }
                    60% {
                        opacity: 1;
                        transform: scale3d(1.03, 1.03, 1.03);
                    }
                    80% {
                        transform: scale3d(0.97, 0.97, 0.97);
                    }
                    to {
                        opacity: 1;
                        transform: scale3d(1, 1, 1);
                    }
                }
                .btn-primary {
                    background-image: linear-gradient(to right, #6366f1, #8b5cf6);
                    transition: all 0.3s ease;
                    border: none;
                    box-shadow: 0 4px 15px 0 rgba(99, 102, 241, 0.75);
                }
                .btn-primary:hover {
                    background-image: linear-gradient(to right, #8b5cf6, #6366f1);
                    box-shadow: 0 6px 20px 0 rgba(139, 92, 246, 0.85);
                    transform: translateY(-2px);
                }
                .btn-secondary {
                    background-color: #e2e8f0; /* gray-200 */
                    color: #4a5568; /* gray-700 */
                    transition: all 0.3s ease;
                    border: none;
                    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.1);
                }
                .btn-secondary:hover {
                    background-color: #cbd5e0; /* gray-300 */
                    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.15);
                    transform: translateY(-1px);
                }
                .input-field {
                    border-width: 2px;
                    border-color: #d1d5db; /* gray-300 */
                    transition: all 0.2s ease;
                }
                .input-field:focus {
                    border-color: #6366f1; /* blue-500 */
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
                }
                .card-section {
                    background-color: #ffffff; /* white */
                    border: 1px solid #e5e7eb; /* gray-200 */
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }
                .card-section:hover {
                    transform: translateY(-5px);
                }
                .log-progress-btn {
                    background-image: linear-gradient(to right, #10b981, #34d399); /* green-500 to green-400 */
                    transition: all 0.3s ease;
                    box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.5);
                }
                .log-progress-btn:hover {
                    background-image: linear-gradient(to right, #34d399, #10b981);
                    box-shadow: 0 12px 25px -7px rgba(52, 211, 153, 0.6);
                    transform: scale(1.08); /* Slightly more pronounced hover */
                }
                `}
            </style>
            <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-4xl border border-gray-100 transform transition-all duration-300 hover:shadow-3xl">
                <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
                    Personalized Health Planner <span className="text-blue-600">🚀</span>
                </h1>

                {/* Alert and Dopamine Messages */}
                {alertMessage && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4 text-center animate-fade-in-down text-lg font-medium">
                        <strong className="font-bold">Alert!</strong>
                        <span className="block sm:inline ml-2">{alertMessage}</span>
                    </div>
                )}
                {dopamineMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4 text-center animate-bounce-in text-lg font-medium">
                        <strong className="font-bold">Boost!</strong>
                        <span className="block sm:inline ml-2">{dopamineMessage}</span>
                    </div>
                )}

                {/* Daily Streak Display */}
                <div className="text-center bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 shadow-md">
                    <span className="text-2xl font-bold text-yellow-800">🔥 Daily Streak: {dailyStreakCount} days!</span>
                    {/* User ID display removed as it's not relevant without Firebase auth */}
                    {/* <p className="text-sm text-gray-600 mt-2">User ID: {userId}</p> */}
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-8 py-4 rounded-l-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                            activeTab === 'daily' ? 'btn-primary text-white' : 'btn-secondary text-gray-700'
                        }`}
                        onClick={() => setActiveTab('daily')}
                    >
                        Daily Goals
                    </button>
                    <button
                        className={`px-8 py-4 rounded-r-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                            activeTab === 'weekly' ? 'btn-primary text-white' : 'btn-secondary text-gray-700'
                        }`}
                        onClick={() => setActiveTab('weekly')}
                    >
                        Weekly Goals
                    </button>
                </div>

                {/* Daily Goals Tab Content */}
                {activeTab === 'daily' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card-section p-6 rounded-2xl">
                            <h2 className="text-3xl font-bold text-gray-700 mb-5">Activity & Hydration</h2>
                            <div className="mb-6">
                                <label htmlFor="exerciseGoal" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Exercise Goal (e.g., 30 mins cardio)
                                </label>
                                <input
                                    type="text"
                                    id="exerciseGoal"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field"
                                    value={exerciseGoal}
                                    onChange={(e) => setExerciseGoal(e.target.value)}
                                    placeholder="e.g., 30 mins jogging"
                                />
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="time"
                                        className="p-3 border rounded-lg mr-3 focus:outline-none input-field"
                                        value={exerciseTime}
                                        onChange={(e) => setExerciseTime(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleSetAlert('exercise')}
                                        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        Set Alert
                                    </button>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="waterGoal" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Water Goal (e.g., 8 glasses)
                                </label>
                                <input
                                    type="text"
                                    id="waterGoal"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field"
                                    value={waterGoal}
                                    onChange={(e) => setWaterGoal(e.target.value)}
                                    placeholder="e.g., 8 glasses"
                                />
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="time"
                                        className="p-3 border rounded-lg mr-3 focus:outline-none input-field"
                                        value={waterTime}
                                        onChange={(e) => setWaterTime(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleSetAlert('water')}
                                        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        Set Alert
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card-section p-6 rounded-2xl">
                            <h2 className="text-3xl font-bold text-gray-700 mb-5">Diet Plan</h2>
                            <div className="mb-6">
                                <label htmlFor="selectedDiet" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Select Diet Type
                                </label>
                                <select
                                    id="selectedDiet"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field bg-white"
                                    value={selectedDiet}
                                    onChange={(e) => setSelectedDiet(e.target.value)}
                                >
                                    {dietOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="calorieTarget" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Calorie Target (optional)
                                </label>
                                <input
                                    type="number"
                                    id="calorieTarget"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field"
                                    value={calorieTarget}
                                    onChange={(e) => setCalorieTarget(e.target.value)}
                                    placeholder="e.g., 2000"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="breakfastPlan" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Breakfast Plan
                                </label>
                                <textarea
                                    id="breakfastPlan"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field min-h-[100px]"
                                    value={breakfastPlan}
                                    onChange={(e) => setBreakfastPlan(e.target.value)}
                                    placeholder="e.g., Oatmeal with berries and nuts"
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="lunchPlan" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Lunch Plan
                                </label>
                                <textarea
                                    id="lunchPlan"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field min-h-[100px]"
                                    value={lunchPlan}
                                    onChange={(e) => setLunchPlan(e.target.value)}
                                    placeholder="e.g., Chicken salad with mixed greens"
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="dinnerPlan" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Dinner Plan
                                </label>
                                <textarea
                                    id="dinnerPlan"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field min-h-[100px]"
                                    value={dinnerPlan}
                                    onChange={(e) => setDinnerPlan(e.target.value)}
                                    placeholder="e.g., Baked salmon with roasted vegetables"
                                ></textarea>
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="time"
                                        className="p-3 border rounded-lg mr-3 focus:outline-none input-field"
                                        value={dietTime}
                                        onChange={(e) => setDietTime(e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleSetAlert('diet')}
                                        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    >
                                        Set Meal Alert
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Weekly Goals Tab Content */}
                {activeTab === 'weekly' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card-section p-6 rounded-2xl">
                            <h2 className="text-3xl font-bold text-gray-700 mb-5">Weekly Activity & Hydration</h2>
                            <div className="mb-6">
                                <label htmlFor="weeklyExerciseGoal" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Weekly Exercise Goal (e.g., 3 hours strength training)
                                </label>
                                <input
                                    type="text"
                                    id="weeklyExerciseGoal"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field"
                                    value={weeklyExerciseGoal}
                                    onChange={(e) => setWeeklyExerciseGoal(e.target.value)}
                                    placeholder="e.g., 3 hours strength training"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="weeklyWaterGoal" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Weekly Water Goal (e.g., 56 glasses)
                                </label>
                                <input
                                    type="text"
                                    id="weeklyWaterGoal"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field"
                                    value={weeklyWaterGoal}
                                    onChange={(e) => setWeeklyWaterGoal(e.target.value)}
                                    placeholder="e.g., 56 glasses (8 per day)"
                                />
                            </div>
                        </div>

                        <div className="card-section p-6 rounded-2xl">
                            <h2 className="text-3xl font-bold text-gray-700 mb-5">Weekly Diet & Meal Prep</h2>
                            <div className="mb-6">
                                <label htmlFor="weeklyCalorieTarget" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Weekly Calorie Target (optional)
                                </label>
                                <input
                                    type="number"
                                    id="weeklyCalorieTarget"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field"
                                    value={weeklyCalorieTarget}
                                    onChange={(e) => setWeeklyCalorieTarget(e.target.value)}
                                    placeholder="e.g., 14000"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="weeklyMealPrepPlan" className="block text-gray-700 font-semibold mb-2 text-lg">
                                    Weekly Meal Prep Plan
                                </label>
                                <textarea
                                    id="weeklyMealPrepPlan"
                                    className="w-full p-3 border rounded-lg focus:outline-none input-field min-h-[150px]"
                                    value={weeklyMealPrepPlan}
                                    onChange={(e) => setWeeklyMealPrepPlan(e.target.value)}
                                    placeholder="e.g., Sunday: Prep chicken and quinoa for 3 lunches. Monday: Chop veggies for salads."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                )}

                {/* Log Daily Progress Button */}
                {activeTab === 'daily' && (
                    <div className="mt-10 text-center">
                        <button
                            onClick={handleLogDailyProgress}
                            className="log-progress-btn text-white px-10 py-5 rounded-full text-2xl font-bold transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
                        >
                            Log Daily Progress
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DietPlan
 