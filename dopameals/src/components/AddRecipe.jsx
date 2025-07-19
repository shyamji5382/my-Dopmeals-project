
import React from 'react';

const AddRecipe = () => {
  return (
    <main className="py-8">
      <section className="add-recipe-page max-w-2xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg">
        <div className="add-recipe-container">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Add Your Recipe</h2>
          <form className="space-y-6">
            <div className="form-group">
              <label htmlFor="recipe-title" className="block text-lg font-medium text-gray-700 mb-2">Recipe Title</label>
              <input type="text" id="recipe-title" required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base transition duration-200" />
            </div>
            <div className="form-group">
              <label htmlFor="recipe-image" className="block text-lg font-medium text-gray-700 mb-2">Image URL</label>
              <input type="text" id="recipe-image" required
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base transition duration-200"
                     placeholder="e.g., https://placehold.co/600x400/FFD700/000000?text=My+Recipe" />
            </div>
            <div className="form-group">
              <label htmlFor="recipe-ingredients" className="block text-lg font-medium text-gray-700 mb-2">Ingredients</label>
              <textarea id="recipe-ingredients" rows="6" required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base transition duration-200"
                        placeholder="List each ingredient on a new line (e.g., 2 cups flour, 1 tsp salt)"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="recipe-instructions" className="block text-lg font-medium text-gray-700 mb-2">Instructions</label>
              <textarea id="recipe-instructions" rows="10" required
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base transition duration-200"
                        placeholder="Provide step-by-step instructions for your recipe."></textarea>
            </div>
            <button type="submit" className="cta-btn w-full bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 ease-in-out">
              <i className="fas fa-paper-plane mr-2"></i>Submit Recipe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default AddRecipe;
