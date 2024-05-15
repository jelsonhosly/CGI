app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    db.query('SELECT * FROM users WHERE username = ?', [username], async (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
      const token = jwt.sign({ username: user.username }, 'childgrowthindicator', { expiresIn: '1h' });
      return res.json({ token, childId: user.ChildID, username: user.username });
    });
  });