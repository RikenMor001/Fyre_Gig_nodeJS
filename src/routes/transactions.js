
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

    } catch(error){
        res.status(500).json({
            success: false,
            error: error.emssage + "Error fetching transactions",
            timeStamp: formateDate,
        })
    }
})

// get transactions by id
router.get("/transactions/:id", async (req, res) => {
    
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
