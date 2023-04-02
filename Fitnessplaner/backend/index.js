const express = require('express');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const app = express();
const userRouter = require('./routes/users')
const trainingRouter = require('./routes/training')
const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://servus_du:Passwort@trainingsplanapi.5ljo7ts.mongodb.net/TrainigsplanApi?retryWrites=true&w=majority')
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routesHandler);
app.use('/users', userRouter)
app.use('/training', trainingRouter)


const PORT = 5000; // backend routing port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
