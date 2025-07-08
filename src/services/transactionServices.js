
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

        const sortBy = filter.sortBy;
        const order = filter.order;
    }
}
