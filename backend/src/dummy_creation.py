import models
import database

# Drop the database
database.Base.metadata.drop_all(bind=database.engine)

# Create the database
database.Base.metadata.create_all(bind=database.engine)
# Create a session
session = database.SessionLocal()

# Create a dummy employee
employee1 = models.Employee(
    username="santiago",
    name="Santiago",
    position="Data Scientist",
    avatar_url="https://randomuser.me/api/portraits/men/1.jpg",
    skills={"Python": 10, "SQL": 8, "Spark": 6, "Pytorch": 7, "ML": 8}
)
employee2 = models.Employee(
    username="factoredai",
    name = "Alice",
    position = "Software Engineer",
    avatar_url = "https://randomuser.me/api/portraits/women/2.jpg",
    skills = {"Python": 9, "SQL": 8, "React": 9, "CSS": 10, "JavaScript": 7}
)
session.add(employee1)
session.add(employee2)
session.commit()

# Query all employees
for employee in session.query(models.Employee).all():
    print(employee)