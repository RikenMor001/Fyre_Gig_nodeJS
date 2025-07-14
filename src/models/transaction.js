
let transactionsArray = [];
let nextId = 1;

// CREATE transactions
const createTransactions = (transactionData) => {
    const transactions = {
        id: nextId++,
        ...transactionData,
        createdAt: new Date().toISOString()
    }
    transactionsArray.push(transactions);
    return transactions;
}

// GET all the transactions  
const getAllTransactions = () => {
    return transactionsArray;
}

// GET transaction by ID
const getTransactionById = (id) => {
    return transactionsArray.find(t => t.id === parseInt(id));
}

// UPDATE transactions 
const updateTransactions = (id, updateData) => {
    const index = transactionsArray.findIndex(t => t.id === parseInt(id));
    if (index !== -1){
        transactionsArray[index] = { ...transactionsArray[index], ...updateData}
        return transactionsArray[index]
    }
    return null;
}

// DELETE transactions 
const deleteTransaction = (id) => {
    const deleteTransactionData = transactionsArray.findIndex(t => t.id === parseInt(id));

    if (deleteTransactionData !== -1){
        const deleteTransaction = transactionsArray[deleteTransactionData];
        transactionsArray.splice(deleteTransactionData, 1);
        return deleteTransaction
    }
    return null;
}

module.exports = {
    createTransactions,
    getAllTransactions, 
    getTransactionById,
    updateTransactions,
    deleteTransaction
}
