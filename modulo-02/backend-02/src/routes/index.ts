import express from 'express';

const route = express();

route.get('/', (request, response) => {
  return response.json({ message: 'hi' });
});

export default route;
