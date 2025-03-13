from fastapi import FastAPI
import test_coverage

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Homepage of App"}
