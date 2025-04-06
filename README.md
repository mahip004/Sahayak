# Sahayak 🤝

**Sahayak** is a full-stack MERN + Flask-based platform that bridges the gap between **volunteers** and **communities**. It enables seamless interaction, collaboration, and feedback through modern web technologies and machine learning.

---

## 🌟 Features

### 👥 User & Role Management
- **Community Registration**: Communities can register, create profiles, and request volunteers.
- **Volunteer Registration**: Volunteers can register, manage availability, and respond to community needs.

### 🧠 Smart Feedback System
- A **machine learning-powered feedback module** analyzes user input and classifies it as **Positive**, **Negative**, or **Neutral** using semantic sentiment analysis.
- Communities and volunteers receive **performance labels** like _Good_, _Average_, or _Needs Improvement_ based on feedback.

### 📅 Scheduling System
- Volunteers can update and manage their **availability**.
- Communities can schedule sessions and request volunteers based on availability.

### 💬 Real-time Chat
- Real-time chat system integrated on the **community page** for smooth interaction between volunteers and communities using `socket.io`.

### 📝 Feedback Interface
- Users can submit written feedback for communities and volunteers.
- ML analysis provides both label and sentiment classification for every feedback instance.

---

## 💻 Tech Stack

| Layer           | Technology Used                     |
|----------------|--------------------------------------|
| **Frontend**    | React.js, React Router, Tailwind CSS / CSS |
| **Backend**     | Node.js, Express.js                 |
| **Database**    | MongoDB (with Mongoose)             |
| **ML Model API**| Flask (Python)                      |
| **Real-Time**   | Socket.IO (for chat functionality)  |
| **ML Techniques**| Semantic analysis with NLP models  |

---

## 🔌 APIs & Integration

- **Flask ML API**: Accepts textual feedback and returns sentiment + label (e.g., Positive-Good, Negative-Bad).
- **Express REST APIs**: Handle user auth, community/volunteer registration, feedback, and scheduling.
- **MongoDB Atlas**: Used for cloud-hosted NoSQL database with collections like `users`, `communities`, `volunteers`, `feedbacks`, and `schedules`.

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js & npm
- Python 3.8+
- MongoDB (local or Atlas)
- Flask & required Python dependencies (see below)

### 📦 Installation

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/sahayak.git
cd sahayak

---

### 2. Install frontend & backend dependencies
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

---

### 3. Setup Flask ML API
cd ../ml_api
pip install -r requirements.txt
python app.py

---

### 4. Start development servers
# Terminal 1 - Flask API
cd ml_api
python app.py

# Terminal 2 - Express server
cd server
npm start

# Terminal 3 - React frontend
cd client
npm start
