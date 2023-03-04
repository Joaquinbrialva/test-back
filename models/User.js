const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    nombre: { type: String, required: true },
    contraseña: { type: String, required: true },
})

const User = mongoose.model('User', userSchema);

module.exports = User;