import Express from 'express';
import { createFeedbacks } from '../controllers/feedbacks';

const feedbacksRoute = Express.Router();

feedbacksRoute.post('/', createFeedbacks);

export default feedbacksRoute;
