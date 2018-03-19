const express = require('express');
const pagesRoutes = require('./server/pages/routes');
const generatedPlayList = require('./server/generatedPlayList/generatedPlayList');
const app = express();

generatedPlayList.then((playList) => {
  console.log('generatedPlayList -', playList);
})

app.use(express.static(__dirname));

app.use('/', pagesRoutes);

app.listen(3000);
// , () => console.log('Express app listening on localhost:3000'));
