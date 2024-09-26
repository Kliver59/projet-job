import User from "./users.model.js";

const get = (options) => {
  return User.findOne(options);
};

export { get };
