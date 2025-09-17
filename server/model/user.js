import mongoose from 'mongoose';
import 'mongoose-type-email'


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: mongoose.Schema.Types.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Users', userSchema);