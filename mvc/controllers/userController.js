const { userSchema } = require("../Models/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Signup method
exports.signup = async (req, res) => {
  try {
    const {  email, password } = req.body;
console.log(req.body)
   
    const existinguser = await userSchema.findOne({ email });
    if (existinguser) {
      return res.status(400).json({ message: 'user already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 7);

    const user = await userSchema.create({
      email,
      password: hashedPassword
    });
console.log({user})

//     await user.save();

    res.status(200).json({data:user, message: 'user created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.login = async (req, res) => {
    try {
        let verifyemail;
        let verifypassword;
        let token;
    
        if (!req.body || Object.keys(req.body).length == 0) {
          return res.send({ status: 401, msg: 'Unable to create a user' });
        }
    
        verifyemail = await userSchema.findOne({ email: req.body.email });
    
        if (!verifyemail) {
          return res.send({ status: 401, msg: 'Invalid Email' });
        }
    
        verifypassword = await bcrypt.compare(req.body.password, verifyemail.password);
        if (!verifypassword) {
          return res.send({ status: 401, msg: 'Invalid Password' });
        }
    // console.log(process.env.JWTSECRETKEY)
        token = jwt.sign({ id: verifyemail._id }, process.env.JWTSECRETKEY, {
          expiresIn: '1h',
        });
    
        return res.send({ status: 200, msg: 'Login Successfully', token });
      } catch (err) {
        console.log({ err });
        return res.send({ status: 400, msg: err });
      }
    }