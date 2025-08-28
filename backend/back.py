from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app) # allow frontend to call the API from another origin


@app.get("/api/hello")
def hello():
return jsonify(message="Hello from Flask backend!")


@app.post("/api/echo")
def echo():
data = request.get_json() or {}
return jsonify(received=data), 201


if __name__ == "__main__":
# 0.0.0.0 makes it accessible from the network, port 5000 by default
app.run(host="0.0.0.0", port=5000)