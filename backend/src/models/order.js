import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        foodId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RestaurantMenu',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        NIC: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        orderStatus: {
            type: String,
            enum: ['PENDING', 'DELIVERED'],
            default: 'PENDING'
        }
    },
    { timestamps: true }
);

const orderModel = mongoose.model('Order', orderSchema);
export default orderModel;
