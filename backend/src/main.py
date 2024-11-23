from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
import models
from schemas import EmployeeResponse, LoginRequest

from database import get_db
app = FastAPI()

@app.post("/login", response_model=EmployeeResponse)
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    employee = db.query(models.Employee).filter(
        models.Employee.username == login_data.username
    ).first()
    
    if not employee:
        raise HTTPException(status_code=401, detail="Invalid username")
    
    return employee

