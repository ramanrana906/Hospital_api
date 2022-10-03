const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Doctor = require('../models/doctor')


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done){
        // find a user and establish the identity
        Doctor.findOne({email: email}, function(err, doctor)  {
            if (err){
                
                console.log("error finding in user --> passport");
                request.info = "Something's not Right";
                request.code =500;
                return done(err);
            }

            if (!doctor || doctor.password != password){
               
                console.log("Invalid username password");
                request.code =401;
                request.info = "Invalid username password";
                return done(null, false);
            }

            console.log(doctor);
            request.code = 200;
            return done(null, doctor);
        });
    }


));








module.exports = passport;