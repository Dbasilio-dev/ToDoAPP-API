module.exports = (app, bd) => {
  app.get("/", (req, res) => {
    res.send("invalid parameter! <br> ");
  });
};
