const {Schema, model} = require('mongoose');


const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    branches: [{
        name: {type: String, required: true, unique: true},
        balance: {type: Number, default: 0},
    }],
    transactions: [{
        type: {
            type: String, required: true, enum: ['income', 'expense', 'transfer']
        },
        note: {type: String, default: ''},
        amount: {
            type: Number, required: true
        },
        paymentId: {
            type: String, required: true
        },
        paymentName: {
            type: String,
            required: true
        },
        toId: {
            type: String, required: true
        },
        toName: {
            type: String, required: true
        },
        date: {type: Date, default: Date.now}
    }]
})

const User = model('user', userSchema);

module.exports = {User}