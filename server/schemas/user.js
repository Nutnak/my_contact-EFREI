import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    password: String,
}, { timestamps: true });

export default userSchema;