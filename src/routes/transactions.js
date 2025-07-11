
const express = require("express");
const { getAllTransactions } = require("../models/transaction");
const router = express.Router();

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
