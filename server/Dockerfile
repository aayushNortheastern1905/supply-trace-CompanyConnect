# Use the official Python image as the base image
FROM python:3.9

# Set the working directory
WORKDIR /server

# Copy the requirements.txt file
COPY requirements.txt .

RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r requirements.txt 

COPY . .

EXPOSE 5000

ENV PATH="/py/bin:$PATH"