
const express = require("express");
const transactionRoutes = require("./routes/transactions");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/transactions", transactionRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
