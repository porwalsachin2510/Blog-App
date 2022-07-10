const User = require("../models/User");
const bcrypt = require('bcrypt');
const router = require("express").Router();


//REGISTER
router.post("/register", async (req, res) => {
    
    const salt = bcrypt.genSaltSync(10);

    const hashed = bcrypt.hashSync(req.body.password, salt);
     
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed
        });
        
        const user = await newUser.save();

        res.status(200).json(user);

    } catch (err) {
        res.status(500).json(err);
    }
    
    
});


//LOGIN
router.post("/login", async (req, res) => {
    
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {return res.status(400).json("Wrong username or Password");}

        const validated = bcrypt.compareSync(req.body.password, user.password);

        if (!validated) { return res.status(400).json("Wrong Password"); }

        const { password, ...other } = user._doc;

        res.status(200).json(other);

    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;