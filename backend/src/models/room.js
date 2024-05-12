import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
   
    price: {
        type: Number,
        required: [true, 'please insert a price']
    },
    description: {
        type: String
    },
    type: {
        type: String,
        required: [true, 'please insert a type']
    },
    unavailableDates: {
        type: [Date]
    }
});

const roomModel = mongoose.model('Room', roomSchema);
export default roomModel;
