
const express = require("express");
const { getAllTransactions, getTransactionById, updateTransactions, deleteTransaction, createTransactions } = require("../models/transaction");
const router = express.Router();

// GET all transactions
router.get("/", (req, res) => {
    const transactions = getAllTransactions();
    res.status(200).json({
        message: "All transactions fetched successfully",
        transactions
    });
});

// GET transactions by ID
router.get("/:id", (req, res) => {
    const transaction = getTransactionById(req.params.id);
    if (!transaction){
        res.status(404).json({
            message: "Transaction not found"
        });
    }
    else {
        res.status(200).json({
            message: "Transaction fetched successfully",
            transaction
        });
    }
});

// POST create transactions
router.post("/", (req, res) => {
    const transaction = createTransactions(req.body);
    res.status(201).json({
        message: "Transaction created successfully",
        transaction
    });
});

// PUT update transaction
router.put("/:id", (req, res) => {
    const updateTransaction = updateTransactions(req.params.id, req.body);
    if (!updateTransaction){
        res.status(404).json({
            message: "Transaction not found"
        });
    }
    else {
        res.status(200).json({
            message: "Transaction updated successfully",
            updateTransaction
        });
    }
});

// DELETE transaction 
router.delete("/:id", (req, res) => {
    const deletedTransaction = deleteTransaction(req.params.id);
    if (!deletedTransaction){
        res.status(404).json({
            message: "Transaction not found"
        });
    }
    else {
        res.status(200).json({
            message: "Successfully deleted the transaction",
            deletedTransaction
        });
    }
});

module.exports = router;
