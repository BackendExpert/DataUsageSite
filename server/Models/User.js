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
        default: ''
    },
    password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        required: true,
    },
    CurrentPackage: {
        type: String,
        required: true,
        default: 'No Packages'
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