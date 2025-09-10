import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    phonenumber: String,
    adress: String,
    city: String,
    zipcode: String,
    email: String,
    password: String,
    contacts: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User"
    }
}, { timestamps: true });

export default mongoose.model('Users', userSchema);