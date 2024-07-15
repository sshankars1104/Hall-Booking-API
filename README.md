# Hall Booking Application

Hall booking API created using Node.js and Express.

## Render.com

    `https://hall-booking-api-1xhn.onrender.com`

## API Endpoints

### 1. Creating a New Room

- **URL**: [Create Room](https://hall-booking-api-1xhn.onrender.com/rooms)
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "name": "Conference Room",
    "seats": 20,
    "amenities": ["Projector", "Whiteboard", "WiFi"],
    "pricePerHour": 50
  }
  ```

### 2. Booking a New Room

- **URL**: [Booking a Room](https://hall-booking-api-1xhn.onrender.com/bookings)
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "customerName": "John Doe",
    "date": "2024-07-20",
    "startTime": "10:00",
    "endTime": "12:00",
    "roomId": 1
  }
  ```

### 3. List All Rooms with Booked Data

- **URL**: [List All Rooms with Booked Data](https://hall-booking-api-1xhn.onrender.com/rooms)
- **Method**: GET

### 4. List All Customers with Booked Data

- **URL**: [List All Customers with Booked Data](https://hall-booking-api-1xhn.onrender.com/customers)
- **Method**: GET

### 5. List Customer's Bookings

- **URL**: [List Customer's Bookings](https://hall-booking-api-1xhn.onrender.com/customers/John%20Doe/bookings)
- **Method**: GET

### Getting Started

## Prerequisites

# Node.js and npm installed on your machine.

# Postman (optional, for testing the API endpoints).

The server will start on [Local](http://localhost:3000)
