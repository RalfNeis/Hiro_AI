# HIRO_AI // TERMINAL 🤖

![Cyberpunk Theme](https://img.shields.io/badge/UI_Theme-Cyberpunk%3A_Edgerunners-d500f9?style=for-the-badge&logo=css3&logoColor=00ffaa)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![Gemini API](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)

A custom, web-based AI assistant powered by Google's Gemini API, wrapped in a highly stylized, fully responsive *Cyberpunk: Edgerunners* terminal interface. 

Hiro AI (Code:016) isn't just a standard chatbot; he is programmed with a reactive, sarcastic personality that responds dynamically not just to user prompts, but also to server environments and API rate limits.

---

## 🛠️ Technology Stack

* **Backend:** Python 3, Flask, Gunicorn (for production)
* **AI Engine:** Google Generative AI SDK (`google-genai`), utilizing the Gemini Flash model.
* **Frontend:** HTML5, CSS3, Vanilla JavaScript.
* **Deployment:** Hosted live via Render.

---

## 🚀 Local Installation & Setup

If you want to run the Hiro AI terminal on your own local mainframe, follow these steps:

### 1. Clone the Repository
```bash
git clone [https://github.com/RalfNeis/Hiro_AI.git](https://github.com/RalfNeis/Hiro_AI.git)
cd Hiro_AI
```
### 2. Create a Virtual Environment (Recommended)
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows use: .venv\Scripts\activate
```
### 3. Install Dependencies
```bash
pip install -r requirements.txt
```
### 4. Configure Environment Variables
Create a file named .env in the root directory and inject your Google Gemini API key:
```bash
GEMINI_API_KEY=your_actual_api_key_here
```
### 5. Boot the System
```bash
python run.py
```
