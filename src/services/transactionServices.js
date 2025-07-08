
const formatDate = new Date().toISOString();

export class TransactionService {
    constructor(){
        this.transactions = new Map();
        this.initializeSampleData();
    }

    initializeSampleData(){
        const sampleDate = [{
            id: 1,
            date: formatDate,
            type: "credit",
            category: "job",
            amount: 100000,  // In banking systems the amount is treated in "int" and not in "float" because of precision issues
            description: "salary", 
            createdAt: formatDate,
            updatedAt: formatDate
        }, {           
            id: 2,
            date: formatDate,
            type: "debit",
            category: "food",
            amount: 3000,  
            description: "food", 
            createdAt: formatDate,
            updatedAt: formatDate
        }, {
            id: 3,
            date: formatDate,
            type: "credit",
            category: "side gig",
            amount: 50000,  
            description: "side gig", 
            createdAt: formatDate,
            updatedAt: formatDate
        }]

        sampleDate.forEach(transaction => {
            this.transactions.set(transaction.id, transaction);
        })   
    }
    
    getAllTransactions(filter = {}){
        const transactions = Array.from(this.transactions.values())
        
        // apply filters than apply sorting and than at the end pagination
        // see what type is being used and than push it to the transactions array
        if (filter.type){
            transactions.filter(t => t.type === filter.type);
        }

        // see what category is being used and than push it to the transactions array
        if (filter.category){
            transactions.filter(t => t.category === filter.category);
        }

        const sortBy = filter.sortBy || "date";
        const order = filter.order || "desc";
        
        transactions.sort((a, b) => {
            const valueOfA = a[sortBy];
            const valueOfB = b[sortBy];
            
            if (typeof valueOfA === "string" && typeof valueOfB === "string") {
                return order === "desc" ? valueOfA.localeCompare(valueOfB) : valueOfB.localeCompare(valueOfA);
            }

            if (typeof valueOfA === "number" && typeof valueOfB === "number") { 
                return order === "desc" ? valueOfA - valueOfB : valueOfB - valueOfA;
            }
            return 0;
        })

        // Pagination
        if (filter.offset){
            transactions = transactions.slice(filter.offset);     
        }

        if (filter.limit){
            transactions = transactions.slice(0, filter.limit);
        }

        return transactions;
    }

    getTransactionById(id){
        return this.transactions.get(id);
    }

    // creating transaction
    createTransaction(transaction){
        const transaction = {
            ...transactionData,
            createdAt: formatDate,
            updatedAt: formatDate
        }
        this.transactions.set(transaction.id, transaction);
        return transaction;
    }

    // updating transaction
    updateTransaction(id, transaction){
        const updateTransaction = this.transactions.get(id);

        if (!updateTransaction){
            return null;
        }

        const updatedTransaction = {
            ...exisitingTransaction, // this is the existing transaction
            ...updateData,  // here I am updating the existing transaction with the new data
            date: formatDate 
        }

        this.transactions.set(id, updatedTransaction);
        return updatedTransaction;
    }

    // deleting transaction
    deleteTransaction(id){
        this.transactions.delete(id);
    }

    // fetching transactions 

    getTransactionsState(){
        const transactionsValue = Array.from(this.transactions.values());
        const credit = transactionsValue.filter(t => t.type === "credit");
        const debit = transactionsValue.filter(t => t.type === "debit");

        return {
            total: transactionsValue.length,
            credit: {
                count: credit.length,
                total: credit.reduce((acc, curr) => acc + curr.amount, 0)
            },
            debit: {
                count: debit.length,
                total: debit.reduce((acc, curr) => acc + curr.amount, 0)
            }            
        }
    }
}
