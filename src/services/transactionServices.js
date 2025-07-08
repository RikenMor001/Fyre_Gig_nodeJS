
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
    }
}
