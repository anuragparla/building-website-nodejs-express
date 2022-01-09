const express = require('express');
// const path = require('path');

const feedbackRouter = express.Router();
module.exports = (params) => {
  const { feedbackService } = params;
  feedbackRouter.get('/', async (request, response) => {
    const feedbackList = await feedbackService.getList();
    // response.sendFile(path.join(__dirname, '../static/feedback.html'));
    response.json(feedbackList);
  });
  feedbackRouter.post('/', (request, response) => {
    response.send(`Feedback form posted`);
  });
  return feedbackRouter;
};
