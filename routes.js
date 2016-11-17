const boardController = require('./controllers/boardController');
const simController = require('./controllers/simulationController');
const path = require('path');
const passport = require('passport');

module.exports = function (app, express) {
  //Handle Auth and login/signup
  app.post('/api/users/login', passport.authenticate('local'), function(req, res) {
    console.log(req.user)
    res.status(201).send(req.user);
  });

  // Board Routes
  app.post('/api/board', boardController.boardInit);

  // Simualtion routes
  app.post('/api/simulation/save', simController.save);

  // Handle routing with react router
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
  })
};
