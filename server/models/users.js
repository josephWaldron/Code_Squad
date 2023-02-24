const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
    },
    picturePath: {
        type: String,
        default: "",
    },
    expert: {
        type: Boolean,
        default: false
    },
    conversations: {
        type: Array,
        default: []
    },
    totalStatus: {
        type: Number,
        default: 0
    },
    moduleStatus: {
        type: Number,
        default: 0
    },
    lessonStatus: {
        type: Number,
        default: 0
    },
});

const UserModel = mongoose.model('users', userSchema)
module.exports = UserModel;