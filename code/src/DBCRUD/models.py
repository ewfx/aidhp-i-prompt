from sqlalchemy import Column, Integer, String, DECIMAL, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class UserCredentials(Base):
    __tablename__ = "user_credentials"
    user_id = Column(Integer, primary_key=True, index=True)
    password = Column(String(255), nullable=False)

class CustomerData(Base):
    __tablename__ = "customer_data"

    user_id = Column(Integer, primary_key=True)
    age = Column(Integer)
    annual_income = Column(DECIMAL(18, 10, asdecimal=True))
    credit_score = Column(DECIMAL(18, 10, asdecimal=True))
    groceries_spending = Column(DECIMAL(18, 10, asdecimal=True))
    entertainment_spending = Column(DECIMAL(18, 10, asdecimal=True))
    travel_spending = Column(DECIMAL(18, 10, asdecimal=True))
    dining_spending = Column(DECIMAL(18, 10, asdecimal=True))
    online_shopping = Column(DECIMAL(18, 10, asdecimal=True))
    current_card_type = Column(String(255))
    late_payments = Column(Integer)

class CreditCardData(Base):
    __tablename__ = "credit_card_data"
    id = Column(Integer, primary_key=True, autoincrement=True)
    age = Column(Integer)
    annual_income = Column(DECIMAL(18, 10, asdecimal=True))
    credit_score = Column(DECIMAL(18, 10, asdecimal=True))
    groceries_spending = Column(DECIMAL(18, 10, asdecimal=True))
    entertainment_spending = Column(DECIMAL(18, 10, asdecimal=True))
    travel_spending = Column(DECIMAL(18, 10, asdecimal=True))
    dining_spending = Column(DECIMAL(18, 10, asdecimal=True))
    online_shopping = Column(DECIMAL(18, 10, asdecimal=True))
    current_card_type = Column(String(255))
    late_payments = Column(Integer)
