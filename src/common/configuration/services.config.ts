export default {
  httpConfig: {
    timeout: Number(process.env.HTTP_TIMEOUT || 15000),
  },
  testService: process.env.TEST_SERVICE || 'http:/localhost:8181',
};
