//const { request } = require('http');
const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');

module.exports.create = async function(req,res){
console.log(req.body);
// if (request.body.password != request.body.confirm-password) {
//         return res.json(422,{
//             status:422,
//             message:"Passwords do not match"
//         })
//     }

try {
    let doctor = await Doctor.findOne({ email: req.body.email }); //checking if doctor alreadr exists
    if (doctor) {
        //if doctor exists
        return res.json(409, {
            message: 'Doctor already exists!'
        });
    } else {
        doctor = await Doctor.create(req.body); //creating a new doctor account
        return res.json(201, {
            message: 'Doctor created successfully!'
        })
    }
} catch(err){
    //catching errors
    console.log('Internal server error!!',err);
    return res.json(500, {
        message: 'Internal Server Error'
    })
}
    
  
}

module.exports.createSession = async function(req, res){

    try{
        let doctor  = await Doctor.findOne({email: req.body.email});

        if (!doctor || doctor.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }

        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(doctor.toJSON(), 'passport-jwt', {expiresIn:  '10000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}