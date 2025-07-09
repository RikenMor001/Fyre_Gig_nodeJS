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
      
})

