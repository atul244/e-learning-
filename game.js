const wordPairs = {
    'Hello': '안녕하세요',
    'Goodbye': '안녕히 가세요',
    'Thank you': '감사합니다',
    'Yes': '네',
    'No': '아니요'
};

const englishWords = Object.keys(wordPairs);
let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('retry-btn').style.display = 'none';
    document.getElementById('feedback').textContent = '';

    currentQuestionIndex = 0;
    score = 0;

    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestion = englishWords[currentQuestionIndex];

    questionElement.textContent = `Translate '${currentQuestion}':`;

    optionsContainer.innerHTML = '';
    const shuffledOptions = shuffle([...Object.values(wordPairs)]);
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = wordPairs[englishWords[currentQuestionIndex]];
    const feedbackElement = document.getElementById('feedback');

    if (selectedAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! +1 point';
        score += 1;
    } else {
        feedbackElement.textContent = `Sorry, the correct translation is '${correctAnswer}'.`;
    }

    currentQuestionIndex += 1;

    if (currentQuestionIndex < englishWords.length) {
        displayQuestion();
    } else {
        // Game over
        feedbackElement.textContent = `Game Over! Your Score: ${score}`;
        document.getElementById('submit-btn').style.display = 'none';
        document.getElementById('retry-btn').style.display = 'block';
    }
}

function resetGame() {
    startGame();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the game initially
startGame();
