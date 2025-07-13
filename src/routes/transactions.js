
const express = require("express");
const { getAllTransactions, getTransactionById, updateTransactions, deleteTransaction, createTransactions } = require("../models/transaction");
const router = express.Router();

// GET all transactions
router.get("/", (req, res) => {
    const transaction = getAllTransactions();
    if (!transaction){
        res.status(402).json({
            message: "Error fetching all transactions"
        })
    }
    else res.status(200).json({
        message: "All transactions fetched successfully",
        transaction
    })
})

// GET transactions by ID
router.get("/:id", (req, res) => {
    const getAllTransactionsById = getTransactionById();
    if (!getAllTransactionsById){
        res.status(401).json({
            message: "Error fetching the transaction"
        })
    }
    else res.status(200).json({
        message: "Transaction fetched",
        getAllTransactionsById
    })
    
})

// POST create transactions
router.post("createTransactions", (req, res) => {
    const createTransaction = createTransactions();
    if (!createTransaction){
        res.status(404).json({
            message: "Error creating a transaction"
        })
    }
    else res.status(200).json({
        message: "Transaction created successfully",
        createTransactions 
    })
})

// PUT update transaction
router.put("/:id", (req, res) => {
    const updateTransaction = updateTransactions(req,params.id, req.body);
    if (!updateTransaction){
        res.status(403).json({
            message: "Failed to update the transaction"
        })
    }
    else res.status(200).json({
        message: "Transaction updated successfully",
        updateTransaction
    })
})

// DELETE transaction 
router.delete("/:id", (req, res) => {
    const transactionDelete = deleteTransaction();
    if (!transactionDelete){
        res.status(405).json({
            message: "Error deleting the transaction"
        })
    }
    else res.status(200).json({
        message: "Successfuly deleted the transaction",
        transactionDelete
    })
})

module.exports = router;
