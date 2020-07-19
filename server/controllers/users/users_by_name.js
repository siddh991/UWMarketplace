const User = require('../../models/User');

// Search a user by name
exports.users_by_name = (req, res) => {
  let result = {};
  let status = 200;

  const { name } = req.body;

  User.find({name}, async (err, user) => {
    if (!err && user) {
        try{
            status = 200;
            result.status = status;
            result.result = user;
            res.status(status).send(result);
        }
        catch (err) {
            status = 500; //check these codes
            result.status = status;
            result.error = err;
            res.status(status).send(result);
          }
    } else {
      status = 500; //check these codes
      result.status = status;
      result.error = err;
      res.status(status).send(result);
    }
  });
};
