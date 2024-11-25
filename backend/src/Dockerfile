# Use the official Python image as the base image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app/src

# Copy the backend code into the container
COPY . .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the FastAPI app's default port (8000)
EXPOSE 8000

# Command to run the FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
