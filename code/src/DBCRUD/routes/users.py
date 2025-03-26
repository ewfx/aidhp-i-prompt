from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import UserCredentials
from schemas import UserCredentialsSchema

router = APIRouter()

@router.get("/")
def welcome():
    return "Hello"

@router.post("/users/")
def create_new_user(user: UserCredentialsSchema, db: Session = Depends(get_db)):
    db_user = UserCredentials(user_id=user.user_id, password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.post("/users/bulk", response_model=List[UserCredentialsSchema])
def create_multiple_users(users: List[UserCredentialsSchema], db: Session = Depends(get_db)):
    if not users:
        raise HTTPException(status_code=400, detail="Users list cannot be empty")

    new_users = [UserCredentials(**user.model_dump()) for user in users] 
    db.bulk_save_objects(new_users)  
    db.commit()

    return new_users

@router.get("/users/")
def read_users(db: Session = Depends(get_db)):
    return db.query(UserCredentials).all()

@router.get("/users/{user_id}")
def read_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(UserCredentials).filter(UserCredentials.user_id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
