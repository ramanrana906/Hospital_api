const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor')


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "passport-jwt"
}


passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err,doctor){
        if (err){ request.code = 500;
            request.message = "Internal Server Error!!!"
            console.log("Error in finding Doctor -> JWT");
            return (err);}

        if (doctor){
            return done(null, doctor);
        }else{
            request.code = 401;
                request.info = "Authorization failed! Invalid Authorization key or Doctor Doesn't exits!!"
                return done(null, false);;
        }
    })

}));

module.exports = passport;
