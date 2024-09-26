import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Veuillez fournir un nom"],
    maxlength: 50,
    minlenght: 3,
  },

  email: {
    type: String,
    required: [true, "Veuillez fournir un email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Veuillez fournir un email valide",
    ],
  },

  password: {
    type: String,
    required: [true, "Veuillez fournir un mot de passe"],
    minlength: 6,
  },
});

export default model("User", UserSchema);
