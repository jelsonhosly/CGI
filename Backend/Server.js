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

  app.post('/signup', (req, res) => {
    const { email, username, password } = req.body;
  
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'Email, username, and password are required' });
    }
  
    // Generate a ChildID
    db.query('SELECT MAX(ChildID) AS maxChildID FROM childdetails', (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      let childID = results[0].maxChildID ? results[0].maxChildID + 1 : 1;
  
      // Insert the new user into the database
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          console.error('Error hashing password:', err);
          return res.status(500).json({ error: 'Error creating new user' });
        }
  
        db.query('INSERT INTO users (ChildID, email, username, password) VALUES (?, ?, ?, ?)', [childID, email, username, hashedPassword], (error, results) => {
          if (error) {
            console.error('Error creating new user:', error);
            return res.status(500).json({ error: 'Error creating new user' });
          } else {
            return res.json({ message: 'User created successfully', childID });
          }
        });
      });
    });
  });

  app.post('/adminlogin', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    db.query('SELECT * FROM admin WHERE username = ?', [username], async (error, results) => {
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
      return res.json({ token, username: user.username });
    });
  });

  app.post('/adminsignup', (req, res) => {
    const { email, username, password } = req.body;
  
    if (!email || !username || !password) {
      return res.status(400).json({ error: 'Email, username, and password are required' });
    }
  
    // Hash the password
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ error: 'Error creating new user' });
      }
  
      // Insert the new user into the database
      db.query('INSERT INTO admin (email, username, password) VALUES (?, ?, ?)', [email, username, hashedPassword], (error, results) => {
        if (error) {
          console.error('Error creating new Admin:', error);
          return res.status(500).json({ error: 'Error creating new Admin' });
        } else {
          return res.json({ message: 'Admin created successfully' });
        }
      });
    });
  });