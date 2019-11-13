// const bcrypt = require('bcryptjs');

// const Users = require('../users/users-model.js');

const jwt = require('jsonwebtoken') // 1 npm i jsonwebtoken
const secret = process.env.JWT_SECRET || 'is it secret, is it safe?'

module.exports = (req, res, next) => {
  const { username, password } = req.headers;

  const token = req.headers.authorization

  if (token) {
    //check that the token is valid
    jwt.verify(token,secret, (err, decodedToken)=> {
      if(err){
        // bad panda, token has been tampered with
        res.status(401).json({message: 'invalid credentials'})
      }else{
         req.decodedJwt = decodedToken
       next();
      }
    })

  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};


// select * from users join roles join... where use