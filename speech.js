document.addEventListener('DOMContentLoaded', () => {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    const transcript = document.getElementById('transcript');
    if (transcript) {
      transcript.textContent = 'Speech recognition is not supported in this browser.';
    }
    return;
  }

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;
    const transcript = document.getElementById('transcript');
    if (transcript) {
      transcript.textContent = text;
    }
  };

  const button = document.getElementById('start-btn');
  if (button) {
    button.addEventListener('click', () => {
      recognition.start();
    });
  }
});
