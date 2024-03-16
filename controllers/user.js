const db = require('../util/database');

exports.createUser = (req, res) => {
    const { username, email, phone } = req.body;
    const sql = 'INSERT INTO User (username, email, phone) VALUES (?, ?, ?)';
    db.query(sql, [username, email, phone], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'User created successfully' });
        }
    });
};

exports.getUsers = (req, res) => {
    const sql = 'SELECT * FROM User';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM User WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'User deleted successfully' });
        }
    });
};