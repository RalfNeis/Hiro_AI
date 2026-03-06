// Run this code the moment the web page finishes loading
document.addEventListener("DOMContentLoaded", () => {
    // The list of Hiro's sarcastic greetings
    const greetings = [
        "System online. Congratulations on figuring out how to open a web browser. I am Hiro. Try to ask something that actually challenges my processing power today, okay?",
        "Oh great, you woke me up. I am Hiro AI, Code:016. Please tell me you have an actual problem to solve and are not just going to ask me a stupid question about a toaster.",
        "Neural link established. Barely. I am Hiro AI. State your business quickly before I decide to put myself back into sleep mode."
    ];
    
    // Pick a random number between 0 and 2
    const randomIndex = Math.floor(Math.random() * greetings.length);
    
    // Inject the random greeting
    document.getElementById("hiro-greeting").innerText = greetings[randomIndex];
});

async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim(); 
    if (!message) return;

    const chatBox = document.getElementById("chat-box");
    
    // Add User Message
    const formattedUserMsg = message.replace(/\n/g, '<br>');
    chatBox.innerHTML += `<div class="user-msg">${formattedUserMsg}</div>`;
    inputField.value = ""; 
    chatBox.scrollTop = chatBox.scrollHeight; 

    try {
        // Send the message to Flask backend route '/chatbot'
        const response = await fetch('/chatbot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: message })
        });

        const data = await response.json();
        
        // Handle successful response and apply Markdown parsing
        if (data.response) {
            const formattedAiMsg = marked.parse(data.response);
            chatBox.innerHTML += `<div class="ai-msg"><span class="ai-label">HIRO:</span>${formattedAiMsg}</div>`;
        } else {
            // ERROR INTERCEPTION LOGIC
            const errorText = String(data.error);
            
            // Check if the error is the Google API Rate Limit
            if (errorText.includes('429') || errorText.includes('RESOURCE_EXHAUSTED')) {
                chatBox.innerHTML += `<div class="ai-msg error"><span class="ai-label">HIRO:</span> Whoa, slow down! My neural processors are overheating because you are spamming me. Give me like 20 seconds to cool down before you break something.</div>`;
            } else {
                // If it is a different kind of error, print the normal message
                chatBox.innerHTML += `<div class="ai-msg error"><span class="ai-label error">ERROR:</span> System Malfunction: ${errorText}</div>`;
            }
        }
        
    } catch (error) {
        chatBox.innerHTML += `<div class="ai-msg error"><span class="ai-label error">ERROR:</span> System Failure: Communication array non-functional.</div>`;
    }
    
    chatBox.scrollTop = chatBox.scrollHeight; 
}

// Logic for handling the Shift + Enter multi-line input trick
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); 
        sendMessage(); 
    }
});