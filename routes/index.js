const express = require('express');
const speakerRoutes = require('./speaker');
const feedbackRoutes = require('./feedback');
// const res = require('express/lib/response');

const router = express.Router();
module.exports = (params) => {
  router.get('/', (request, response) => {
    if (!request.session.visitCount) {
      request.session.visitCount = 0;
    }
    request.session.visitCount += 1;
    console.log(request.session.visitCount);
    // response.sendFile(path.join(__dirname, './static/index.html'));
    response.render('pages/index', { pageTitle: 'Welcome' });
  });
  router.use('/speakers', speakerRoutes(params));
  router.use('/feedback', feedbackRoutes(params));
  return router;
};
