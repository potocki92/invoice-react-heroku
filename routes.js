const express = require("express");
const {
  loginUser,
  registerUser,
  getUser,
} = require("./controllers/userController.js");
const {
  addProduct,
  getProducts,
  deleteProduct,
} = require("./controllers/productsController.js");
const {
  addClient,
  deleteClient,
  getClients,
} = require("./controllers/clientController.js");
const {
  addInvoice,
  getInvoices,
  deleteInvoice,
} = require("./controllers/invoiceController.js");
const router = express.Router();

/* 
AUTHENTICATION USER 
*/

// LOGIN USER
router.post("/login", loginUser);
// REGISTER USER
router.post("/register", registerUser);

/* 
PRODUCTS  
*/

// POST
router.post("/:id/addProduct", addProduct);
// GET
router.get("/:id/products", getProducts);
// DELETE
router.delete("/:id/products/:productId", deleteProduct);

/*
CLIENTS
*/

// POST
router.post("/:id/addClient", addClient);
// GET
router.get("/:id/clients", getClients);
// DELETE
router.delete("/:id/clients/:clientId", deleteClient);

/*
INVOICES
*/

// POST
router.post("/:id/addInvoice", addInvoice);
// GET
router.get("/:id/invoices", getInvoices);
// DELETE
router.delete("/:id/:invoiceID", deleteInvoice);

/*
USER
*/

// GET
router.get("/:id/user", getUser);

export default router;
