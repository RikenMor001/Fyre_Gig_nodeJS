
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
const getTransactionById = ({id, transactionsArray}) => {
    return transactionsArray.find(t => t.id === parseInt(id));
}

// UPDATE transactions 
const updateTransactions = ({id, transactionsArray}) => {

}
