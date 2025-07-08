

const express = require('express');
const router = express.Router();

// GET/transactions
router.get("/transactions", async (req, res) => {
    try {
        const body = req.body;
        res.json({
            success: true,
            data: body,
            timestamp: new Date().toISOString(),
            message: "transactions fetched successfuly"
        })
    } catch(error){
        res.status(500).json({
            error: "Internal server error",
            message: error.message,
            timestamp: new Date().toISOString()
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
