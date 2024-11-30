// script.js
document.addEventListener("DOMContentLoaded", () => {
  const chatBody = document.getElementById("chat-body");
  const chatInput = document.getElementById("chat-input");
  const sendButton = document.getElementById("send-button");

  // Send message
  sendButton.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (message === "") return;

    // Append user's message
    appendMessage("You", message);

    // Simulate bot reply
    setTimeout(() => {
      appendMessage("Bot", "Thanks for your message!");
    }, 1000);

    chatInput.value = "";
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = <strong>${sender}:</strong> &{message}
    chatBody.appendChild(messageElement);

    // Scroll to the bottom
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});

function performSearch() {
  // Get the search query
  const query = document.getElementById("search-box").value.toLowerCase();

  // Find all elements to search through
  const elements = document.querySelectorAll("h1, h2, p");

  // Highlight matching elements
  let found = false;
  elements.forEach(element => {
      if (element.textContent.toLowerCase().includes(query)) {
          element.style.backgroundColor = "yellow";
          found = true;
      } else {
          element.style.backgroundColor = "";
      }
  });

  // Alert if no matches are found
  if (!found) {
      alert("No results found for: " + query);
  }
}


  
