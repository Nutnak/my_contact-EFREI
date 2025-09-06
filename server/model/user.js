import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Number,
    email: String,
    password: String,
}, { timestamps: true });

export default mongoose.model('Users', userSchema);