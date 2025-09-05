import mongoose from "mongoose";
import userSchema from "../schemas/user.js";

const User = mongoose.model(userSchema)

console.log(userSchema)