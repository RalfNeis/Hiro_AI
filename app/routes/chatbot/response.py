from .services.config import chat_config

chatbot = chat_config()

def get_chatbot_response(prompt):

#get response from chatbot
    chat_response = chatbot.chat.send_message(message=prompt)

    return chat_response.text