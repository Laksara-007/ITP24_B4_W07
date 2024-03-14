import { badRequest } from '../errors/badRequest';
import { createMenuItemService, deleteMenuItemService, getAllMenuItemsService, getAllOrdersService, getMenuItemByIdService, updateMenuItemService } from '../services/menu';
import { createOrderService, updateOrderService } from '../services/menu';
import { makeResponse } from '../utils/response';

export const createMenuItem = async (req, res) => {
    try {
        const response = await createMenuItemService(req.body);
        if (!response) return makeResponse({ res, status: 400, message: 'Menu item cannot be created' });
        if (response.status) return makeResponse({ res, ...response });
        return makeResponse({ res, status: 200, data: response, message: 'Successfully created a menu item' });
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllMenuItems = async (req, res) => {
    const query = req.query;
    try {
        const response = await getAllMenuItemsService(query);
        if (!response) {
            return makeResponse({ res, status: 400, message: 'Could not fetch menu items' });
        }
        return makeResponse({ res, status: 200, data: response, message: 'successfully fetched menu items' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getMenuItemById = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await getMenuItemByIdService(id);
        if (!response) return makeResponse({ res, status: 400, message: 'Menu items cannot be fetched' });
        return makeResponse({ res, status: 200, data: response, message: 'Successfully fetched menu item by id' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateMenuItem = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const response = await updateMenuItemService(id, body);
        if (!response) {
            return makeResponse({ res, status: 400, message: 'Menu item cannot be updated' });
        }
        return makeResponse({ res, status: 200, data: response, message: 'Menu item succesfully updated' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteMenuItem = async (req, res) => {
    const id = req.params.id;

    try {
        const response = await deleteMenuItemService(id);
        if (!response) return makeResponse({ res, status: 400, message: 'Menu item cannot be deleted' });
        return makeResponse({ res, status: 200, data: response, message: 'Menu item succesfully deleted' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const createOrder = async (req, res) => {
    try {
        const response = await createOrderService(req.body);
        if (!response) return makeResponse({ res, status: 400, message: 'Order cannot be placed' });
        if (response.status) return makeResponse({ res, ...response });
        return makeResponse({ res, status: 200, data: response, message: 'Successfully placed your order' });
    } catch (error) {
        console.log(error);
        throw new badRequest(error);
    }
};

export const updateOrder = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const response = await updateOrderService(id, body);
        if (!response) {
            return makeResponse({ res, status: 400, message: 'Order cannot be updated' });
        }
        return makeResponse({ res, status: 200, data: response, message: 'Order succesfully updated' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllOrders = async (req,res) => {
    try {
        const response = await getAllOrdersService()
        if (!response) return makeResponse({ res, status: 400, message: 'Orders cannot be fetch' });
        return makeResponse({ res, status: 200, data: response, message: 'Orders succesfully fetched' });
    } catch (error) {
        throw new badRequest(error.message);
    }
}
