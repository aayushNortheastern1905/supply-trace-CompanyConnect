# from flask import Blueprint, jsonify, current_app, request
# import logging

# main_routes = Blueprint('main', __name__)

# @main_routes.route('/companies', methods=['GET'])
# def get_companies():
#     """Retrieve all companies."""
#     try:
#         companies = current_app.config.get('COMPANIES_DATA', [])
#         return jsonify(companies)
#     except Exception as e:
#         current_app.logger.error(f"Error retrieving companies: {e}")
#         return jsonify({'error': 'Internal server error'}), 500

# @main_routes.route('/company', methods=['GET'])
# def get_company():
#     """Retrieve a specific company by ID."""
#     try:
#         company_id = request.args.get('company_id', type=int)
#         if company_id is None:
#             return jsonify({'error': 'Missing company_id parameter'}), 400
        
#         companies = current_app.config.get('COMPANIES_DATA', [])
#         company = next((comp for comp in companies if comp.get('company_id') == company_id), None)
#         if company is None:
#             return jsonify({'error': 'Company not found'}), 404
        
#         return jsonify(company)
#     except Exception as e:
#         current_app.logger.error(f"Error retrieving company: {e}")
#         return jsonify({'error': 'Internal server error'}), 500

# @main_routes.route('/locations', methods=['GET'])
# def get_locations_for_company():
#     """Retrieve locations for a specific company by ID."""
#     try:
#         company_id = request.args.get('company_id', type=int)
#         if company_id is None:
#             return jsonify({'error': 'No company ID provided'}), 400
        
#         locations = current_app.config.get('LOCATIONS_DATA', [])
#         company_locations = [loc for loc in locations if loc.get('company_id') == company_id]
#         if not company_locations:
#             return jsonify({'error': 'No locations found for this company'}), 404
        
#         return jsonify(company_locations)
#     except Exception as e:
#         current_app.logger.error(f"Error retrieving locations: {e}")
#         return jsonify({'error': 'Internal server error'}), 500
from flask import Blueprint, jsonify, current_app, request
from flasgger import swag_from
import logging

main_routes = Blueprint('main', __name__)

@main_routes.route('/companies', methods=['GET'])
@swag_from({
    'responses': {
        200: {
            'description': 'List of all companies',
            'schema': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'company_id': {'type': 'integer'},
                        'name': {'type': 'string'},
                        'address': {'type': 'string'},
                        # Add other fields here
                    }
                }
            }
        }
    }
})
def get_companies():
    """Retrieve all companies."""
    try:
        companies = current_app.config.get('COMPANIES_DATA', [])
        return jsonify(companies)
    except Exception as e:
        current_app.logger.error(f"Error retrieving companies: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@main_routes.route('/company', methods=['GET'])
@swag_from({
    'parameters': [
        {
            'name': 'company_id',
            'in': 'query',
            'type': 'integer',
            'required': True,
            'description': 'The ID of the company to retrieve'
        }
    ],
    'responses': {
        200: {
            'description': 'A single company',
            'schema': {
                'type': 'object',
                'properties': {
                    'company_id': {'type': 'integer'},
                    'name': {'type': 'string'},
                    'address': {'type': 'string'},
                    # Add other fields here
                }
            }
        },
        400: {
            'description': 'Invalid ID supplied',
            'schema': {
                'type': 'object',
                'properties': {
                    'error': {'type': 'string'}
                }
            }
        },
        404: {
            'description': 'Company not found',
            'schema': {
                'type': 'object',
                'properties': {
                    'error': {'type': 'string'}
                }
            }
        }
    }
})
def get_company():
    """Retrieve a specific company by ID."""
    try:
        company_id = request.args.get('company_id', type=int)
        if company_id is None:
            return jsonify({'error': 'Missing company_id parameter'}), 400
        
        companies = current_app.config.get('COMPANIES_DATA', [])
        company = next((comp for comp in companies if comp.get('company_id') == company_id), None)
        if company is None:
            return jsonify({'error': 'Company not found'}), 404
        
        return jsonify(company)
    except Exception as e:
        current_app.logger.error(f"Error retrieving company: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@main_routes.route('/locations', methods=['GET'])
@swag_from({
    'parameters': [
        {
            'name': 'company_id',
            'in': 'query',
            'type': 'integer',
            'required': True,
            'description': 'The ID of the company to retrieve locations for'
        }
    ],
    'responses': {
        200: {
            'description': 'List of locations for the specified company',
            'schema': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'location_id': {'type': 'integer'},
                        'company_id': {'type': 'integer'},
                        'name': {'type': 'string'},
                        'address': {'type': 'string'},
                        'latitude': {'type': 'number'},
                        'longitude': {'type': 'number'},
                        # Add other fields here
                    }
                }
            }
        },
        400: {
            'description': 'Invalid ID supplied',
            'schema': {
                'type': 'object',
                'properties': {
                    'error': {'type': 'string'}
                }
            }
        },
        404: {
            'description': 'Locations not found',
            'schema': {
                'type': 'object',
                'properties': {
                    'error': {'type': 'string'}
                }
            }
        }
    }
})
def get_locations_for_company():
    """Retrieve locations for a specific company by ID."""
    try:
        company_id = request.args.get('company_id', type=int)
        if company_id is None:
            return jsonify({'error': 'No company ID provided'}), 400
        
        locations = current_app.config.get('LOCATIONS_DATA', [])
        company_locations = [loc for loc in locations if loc.get('company_id') == company_id]
        if not company_locations:
            return jsonify({'error': 'No locations found for this company'}), 404
        
        return jsonify(company_locations)
    except Exception as e:
        current_app.logger.error(f"Error retrieving locations: {e}")
        return jsonify({'error': 'Internal server error'}), 500
