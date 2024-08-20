const mongoose = require('mongoose');

const connectDB = async (URL) => {
    await mongoose.connect(URL);
}

module.exports = connectDB; 