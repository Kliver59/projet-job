import User from "../users/users.model.js";

const create = (data) => {
  return User(data).save();
};

const get = (Options) => {
  return User.findOne(Options);
};
export { create, get };
