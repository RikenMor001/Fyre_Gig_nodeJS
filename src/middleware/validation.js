const { z } = require("zod");

const transactionSchema = z.object({
    amount: z.number()
    .positive("Account balance cannot be negative")
    .max(1000000 + "Account balance should not exceed 10,00,000"),
    
    type: z.enum(["credit", "debit"], {
        errorMap: () => ({message: "Type must be either credit or debit"})
    }),

    descritpion: z.string()
    .min(1, "Description cannot be empty")
    .max(255, "No more than 255 words should be used")
    .trim(),

    category: z.string()
    .min(1, "Minimum 1 category required")
    .max(50, "No more than 50 characters")
    .trim(),

    account: z.string()
    .min(1, "Account cannot be empty")
    .max(50, "No more than 50 charatcers")
    .trim(),

    reference: z.string()
    .max(100, "Reference cannot exceed 100 characters")
    .trim()
    .optional(),
    tags: z.array(z.string().trim().max(20)).max(5).optional()
})

const transactionUpdateSchema = transactionSchema.partial();

export const validateTransaction = (data) => {
    return transactionSchema.safeParse(data);
}

export const validateUpdateTransaction = (data) => {
    return transactionUpdateSchema.safeParse(data)
}

export {transactionSchema, transactionUpdateSchema};

