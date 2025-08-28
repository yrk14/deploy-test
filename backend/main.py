from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# ✅ Allow frontend (running on Vercel/Netlify/localhost) to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change "*" to your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Sample root endpoint
@app.get("/")
def read_root():
    return {"message": "Hello from backend!"}

# Sample users endpoint
@app.get("/users")
def get_users():
    users = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"},
        {"id": 3, "name": "Charlie"}
    ]
    return users
