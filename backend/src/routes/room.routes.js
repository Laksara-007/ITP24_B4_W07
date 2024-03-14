import Express from 'express';
import { createRoom, getAllRooms, getRoomByID, deleteRoom, updateRoom } from '../controllers/room';
const roomRouter = Express.Router();

roomRouter.post('/', createRoom);
roomRouter.get('/', getAllRooms);
roomRouter.get('/:id', getRoomByID);
roomRouter.put('/:id', updateRoom);
roomRouter.delete('/:id', deleteRoom);

export default roomRouter;
