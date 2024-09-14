const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const userRoutes = require('./routes/item')
const app = express()
const port = 5000


// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/CRUD',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  
}).then(()=>console.log('Mongod connected'))
.catch(err => console.log(err))

// Routes
app.use('/api/items', userRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})