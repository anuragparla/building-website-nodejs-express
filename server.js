const exp = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const routes = require('./routes');

const FeedBackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

const feedbackService = new FeedBackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

const app = exp();
const port = 8081;
app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['abcd8976', 'xyzy6745'],
  })
);
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

app.use(
  '/',
  routes({
    feedbackService,
    speakerService,
  })
);
// for this particular route the corresponding response is sent in the form of a .html file
/* 
app.get('/speaker', (request, response) => {
  response.sendFile(path.join(__dirname, './static/speakers.html'));
}); */
app.listen(port, () => {
  console.log(`listening on the port ${port}`);
});
