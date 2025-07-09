
const express = require("express");
const { TransactionService } = require("../services/transactionServices");
const router = express.Router();
const formateDate = new Date().toISOString();
const transactionServices = new TransactionService();;

// get transactions
router.get("/transactions", async (req, res) => {
    try {
        const {type, category, sortBy, order, limit, offset } = req.query; 
        const transactions = transactionServices.getAllTransactions({
            type,
            category, 
            sortBy, 
            order, 
            limit: limit ? parseInt(limit) : undefined, 
            offset: offset ? parseInt(offset) : undefined
        })

        res.json({
            success: true,
            data: transactions,
            timeStamp: formateDate,
            count: transactions.length
        })

    } catch(error){
        res.status(500).json({
            success: false,
            error: error.emssage + "Error fetching transactions",
            timeStamp: formateDate,
        })
    }
})

// get transactions by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.pramas;

        const fetchTransactionsById = transactionServices.getTransactionById(id);

        if (!fetchTransactionsById){
            res.json({
                status: 404,
                success: false,
                error: error.message,
                timeStamp: formateDate,
                message: `Transactions with ID${id} not found`
            })
        }

        return res.json({
            success: true,
            data: id,
            timeStamp: formateDate,
            message: `Transactions with ID${id} found`
        })
    } catch(error){
        res.status(500).json({
            success: false,
            error: "Internal server error",  
            message: error.message,
            timeStamp: formateDate
        })
    }
})

// create transactions
router.post("/createTransactions", async (req, res) => { 
    
})

// update transactions
router.put("updateTransactions", async (req, res) => {

})


// delete transactions
router.delete("deleteTransactions", async (req, res) => {

})

module.exports = router();
