# 🤝 Sahayak

**Sahayak** is a MERN-based web platform that connects volunteers with communities in need. It includes real-time chat, smart feedback analysis using machine learning, and scheduling features — all designed to improve collaboration and support.

---

## 🌟 Features

- 🔐 Community & Volunteer registration and login
- 📆 Volunteer scheduling and management
- 💬 Real-time chat between communities and volunteers
- 📝 Feedback system for both volunteers and communities
- 🧠 ML-based semantic analysis for feedback labeling (Excellent, Good, Bad, etc.)
- 📊 Dashboard for users to view their interactions and feedback
- 🔎 Community listing and interaction interface
- ✅ Flask-powered ML API integration for feedback classification

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Chat**: Socket.io
- **Machine Learning**: Python, Flask, Scikit-learn (for semantic feedback classification)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/sahayak.git
cd sahayak
```

---

### 2. Install frontend & backend dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

---

### 3. Setup Flask ML API

```bash
cd ../ml_api
pip install -r requirements.txt
python app.py
```

---

### 4. Start development servers

```bash
# Terminal 1 - Flask API
cd ml_api
python app.py
```

```bash
# Terminal 2 - Express server
cd server
npm start
```

```bash
# Terminal 3 - React frontend
cd client
npm start
```

---

## 📂 Folder Structure

```
sahayak/
│
├── client/         # React Frontend
├── server/         # Express Backend
├── ml_api/         # Flask API with ML Model
├── README.md
└── ...
```

---

## ✨ Future Scope

- 🌙 Dark mode UI
- 📍 Location-based volunteer search
- 📈 Advanced analytics for communities and volunteers
- 📦 Deploy on cloud (Heroku, Render, etc.)

---

## 🤖 ML Feedback Model

The platform uses a **trained ML model** (e.g., Random Forest or SVM) to automatically classify feedback into categories like:

- Excellent
- Good
- Average
- Poor
- Spam

This helps communities and admins quickly assess the quality of services and interactions.

---

> Made with ❤️ by Shadow Coders
