async function fetchQuestions() {
  try {
    const response = await fetch('data/questions.json');
    return await response.json();
  } catch (error) {
    console.error('Failed to load questions', error);
    return [];
  }
}

window.fetchQuestions = fetchQuestions;
