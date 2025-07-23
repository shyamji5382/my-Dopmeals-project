import Meal from '../models/mealModel.js';

export const createMeal = async (req, res) => {
    const meal = await Meal.create({ ...req.body, createdBy: req.user.id });
    res.status(201).json(meal);
};

export const getMeals = async (req, res) => {
    const meals = await Meal.find({ createdBy: req.user.id });
    res.json(meals);
};

export const updateMeal = async (req, res) => {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(meal);
};

export const deleteMeal = async (req, res) => {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal deleted' });
};
