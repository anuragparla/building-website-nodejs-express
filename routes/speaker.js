const express = require('express');
// const path = require('path');

const speakerRoute = express.Router();
module.exports = (params) => {
  const { speakerService } = params;
  speakerRoute.get('/', async (request, response) => {
    const speakers = await speakerService.getList();
    // response.sendFile(path.join(__dirname, '../static/speakers.html'));
    return response.json(speakers);
  });
  speakerRoute.get('/:shortname', (request, response) => {
    response.send(`Details of the page ${request.params.shortname}`);
  });
  return speakerRoute;
};
