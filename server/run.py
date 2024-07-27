from app import create_app
import logging

# Create the app instance
app = create_app()

# Configure logging
logging.basicConfig(filename='app.log', level=logging.DEBUG, 
                    format='%(asctime)s - %(levelname)s - %(message)s')

# Error handler for 404 errors
@app.errorhandler(404)
def not_found_error(error):
    app.logger.error(f"404 error: {error}")
    return {"error": "Resource not found"}, 404

# Error handler for 500 errors
@app.errorhandler(500)
def internal_error(error):
    app.logger.error(f"500 error: {error}")
    return {"error": "Internal server error"}, 500

if __name__ == '__main__':
    app.run(debug=True)
