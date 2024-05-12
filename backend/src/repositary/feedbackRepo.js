import { badRequest } from "../errors/badRequest";
import feedbacksModel from "../models/feedback";

export const createFeedback = async (body) => {
    try {
        const response = await feedbacksModel.create(body);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
}