const User = require('../models/User');

const userController = {
    register: async (req, res) => {
        let { email, username, nombre, contraseña, confirmar } = req.body;

        try {
            let user = await User.findOne({ email });
            if (!user) {
                if (contraseña != confirmar) {
                    res.status(400).json({ message: 'Passwords do not match' })
                } else {
                    let newUser = new User({ email, username, nombre, contraseña });
                    await newUser.save();
                    res.status(201).json({ message: 'User created', success: true });
                }
            } else {
                res.status(400).json({ message: 'User already exists', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'something went wrong', success: false });
        }
    },

    signIn: async (req, res) => {
        let { email, contraseña } = req.body;

        try {
            let user = await User.findOne({ email, contraseña });

            if (!user) {
                res.status(400).json({ error: 'You are not registered', success: false });
            } else if (user.contraseña === contraseña) {
                let signin = {
                    nombre: user.username,
                }
                res.status(200).json({ response: { user: signin }, message: 'Welcome ' + user.username });
            } else {
                res.status(400).json({ error: 'Invalid password', success: false });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    },


    showAll: async (req, res) => {
        try {
            let users = await User.find();
            if (!users) {
                res.status(404).json({ message: 'no users yet', success: false })
            } else {
                res.status(200).json(users)
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'something went wrong' })
        }
    }
}

module.exports = userController;
