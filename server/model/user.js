import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
}, { timestamps: true });

export default mongoose.model('Users', userSchema);