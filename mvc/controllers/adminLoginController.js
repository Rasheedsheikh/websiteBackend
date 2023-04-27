
const {adminUser}= require("../Models/adminLoginModel")
const bcrypt = require('bcrypt');


exports. getUser= async(req,res)=>{
    //     const user = await adminLoginModel.find(req.body);
    //     res.send(user);
    //   };

    const { email, Password } = req.body;

    try {
      const user = await adminUser.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      res.status(200).json({ message: 'User authenticated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
   

    //   exports. postUser=  async(req,res)=>{
    //     let {Password} = req?.body;
    //     // password = br
    //     const hash = await bcrypt.hash(Password);


    //     const user = await adminLoginModel.create(req.body);
    //     res.send(user);
    //   };
