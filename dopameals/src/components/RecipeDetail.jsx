import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const allRecipes = [
    {
        id: "berry-parfait",
        name: "Light & Fit Berry Parfait",
        description: "A delicious and healthy layered treat, perfect for breakfast or a snack.",
        image: "https://www.yummyfoodrecipes.com/resources/picture/org/Yogurt-Mixed-Berry-Parfait.jpg",
        ingredients: [
            "1 cup mixed berries (fresh or frozen)",
            "1/2 cup Greek yogurt",
            "1/4 cup granola",
            "1 tbsp honey or maple syrup (optional)"
        ],
        instructions: [
            "Layer berries, yogurt, and granola in a glass.",
            "Repeat layers until glass is full.",
            "Drizzle with honey or maple syrup if desired.",
            "Serve immediately and enjoy!"
        ],
        nutritionalInfo: {
            calories: "250 kcal",
            protein: "15g",
            carbs: "30g",
            fat: "8g"
        }
    },
    {
        id: "chicken-stirfry",
        name: "Spicy Chicken Stir-fry",
        description: "A quick, flavorful, and healthy weeknight meal with a kick!",
        image: "https://imgs.search.brave.com/DhevEYUvpa3_H09U0IkaEnwSNnaDhvOtcVwr_pv0Yxo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdDUu/ZGVwb3NpdHBob3Rv/cy5jb20vMTU1ODkx/Mi82NTU2Ny9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzY1NTY3Njc0/Mi1zdG9jay1waG90/by1jaGlja2VuLXN0/aXItZnJ5LXZlZ2V0/YWJsZXMtc2tpbGxl/dC5qcGc",
        ingredients: [
            "1 lb chicken breast, sliced",
            "2 cups mixed stir-fry vegetables",
            "2 tbsp soy sauce",
            "1 tbsp sriracha (or to taste)",
            "1 tbsp ginger, minced",
            "1 tbsp garlic, minced",
            "1 tbsp sesame oil"
        ],
        instructions: [
            "Heat sesame oil in a large skillet or wok over medium-high heat.",
            "Add chicken and cook until browned and cooked through.",
            "Add vegetables, ginger, and garlic; stir-fry for 3-5 minutes until tender-crisp.",
            "Stir in soy sauce and sriracha. Cook for another minute.",
            "Serve hot with rice or noodles."
        ],
        nutritionalInfo: {
            calories: "400 kcal",
            protein: "40g",
            carbs: "25g",
            fat: "15g"
        }
    },
    {
        id: "green-salad",
        name: "Lean Green Salad",
        description: "A light, refreshing, and healthy salad perfect for any meal.",
        image: "https://media.istockphoto.com/id/953810510/photo/green-salad-with-fresh-vegetables.jpg?s=612x612&w=0&k=20&c=OyC-xDuR4SUnY3CCnzXc1RAI12CxpLF0g-M8yQ_NeUs=",
        ingredients: [
            "4 cups mixed greens",
            "1 cucumber, sliced",
            "1 bell pepper, sliced",
            "1/2 cup cherry tomatoes, halved",
            "1/4 cup red onion, thinly sliced",
            "2 tbsp olive oil",
            "1 tbsp apple cider vinegar",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Combine all vegetables in a large bowl.",
            "In a small bowl, whisk together olive oil, apple cider vinegar, salt, and pepper.",
            "Pour dressing over salad and toss to combine.",
            "Serve immediately."
        ],
        nutritionalInfo: {
            calories: "150 kcal",
            protein: "5g",
            carbs: "15g",
            fat: "10g"
        }
    },
    {
        id: "lentil-soup",
        name: "Comforting Lentil Soup",
        description: "A hearty and warm soup, perfect for a cozy evening.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-t01hnYO5TjCljg_PvV1JFG9p46_SDn2nKA&s",
        ingredients: [
            "1 tbsp olive oil",
            "1 onion, chopped",
            "2 carrots, chopped",
            "2 celery stalks, chopped",
            "2 cloves garlic, minced",
            "1 cup brown or green lentils, rinsed",
            "6 cups vegetable broth",
            "1 (14.5 oz) can diced tomatoes, undrained",
            "1 tsp dried thyme",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat sesame oil in a large pot or Dutch oven over medium heat.",
            "Add onion, carrots, and celery; cook until softened, about 5-7 minutes.",
            "Stir in garlic, lentils, vegetable broth, diced tomatoes, and thyme.",
            "Bring to a boil, then reduce heat and simmer, covered, for 25-30 minutes, or until lentils are tender.",
            "Season with salt and pepper to taste. Serve hot."
        ],
        nutritionalInfo: {
            calories: "300 kcal",
            protein: "18g",
            carbs: "50g",
            fat: "5g"
        }
    },
    {
        id: "quinoa-bowl",
        name: "Mediterranean Quinoa Bowl",
        description: "A vibrant and nutritious bowl packed with fresh flavors.",
        image: "https://media.istockphoto.com/id/893716434/photo/healhty-vegan-lunch-bowl-avocado-quinoa-sweet-potato-tomato-spinach-and-chickpeas-vegetables.jpg?s=612x612&w=0&k=20&c=Iq4JOLbBYugsBqGjfoT2T9teJ0hd-sAVtTilVi_0PRM=",
        ingredients: [
            "1 cup cooked quinoa",
            "1/2 cup chopped cucumber",
            "1/2 cup chopped tomatoes",
            "1/4 cup chopped red onion",
            "1/4 cup Kalamata olives, halved",
            "1/4 cup crumbled feta cheese (optional)",
            "2 tbsp olive oil",
            "1 tbsp lemon juice",
            "1/4 cup fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a large bowl, combine cooked quinoa, cucumber, tomatoes, red onion, and olives.",
            "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.",
            "Pour dressing over quinoa mixture and toss to combine.",
            "Stir in feta cheese and fresh parsley. Serve chilled or at room temperature."
        ],
        nutritionalInfo: {
            calories: "350 kcal",
            protein: "12g",
            carbs: "45g",
            fat: "15g"
        }
    },
    {
        id: "fish-tacos",
        name: "Exotic Mango Salsa Fish Tacos",
        description: "A burst of tropical flavors for an adventurous palate.",
        image: "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.jpg?s=612x612&w=0&k=20&c=QSliAiLbFEmF7WPN69yEc-weAInG6A4GquGxaGEgBzE=",
        ingredients: [
            "1 lb white fish fillets (cod, tilapia), seasoned and cooked",
            "8 small corn tortillas",
            "1 cup shredded cabbage",
            "For Mango Salsa:",
            "1 ripe mango, diced",
            "1/4 cup red onion, minced",
            "1/4 cup fresh cilantro, chopped",
            "1 jalapeño, minced (optional)",
            "1 lime, juiced"
        ],
        instructions: [
            "Prepare mango salsa by combining diced mango, red onion, cilantro, jalapeño (if using), and lime juice in a bowl. Set aside.",
            "Warm tortillas according to package directions.",
            "Flake cooked fish into pieces.",
            "Assemble tacos: Place shredded cabbage on tortillas, top with fish, and then a generous spoonful of mango salsa.",
            "Serve immediately."
        ],
        nutritionalInfo: {
            calories: "380 kcal",
            protein: "30g",
            carbs: "40g",
            fat: "10g"
        }
    },
    {
        id: "baked-salmon",
        name: "Baked Salmon with Asparagus",
        description: "A simple yet elegant dish, rich in omega-3s.",
        image: "https://media.istockphoto.com/id/1939144114/photo/fried-salmon-steak-and-garlic-brussels-sprouts-and-lemon-served-on-wooden-table.jpg?s=612x612&w=0&k=20&c=GzRi4nLY9AsEdWzmuDq-Dd1heWwdZWd7OZ1XalGU3ic=",
        ingredients: [
            "2 salmon fillets",
            "1 bunch asparagus, trimmed",
            "2 tbsp olive oil",
            "1 lemon, sliced",
            "2 cloves garlic, minced",
            "Salt, pepper, and dried dill to taste"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.",
            "Place salmon fillets and asparagus on the prepared baking sheet.",
            "Drizzle with olive oil, minced garlic, salt, and pepper.",
            "Top salmon with lemon slices.",
            "Bake for 12-15 minutes, or until salmon is cooked through and flakes easily.",
            "Serve immediately."
        ],
        nutritionalInfo: {
            calories: "450 kcal",
            protein: "45g",
            carbs: "10g",
            fat: "25g"
        }
    },
    {
        id: "avocado-toast",
        name: "Avocado Toast with Poached Egg",
        description: "A classic healthy breakfast or brunch option.",
        image: "https://media.istockphoto.com/id/1139597774/photo/toast-with-mashed-avocado-arugula.jpg?s=612x612&w=0&k=20&c=MXJpDlUCAMVnHCIuO6d4uq8iRXrJXegAYkGeuoTd5Wc=",
        ingredients: [
            "2 slices whole-grain bread, toasted",
            "1 ripe avocado, mashed",
            "2 poached eggs",
            "Salt, pepper, and red pepper flakes to taste"
        ],
        instructions: [
            "Toast bread to your liking.",
            "Mash avocado with a fork and spread evenly over toast.",
            "Top each slice with a poached egg.",
            "Season with salt, pepper, and red pepper flakes. Serve immediately."
        ],
        nutritionalInfo: {
            calories: "350 kcal",
            protein: "15g",
            carbs: "30g",
            fat: "20g"
        }
    },
    {
        id: "chicken-skewers",
        name: "Chicken and Vegetable Skewers",
        description: "Grilled perfection for a light and satisfying meal.",
        image: "https://www.shutterstock.com/image-photo/deliciously-spiced-chicken-tikka-kabab-600nw-2495838045.jpg",
        ingredients: [
            "1 lb chicken breast, cut into 1-inch cubes",
            "1 bell pepper, cut into 1-inch pieces",
            "1 zucchini, cut into 1-inch pieces",
            "1 red onion, cut into wedges",
            "8 wooden skewers, soaked in water",
            "2 tbsp olive oil",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat grill to medium-high heat.",
            "Thread chicken and vegetables alternately onto skewers.",
            "In a bowl, toss skewers with olive oil, oregano, salt, and pepper.",
            "Grill skewers for 10-15 minutes, turning occasionally, until chicken is cooked through and vegetables are tender-crisp.",
            "Serve hot."
        ],
        nutritionalInfo: {
            calories: "300 kcal",
            protein: "35g",
            carbs: "15g",
            fat: "10g"
        }
    },
    {
        id: "green-smoothie-bowl",
        name: "Green Smoothie Bowl",
        description: "A refreshing and nutrient-packed bowl for a healthy start.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsfyV-PCyk6bQiBAFkEZjScLvByZunmvb3g&s",
        ingredients: [
            "1 cup spinach",
            "1/2 frozen banana",
            "1/2 cup unsweetened almond milk",
            "1/4 cup Greek yogurt",
            "1 tbsp chia seeds",
            "Toppings: fresh berries, granola, coconut flakes"
        ],
        instructions: [
            "Combine spinach, frozen banana, almond milk, Greek yogurt, and chia seeds in a blender.",
            "Blend until smooth and creamy, adding more almond milk if needed to reach desired consistency.",
            "Pour into a bowl and top with fresh berries, granola, and coconut flakes.",
            "Serve immediately."
        ],
        nutritionalInfo: {
            calories: "200 kcal",
            protein: "10g",
            carbs: "25g",
            fat: "8g"
        }
    }
];

const RecipeDetail = () => {
    const { id } = useParams();
    const recipe = allRecipes.find(r => r.id === id);

    if (!recipe) {
        return <div className="text-center py-20 text-xl text-gray-700">Recipe not found.</div>;
    }

    return (
        <main className="container mx-auto py-12 px-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-96 object-cover" />
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.name}</h1>
                    <p className="text-gray-600 text-lg mb-6">{recipe.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Ingredients</h2>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {recipe.ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-700 mb-3">Instructions</h2>
                            <ol className="list-decimal list-inside text-gray-600 space-y-2">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-3">Nutritional Information (per serving)</h2>
                        <ul className="text-gray-600 space-y-1">
                            {Object.entries(recipe.nutritionalInfo).map(([key, value]) => (
                                <li key={key}><span className="font-medium capitalize">{key}:</span> {value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default RecipeDetail;