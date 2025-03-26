from fastapi import FastAPI
from database import engine, Base
from routes import credit_cards, customers, users

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(users.router)
app.include_router(customers.router)
app.include_router(credit_cards.router)
