

const messageInput = document.querySelector(".message-input");
// create message element with dynamic classes and return it
const createMessageElement = (content, classes) => {
  const div = document.createElement("div");
  div.classList.add("message", classes);
  div.innerHTML = content;
  return div;
};
const handleOutgoingMessage = (userMessage) => {
  const messsageContent = `<div class="message-text">${userMessage}</div>`;
  createMessageElement(messsageContent, "user-message");
};
//Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    handleOutgoingMessage(userMessage);
  }
});
