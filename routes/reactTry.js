module.exports = function (app, options) {
  app.get('/', function (req, res) {
    res.sendFile('react-try/react-try.html', options);
    console.log("react-try page loaded...");
  });

}
