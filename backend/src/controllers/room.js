import Room from '../models/room.js';

export const createRoom = async (req, res) => {
    const newRoom = new Room(req.body);

    try {
        const response = await newRoom.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllRooms = async (req, res) => {
    try {
        const response = await Room.find();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getRoomByID = async (req, res) => {
    try {
        const response = await Room.findById(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateRoom = async (req, res) => {
    try {
        const response = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteRoom = async (req, res) => {
    try {
        const response = await Room.findByIdAndDelete(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateRoomAvailability = async (req, res) => {
    try {
        await Room.updateOne(
            { 'numbers._id': req.params.id },
            {
                $push: {
                    'numbers.$.unavailableDates': req.body.dates
                }
            }
        );
        res.status(200).json('Room status has been updated.');
    } catch (err) {
        next(err);
    }
};

const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let list = [];
    while (date <= end) {
        list.push(new Date(date));
        date.setDate(date.getdate() + 1);
    }
    return list;
};

const isAvailable = (room, startDate, endDate) => {
    const dates = getDatesInRange(startDate, endDate);
    const unavailableDates = room.numbers.map((number) => number.unavailableDates).flat();
    return dates.every((date) => !unavailableDates.includes(date));
};

export const getAvailableRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        const availableRooms = rooms.filter((room) => isAvailable(room, req.body.startDate, req.body.endDate));
        res.status(200).json(availableRooms);
    } catch (err) {
        next(err);
    }
};
