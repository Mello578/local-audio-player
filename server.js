const express = require('express');
const pagesRoutes = require('./server/pages/routes');
const getPlayList = require('./server/generatedPlayList/generatedPlayList');
const app = express();

app.use(express.static(__dirname));

app.use('/', pagesRoutes);

app.get('/playlist', getPlayList);

app.listen(3000);
// , () => console.log('Express app listening on localhost:3000'));
