from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import CustomerData
from schemas import CustomerDataSchema

router = APIRouter()

# Create a new customer
@router.post("/customers", response_model=CustomerDataSchema)
def create_customer(customer: CustomerDataSchema, db: Session = Depends(get_db)):
    new_customer = CustomerData(**customer.model_dump())
    db.add(new_customer)
    db.commit()
    db.refresh(new_customer)
    return new_customer

@router.post("/customers/bulk", response_model=List[CustomerDataSchema])
def create_multiple_customers(customers: List[CustomerDataSchema], db: Session = Depends(get_db)):
    if not customers:
        raise HTTPException(status_code=400, detail="Customer list cannot be empty")

    new_customers = [CustomerData(**customer.model_dump()) for customer in customers] 
    db.bulk_save_objects(new_customers)  
    db.commit()

    return new_customers

# Get all customers
@router.get("/customers", response_model=list[CustomerDataSchema])
def get_customers(db: Session = Depends(get_db)):
    return db.query(CustomerData).all()

# Get a customer by user_id
@router.get("/customers/{user_id}", response_model=CustomerDataSchema)
def get_customer(user_id: int, db: Session = Depends(get_db)):
    customer = db.query(CustomerData).filter(CustomerData.user_id == user_id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    return customer

# Update a customer by user_id
@router.put("/customers/{user_id}", response_model=CustomerDataSchema)
def update_customer(user_id: int, customer: CustomerDataSchema, db: Session = Depends(get_db)):
    existing_customer = db.query(CustomerData).filter(CustomerData.user_id == user_id).first()
    if not existing_customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    
    for key, value in customer.dict().items():
        setattr(existing_customer, key, value)

    db.commit()
    db.refresh(existing_customer)
    return existing_customer

# Delete a customer by user_id
@router.delete("/customers/{user_id}")
def delete_customer(user_id: int, db: Session = Depends(get_db)):
    customer = db.query(CustomerData).filter(CustomerData.user_id == user_id).first()
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
    
    db.delete(customer)
    db.commit()
    return {"message": "Customer deleted successfully"}
