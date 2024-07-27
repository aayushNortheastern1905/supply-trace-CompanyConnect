from flask import Flask
from flask_cors import CORS  # Import CORS
from .routes import main_routes
from .utils import load_data
from flasgger import Swagger
import logging
from logging.handlers import RotatingFileHandler
from .config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Enable CORS for all routes
    CORS(app)

    # Set up logging
    handler = RotatingFileHandler(app.config['LOG_FILE'], maxBytes=10000, backupCount=1)
    handler.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
    handler.setFormatter(formatter)
    app.logger.addHandler(handler)

    # Load data
    app.config['COMPANIES_DATA'] = load_data('companies.csv')
    app.config['LOCATIONS_DATA'] = load_data('locations.csv')

    # Register blueprints
    app.register_blueprint(main_routes)

    # Initialize Swagger
    swagger = Swagger(app)

    return app
