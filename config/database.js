const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Joaquinbrialva:lZxWpC2SXrbjU0sx@alvarez.kblpnkd.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to technical test database"))
    .catch((error) => console.log(error))