import pytest
from app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    client = app.test_client()

    yield client

def test_get_companies(client):
    """Test retrieving all companies."""
    response = client.get('/companies')
    assert response.status_code == 200
    assert response.is_json
    data = response.get_json()
    assert isinstance(data, list)

def test_get_company(client):
    """Test retrieving a specific company by ID."""
    response = client.get('/company?company_id=1')
    assert response.status_code == 200
    assert response.is_json
    data = response.get_json()
    assert isinstance(data, dict)
    assert data.get('company_id') == 1

def test_get_company_missing_id(client):
    """Test retrieving a company without providing an ID."""
    response = client.get('/company')
    assert response.status_code == 400
    assert response.is_json
    data = response.get_json()
    assert 'error' in data

def test_get_company_not_found(client):
    """Test retrieving a non-existent company by ID."""
    response = client.get('/company?company_id=999')
    assert response.status_code == 404
    assert response.is_json
    data = response.get_json()
    assert 'error' in data

def test_get_locations(client):
    """Test retrieving locations for a specific company by ID."""
    response = client.get('/locations?company_id=1')
    assert response.status_code == 200
    assert response.is_json
    data = response.get_json()
    assert isinstance(data, list)

def test_get_locations_missing_id(client):
    """Test retrieving locations without providing a company ID."""
    response = client.get('/locations')
    assert response.status_code == 400
    assert response.is_json
    data = response.get_json()
    assert 'error' in data

def test_get_locations_not_found(client):
    """Test retrieving locations for a non-existent company."""
    response = client.get('/locations?company_id=999')
    assert response.status_code == 404
    assert response.is_json
    data = response.get_json()
    assert 'error' in data
