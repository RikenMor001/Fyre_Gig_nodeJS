const express = require('express');
const router = express.Router();
const formatDate = new Date().toISOString();

// GET/transactions
router.get("/transactions", async (req, res) => {
    try {
        const body = req.body;
        res.json({
            // success, data, timestamp, message
            success: true,
            data: body,
            timestamp: formatDate,
            message: "transactions fetched successfuly"
        })
    } catch(error){
        res.status(500).json({
            success: false,
            error: "Internal server error",
            message: error.message,
            timestamp: formatDate
        })
    }
})

// GET/transactions/:id
router.get("transactions/:id", async(req, res) => {
        
})

// POST /createTransaction
router.post("createTransactions", async (req, res) => {

})

// PUT /updateTransaction
router.put("updateTransaction", async (req, res) => {

})

// DELETE /deleteTransaction
router.delete("deleteTransaction", async (req, res) => {

})

module.exports = router;
