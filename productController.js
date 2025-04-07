const db = require('../config/db');

// GET
exports.getAllProducts = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Server error' });
      }
      res.json(results);
    });
  };

// POST
exports.addProduct = (req, res) => {
  const { name, category, price, stock_quantity, items_sold } = req.body;
  const sql = 'INSERT INTO products (name, category, price, stock_quantity, items_sold) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, category, price, stock_quantity, items_sold], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId });
  });
};

// PUT
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, category, price, stock_quantity, items_sold } = req.body;
  const sql = 'UPDATE products SET name = ?, category = ?, price = ?, stock_quantity = ?, items_sold = ? WHERE id = ?';
  db.query(sql, [name, category, price, stock_quantity, items_sold, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Product updated successfully' });
  });
};

// DELETE
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM products WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(200).json({ message: 'Product deleted' });
  });
};
