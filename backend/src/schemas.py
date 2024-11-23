from pydantic import BaseModel
from typing import List

class LoginRequest(BaseModel):
    username: str

class EmployeeResponse(BaseModel):
    id: int
    username: str
    name: str
    position: str
    avatar_url: str
    skills: List[str]

    class Config:
        from_attributes = True