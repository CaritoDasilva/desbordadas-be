const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('We are connecting with the database, how cool is that!!!'))
    .catch((err) => console.log('Something went wrong when connecting to the database, Im so so sorry!', err))