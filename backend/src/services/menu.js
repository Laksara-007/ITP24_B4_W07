import { createMenuItemRepo, deleteMenuItemRepo, findMenuItemRepo, getAllMenuItemsRepo, getAllOrders, getMenuItemByIdRepo, updateMenuItemRepo } from '../repositary/menuRepo';
import { createOrderRepo,updateOrderRepo } from '../repositary/menuRepo';
import { badRequest } from '../errors/badRequest';

export const createMenuItemService = async (item) => {
    const { foodItemName } = item;
    try {
        const name = await findMenuItemRepo({ foodItemName: foodItemName });
        if (name) return { status: 400, message: 'menu item name already exists. Choose another name' };
        const response = await createMenuItemRepo(item);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllMenuItemsService = async (query) => {
    try {
        const response = await getAllMenuItemsRepo(query);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getMenuItemByIdService = async (id) => {
    try {
        const response = await getMenuItemByIdRepo(id);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const updateMenuItemService = async (id, body) => {
    try {
        const response = await updateMenuItemRepo(id, body);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const deleteMenuItemService = async (id) => {
    try {
        const response = await deleteMenuItemRepo(id);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const createOrderService = async (item) => {

    const {quanttity,foodID} = item;
    try {
        const response = await createOrderRepo(item);
        
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const updateOrderService = async (id, body) => {
    try {
        const response = await updateOrderRepo(id, body);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllOrdersService = async () => {
    try {
        const response = await getAllOrders()
        return response
    } catch (error) {
        console.log(error);
    }
}
