import models
import database
# Create the database
database.Base.metadata.create_all(bind=database.engine)
# Create a session
session = database.SessionLocal()

# Create a dummy employee
employee = models.Employee(
    username="santiagouser",
    name="Santiago",
    position="Data Scientist",
    avatar_url="https://randomuser.me/api/portraits/men/1.jpg",
    skills={"Python": 90, "SQL": 80, "Spark": 75, "ML": 85, "Stats": 70}
)
session.add(employee)
session.commit()

# Query all employees
for employee in session.query(models.Employee).all():
    print(employee)