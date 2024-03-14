import menuModel from '../models/menu';
import orderModel from '../models/order';
import { badRequest } from '../errors/badRequest';
import { response } from 'express';

export const createMenuItemRepo = async (item) => {
    try {
        const response = await menuModel.create(item);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllMenuItemsRepo = async (query) => {
    const { foodItemName, cuisineType, mealType, price, numericFilters } = query;
    let object = {};

    if (foodItemName) {
        object.foodItemName = foodItemName;
    }
    if (cuisineType) {
        object.cuisineType = cuisineType;
    }
    if (mealType) {
        object.mealType = mealType;
    }

    if (numericFilters) {
        const operator = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        };

        const regEx = /\b(<|>|>=|=|<\<=)\b/g;
        let filters = numericFilters.replace(regEx, (match) => `-${operator[match]}-`);

        const options = ['price'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                object[field] = { [operator]: Number(value) };
            }
        });
    }

    const response = await menuModel.find(object);

    return response;
};

export const getMenuItemByIdRepo = async (id) => {
    try {
        const response = await menuModel.findById(id);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const updateMenuItemRepo = async (id, body) => {
    try {
        const response = await menuModel.findByIdAndUpdate(id, body);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const deleteMenuItemRepo = async (id) => {
    try {
        const response = await menuModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const findMenuItemRepo = async (filter) => {
    try {
        const response = await menuModel.findOne(filter);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const createOrderRepo = async (item) => {
    try {
        const response = await orderModel.create(item);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateOrderRepo = async (id, item) => {
    console.log(id);
    const { status } = item;
    const order = await orderModel.findByIdAndUpdate(
        id,
        {
            $set: { orderStatus: status }
        },
        { new: true }
    );

    const { foodId, quantity } = order;
    if (status == 'DELIVERED') {
        await menuModel.findByIdAndUpdate(
            foodId,
            {
                $inc: { consumption: +quantity }
            },
            { new: true }
        );
    }

    return order;
};


export const getAllOrders = async () => {
    const response = await orderModel.find().populate("foodId")
    return response
}