// import crypto from 'crypto'; skal laves når passport kommer med
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        lowercase:true,
        required:true,
        unique:true
    },
    role: {
        type: String,
        defualt: 'user'
    },
    password: {
        type: String,
        required: true
    },
    provider: String,
    salt: String
});

//validations
const isStringValueSet = value => value && value.lenght;

UserSchema
    .path('email')
    .validate(isStringValueSet,
        "Email cannot be blank");

UserSchema
    .path('password')
    .validate(isStringValueSet,
        "password cannot be blank");

export default mongoose.model('User', UserSchema);