const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

dotenv.config()

run().then(() => console.log('done')).catch(error => console.error(error.stack));

async function run() {
  console.log('Mongoose version:', mongoose.version);
  mongoose.set('useUnifiedTopology', true);
  mongoose.set('useNewUrlParser', true);
  mongoose.set('useCreateIndex', true);
  mongoose.connect(process.env.MONGO_URL, { useFindAndModify: false });
  const db = mongoose.connection;
  
  db.once('open', () => console.log('connected'));
} 


app.use(express.json())
app.use('/api/auth',authRoute)
app.use('/api/users', userRoute)
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(8800, () => {
    console.log('Backend server listening on port 8800!');
});