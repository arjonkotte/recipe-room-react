const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,{
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  family: 4,
})

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});