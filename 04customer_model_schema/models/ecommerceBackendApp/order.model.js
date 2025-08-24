import mongoose from "mongoose";

// create small schema for order items schema.
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    },
}); //no required timestamts

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        type: [orderItemSchema],
    },
    address: {
        type: String,
        required: true,
    },

    // user only select this status options
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING",
    },
}, {timestamps: true});

export const Order = mongoose.model("Order", orderSchema);