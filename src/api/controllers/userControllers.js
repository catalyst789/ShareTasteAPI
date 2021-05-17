const { UserValidator } = require('../validations/userValidations');

const {
    homePageServices,
    signUpServices,
    signInServices
} = require('../services/userServices');


exports.homePageController = (req, res, next) => {
    homePageServices()
        .then(respone => res.status(200).json({message:respone}))
        .catch(err => res.status(501).json({error:err}))
} 

exports.signUpController = (req, res, next) => {
    const { value, error } = UserValidator(req.body);
    if(error) return res.status(501).json({error:error.details.map(d=> d.message)});
    signUpServices(value)
    .then(user => res.status(201).json({message: 'New User Created', user}))
    .catch(err=> res.status(501).json({error:'something went wrong',err}))
} 

exports.signInController = (req, res, next) => {
    signInServices(req, req.body)
    .then(user => res.status(201).json({message: 'User Logged In', user}))
    .catch(err=> res.status(501).json({error:'something went wrong',err}))
}