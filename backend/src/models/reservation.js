import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
    {
        roomId: {
            type: String,
            required: [true, 'Please provide a Id ']
        },
        name: {
            type: String,
            required: [true, 'Please provide a name']
        },
        price: {
            type: Number,
            required: [true, 'please insert an price']
        },
        startDate: {
            type: Date,
            required: [true, 'please select a starting date']
        },
        endDate: {
            type: Date,
            required: [true, 'please select an ending date']
        },
    },
    { timestamps: true }
);

const reservationModel = mongoose.model('Reservation', reservationSchema);
export default reservationModel;
