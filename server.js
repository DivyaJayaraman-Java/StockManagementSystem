const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Only declare this ONCE
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// DB connection + Start server
const db = require('./config/db');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
