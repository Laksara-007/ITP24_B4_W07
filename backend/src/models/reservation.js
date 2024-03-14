import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema(
    {
        idNumber: {
            type: Number,
            required: [true, 'Please provide a Id Number']
        },
        name: {
            type: String,
            required: [true, 'Please provide a name']
        },
        price: {
            type: String,
            required: [true, 'please insert an email']
        },
        startingDate: {
            type: Date,
            required: [true, 'please select a starting date']
        },
        endingDate: {
            type: Date,
            required: [true, 'please select an ending date']
        },
        roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }]
    },
    { timestamps: true }
);

const reservationModel = mongoose.model('Reservation', reservationSchema);
export default reservationModel;
