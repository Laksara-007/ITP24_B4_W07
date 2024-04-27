import { createReservation, getAllReservations, getReservationById, updateReservation, deleteReservation, getReservationByUserId } from '../repositary/reservationRepositary';
import { makeResponse } from '../utils/response';
import { getAllRooms } from '../repositary/roomRepositary';

export const createReservationService = async (reservationBody) => {
    const reservation = await createReservation(reservationBody);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not created');
    } else {
        return reservation;
    }
};

export const getAllReservationsService = async (req, res) => {
    const reservations = await getAllReservations();
    if (!reservations) {
        return makeResponse(res, 404, null, 'Reservations not found');
    } else {
        return reservations;
    }
};
export const getReservationByIdService = async (id) => {
    const reservation = await getReservationById(id);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const updateReservationService = async (id, body) => {
    const reservation = await updateReservation(id, body);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const deleteReservationService = async (id) => {
    const reservation = await deleteReservation(id);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const getReservationByUserIdService = async (req, res) => {
    const reservation = await getReservationByUserId({ userId: req.params.id });
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

// endpoint to get free rooms in the given date range
export const getFreeRoomsService = async (req, res) => {
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const awailableRooms = await getFreeRooms(startDate, endDate);
    return awailableRooms;
};

const getFreeRooms = async (startDate, endDate) => {
    //loop through all rooms and check the unavailable dates array with the given date range
    const rooms = await getAllRooms();
    const freeRooms = rooms.filter((room) => {
        let isAvailable = true;
        room.unavailableDates.forEach((date) => {
            if (date >= startDate && date <= endDate) {
                isAvailable = false;
            }
        });
        if (isAvailable) {
            return room;
        }
    });
    return freeRooms;
};