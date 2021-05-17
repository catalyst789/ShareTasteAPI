const User = require('../models/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.homePageServices = () => {
    return new Promise( (resolve, reject) => {
        resolve('This is the Home Page of the User');
    })
}

exports.signUpServices = (body) => {
    const { name, username, email, password } = body;
    const newUser = new User ({name, username, email, password});
   return new Promise( (resolve, reject) => {
       User.findOne({username})
       .then(user => {
           if(user) return reject('User Already Exists');
           var bcrypt = require('bcryptjs');
           bcrypt.genSalt(10, function(err, salt) {
               bcrypt.hash(newUser.password, salt, function(err, hash) {
                   newUser.password = hash
                newUser.save()
                .then(userCreated => resolve(userCreated))
                .catch(err => reject(err))
               });
           }); 
        })
        .catch(err => reject(err))
           
   })
}

exports.signInServices = (req, body) => {
    const { username, password } = body;
    return new Promise( (resolve, reject) => {
        User.findOne({username})
            .then(user => {
                if(!user) return reject('User Not Found');
                bcrypt.compare(password, user.password, function(err, res) {
                    if(!res) return reject('Incorrect Password')
                   const token= jwt.sign({user}, process.env.SECRET_KEY_JWT, { expiresIn:20 });
                   req.header('auth-token', token);
                    resolve(token);
                });
            })
    })
}
    