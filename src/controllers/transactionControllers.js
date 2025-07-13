
const Transaction = require("../models/transaction")

const transactionArr = [];

const transactionController = {

    // get all transactions
    getAllTransactions: (req, res) => {
    try {
      res.json({
        success: true,
        count: transactionArr.length,
        data: transactionArr
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: 'Failed to retrieve transactions' 
      });
    }
  }


}

module.exports = transactionController;