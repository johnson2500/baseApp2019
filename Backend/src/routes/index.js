export default (app) => {
  app.get('/test', (req, res) => {
    const { test } = req;
    res.send(test);
  });
};
