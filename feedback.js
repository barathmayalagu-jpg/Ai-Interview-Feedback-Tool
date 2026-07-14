document.addEventListener('DOMContentLoaded', () => {
  const questionDisplay = document.getElementById('question-display');
  const scoreDisplay = document.getElementById('score-display');
  const responseDisplay = document.getElementById('response-display');
  const summary = document.getElementById('summary');
  const suggestions = document.getElementById('suggestions');

  const feedback = JSON.parse(sessionStorage.getItem('interviewFeedback') || '{}');

  if (questionDisplay) questionDisplay.textContent = feedback.question || 'No question recorded yet.';
  if (scoreDisplay) scoreDisplay.textContent = feedback.score ? `${feedback.score}/100` : '0/100';
  if (responseDisplay) responseDisplay.textContent = feedback.answer || 'No response recorded yet.';
  if (summary) summary.textContent = feedback.summary || 'Your answer will be summarized here after submission.';

  if (suggestions && feedback.suggestions) {
    suggestions.innerHTML = feedback.suggestions.map(item => `<li>${item}</li>`).join('');
  }
});
