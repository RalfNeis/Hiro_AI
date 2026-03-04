from flask import Flask, jsonify
from .routes import register_routes

def create_app():
    app = Flask(__name__)
    register_routes(app)

    @app.route('/')
    def home():
        return jsonify({"response":"API is running"})

    return app