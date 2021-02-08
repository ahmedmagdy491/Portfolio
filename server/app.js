const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config')

const PORT = process.env.PORT


// connect to db
mongoose.connect('mongodb+srv:Ahmed:ahmed123@cluster0.jqlsh.mongodb.net/contact?retryWrites=true&w=majority', 
        {
            useNewUrlParser: true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        },
        ()=>{
            return console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
         }
).catch(err => `DATABASE ERROR: ${err}`)



// Route
const contactRoute = require('./contact/route/contact')

const app = express();

app.use(express.json())







app.use('/api',contactRoute)


const server = app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


// Handle Unhandle promise rejections
process.on('unhandledRejection', ( err, promise )=>{
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(()=> process.exit(1))
})