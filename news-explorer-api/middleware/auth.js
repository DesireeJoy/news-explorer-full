const jwt = require('jsonwebtoken');
require('dotenv').config();

const { AuthError } = require('./errorhandling');

const { NODE_ENV = 'production', JWT_SECRET = 'dev-secret' } = process.env;

function auth(req, res, next) {
  const { authorization } = req.headers;
  console.log(req.headers);
  if (!authorization) {
    throw new AuthError('Authorization required!');
  }
  if (!authorization.startsWith('Bearer ')) {
    throw new AuthError('Authorization required!!');
  }
  console.log(authorization);
  const token = authorization.replace('Bearer ', '');
  console.log(token);
  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    );
  } catch (err) {
    throw new AuthError('Authorization required.');
  }

  req.user = payload;
  next();
}

module.exports = { auth };
