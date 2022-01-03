const exp = require('express');
const path = require('path');

const app = exp();
const port = 8081;
console.log('restarting');
/* app.get('/',(request,response) => {
    response.send('Hello express')
}) */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
// app.render('pages/index',{pageTitle:"Welcome"});
// creating a middleware to load static content from different folders
app.use(exp.static(path.join(__dirname, './static')));
// rendering the dynamic content into the static html file via ejs template engine
app.get('/', (request, response) => {
  // response.sendFile(path.join(__dirname, './static/index.html'));
  response.render('pages/index', { pageTitle: 'Welcome' });
});

// for this particular route the corresponding response is sent in the form of a .html file
app.get('/speaker', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
});
app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
