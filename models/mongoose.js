const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
    // Additional logic or actions
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });
