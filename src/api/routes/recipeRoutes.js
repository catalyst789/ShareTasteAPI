const router = require('express').Router();

const {
    createRecipeController,
    readSingleRecipeController,
    readRecipeController,
    updateRecipeController,
    deleteRecipeController 
} = require('../controllers/recipeControllers');


/**
 * @route POST /create
 * @access PUBLIC
 * @desc It Creates new the Recipe
 */
router.post('/create', createRecipeController);

/**
 * @route POST /readSingle/:id
 * @access PUBLIC
 * @desc It reads  the Single Recipe a/c to given id
 */
router.post('/read/:id', readSingleRecipeController);

/**
 * @route POST /read
 * @access PUBLIC
 * @desc It reads all the Recipes
 */
router.post('/read', readRecipeController);

/**
 * @route PATCH /update/:id
 * @access PUBLIC
 * @desc It updates the given Recipe a/c to id
 */
router.patch('/update/:id', updateRecipeController);

/**
 * @route DELETE /Delete/:id
 * @access PUBLIC
 * @desc It deletes the given Recipe a/c to id
 */
router.delete('/delete/:id', deleteRecipeController);






module.exports = router;