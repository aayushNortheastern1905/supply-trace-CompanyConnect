import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'aayushneu7')
    LOG_FILE = 'app.log'  # Path to the log file
    # Add any other configuration variables here

class TestConfig(Config):
    TESTING = True
    COMPANIES_DATA = [
        {"company_id": 1, "name": "TechNova Solutions", "address": "123 Innovation Drive, San Francisco, CA 94105", "latitude": 37.7749, "longitude": -122.4194},
        {"company_id": 2, "name": "GreenLeaf Enterprises", "address": "456 Sustainability Ave, Portland, OR 97201", "latitude": 45.5155, "longitude": -122.6789}
    ]
    LOCATIONS_DATA = [
        {"company_id": 1, "location_id": 1, "address": "123 Innovation Drive, San Francisco, CA 94105", "latitude": 37.7749, "longitude": -122.4194},
        {"company_id": 1, "location_id": 2, "address": "124 Innovation Drive, San Francisco, CA 94105", "latitude": 37.7749, "longitude": -122.4194},
        {"company_id": 2, "location_id": 3, "address": "456 Sustainability Ave, Portland, OR 97201", "latitude": 45.5155, "longitude": -122.6789}
    ]
