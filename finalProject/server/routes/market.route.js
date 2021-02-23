const router = require('express').Router()
const {Market} = require('../models/market.model')
const {ObjectId} = require('mongoose').Types



router.get('/', async (req,res) => {
    const markets = await Market.find().populate('customers', '-transactions -password');
    res.json({markets})
})

router.post('/', async (req, res) => {
    
    const {name} = req.body
    const market = Market({name})
    
    await market.save();
    res.json({market})
})

router.put('/:id/customer', async (req, res) => {
    const {customerId} = req.body;
    const {id} = req.params;

    const market = await Market.findById(id);
    
    market.customers.push(new ObjectId(customerId))

    await market.save();

    res.json({market})
})

module.exports = router;