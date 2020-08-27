/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = {

  login: async function (req, res) {
    try {
      console.log(req.body)

      let user = await Users.findOne({ email: req.body.email })
      console.log(user)
      if (user.length === 0) {
        return res.status(404).send('Invalid login Credentials')
      }

      const isMatch = await bcrypt.compareSync(req.body.password, user.password)
      console.log(isMatch)
      if (!isMatch) {
        return res.status(400).send('Invalid Credentials');
      }
        req.session.userId=user.id
        req.session.username =user.name
        req.session.isAdmin = user.isAdmin

      // ,()=>{
        console.log(req.session)

      const payload = {
        user: { id: user.id },
      };

      jwt.sign(
        payload,
        sails.config.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json(token)

        });
      res.redirect('/dashboard')


    }



    catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  },



};

