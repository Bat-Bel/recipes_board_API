var exports = module.exports = {};
const jwt = require('jsonwebtoken');

/**
 * To verify the token that is active by JWT
 * @param token
 * @return err || decodedToken depending of the result of 'login'
 */
exports.verifyJWTToken =  function(token) {
	return new Promise((resolve, reject) => {
        jwt.verify(token, 'secret', (err, decodedToken) => {
			if (err || !decodedToken) {
				return reject(err);
			}

			resolve(decodedToken);
		});
	});
}