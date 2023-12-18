const express = require('express');
const app = express();
const path = require('path');
const moment = require('moment');

app.locals.moment = moment;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use('/imagens', express.static(path.join(__dirname, 'public/imagens')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const indexRoutes = require('./routes/indexRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const acomodacaoRoutes = require('./routes/acomodacaoRoutes');

app.use(indexRoutes);
app.use(hotelRoutes);
app.use(clienteRoutes);
app.use(reservaRoutes);
app.use(acomodacaoRoutes);

app.listen(3000);
