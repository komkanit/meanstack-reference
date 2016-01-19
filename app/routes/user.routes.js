module.exports = function(app){
  var user = require('../controllers/user.controller');
  app.post('/login', user.login);
  app.post('/logout',user.logout);
  app.route('/user')
      .post(user.create)
      .get(user.list)
      .delete(user.delete);
  app.route('/user/:username').get(user.read).put(user.update);
  app.param('username',user.userByUsername);

}
