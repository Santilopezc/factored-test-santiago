from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
import models
from typing import List
from schemas import EmployeeResponse, LoginRequest

from database import get_db
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace '*' with specific origins for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/login", response_model=EmployeeResponse)
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(
        models.Employee.username == login_data.username
    ).first()
    
    if not employee:
        raise HTTPException(status_code=401, detail="Invalid username")
    
    return employee

@app.get("/employees", response_model=List[EmployeeResponse])
def get_all_employees(db: Session = Depends(get_db)):
    employees = db.query(models.Employee).all()
    return employees

@app.get("/employees/{id}", response_model=EmployeeResponse)
def get_employee(id: int, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(models.Employee.id == id).first()
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employee
