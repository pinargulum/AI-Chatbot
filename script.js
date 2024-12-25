
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
// create message element with dynamic classes and return it
const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
};
//Handle outgoing user message
const handleOutgoingMessage = (userMessage) => {
  //create and display user message
  const messsageContent = `<div class="message-text">${userMessage}</div>`;
  const outgoingMessageDiv = createMessageElement(messsageContent, "user-message");
chatBody.appendChild(outgoingMessageDiv);
};
//Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = document.querySelector(".user-message");
   e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    handleOutgoingMessage(userMessage);
  }
});

console.log(userMessage);