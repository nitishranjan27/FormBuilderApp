# Form Builder App

This is a Form Builder application built with **React**, **React Router**, **Node.js**, **Express**, **MongoDB**, and **Tailwind CSS**. The application allows users to create custom forms with multiple question types (Text, Grid, Checkbox) and upload images for both the form header and individual questions.

## Features

- **Form Creation**: Users can create forms by adding questions, selecting question types (Text, Grid, Checkbox), and uploading images for questions.
- **Header Image**: Users can upload an image to display at the top of the form.
- **Form Preview**: Users can preview the form once it’s created and view the questions with images if uploaded.
- **Save Form Responses**: Responses to the form can be saved and retrieved from the backend.
- **MongoDB Integration**: Form data, including questions, answers, and images, are stored in MongoDB.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **File Uploads**: Multer for handling file uploads
- **Database**: MongoDB

## Setup Instructions

### Prerequisites

- Node.js installed on your system.
- MongoDB running locally or using a cloud MongoDB service (e.g., MongoDB Atlas).

### Clone the Repository

git clone https://github.com/nitishranjan27/FormBuilderApp.git
cd FormBuilderApp

### Backend Setup
## Navigate to the backend directory.
cd form-builder-backend
## Install dependencies:
npm install
## Set up the .env file with MongoDB connection string and other configurations:
MONGO_URI=mongodb://localhost:27017/formBuilder
PORT=5000
## Start the backend server:
npm start

### Frontend Setup
## Navigate to the frontend directory.
cd form-builder-frontend
## Install dependencies:
npm install
## Start the development server:
npm run dev

## The frontend will be running on http://localhost:3000.

### Usage
## Open the application in your browser.
- **Create a form**: Add a title, upload a header image, and add questions (Text, Grid, Checkbox). You can also upload images for individual questions.
- **Preview the form**: Once the form is created, you can view it by clicking the preview link.
- **Submit form responses**: Fill out the form, and your responses will be saved and stored in the backend.

### API Endpoints
- **POST /api/forms/create**: Create a new form with questions and images.
- **GET /api/forms/:id**: Get a form by ID.
- **POST /api/forms/:id/submit**: Submit responses to a form
