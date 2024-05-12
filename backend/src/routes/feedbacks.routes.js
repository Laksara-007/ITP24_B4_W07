import Express from 'express';
import { createFeedbacks } from '../controllers/feedbacks';

const feedbacksRoute = Express.Router();

feedbacksRoute.get('/', createFeedbacks);

export default feedbacksRoute;
