const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    dish: String,
    chef: String,
    image: String,
    ingredientArray: [String],
    description: String
}, {timestamps: true});

module.exports = mongoose.model('recipe', recipeSchema);