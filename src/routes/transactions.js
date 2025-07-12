
const express = require("express");
const { getAllTransactions, getTransactionById } = require("../models/transaction");
const router = express.Router();

// GET all transactions
router.get("/", (req, res) => {
    try {
        const transaction = getAllTransactions();
        res.json(transaction);  
    } catch(error){
        res.status(404).json({
            message: "Not able to fetch all transactions"
        })
    }
})

// GET transactions by ID
router.get("/:id", (req, res) => {
    const getAllTransactionsById = getTransactionById();
    res.json(getAllTransactionsById);
})
