const express = require('express');
const app = express();
app.use(express.json());

let rooms = [];
let bookings = [];
let customers = [];

// Create a room
app.post('/rooms', (req, res) => {
    const { name, seats, amenities, pricePerHour } = req.body;
    const room = {
        id: rooms.length + 1,
        name,
        seats,
        amenities,
        pricePerHour
    };
    rooms.push(room);
    res.status(201).json(room);
});

// Book a room
app.post('/bookings', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }
    const booking = {
        id: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId
    };
    bookings.push(booking);

    let customer = customers.find(c => c.name === customerName);
    if (!customer) {
        customer = {
            name: customerName,
            bookings: []
        };
        customers.push(customer);
    }
    customer.bookings.push(booking);

    res.status(201).json(booking);
});

// List all rooms with booked data
app.get('/rooms', (req, res) => {
    const roomData = rooms.map(room => {
        const roomBookings = bookings.filter(b => b.roomId === room.id);
        return {
            ...room,
            bookings: roomBookings
        };
    });
    res.json(roomData);
});

// List all customers with booked data
app.get('/customers', (req, res) => {
    res.json(customers);
});

// List how many times a customer has booked the room
app.get('/customers/:customerName/bookings', (req, res) => {
    const { customerName } = req.params;
    const customer = customers.find(c => c.name === customerName);
    if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
    }
    const customerBookings = customer.bookings.map(booking => {
        return {
            ...booking,
            bookingId: booking.id,
            bookingDate: booking.date,
            bookingStatus: 'booked'
        };
    });
    res.json(customerBookings);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
