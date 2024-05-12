import React, { useState } from 'react';
import { Button, Modal, Typography } from '@mui/material';
import { format } from 'date-fns';

const BookingModal = ({ open, handleClose, startDate, endDate, price, createReservation}) => {
    console.log("BookingModal -> currentPrice", price)
    return (
        <Modal open={open} onClose={handleClose}>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6">
                    <Typography variant="h6" className="mb-4">
                        Booking Information
                    </Typography>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Price
                            </label>
                            <input
                                type="text"
                                value= {price}
                                readOnly
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Start Date
                            </label>
                            <input
                                type="text"
                                value={format(new Date(startDate), 'dd/MM/yyyy')}
                                readOnly
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                End Date
                            </label>
                            <input
                                type="text"
                                value={format(new Date(endDate), 'dd/MM/yyyy')}
                                readOnly
                                className="bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-between">
                            <Button variant="contained"  color="error" onClick={handleClose}>
                                Close
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={createReservation}
                            >
                                Book Now
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default BookingModal;