const Recipe = require('../models/recipeSchema');

exports.createRecipeService = (body) => {
    const { dish, chef, image, ingredientArray, description } = body;
    const newRecipe = new Recipe({dish, chef, image, ingredientArray, description});

    return new Promise( (resolve, reject) => {
        Recipe.findOne({dish})
        .then(recipe => {
            if(recipe) return reject('Recipe Already Exists');
            newRecipe.save()
            .then(recipeCreated => resolve(recipeCreated))
            .catch(err => reject(err))
        }).catch(err => reject(err))
    })
}

exports.readSingleRecipeService = (id) => {
    return new Promise( (resolve, reject) => {
        Recipe.findOne({_id: id})
        .then(recipe => resolve(recipe))
        }).catch(err => reject(err))
}

exports.readRecipeService = () => {
    return new Promise( (resolve, reject) => {
        Recipe.find()
        .then(recipes => resolve(recipes))
        }).catch(err => reject(err))
}

exports.updateRecipeService = (id, body) => {
    const { dish, chef, image, ingredientArray, description } = body;
    const updatedRecipe = ({dish, chef, image, ingredientArray, description});

    return new Promise( (resolve, reject) => {
        Recipe.findOneAndUpdate({_id:id}, {$set  : updatedRecipe}, {new: true})
            .then(updatedRecipe => resolve(updatedRecipe))
            .catch(err => reject(err))
        })
}


exports.deleteRecipeService = (id) => {
    return new Promise( (resolve, reject) => {
        Recipe.findByIdAndDelete({_id: id})
        .then(deletedRecipe => resolve(deletedRecipe))
        }).catch(err => reject(err))
}