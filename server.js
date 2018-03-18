const express = require('express');
const pagesRoutes = require('./server/pages/routes');

const app = express();

app.use(express.static(__dirname));

app.use('/', pagesRoutes);

app.listen(3000, () => console.log('Express app listening on localhost:3000'));
