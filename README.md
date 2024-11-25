# factored-test-santiago
## Employee Profile Viewer App

### Disclaimer

This app was intended to be fully Dockerized, but due to time constraints, the Docker configuration could not be completed. However, the app can be run locally on your computer. This README provides step-by-step instructions for running the app locally. Attached is a video of the app.

https://github.com/user-attachments/assets/6e29eeda-cfb5-4769-9d37-d3677557d02e

## **Overview**
This app allows users to:
- View a list of employees with their name, role, and profile picture.
- Click on an employee to view detailed information, including their skills displayed in a radar chart.

The app consists of:
1. A **backend** built with FastAPI.
2. A **frontend** built with React.

## **How to Run Locally**

### **Step 1: Clone the Repository**
```bash
git clone <repository-url>
cd <project-folder>
```
### **Step 2: Run the backend**
1. Navigate to the backend directory
```bash
cd backend/src
```
2. Create and activate a virtual environment, then install dependencies and start the server
```bash
pip install -r requirements.txt
fastapi dev main.py
```
### **Step 3: Run the Frontend**
1. Open a new terminal and go to the directory
```bash
cd frontend
```
2. Install dependencies and start the development server:
```bash
npm install
npm run dev
```
3. Acess the app in the local host.

