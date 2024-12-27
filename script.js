const chatBody = document.querySelector(".chat-body");
const userInput = document.querySelector(".message-input");
const sendButton = document.querySelector("#send-message");
const botThinking = document.querySelector(".message.bot-message.thinking");
const newText = document.querySelector(".message-text")
botAvatar = document.querySelector(".botAvatar")
const userData = {
  message: null,
};
function createMessageElement(content, ...classes) {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
}

/////HANDLE EVENTS///
function handleOutgoingMessage(e) {
  e.preventDefault();
  const messageContent = `<div class="message-text"></div>`;
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );

  newMessage = newText;
  newMessage = userInput.value;
  userInput.value = "";
  outgoingMessageDiv.querySelector(".message-text").textContent = newMessage;
  newMessage;
  chatBody.appendChild(outgoingMessageDiv);

  setTimeout(() => {
    const messageContent = `<div class="message bot-message thinking">
                <img class="bot-avatar" src="./src/avatar.png" alt="bot-avatar" />
                <div class="message-text">
                    <div class="thinking-indicator">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>  
        </div>`
      const incomingMessageDiv = createMessageElement(
      messageContent,
      ".bot-message",
    );
    chatBody.appendChild(incomingMessageDiv);
  }, 600);
}

////Event Listeners///
userInput.addEventListener("keydown", (e) => {
  const newMessage = e.target.value;
  if (e.key === "Enter" && newMessage) {
    handleOutgoingMessage(e);
  }
});
sendButton.addEventListener("click", (e) => {
  handleOutgoingMessage(e);
});
