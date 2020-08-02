const { Schema, model } = require('mongoose');
const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatars:{
        type: [String],
        required: false,
    },
    last_ip:{
        type: String,
        required: false,
    },

},{
    timestamps: true,

});

module.exports = model('User', UserSchema);