
const z = require("zod");

// Base transaction schema without id (since id is auto-generated)
const transactionBaseSchema = z.object({
    amount: z.number().positive("Amount has to be a positive number"),
    descritpion: z.string().min(1, "Cannot be empty").max(150, "Description should not exceed 150 words").optional(),
    accountNumber: z.string().length(6, "Account number has to be a 6 digit number"),
    type: z.enum(["deposit", "withdrawl", "transfer"], {
        errorMap: () => ({ message: "Transaction type can only be deposit, withdrawl or transfer" })
    }),
    balance: z.number().optional()
});

// POST create a transaction (without id since it's auto-generated)
const createTransactionSchema = transactionBaseSchema;

// PUT update a transaction
const updateTransactionSchema = z.object({
    descritpion: z.string().optional(),
    status: z.enum(["completed", "pending", "failed"]).optional() 
});

// ID parameter validation
const idParamSchema = z.object({
    id: z.string().regex(/^\d+$/, 'ID must be a number').transform(Number)
});

const accountParamSchema = z.object({
    accountNumber: z.string().min(1, 'Account number is required')
});

const typeParamSchema = z.object({
    type: z.enum(['deposit', 'withdrawal', 'transfer'])
});

module.exports = {
    createTransactionSchema,
    updateTransactionSchema,
    idParamSchema,
    accountParamSchema,
    typeParamSchema
};
