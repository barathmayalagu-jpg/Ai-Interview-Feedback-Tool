document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const resetBtn = document.getElementById('reset-btn');
  const submitBtn = document.getElementById('submit-btn');
  const responseBox = document.getElementById('response');
  const transcript = document.getElementById('transcript');
  const status = document.getElementById('status');
  const question = document.getElementById('question');

  if (!startBtn || !resetBtn || !submitBtn || !responseBox || !transcript || !status || !question) return;

  const defaultQuestion = question.textContent;

  startBtn.addEventListener('click', () => {
    responseBox.disabled = false;
    responseBox.focus();
    submitBtn.disabled = false;
    status.textContent = 'Answer the prompt and submit when you are ready.';
    transcript.textContent = 'Session started. You can now type or speak your answer.';
    startBtn.textContent = 'Recording Active';
  });

  resetBtn.addEventListener('click', () => {
    responseBox.value = '';
    responseBox.disabled = true;
    submitBtn.disabled = true;
    question.textContent = defaultQuestion;
    transcript.textContent = 'The tool will capture your response and create feedback after submission.';
    status.textContent = 'Click start to begin your mock interview.';
    startBtn.textContent = 'Start Recording';
  });

  submitBtn.addEventListener('click', () => {
    const answer = responseBox.value.trim();
    if (!answer) {
      status.textContent = 'Please enter an answer before submitting.';
      return;
    }

    const feedback = {
      question: question.textContent,
      answer,
      score: 84,
      summary: 'Your answer was clear, structured, and showed strong confidence. You can improve it further by making your examples more specific and concise.',
      suggestions: [
        'Use a short opening line to introduce your point.',
        'Add one measurable result to strengthen your example.',
        'Keep your final sentence focused on the outcome.'
      ]
    };

    sessionStorage.setItem('interviewFeedback', JSON.stringify(feedback));
    window.location.href = 'feedback.html';
  });
});
