const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    AccNo: {
        type: String,
        required: true,
        unique: true,
        default: 'AccNo'
    },
    password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User