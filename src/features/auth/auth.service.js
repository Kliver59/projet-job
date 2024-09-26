import User from "../users/users.model.js";

const create = (data) => {
  return User(data).save();
};

export { create };
