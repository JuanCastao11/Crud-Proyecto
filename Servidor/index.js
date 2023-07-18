const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

const app = express();
const PORT = 4000;

conectarDB();

app.use(express.json());
app.use(cors());

app.use('/api/productos', require('./routes/productoRoutes'));



app.listen(PORT, () =>{
    console.log("Server running");
})