document.getElementById("send-btn").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value;
  addMessage("user", userInput);
  processUserInput(userInput);
  document.getElementById("user-input").value = "";
});

function addMessage(sender, text) {
  const messageElement = document.createElement("div");
  messageElement.className = `message ${sender}`;
  messageElement.innerHTML = marked.parse(text); // Use the marked library to parse markdown
  document.getElementById("chat-box").appendChild(messageElement);
}

function processUserInput(input) {
  // Simulate bot response with markdown
  setTimeout(() => {
    addMessage(
      "bot",
      "**Bold Text**\n*Italic Text*\n\n1. List item 1\n2. List item 2\n\n`Inline code`"
    );
  }, 500);
}
