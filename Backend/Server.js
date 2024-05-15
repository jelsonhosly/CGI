const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyToken = require('./middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 5050;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cgidb'
});

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // Destination folder for saving images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});
const upload = multer({ storage: storage });

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//-----------------------------------------------------------------
//   user, admin log in & sign up
//-----------------------------------------------------------------

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
//---------------------------------------------------------------------------------
app.post('/baby', upload.single('image'), (req, res) => {
  const babyDetails = req.body;
  babyDetails.image = req.file ? req.file.path : null; // Save image path to babyDetails

  // Insert the new baby details into the database
  db.query('INSERT INTO childdetails SET ?', babyDetails, (error, results) => {
    if (error) {
      console.error('Error adding baby details:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json({ message: 'Baby details added successfully' });
  });
});

// Route for handling file upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ imageUrl: req.file.path }); // Return the path to the uploaded image
});


app.get('/protected-route', verifyToken, (req, res) => {
  const username = req.user.username;
  res.json({ message: `Hello, ${username}! This is a protected route.` });
});

app.get('/lastbaby', (req, res) => {
  const sql = 'SELECT MAX(ChildID) AS maxChildID FROM childdetails';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/heightM', (req, res) => {
  const sql = 'SELECT * FROM heightm';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/heightF', (req, res) => {
  const sql = 'SELECT * FROM heightF';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/weightF', (req, res) => {
  const sql = 'SELECT * FROM weightF';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/weightM', (req, res) => {
  const sql = 'SELECT * FROM weightM';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/ah/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const sql = 'SELECT Height FROM childmonthlydetails WHERE childID=?';
  db.query(sql, [ChildID], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/aw/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const sql = 'SELECT weight FROM childmonthlydetails WHERE childID=?';
  db.query(sql, [ChildID], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/lastWeight/:childId', (req, res) => {
  const childId = req.params.childId;
  const sql = `SELECT weight FROM childmonthlydetails WHERE ChildID = ? ORDER BY DateOfMeasurement DESC LIMIT 1`;
  db.query(sql, [childId], (err, result) => {
    if (err) {
      console.error('Error fetching last weight:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ message: 'No weight record found for the given child ID' });
      return;
    }
    res.json({ weight: result[0].weight });
  });
});

app.get('/lastHeight/:childId', (req, res) => {
  const childId = req.params.childId;
  const sql = `SELECT Height FROM childmonthlydetails WHERE ChildID = ? ORDER BY DateOfMeasurement DESC LIMIT 1`;
  db.query(sql, [childId], (err, result) => {
    if (err) {
      console.error('Error fetching last height:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ message: 'No height record found for the given child ID' });
      return;
    }
    res.json({ height: result[0].Height });
  });
});

app.get('/baby/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const query = `SELECT * FROM childdetails WHERE ChildID = ?`;

  db.query(query, [ChildID], (error, results) => {
    if (error) {
      console.error('Error fetching baby details:', error);
      res.status(500).json({ error: 'Error fetching baby details' });
    } else {
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'Baby details not found' });
      }
    }
  });
});

//getting childs immunization data
app.get('/immunization/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const query = `SELECT i.*, v.* 
  FROM immunization AS i
  LEFT JOIN vaccineschedule AS v ON i.VaccineId = v.VaccineId
  WHERE i.ChildID = ?`;

  db.query(query, [ChildID], (error, results) => {
    if (error) {
      console.error('Error fetching immunization details:', error);
      res.status(500).json({ error: 'Error fetching immunization details' });
    } else {
      if (results.length > 0) {
        res.json(results);
      } else {
        res.status(404).json({ error: 'immunization details not found' });
      }
    }
  });
});

app.put('/immunization/:ImmunizationId', (req, res) => {
  const ImmunizationId = req.params.ImmunizationId;
  const newData = req.body;

  // Construct SQL query to update immunization data
  const query = `UPDATE immunization 
                 LEFT JOIN vaccineschedule ON immunization.VaccineId = vaccineschedule.VaccineId
                 SET immunization.Status = ?, immunization.Age = ?, immunization.VaccineName = ?, 
                     immunization.DateOfVaccination = ?, immunization.BatchNumber = ?, 
                     immunization.SideEffects = ?
                 WHERE immunization.ImmunizationId = ?`;

  const values = [
    newData.Status,
    newData.Age,
    newData.VaccineName,
    newData.DateOfVaccination,
    newData.BatchNumber,
    newData.SideEffects,
    ImmunizationId
  ];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error updating immunization data:', error);
      res.status(500).json({ error: 'Error updating immunization data' });
    } else {
      console.log('Immunization data updated successfully');
      res.json({ message: 'Immunization data updated successfully' });
    }
  });
});

// Fetch all child details
app.get('/baby', (req, res) => {
  const sql = 'SELECT * FROM ChildDetails';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching child details:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    
    res.json(result);
  });
});

// Update child details by ID
app.put('/baby/:childId', (req, res) => {
  const childId = req.params.childId;
  const updatedDetails = req.body;

  const query = `UPDATE ChildDetails SET ? WHERE ChildID = ?`;

  db.query(query, [updatedDetails, childId], (error, results) => {
    if (error) {
      console.error('Error updating child details:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Child details not found' });
    }

    res.json({ message: 'Child details updated successfully' });
  });
});

// Update neonatal examination data by ChildID
app.put('/neonatal/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const updatedData = req.body;

  const query = `UPDATE neonatal_examination SET ? WHERE ChildID = ?`;

  db.query(query, [updatedData, ChildID], (error, results) => {
    if (error) {
      console.error('Error updating neonatal examination data:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json({ message: 'Neonatal examination data updated successfully' });
  });
});

// Update child details by ID
app.put('/baby/:childId', (req, res) => {
  const childId = req.params.childId;
  const updatedDetails = req.body;

  const query = `UPDATE ChildDetails SET ? WHERE ChildID = ?`;

  db.query(query, [updatedDetails, childId], (error, results) => {
    if (error) {
      console.error('Error updating child details:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json({ message: 'Child details updated successfully' });
  });
});

// Delete child details by ID
app.delete('/childDetails/:childId', (req, res) => {
  const childId = req.params.childId;
  const query = `DELETE FROM ChildDetails WHERE ChildID = ?`;

  db.query(query, [childId], (error, results) => {
    if (error) {
      console.error('Error deleting child details:', error);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    res.json({ message: 'Child details deleted successfully' });
  });
});

app.get('/id', (req, res) => {
  db.query('SELECT MAX(ChildID) AS maxChildID FROM childdetails', (error, results) => {
    if (error) {
      console.error('Error querying database:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    const nextChildID = results[0].maxChildID ? results[0].maxChildID + 1 : 1;
    return res.json({ nextChildID });
  });
});

app.get('/neonatal/:ChildID', (req, res) => {
  const ChildID = req.params.ChildID;
  const sql = 'SELECT * FROM neonatal_examination WHERE ChildID = ?';
  db.query(sql, [ChildID], (err, result) => {
    if (err) {
      console.error('Error fetching neonatal examination data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(result);
  });
});

// POST endpoint for updating child monthly details
app.post('/monthlydetails', (req, res) => {
  const { childID, month, height, weight, dateOfMeasurement } = req.body;

  // Here you can perform any necessary validation before adding the new record

  // Example: Insert the new child monthly details into the database
  db.query(
    'INSERT INTO childmonthlydetails (ChildID, Month, Height, Weight, DateOfMeasurement) VALUES (?, ?, ?, ?, ?)',
    [childID, month, height, weight, dateOfMeasurement],
    (error, results) => {
      if (error) {
        console.error('Error adding child monthly details:', error);
        return res.status(500).json({ error: 'Error adding child monthly details' });
      }
      return res.json({ message: 'Child monthly details added successfully' });
    }
  );
});

// GET endpoint to fetch all child monthly details
app.get('/monthlydetails', (req, res) => {
  // Fetch all child monthly details from the database
  db.query('SELECT * FROM childmonthlydetails', (error, results) => {
    if (error) {
      console.error('Error fetching child monthly details:', error);
      return res.status(500).json({ error: 'Error fetching child monthly details' });
    }
    return res.json(results); // Return the fetched details as JSON response
  });
});

