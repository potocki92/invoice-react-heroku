var User = require("../models/userModel.js");

// POST
const addInvoice = async (req, res) => {
  const id = req.params.id;
  const invoice = { ...req.body };
  console.log(id, invoice);
  try {
    const result = await User.updateOne(
      { _id: id },
      { $push: { invoices: invoice } }
    );
    if (result.nModified === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.send("Invoice added succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

// GET
const getInvoices = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send("User not founr");
      return;
    }
    res.json(user.invoices);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports = { addInvoice, getInvoices };
