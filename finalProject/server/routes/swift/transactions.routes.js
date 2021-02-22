const router = require("express").Router();
const { User } = require("../../models/user.model");

const { ObjectId } = require("mongoose").Types;


router.get('/', async (req, res) => {
    const user = await User.findById(req.user.id);

    res.json({transactions: user.transactions})
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.user.id);

    const {id} = req.params;

    const transactions = user.transactions.filter(
      (t) =>
        new ObjectId(t.paymentId).equals(id) ||
        new ObjectId(t.toId).equals(id)
    );

    res.json({transactions})
})

router.post("/", async (req, res) => {
  function paymentNotFound(branchId) {
    return res.status(404).json({ msg: "Can Not Find Payment With Given this id: " + branchId });
  }


  const user = await User.findById(req.user.id);

  const { type, amount, paymentId, toId, note } = req.body;

  const amountSign = ['expense', 'transfer'].includes(type) ? -1 : 1;

  const payment = user.branches.find((b) =>
    new ObjectId(b._id).equals(paymentId)
  );

  if (!payment) {
    return paymentNotFound(paymentId)
  }

  // balance = 1000
  // amount sign = -1 (expense)
  // amount 100
  // final balance = 1000 + (-1 * 100) = 1000 + (-100) = 1000 - 100 = 900


// convert NumberString to Number 
// 1: Number(NumberString) => Number
// 2: +NumberString => Number 
// 3: parseInt(NumberString) => Number

  payment.balance += +amount * amountSign;


  let to = payment;

  if (type === "transfer") {
    to = user.branches.find((b) => new ObjectId(b._id).equals(toId));

    if (!to) {
      return paymentNotFound(toId);
    }

    to.balance += +amount;
  }

  const transaction = {
    type,
    amount,
    paymentId,
    paymentName: payment.name,
    toId: toId || paymentId,
    toName: to.name,
    note
  };

  user.transactions.push(transaction);

  await user.save();

  res.json({
    transaction,
    payment,
    to
  })


});

router.delete('/:id', async (req, res) => {
     function paymentNotFound(branchId) {
       return res
         .status(404)
         .json({ msg: "Can Not Find Payment With Given this id: " + branchId });
     }
    const user = await User.findById(req.user.id)
    const {id} = req.params;

    const transactionIndex = user.transactions.findIndex(
      (transaction) => new ObjectId(transaction._id).equals(id)
    );

    if (transactionIndex == -1) {
        return res.status(404).json({
            msg: 'Can\'t Find Transaction With Given Id' 
        })
    }

    const transaction =  user.transactions[transactionIndex]

    const {paymentId,toId, amount, type} = transaction;

    
    const payment = user.branches.find(b => new ObjectId(b._id).equals(paymentId))
 
    if (!payment) {
        return paymentNotFound(paymentId);
    }

    
    const amountSign = ["expense", "transfer"].includes(type) ? +1 : -1;

    payment.balance += (amount * amountSign);

    let to = payment


    if (type === 'transfer') {
        to = user.branches.find((b) =>
          new ObjectId(b._id).equals(toId)
        );

        if (!to) {
          return paymentNotFound(toId);
        }

        to.balance -= amount
    }

    user.transactions.splice(transactionIndex, 1)

    await user.save();

    res.json({
        payment,
        to,
        transaction
    })
    
})

module.exports = router;
