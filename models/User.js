const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    email: String
});

const User = mongoose.model("User", UserSchema);

// UserSchema.plugin(passportLocalMongoose);

module.exports = User;