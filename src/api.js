export const API_KEY = "AIzaSyCwrsYY38YuPROjubKMXuXOoDaS64ep-vk";
export const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;


  /*async function generateBotResponse(incomingMessageDiv) {
  const messageElement = incomingMessageDiv.querySelector(".message-text");
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/Json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: userData.message }],
        },
      ],
    }),
  };
  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);
    const apiBotResponseText = data.candidates[0].content.parts[0].text.trim();
    messageElement.innerText = apiBotResponseText;
  } catch (error) {
    console.log(error);
  }
}
  */