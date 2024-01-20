const express = require('express'); 
const routes = require('./routes/routes');
const app = express(); 
const path = require('path');
const {middlewareGlobal } = require('./src/middlewares/middleware.js');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public"))); 
app.use(middlewareGlobal);
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "src","views"));

app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});