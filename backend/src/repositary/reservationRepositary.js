import reservationModel from '../models/reservation';
import roomModel from '../models/room';
import { makeResponse } from '../utils/response';

export const createReservation = async (body) => {
    const response = await reservationModel.create(body);
    const room = await roomModel.findById(body.roomId);
   //push the dates from start date to end date to the room unavailable dates
    const dates = [];
    const startDate = new Date(body.startDate);
    const endDate = new Date(body.endDate);
    const currentDate = startDate;
    while (currentDate <= endDate) {
        dates.push(currentDate);
        room.unavailableDates.push(currentDate);
        currentDate.setDate(currentDate.getDate() + 1);
    }
    // room.unavailableDates.push(dates);
    const roomres = await room.save();

    if (!response || !roomres) {
        return makeResponse(res, 404, null, 'Reservation not created');
    } else {
        return response;
    }
};

export const getAllReservations = async (req, res) => {
    const reservations = await reservationModel.find();
    if (!reservations) {
        return makeResponse(res, 404, null, 'Reservations not found');
    } else {
        return reservations;
    }
};

export const getReservationById = async (id) => {
    const reservation = await reservationModel.findById(id);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const updateReservation = async (id, body) => {
    const reservation = await reservationModel.findByIdAndUpdate(id, body);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const deleteReservation = async (id) => {
    const reservation = await reservationModel.findByIdAndDelete(id);
    console.log(reservation);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const getReservationByUserId = async (req, res) => {
    const reservation = await reservationModel.find({ userId: req.params.id });
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const getFreeRooms = async (req, res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const allrooms = await roomModel.find();
    const awailableRooms = allrooms.filter((room) => {
        let isAvailable = true;
        room.unavailableDates.forEach((date) => {
            if (date >= startDate && date <= endDate) {
                isAvailable = false;
                return;
            }
        });
        //update here to return if only available
        return room;
    });
    return awailableRooms;
};

