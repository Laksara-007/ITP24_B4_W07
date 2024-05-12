import mongoose from 'mongoose';

const feedbacksSchema = new mongoose.Schema({
    feedback: {
        type: String,
        required: true
    }
});

const feedbacksModel = mongoose.model('Feedbacks', feedbacksSchema);
export default feedbacksModel;
