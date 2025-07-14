
const z = require("zod");

const validationSchema = z.object({
    id: z.number().positive("Id keeps on increasing with every transaction created"),
    amount: z.number().positive("Amount has to be a number"),
    descritpion: z.string().min(1, "Cannot be empty").max(150, "Description should not exceed 150 words").optional(),
    accountNumber: z.number().min(6).max(6, "Account number has to be a 6 digit number"),
    type: z.enum(["deposit", "withdrawl", "transfer"] , {
        errorMap: ({message: "Transaction type can only be deposit, withdrawl or transfer"})
    }),
    balance: z.number().optional()
})

// POST create a transaction 
const createTransactionSchema = validationSchema;

// PUT update a transaction
const updateTransactionSchema = z.object({
  descritpion: z.string().optional(),
  status: z.enum(["completed", "pending", "failed"]).optional() 
})

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
}
