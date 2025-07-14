
const express = require("express");
const { getAllTransactions, getTransactionById, updateTransactions, deleteTransaction, createTransactions, getTransactionsByAccount, getTransactionsByType } = require("../models/transaction");
const { createTransactionSchema, updateTransactionSchema, idParamSchema, accountParamSchema, typeParamSchema } = require("../valdiationSchema/valdiationSchema");
const router = express.Router();

// Validation middleware function
const validateRequest = (schema, type = 'body') => {
    return (req, res, next) => {
        try {
            let data;
            if (type === 'body') {
                data = req.body;
            } else if (type === 'params') {
                data = req.params;
            } else if (type === 'query') {
                data = req.query;
            }
            
            schema.parse(data);
            next();
        } catch (error) {
            if (error.name === 'ZodError') {
                return res.status(400).json({
                    message: 'Validation failed',
                    errors: error.errors.map(err => ({
                        field: err.path.join('.'),
                        message: err.message
                    }))
                });
            }
            next(error);
        }
    };
};

// GET all transactions
router.get("/", (req, res) => {
    const transactions = getAllTransactions();
    res.status(200).json({
        message: "All transactions fetched successfully",
        transactions
    });
});

// GET transactions by account number
router.get("/account/:accountNumber", 
    validateRequest(accountParamSchema, 'params'),
    (req, res) => {
        const transactions = getTransactionsByAccount(req.params.accountNumber);
        res.status(200).json({
            message: `Transactions for account ${req.params.accountNumber} fetched successfully`,
            transactions
        });
    }
);

// GET transactions by type
router.get("/type/:type", 
    validateRequest(typeParamSchema, 'params'),
    (req, res) => {
        const transactions = getTransactionsByType(req.params.type);
        res.status(200).json({
            message: `${req.params.type} transactions fetched successfully`,
            transactions
        });
    }
);

// GET transactions by ID
router.get("/:id", 
    validateRequest(idParamSchema, 'params'),
    (req, res) => {
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
    }
);

// POST create transactions
router.post("/", 
    validateRequest(createTransactionSchema, 'body'),
    (req, res) => {
        try {
            const transaction = createTransactions(req.body);
            res.status(201).json({
                message: "Transaction created successfully",
                transaction
            });
        } catch (error) {
            res.status(400).json({
                message: "Error creating transaction",
                error: error.message
            });
        }
    }
);

// PUT update transaction
router.put("/:id", 
    validateRequest(idParamSchema, 'params'),
    validateRequest(updateTransactionSchema, 'body'),
    (req, res) => {
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
    }
);

// DELETE transaction 
router.delete("/:id", 
    validateRequest(idParamSchema, 'params'),
    (req, res) => {
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
    }
);

module.exports = router;
