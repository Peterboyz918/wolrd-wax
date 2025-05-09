const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const chatLog = document.getElementById('chat-log');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

chatIcon.onclick = () => {
  chatWindow.classList.toggle('hidden');
  chatWindow.style.display = chatWindow.classList.contains('hidden') ? 'none' : 'block';
};

sendBtn.onclick = () => {
  const question = chatInput.value.trim();
  if (question) {
    chatLog.innerHTML += `<div class="chat-msg user">You: ${question}</div>`;
    respond(question);
    chatInput.value = '';
  }
};

function respond(msg) {
  let response = "I'm not sure how to answer that yet.";
  const lower = msg.toLowerCase();
  if (lower.includes("services")) {
    response = "I offer website design, graphic design, and cyber services.";
  } else if (lower.includes("contact")) {
    response = "You can reach me at peterkuria918@gmail.com or WhatsApp: +254791376089.";
  } else if (lower.includes("hello") || lower.includes("hi")) {
    response = "Hi there! How can I help you today?";
  } else if (lower.includes("job")) {
    response = "I provide freelance web and AI-based services. Tell me what you need!";
  }
  chatLog.innerHTML += `<div class="chat-msg bot">Bot: ${response}</div>`;
}

