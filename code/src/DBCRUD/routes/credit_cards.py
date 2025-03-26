from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import CreditCardData
from schemas import CreditCardDataSchema

router = APIRouter()

# Create a new credit card record
@router.post("/credit-cards", response_model=CreditCardDataSchema)
def create_credit_card(credit_card: CreditCardDataSchema, db: Session = Depends(get_db)):
    new_card = CreditCardData(**credit_card.dict())
    db.add(new_card)
    db.commit()
    db.refresh(new_card)
    return new_card

@router.post("/credit-cards/bulk", response_model=List[CreditCardDataSchema])
def create_multiple_customers(customers: List[CreditCardDataSchema], db: Session = Depends(get_db)):
    if not customers:
        raise HTTPException(status_code=400, detail="Customer list cannot be empty")

    new_customers = [CreditCardData(**customer.model_dump()) for customer in customers] 
    db.bulk_save_objects(new_customers)  
    db.commit()

    return new_customers

# Get all credit cards
@router.get("/credit-cards", response_model=list[CreditCardDataSchema])
def get_credit_cards(db: Session = Depends(get_db)):
    return db.query(CreditCardData).all()

# Get a credit card record by age and income (example filter)
@router.get("/credit-cards/{age}/{annual_income}", response_model=list[CreditCardDataSchema])
def get_credit_card_by_age_income(age: int, annual_income: int, db: Session = Depends(get_db)):
    credit_cards = db.query(CreditCardData).filter(
        CreditCardData.age == age, CreditCardData.annual_income == annual_income
    ).all()

    if not credit_cards:
        raise HTTPException(status_code=404, detail="No matching credit card records found")
    
    return credit_cards

# Delete a credit card record
@router.delete("/credit-cards/{card_id}")
def delete_credit_card(card_id: int, db: Session = Depends(get_db)):
    card = db.query(CreditCardData).filter(CreditCardData.id == card_id).first()
    if not card:
        raise HTTPException(status_code=404, detail="Credit Card record not found")
    
    db.delete(card)
    db.commit()
    return {"message": "Credit Card record deleted successfully"}
