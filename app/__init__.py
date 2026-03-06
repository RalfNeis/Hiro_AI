from flask import Flask, jsonify, render_template
from .routes import register_routes

def create_app():
    # 1. Tell Flask to look one folder up (..) for your HTML and static files
    app = Flask(__name__, template_folder='../frontend', static_folder='../frontend/static')
    
    register_routes(app)

    # 2. Change the home route to serve your webpage instead of JSON
    @app.route('/')
    def home():
        return render_template('index.html')

    return app