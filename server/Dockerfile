# Use the official Python image as the base image
FROM python:3.9-alpine3.13

# Set the working directory
WORKDIR /server

# Copy the requirements.txt file
COPY requirements.txt .

# Create a virtual environment and install dependencies
RUN pip install -r requirements.txt 

# Copy the rest of the application code
COPY . .

# Expose port 5000
EXPOSE 5000

# Set the environment variable for the path to the virtual environment

# Start the Flask application
CMD ["flask", "run", "--host", "0.0.0.0"]
