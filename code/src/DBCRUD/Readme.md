# FastAPI MySQL CRUD API

## Overview

This is a FastAPI-based API service that connects to a MySQL database and performs CRUD operations on user and customer data.

## Setup

### 1. Install Dependencies

```sh
pip install -r requirements.txt  
```

### 2. Configure Database

Update your `.env` file with MySQL credentials:

```
DATABASE_URL=mysql+pymysql://username:password@localhost:3306/mydb  
```

### 3. Start the API Server

```sh
uvicorn main:app --reload  
or
uvicorn main:app --host 127.0.0.1 --port 8000 --reload --log-level debug
```

### 4. API Documentation

Once the server is running, access interactive API docs:

- Swagger UI: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- ReDoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

## Endpoints

| Method | Endpoint          | Description             |
| ------ | ----------------- | ----------------------- |
| POST   | `/customers`      | Create a new customer   |
| GET    | `/customers`      | Get all customers       |
| GET    | `/customers/{id}` | Get a specific customer |
| PUT    | `/customers/{id}` | Update customer details |
| DELETE | `/customers/{id}` | Delete a customer       |

## License

MIT