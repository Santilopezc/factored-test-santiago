from pydantic import BaseModel
from typing import Dict

class LoginRequest(BaseModel):
    username: str

class EmployeeResponse(BaseModel):
    id: int
    username: str
    name: str
    position: str
    avatar_url: str
    skills: Dict[str, int]

    class Config:
        from_attributes = True