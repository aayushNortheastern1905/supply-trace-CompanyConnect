import pandas as pd

def load_data(filename):
    """Load CSV data into a list of dictionaries."""
    df = pd.read_csv(filename)
    return df.to_dict(orient='records')

def get_company_by_id(company_id, data):
    """Retrieve a company by its ID."""
    return next((comp for comp in data if comp['company_id'] == company_id), None)

def get_locations_by_company_id(company_id, data):
    """Retrieve locations for a given company ID."""
    return [loc for loc in data if loc['company_id'] == company_id]
