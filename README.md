# Banking Transaction API

A RESTful API built with Node.js and Express.js to manage banking transactions. It handles creating, reading, updating, and deleting transactions with input validation using Zod library.

## Setup
```bash
cd src
node index.js
```
Server runs on `http://localhost:3000`

## API Routes

### GET Routes
- `GET /api/transactions` - Get all transactions
- `GET /api/transactions/:id` - Get transaction by ID
- `GET /api/transactions/account/:accountNumber` - Get transactions by account number
- `GET /api/transactions/type/:type` - Get transactions by type (deposit/withdrawl/transfer)

### POST Routes
- `POST /api/transactions` - Create new transaction

### PUT Routes
- `PUT /api/transactions/:id` - Update transaction

### DELETE Routes
- `DELETE /api/transactions/:id` - Delete transaction

## Create Transaction JSON Body
```json
{
  "amount": 1000,
  "type": "deposit",
  "accountNumber": "123456",
  "description": "Salary deposit"
}
```

**Required Fields:**
- `amount`: Positive number
- `type`: "deposit", "withdrawl", or "transfer"
- `accountNumber`: 6-digit string

**Optional Fields:**
- `description`: String (max 150 characters)
- `balance`: Number 