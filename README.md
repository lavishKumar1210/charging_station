# charging_station
# ⚡ Charging Station Management App

A full-stack web application for managing electric vehicle (EV) charging stations with secure user authentication using JWT.

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [License](#license)

---

## 📌 Overview

This project allows users to register, login, and manage a list of EV charging stations. Each station can be created, updated, viewed, or deleted. The backend API is secured using JSON Web Tokens (JWT) to ensure only authenticated users can manage stations.

---

## 🚀 Features

- User registration and login
- Password hashing with bcrypt
- JWT authentication
- CRUD operations on EV charging stations
- Protected routes using middleware
- Frontend authentication with token storage in localStorage
- Responsive frontend built with React

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router (if used)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password encryption
- dotenv for environment management

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/charging-station-app.git
   cd charging-station-app

2.Setup Backend

npm install
npm start

3.Setup Frontend

npm install
npm run dev
