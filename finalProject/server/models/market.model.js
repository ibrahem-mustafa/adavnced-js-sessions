const {Schema, model, Types} = require('mongoose')


const marketSchema = Schema({
    name: String,
    customers: [{
        type: Types.ObjectId,
        ref: 'user'
    }]
});

const Market = model('market', marketSchema)

module.exports = {Market}