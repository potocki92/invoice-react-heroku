import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "./controllers/userController.js";
import {
  addProduct,
  getProducts,
  deleteProduct,
} from "./controllers/productsController.js";
import {
  addClient,
  deleteClient,
  getClients,
} from "./controllers/clientController.js";
import {
  addInvoice,
  getInvoices,
  deleteInvoice,
} from "./controllers/invoiceController.js";
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
export default router;

/*
USER
*/

// GET
router.get("/:id/user", getUser);
