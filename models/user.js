const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
     username :{
        type : String,
        required : true,
        trim : true
    },
    age :{
        type : Number,
        required : true,
        default : 18,
        validate(val) {
            if(val <= 0) {
                throw new Error("Invalid age value must be positive")
            }
        }
    },
    city :{
        type : String,
        required : true,
    }
})

const User = mongoose.model('User' , userSchema)

module.exports = User