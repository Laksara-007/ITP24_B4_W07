import { badRequest } from "../errors/badRequest";
import { createFeedback } from "../repositary/feedbackRepo";

export const createFeedbackServices = async (body) => {
    try {
        const response = await createFeedback(body);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};
