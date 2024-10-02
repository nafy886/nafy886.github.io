const responses = [
  "Aww, aku juga suka kamu! ❤️",
  "Maaf, aku tidak bisa. 😔",
  "Wow, ini sangat manis! 😊",
  "Hmm, kita bisa jadi teman dulu. 🤗",
];

function sendLove() {
  const randomIndex = Math.floor(Math.random() * responses.length);
  document.getElementById("response").innerText = responses[randomIndex];
}
