const router = require("express").Router();
const { User } = require("../../models/user.model");
const { ObjectId } = require("mongoose").Types;

router.get("/", async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ branches: user.branches });
});

router.post("/", async (req, res) => {
  const user = await User.findById(req.user.id);

  const { name, balance } = req.body;

  user.branches.push({
    name,
    balance,
  });

  await user.save();
  res.json({ branches: user.branches });
});


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user.id);

  const branchIndex = user.branches.findIndex((b) =>
    new ObjectId(b._id).equals(new ObjectId(id))
  );

  if (branchIndex === -1) {
    return res.status(404).json({msg: 'Branch Not Exists'})
  }

  user.branches.splice(branchIndex, 1)

  await user.save()

  res.json({branches: user.branches})


});

module.exports = router;
