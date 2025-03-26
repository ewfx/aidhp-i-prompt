from pydantic import BaseModel
from typing import Optional

class UserCredentialsSchema(BaseModel):
    user_id: int
    password: str

    class Config:
        orm_mode = True

class CustomerDataSchema(BaseModel):
    user_id: int
    age: int
    annual_income: float
    credit_score: float
    groceries_spending: float
    entertainment_spending: float
    travel_spending: float
    dining_spending: float
    online_shopping: float
    current_card_type: str
    late_payments: int

    class Config:
        orm_mode = True

class CreditCardDataSchema(BaseModel):
    age: int
    annual_income: float
    credit_score: float
    groceries_spending: float
    entertainment_spending: float
    travel_spending: float
    dining_spending: float
    online_shopping: float
    current_card_type: str
    late_payments: int

    class Config:
        orm_mode = True
