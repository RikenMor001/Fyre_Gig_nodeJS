
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
