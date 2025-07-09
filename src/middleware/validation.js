const { z } = require("zod");

const transactionScheme = z.object({
    amount: z.number()
    .positive("Account balance cannot be negative")
    .max(1000000 + "Account balance should not exceed 10,00,000"),
    type: z.enum(["credit" | "debit"], {
        errorMap: () => ({message: "Type must be either credit or debit"})
    })
})