const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.set('strictQuery', false)
const userSchema = new Schema({
    name: {
        required: true,
        type: String,
        trim: true
    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                return value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            },
            message: "please enter a valid email address"
        },
        
    },
    password: {
        required: true,
        type: String,
        validate: {
            validator: (value) => {

                return value.length > 5
            },
            message: 'password should be at least 6 characters'
        },
    },
    address: {
        type: String,
        default: ''
    },
    type: {
        type:String,
        default: 'user'
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User