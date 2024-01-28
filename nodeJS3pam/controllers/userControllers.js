const User = require("../models/User");

console.log(User);
//@create user
//@POST /api/users

const createUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(404).send("Data is missing");
  }

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const result = await user.save();
  res.status(200).send(result);
};

//@ Get ALL users
//@ GET /api/users

const getAllUsers = async (req, res) => {
  const usersFromDB = await User.find();
  if (!usersFromDB) {
    res.status(404).send("Data is missing");
    return;
  }
  res.status(200).json(usersFromDB);
};

//@ get  Custom Id
//@ GET /api/user/:id

const getCustomId = async (req, res) => {
  const userByID = await User.findById(req.params.id);

  if (!userByID) {
    res.status(404).send("Data is missing");
    return;
  }
  res.status(200).send(userByID);
};

//@ update user
//@ PUT /api/user/:id

const updateUser = async (req, res) => {
  const userByID = await User.findById(req.params.id);
  if (!userByID) {
    res.status(404).send("Data is missing");
    return;
  }
  userByID.name = req.body.name;
  const result = await userByID.save();
  res.status(200).send(result);
};

//@ delete user
//@ DELETE /api/user/:id

const deleteUser = async (req, res) => {
  const userByID = await User.findById(req.params.id);
  if (!userByID) {
    res.status(404).send("User is not found");
    return;
  }
  const result = await User.deleteOne({ _id: req.params.id });
  res.status(200).send(result);
};

module.exports = {
  createUser,
  getAllUsers,
  getCustomId,
  updateUser,
  deleteUser,
};
