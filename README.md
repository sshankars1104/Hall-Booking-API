# Hall Booking Application

Hall booking API created using Node.js and Express.

## Postman Documentation

For detailed API documentation, refer to the Postman docs: [Postman Documentation](https://documenter.getpostman.com/view/27867831/2s93zE1ysM)

## API Endpoints

### 1. Creating a New Room

- **URL**: `https://hall-booking-yjoe.onrender.com/rooms/create`
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
### 2. Booking a New Room

- **URL**: `https://hall-booking-yjoe.onrender.com/rooms/create`
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

### 3. View Available Rooms
- **URL**: `https://hall-booking-yjoe.onrender.com/rooms/create`
- **Method**: GET

### 4. View Booked Rooms
- **URL**: `https://hall-booking-yjoe.onrender.com/rooms/create`
- **Method**: GET

### 5. Customers with Booked Data
- **URL**: `https://hall-booking-yjoe.onrender.com/rooms/create`
- **Method**: GET

### 6. Number of Times a User Has Booked
- **URL**: `https://hall-booking-yjoe.onrender.com/rooms/create`
- **Method**: GET


### Getting Started

## Prerequisites

# Node.js and npm installed on your machine.
# Postman (optional, for testing the API endpoints).

The server will start on http://localhost:3000.