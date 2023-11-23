const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const usuarioRouter = require('./router/ususarioRouter');
const loginRouter = require('./router/loginRouter');
const medicinaRouter = require('./router/medicinaRouter');


app.use('/usuarios', usuarioRouter);
app.use('/login', loginRouter);
app.use('/medicina', medicinaRouter);

app.listen(3001, () => {
    console.log("API escuchando por el puerto 3001")
})