
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const FeedbackController = require('./FeedbackController');


module.exports = {

    list:function(req, res){
        Users.find({}).exec(function(err, users){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
           res.view('users',{users:users})
        });
    },
    create: async (req, res) => {
        try {
            sails.log.debug(req.body)
            let user = await Users.find({ email: req.body.email })
            // console.log(user.length)
            if (user.length > 0) {
                res.status(400).send("user already registered")
            }
            else {
                const salt = await bcrypt.genSalt(10);
                let password = await bcrypt.hash(req.body.password, salt);
                var createdUser = await Users.create({ email: req.body.email, name: req.body.name, phoneno: req.body.phoneno, address: req.body.address, city: req.body.city, country: req.body.country, password: password }).fetch()
                console.log('new user is created')
                console.log({ createdUser })
                const payload = {
                    user: { id: createdUser.id },
                };

                jwt.sign(
                    payload,
                    sails.config.jwtSecret,
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                      console.log( token );

                    });
                  res.redirect('/login')
                // return res.send("user registered successfully" + token)

            }
        }

      



        catch (error) {
            console.error(error.message)
            res.status(500).send('server error')
        }

    },
    edit: function(req, res){
        Users.findOne({id:req.params.id}).exec(function(err, user){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.view('userDetail', {user:user});
        });
    },
    delete: async function(req, res){

        let user = await Users.find({ _id:req.params.id })
        if(user.length==0){
            console.log('user id not found')
            res.send('user id not found')
        }
        else{
        Users.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
        console.log('user deleted successfully')
        return res.redirect('/users')
        });
    }
   
    },
    dashboard:async function(req,res){
            let userscount = 0;
            let feedbackCount = 0

          userscount  = await Users.find({})
          feedbackCount = await Feedback.find({}) 
         // console.log(items.length)
                
                
                    return res.view('dashboard',{userscount:userscount.length,feedbackCount:feedbackCount.length})

      
     
    }












};

