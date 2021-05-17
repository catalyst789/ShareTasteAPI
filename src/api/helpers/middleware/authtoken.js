const jwt = require('jsonwebtoken');

exports.isLoggedIn = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) return res.status(401).json({message: 'Access Denied'})

    try {
        const verfied = jwt.verify(token, process.env.SECRET_KEY_JWT);
        req.user = verfied.user;
        next();
    } catch (error) {
        let message = '';
        if(!req.user) message = 'Session Timed Out..! '
        else message = error;
        res.status(500).json({error: message});
    }
}