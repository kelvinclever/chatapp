localStorage.setItem("username","kelvin")
localStorage.setItem("topic","how to stay virgin")

const username=localStorage.getItem("username")
const topic= localStorage.getItem("topic")

const chatHistory = [];

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    messageInput.value = '';

    if (message.trim() !== '') {
        const messageObj = {
            author: username,
            message,
            time: new Date().toLocaleTimeString(),
        };

       
        chatHistory.push(messageObj);
        updateChatDisplay();

        
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
}


function updateChatDisplay() {
    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';

    chatHistory.forEach((messageObj) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = `<p><strong>${messageObj.author}:</strong> ${messageObj.message}<br><small>${messageObj.time}</small></p>`;

        messageDiv.appendChild(messageContent);
        chatBody.appendChild(messageDiv);
    });

    
    chatBody.scrollTop = chatBody.scrollHeight;
}


const storedChatHistory = JSON.parse(localStorage.getItem('chatHistory'));
if (Array.isArray(storedChatHistory)) {
    chatHistory.push(...storedChatHistory);
    updateChatDisplay();
}


const messageInput = document.getElementById("message-input");
messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
})


