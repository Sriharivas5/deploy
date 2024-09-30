const Dummy = require("./model");

exports.createDummy = async (req, res) => {
  try {
    const { user_name, sal } = req.body;
    const dummy = new Dummy(req.body);
    await dummy.save();
    res.status(201).send(dummy);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDummy = async (req, res) => {
  try {
    // const { name } = req.body;
    const dummies = await Dummy.find();
    // dummies.save();
    res.json(dummies);
  } catch (error) {
    res.status(500).send(error);
  }
};
