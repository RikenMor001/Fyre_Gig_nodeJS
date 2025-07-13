
let transactionsArray = [];
let nextId = 1;

// CREATE transactions
const formatDate = new Date().toISOString();
const createTransactions = (transactionData) => {
    const transactions = {
        id: nextId++,
        ...transactionData,
        createdAt: formatDate
    }
    transactionsArray.push(transactions);
    return transactions;
}

// GET all the transactions  
const getAllTransactions = (transactionsArray) => {
    return transactionsArray;
}

// GET transaction by ID
const getTransactionById = ({ id }) => {
    return transactionsArray.find(t => t.id === parseInt(id));
}

// UPDATE transactions 
const updateTransactions = ({id, transactionsArray}) => {
    const index = transactionsArray.findIndex(t => t.id === parseInt(id));
    if (index !== -1){
        transactionsArray[index] = { ...transactionsArray[index], ...updateData}
        return transactionsArray[index]
    }
    return null;
}

// DELETE transactions 
const deleteTransaction = ({id, transactionsArray}) => {
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
