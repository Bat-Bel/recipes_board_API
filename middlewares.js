var exports = module.exports = {};
const { verifyJWTToken } = require('./libs/auth');

/**
 * Middleware that works like authentication system
 * trough the token that receives using the verifyJWTToken
 */
exports.verifyJWT_MW = function(req, res, next) {
    let token = (req.method === 'POST') ? req.body.token : req.query.token
    
    verifyJWTToken(token).then((decodedToken) => {
        req.user = decodedToken.data;
        next();
    }).catch((err) => {
        res.status(400).json({message: "Invalid auth token provided."});
    });
}