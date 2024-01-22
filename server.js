
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');
const connectMongoStore = require('connect-mongo');

const { middlewareGlobal, checkcsrf, csrfMiddleware } = require('./src/middlewares/middleware.js');


require('dotenv').config();

//connecting to MongoDB
mongoose.connect(process.env.CONNECTIONMONG, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Connected to MongoDB')
        console.log('Connected to MongoDB')
    }).catch(err => console.log(err));

const sessionOptions = session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: 'none',
        secure: true,
        httpOnly: true
    },
    store: connectMongoStore.create({
        mongoUrl: process.env.CONNECTIONMONG,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    })
})


const app = express();

app.use(sessionOptions);
app.use(flash());

app.use(csrf());

app.use(routes);
app.use(middlewareGlobal);
app.use(checkcsrf);
app.use(csrfMiddleware)

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(helmet());


//connected to MongoDB
app.on('Connected to MongoDB', () => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})

