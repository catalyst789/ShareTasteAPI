const {
    RecipeValidator
} = require('../validations/recipeValidator');

const {
    createRecipeService,
    readSingleRecipeService,
    readRecipeService,
    updateRecipeService,
    deleteRecipeService
} = require('../services/recipeServices');

exports.createRecipeController = (req, res, next) => {
    const { value, error } = RecipeValidator(req.body);
    if(error) return res.status(402).json({error: error.details.map(d=> d.message)})
    
    createRecipeService(value)
    .then(recipe => res.status(201).json({message: 'New Recipe Created', recipe}))
    .catch(error => res.status(501).json({message: 'Something went wrong', error}))
}

exports.readSingleRecipeController = (req, res, next) => {
    readSingleRecipeService(req.params.id)
    .then(recipe => res.status(200).json({message: 'Recipe Found', recipe}))
    .catch(error => res.status(501).json({message: 'Something went wrong', error}))
}

exports.readRecipeController = (req, res, next) => {
    readRecipeService()
    .then(recipes => res.status(200).json({message: 'Recipes Found', recipes}))
    .catch(error => res.status(501).json({message: 'Something went wrong', error}))
}

exports.updateRecipeController = (req, res, next) => {
    const { value, error } = RecipeValidator(req.body);
    if(error) return res.status(402).json({error: error.details.map(d=> d.message)})
    
    updateRecipeService(req.params.id, value)
    .then(recipe => res.status(202).json({message: 'Updated Recipe', recipe}))
    .catch(error => res.status(501).json({message: 'Something went wrong', error}))
}

exports.deleteRecipeController = (req, res, next) => {
    deleteRecipeService(req.params.id)
    .then(recipe => res.status(200).json({message: 'Deleted Recipe', recipe}))
    .catch(error => res.status(501).json({message: 'Something went wrong', error}))
}