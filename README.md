 Features

- Add habits with name, category, frequency, and start date
- View all your habits in a simple UI
- Optional AI: Mood detection in check-ins

## Setup Instructions

### 1. Backend (Django)
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
backend will start at http://127.0.0.1:8000

### 2. Frontend (React)
cd ../frontend
npm install
npm start
Frontend runs at http://localhost:3000

###3. API Endpoints
GET /api/habits/ → List habits
POST /api/habits/ → Create a habit
GET /api/checkins/ → List habit check-ins
