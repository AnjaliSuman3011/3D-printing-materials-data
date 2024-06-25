
const express = require('express');
const mongoose = require('mongoose');
const { port, mongodbUri } = require('./config');
const materialRoutes = require('./routes/materials');

const app = express();
app.use(express.json());
app.use('/materials', materialRoutes);

mongoose
.connect('mongodb+srv://AnjaliSuman:9431128340@cluster0.o9ge3gl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(
    ()=>{
        console.log("DB connected");
    })
    .catch((error)=>{
console.log(error);
    })
app.listen(3000 ,()=>{
console.log("server is listening at port 3000");
})
