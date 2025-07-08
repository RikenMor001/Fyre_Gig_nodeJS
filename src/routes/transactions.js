// import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
// import { validateTransaction, validateTransactionUpdate } from '../validation/transactionSchema.js';
// import { TransactionService } from '../services/transactionService.js';

// const router = express.Router();
// const transactionService = new TransactionService();

// // GET /api/transactions - Get all transactions
// router.get('/', (req, res) => {
//   try {
//     const { type,| category, sortBy, order, limit, offset } = req.query;
    
//     const transactions = transactionService.getAllTransactions({
//       type,
//       category,
//       sortBy,
//       order,
//       limit: limit ? parseInt(limit) : undefined,
//       offset: offset ? parseInt(offset) : undefined
//     });

//     res.json({
//       success: true,
//       data: transactions,
//       count: transactions.length,
//       timestamp: new Date().toISOString()
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//       message: error.message,
//       timestamp: new Date().toISOString()
//     });
//   }
// });

// // GET /api/transactions/:id - Get transaction by ID
// router.get('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const transaction = transactionService.getTransactionById(id);

//     if (!transaction) {
//       return res.status(404).json({
//         success: false,
//         error: 'Not Found',
//         message: `Transaction with ID ${id} not found`,
//         timestamp: new Date().toISOString()
//       });
//     }

//     res.json({
//       success: true,
//       data: transaction,
//       timestamp: new Date().toISOString()
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//       message: error.message,
//       timestamp: new Date().toISOString()
//     });
//   }
// });

// // POST /api/transactions - Create new transaction
// router.post('/', (req, res) => {
//   try {
//     const validationResult = validateTransaction(req.body);
    
//     if (!validationResult.success) {
//       return res.status(400).json({
//         success: false,
//         error: 'Validation Error',
//         message: 'Invalid transaction data',
//         details: validationResult.error.errors,
//         timestamp: new Date().toISOString()
//       });
//     }

//     const transactionData = {
//       id: uuidv4(),
//       ...validationResult.data,
//       date: new Date().toISOString(),
//       createdAt: new Date().toISOString(),
//       updatedAt: new Date().toISOString()
//     };

//     const newTransaction = transactionService.createTransaction(transactionData);

//     res.status(201).json({
//       success: true,
//       data: newTransaction,
//       message: 'Transaction created successfully',
//       timestamp: new Date().toISOString()
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//       message: error.message,
//       timestamp: new Date().toISOString()
//     });
//   }
// });

// // PUT /api/transactions/:id - Update transaction
// router.put('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const validationResult = validateTransactionUpdate(req.body);

//     if (!validationResult.success) {
//       return res.status(400).json({
//         success: false,
//         error: 'Validation Error',
//         message: 'Invalid transaction data',
//         details: validationResult.error.errors,
//         timestamp: new Date().toISOString()
//       });
//     }

//     const updatedTransaction = transactionService.updateTransaction(id, validationResult.data);

//     if (!updatedTransaction) {
//       return res.status(404).json({
//         success: false,
//         error: 'Not Found',
//         message: `Transaction with ID ${id} not found`,
//         timestamp: new Date().toISOString()
//       });
//     }

//     res.json({
//       success: true,
//       data: updatedTransaction,
//       message: 'Transaction updated successfully',
//       timestamp: new Date().toISOString()
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//       message: error.message,
//       timestamp: new Date().toISOString()
//     });
//   }
// });

// // DELETE /api/transactions/:id - Delete transaction
// router.delete('/:id', (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleted = transactionService.deleteTransaction(id);

//     if (!deleted) {
//       return res.status(404).json({
//         success: false,
//         error: 'Not Found',
//         message: `Transaction with ID ${id} not found`,
//         timestamp: new Date().toISOString()
//       });
//     }

//     res.json({
//       success: true,
//       message: 'Transaction deleted successfully',
//       timestamp: new Date().toISOString()
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//       message: error.message,
//       timestamp: new Date().toISOString()
//     });
//   }
// });

// export { router as transactionRoutes };

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
