const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = 'S1Up3rDup34r19kusmn3uudjKLIU';
const expiration = '30d';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ email, username, _id, password }) {
    const payload = { email, username, _id, password };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
