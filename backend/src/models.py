from sqlalchemy import Column, Integer, String, JSON
from database import Base

# Define an Employee model (table)
class Employee(Base):
    __tablename__ = 'employees'  # Table name in the database

    id = Column(Integer, primary_key=True, autoincrement=True)  # Primary key
    username = Column(String, nullable=False)  # Username
    name = Column(String, nullable=False)  # Employee name
    position = Column(String, nullable=False)  # Job position
    skills = Column(JSON, nullable=False)
    avatar_url = Column(String)  # URL for the avatar image

    def __repr__(self):
        return f"<Employee(name={self.name}, position={self.position}, skills={self.skills})>"
    