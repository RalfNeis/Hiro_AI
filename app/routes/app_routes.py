from flask import Blueprint, request, jsonify
from .chatbot.response import get_chatbot_response

routes_bp = Blueprint('routes', __name__)

@routes_bp.route('/chatbot', methods=["POST"])
def user_prompt():
    try:
        data = request.get_json() # get user prompt from request body
        print("Received prompt:", data) # log the received prompt for debugging
        prompt = data.get("prompt") # extract prompt from data, default to empty string if not provided

        response = get_chatbot_response(prompt)
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500