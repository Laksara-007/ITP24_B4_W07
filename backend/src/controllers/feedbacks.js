import { createFeedbackServices } from "../services/feedbacksServices.js";
import { makeResponse } from "../utils/response";

export const createFeedbacks = async (req, res) => {
    try {
        const response = await createFeedbackServices(req.body);
        if (!response) return makeResponse({ res, status: 500, message: 'Feedback creation failed' });
        makeResponse({ res, status: 200, data: response, message: 'Feedback created successfully....' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};
